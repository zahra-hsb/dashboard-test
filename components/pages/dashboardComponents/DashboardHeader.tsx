import Button from "@/components/shared/Button";
import { BiLogOut } from "react-icons/bi";


const DashboardHeader = () => {
    return (
        <header className="flex items-center justify-between w-full border-b p-5 sticky top-0 left-0 shadow px-10 lg:px-32 bg-white/5 backdrop-blur-lg dark:backdrop-blur-">
            <p className="text-xl font-bold">Dashboard</p>
            <Button className="flex items-center gap-1  !w-auto  !mt-0">
                <p>Logout</p>
                <BiLogOut className="" size={20} />
            </Button>
        </header>
    )
}

export default DashboardHeader;