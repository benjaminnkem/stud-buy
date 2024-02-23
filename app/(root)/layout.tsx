import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

type Props = Readonly<{ children: React.ReactNode }>;

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
