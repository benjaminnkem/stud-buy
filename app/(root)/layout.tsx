import Navbar from "@/components/Layout/Navbar";

type Props = Readonly<{ children: React.ReactNode }>;

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
