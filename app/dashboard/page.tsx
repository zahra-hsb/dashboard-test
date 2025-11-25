import DashboardHeader from "@/components/pages/dashboardComponents/DashboardHeader";
import Card from "@/components/shared/Card";
import { getAllProductsServerAction } from "../actions/products/getAllProductsServerAction";
import ProductsList from "@/components/pages/dashboardComponents/ProductsList";



const dashboardPage = async () => {
    const returnedData = await getAllProductsServerAction()
    return (
        <Card className="my-5 !px-0 max-w-6xl mx-auto dark:bg-gray-950 bg-white ">
            <div className="mx-10">
                <p className="text-lg font-bold">
                    Products
                </p>
            </div>
            <hr className="mt-5" />
            {returnedData.ok ?
                <ProductsList products={returnedData?.data} />
                :
                <div>{returnedData.message}</div>
            }
        </Card>
    )
}

export default dashboardPage;