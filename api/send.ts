import { Resend } from 'resend';

export default async function handler(req: any, res: any) {
  // Allow only POST methods
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { nome, email, comentario } = req.body || {};

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [process.env.RECEIVER_EMAIL || 'default@example.com'],
      subject: `Novo contato de ${nome}`,
      html: `
        <h2>Novo contato recebido pelo formulário</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Comentário:</strong> ${comentario}</p>
      `,
    });

    if (error) {
      return res.status(400).json(error);
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("Vercel API Send Error:", err);
    return res.status(500).json({ error: 'Server error' });
  }
}
