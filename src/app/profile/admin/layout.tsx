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

  return <>{children}</>;
}
