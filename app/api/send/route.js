// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
 const fromEmail= process.env.FROM_EMAIL
export async function POST(req,res) {
    const { email, subject, message } = await req.json();
    console.log('email',email)
  try {
    
    const data = await resend.emails.send({
      from: fromEmail,
      to: [`shahabasmd10@gmail.com`,email],
      subject: subject,
      react: <> 
      <h1>{subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>New Email Submitted:</p>
      <p>{message}</p>
      </>,
    });
    
    return Response.json(data);
  } catch (error) {
    
    return Response.json({ error });
  }
}
