// /server/api/email.ts
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
	// Get the form data from the client
	const { email, subject, message } = await readBody(event);

	const msgBody = `
        email: ${email}
        subject: ${subject}
        message: 
        """

        ${message}
        
        """
        `;

	// Access runtime config
	const config = useRuntimeConfig();
	let poolConfig = "smtps://username:password@smtp.example.com/?pool=true";
	// Create a transporter object using the config
	const transporter = nodemailer.createTransport({
		host: config.emailServer,
		port: config.emailPort,
		secure: false, // true for 465, false for other ports
		auth: {
			user: config.emailUser, // SMTP username
			pass: config.emailPassword, // SMTP password
		},
	});

	try {
		// Send email
		await transporter.sendMail({
			from: config.emailFrom, // Sender address
			to: config.emailUser, // List of receivers (form email)
			subject: "FTM: New Lead", // Subject line (form subject)
			text: msgBody, // Plain text body (form message)
		});

		// Respond with success message
		return { success: true, message: "Email sent successfully" };
	} catch (error: any) {
		// Respond with error
		return { success: false, message: `Failed to send email: ${error.message}` };
	}
});
