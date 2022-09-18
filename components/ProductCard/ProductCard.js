import Link from "next/link";


// make fetch to this endpoint -->https://picsum.photos/200/300 

export default function ProductCard({ product }) {
    return (
        <div>
            <Link key={product.id} href={`/products/${product.id}`} >
                <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={product.url} alt="img" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h4 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name} </h4>
                        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${product.price}</h4>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                    </div>
                </a>
            </Link>

        </div>
    )
}


// other pic url: 
// strawberry -> https://picsum.photos/id/1080/6858/4574
// muelle -> https://picsum.photos/id/172/200/300
// perrito -> https://picsum.photos/id/237/200/300