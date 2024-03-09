import { sidebarLinks } from "@/lib/data/dashboard/sidebar.data";
import { dancingScript } from "@/lib/utils/fonts";

const DashboardSidebar = () => {
  return (
    <div className="min-h-screen w-[300px] bg-zinc-900 text-white p-5 overflow-y-auto">
      <p className={`${dancingScript.className} text-center`}>SweetBuy</p>

      <div>
        {sidebarLinks.map((content, id) => (
          <div key={id} className="">
            <p>{content.heading}</p>
            <div>
              {content.links.map((link, id) => (
                <div key={id}>
                  <p>{link.label}</p>
                  <div className="ml-4">
                    {link.children?.map((child, id) => (
                      <div key={id}>
                        <p>{child.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
