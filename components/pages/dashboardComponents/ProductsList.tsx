import Image from "next/image";


const ProductsList = ({ products }: {
    products: {
        id: number;
        title: string;
        price: number,
        description: string;
        category: string;
        image: string;
        rating: {
            rate: number;
            count: number;
        }
    }[]
}) => {
    return (
        <ul>
            {products.length > 0 ?
                products.map((item, index) => (
                    <>
                        <li className="flex items-center justify-between gap-8 p-5 px-10">
                            <Image src={item?.image} alt={item?.title} width={50} height={50} />
                            <p title={item?.title} className={`w-64 truncate`} key={index}>{item?.title}</p>
                            <p className="text-nowrap min-w-20 truncate text-center" title={item?.price.toString()}>{item?.price} $</p>
                            <p className="text-nowrap w-20 truncate text-center" title={item?.category}>{item?.category}</p>
                            <p className="text-nowrap min-w-20 truncate text-center" title={item?.rating.rate.toString()}>{item?.rating.count}</p>
                        </li>
                        {products.length !== index && <hr />}
                    </>
                ))
                :
                <div className="w-full pt-5 text-center">There is no any products here...</div>
            }
        </ul>
    )
}

export default ProductsList;