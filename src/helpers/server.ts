"use server";

export async function generateVerificationCodeWithExpirationTime() {
	const code = Math.floor(100000 + Math.random() * 900000).toString();

	let codeExpirationTime: Date = new Date();

	codeExpirationTime.setMinutes(codeExpirationTime.getMinutes() + 30);

	let sessionTokenExpirationTime: Date = new Date();

	sessionTokenExpirationTime.setMinutes(
		sessionTokenExpirationTime.getMinutes() + 1440
	);

	return { code, codeExpirationTime, sessionTokenExpirationTime };
}
