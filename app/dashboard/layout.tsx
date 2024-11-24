import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Providers } from "@/app/Providers";

export default async function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  // Handle authentication check on the server side
  if (!session) {
    redirect("/"); // Using redirect() from next/navigation
  }

  return <Providers session={session}>{children}</Providers>;
}
