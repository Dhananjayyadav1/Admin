import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalData';
import { FaBookOpenReader } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Product = () => {

    const { orders, customers } = useContext(GlobalContext);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

            <div className='text-center text-[#324d67] mb-5'>
                <h2 className='font-extrabold text-4xl'>
                    Orders
                </h2>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Customer Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Order Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                                {customers.filter(customer => customer.id === order.user)[0] ? customers.filter(customer => customer.id === order.user)[0].name : "User has been deleted"}
                            </th>
                            <td class="p-4">
                                {order.id}
                            </td>
                            
                            <td className="px-6 py-4">
                                {new Date(order.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4">
                                {order.orderStatus}
                            </td>
                            <td className="px-6 py-4">
                                Rs. {order.totalPrice}
                            </td>
                            <Link to={`/Orders/order-details/${order.id}`}>
                            <td className="text-lg px-6 py-4">
                                <FaBookOpenReader />
                            </td>
                            </Link>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Product;


