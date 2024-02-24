import VendorContent from "@/components/UI/Vendors/Details";
import VendorsDetailsHero from "@/components/UI/Vendors/Details/hero";

const Page = () => {
  return (
    <>
      <VendorsDetailsHero />
      <main>
        <VendorContent />
      </main>
    </>
  );
};

export default Page;
