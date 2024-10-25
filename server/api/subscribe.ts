import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export default defineEventHandler(async (event) => {
	// Get the form data from the client
	const { payload } = await readBody(event);
	const config = useRuntimeConfig();

	// Supabase credentials
	const supabaseUrl = "https://odyzpohusuvcjkyzsoir.supabase.co";
	const supabaseKey = config.supabaseKey;

	// Initialize Supabase client
	const supabase = createClient(supabaseUrl, supabaseKey);

	try {
		// Insert the new subscriber record into Supabase 'subscriber' table
		const { error } = await supabase.from("subscriber").upsert([
			{
				email: payload.email,
				is_sub: payload.is_sub,
				country: payload.country,
				city: payload.city,
				ua_os: payload.ua_os,
				ua_name: payload.ua_name,
				ua_version: payload.ua_version,
			},
		]);

		if (error) {
			throw new Error(`Failed to save to Supabase: ${error.message}`);
		}

		// Prepare the email content
		const msgBody = `Subscriber email: ${payload.email}\nCountry: ${payload.country ?? "N/A"}\nCity: ${payload.city ?? "N/A"}\nOS: ${payload.ua_os ?? "N/A"}\nBrowser: ${payload.ua_name ?? "N/A"}\nVersion: ${payload.ua_version ?? "N/A"}`;

		// Access runtime config for email setup

		// Create a transporter object using nodemailer
		const transporter = nodemailer.createTransport({
			host: config.emailServer,
			port: config.emailPort,
			secure: false, // true for 465, false for other ports
			auth: {
				user: config.emailUser, // SMTP username
				pass: config.emailPassword, // SMTP password
			},
		} as SMTPTransport.MailOptions);

		// Send the notification email
		await transporter.sendMail({
			from: config.emailFrom, // Sender address
			to: config.emailUser, // Receiver (form email)
			subject: "Flowture LP: New subscriber!", // Subject line
			text: msgBody, // Email content
		});

		// Return success response
		return { success: true, message: "Subscriber saved and email sent successfully" };
	} catch (error: any) {
		// Handle errors during Supabase or email operations
		return { success: false, message: `Failed to process request: ${error.message} : ${payload}` };
	}
});
