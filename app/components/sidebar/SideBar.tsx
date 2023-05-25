import DesktopSideBar from "./DesktopSideBar";
import MobileFooter from "./MobileFooter";

async function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <MobileFooter />
      <DesktopSideBar />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default SideBar;
