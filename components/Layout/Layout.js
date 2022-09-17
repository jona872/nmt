import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Navbar/Navbar';


export default function Layout({ children }) {
    return (
        <>
            <div>
                <Navbar />
            </div>

            <div className="bg-gray-100 p-10 ">
                {/* <div className="flex flex-row justify-center">
                    <Link href="/">
                        <a className="bg-blue-500 hover:bg-blue-700 py-2 px-4 m-2 rounded foucus:outline-none focus:shadow-outline font-bold text-white ">Go Home</a>
                    </Link>
                    <Link href="/productCreate">
                        <a className="bg-blue-500 hover:bg-blue-700 py-2 px-4 m-2 rounded foucus:outline-none focus:shadow-outline font-bold text-white" >Create New Product</a>
                    </Link>
                </div> */}
                <div className="container mx-auto h-full">
                    {children}
                </div>
            </div>

        </>
    )
}
