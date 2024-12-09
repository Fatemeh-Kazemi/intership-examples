import { Resend } from 'resend';

const resend = new Resend('YOUR_API_KEY');

export async function GET(request: Request) {
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'YOUR_EMAIL@gmail.com',
        subject: 'verification code',
        html: '<p>your verification code is 1234</strong>!</p>'
    });

    return Response.json({
        message: "code has been send to your email successfully",
    });
}
