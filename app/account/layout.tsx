import authOptions from "@/lib/config/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: Readonly<React.ReactNode> }) => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return <>{children}</>;
};

export default Layout;
