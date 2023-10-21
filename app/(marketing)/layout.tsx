// import { Navbar } from "./_components/navbar";

import { MainNav } from "@/components/main-nav";
import { Navbar } from "@/components/marketing/navbar";

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <Navbar />

            <main className="h-full pt-40">
                {children}
            </main>
        </div>
    );
}

export default MarketingLayout;