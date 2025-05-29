import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import { headers } from "next/headers";

export default async function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = (await cookies()).get("sessiontoken");

  if (!cookie) {
    redirect("/login");
  }

  const { value } = cookie;

  let user;

  const { rows: userDb } =
    await sql`SELECT * FROM users WHERE sessiontoken = ${value}`;

  user = userDb[0];

  if (!user || user.role !== 'admin') {
    redirect("/profile");
  }

  if (user.sessiontokenexpiration < new Date()) {
    redirect("/login");
  }


  // TODO: 
  // Use the headers() function to get the request headers
  // Refactor this code using the pathname to redirect
  // Meaning create a single function to use in server side layouts
  
  const headersList = await headers();

    // --- Method 1: Convert to a plain JavaScript object ---
  // This is often the most readable for logging all headers.
  const allHeadersObject: any = {};
  
  for (const [key, value] of headersList.entries()) {
    // Note: Headers are typically lowercase
    allHeadersObject[key] = value;
  }
  // Now you can read headers from headersList
  const pathname = headersList.get('referer'); // The path provided by Next.js
  const host = headersList.get('host'); // The host header
  const userAgent = headersList.get('user-agent'); // Example: user agent

  // console.log("Server-side url:", pathname);
  // console.log("Server-side host:", host);
  // console.log("Server-side user agent:", userAgent);

  return <>{children}</>;
}
