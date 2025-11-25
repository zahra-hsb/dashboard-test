import DashboardHeader from "@/components/pages/dashboardComponents/DashboardHeader";
import { ReactNode } from "react";



const dashboardLayout = ({ children }: {
    children: ReactNode;
}) => {
    return (
        <section className="max-w-screen-2xl mx-auto">
            <DashboardHeader />
            <main className="p-5 sm:p-10">
                {children}
            </main>
        </section>
    )
}

export default dashboardLayout;