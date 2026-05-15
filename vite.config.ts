import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { Resend } from 'resend'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      {
        name: 'api-send',
        configureServer(server) {
          server.middlewares.use('/api/send', (req, res, next) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk.toString();
              });
              req.on('end', async () => {
                res.setHeader('Content-Type', 'application/json');
                try {
                  const { nome, email, comentario } = JSON.parse(body);
                  const resend = new Resend(env.RESEND_API_KEY || process.env.RESEND_API_KEY);
                  
                  const { data, error } = await resend.emails.send({
                    from: 'Acme <onboarding@resend.dev>', // Importante: em produção, troque para o seu domínio verificado
                    to: [env.RECEIVER_EMAIL || process.env.RECEIVER_EMAIL || 'default@example.com'],
                    subject: `Novo contato de ${nome}`,
                    html: `
                      <h2>Novo contato recebido pelo formulário</h2>
                      <p><strong>Nome:</strong> ${nome}</p>
                      <p><strong>Email:</strong> ${email}</p>
                      <p><strong>Comentário:</strong> ${comentario}</p>
                    `,
                  });

                  if (error) {
                    res.statusCode = 400;
                    res.end(JSON.stringify(error));
                    return;
                  }

                  res.statusCode = 200;
                  res.end(JSON.stringify(data));
                } catch (err) {
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: 'Server error' }));
                }
              });
              return;
            }
            next();
          });
        }
      }
    ],
    server: {
      host: true,
    },
  }
})
