"use client"

import { Navigation } from "@/components/main/navigation";
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {

    const { isAuthenticated, isLoading } = useConvexAuth()

    if (isLoading) {
        return (
            <div className="h-full flex items-center justify-center">
                <Spinner size='lg' />
            </div>
        )
    }

    if (!isAuthenticated) {
        return redirect('/')
    }

    return (
        <div className="h-full flex">
            <Navigation />
            <main className="flex-1 h-full overflow-y-auto">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;