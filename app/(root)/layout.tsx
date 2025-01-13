import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNavBar from "@/components/MobileNavBar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Aditya", lastName: "Mathur" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn}></Sidebar>
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
          <div>
            <MobileNavBar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
