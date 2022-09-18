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
                <div className="container mx-auto h-full">
                    {children}
                </div>
            </div>
        </>
    )
}
