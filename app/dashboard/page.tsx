import DashboardHeader from "@/components/pages/dashboardComponents/DashboardHeader";
import Card from "@/components/shared/Card";
import { getAllProductsServerAction } from "../actions/products/getAllProductsServerAction";



const dashboardPage = async () => {
    console.log(await getAllProductsServerAction())
    return (
        <Card className="my-5 !px-0 max-w-6xl mx-auto">
            <div className="mx-10">
                <p className="text-lg font-bold dark:text-gray-950">
                    Products
                </p>
            </div>
            <hr className="mt-5" />

        </Card>
    )
}

export default dashboardPage;