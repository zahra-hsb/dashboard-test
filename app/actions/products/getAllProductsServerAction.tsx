"use server"

export async function getAllProductsServerAction() {
    try {
        const responseOfGetAllProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
        if (!responseOfGetAllProducts.ok) {
            console.error("Error while getting products data => ", responseOfGetAllProducts.statusText)
            return {
                ok: false,
                statusCode: 400,
                message: "Error while getting products data => " + responseOfGetAllProducts.statusText
            }
        }

        const resultOfGetAllProducts = await responseOfGetAllProducts.json()

        console.log("result => ", resultOfGetAllProducts)
        return {
            ok: true,
            statusCode: 200,
            message: "Data fetched successfuly",
            data: resultOfGetAllProducts            
        }
    } catch (error) {
        return {
            ok: false,
            statusCode: 500,
            message: "Error while getting products data => " + error
        }
    }
}