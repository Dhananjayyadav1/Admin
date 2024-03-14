import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalData';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';


const Product = () => {

    const { products, deleteProduct } = useContext(GlobalContext);

    return (
        <>
        <div className='text-center text-[#324d67] mb-5'>
                <h2 className='font-extrabold text-4xl'>
                    Products
                </h2>
            </div>
        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Stock
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.name}
                            </th>
                            <td className="p-4">
                                <img src={product?.image} className="w-16 md:w-32 max-w-16 max-h-16" alt="Absent" />
                            </td>
                            <td className="px-6 py-4">
                                {product.stock}
                            </td>
                            <td className="px-6 py-4">
                                {product.category}
                            </td>
                            <td className="px-6 py-4">
                                Rs. {product.price}
                            </td>
                            <td className="px-6 py-4 text-lg">
                                <p className=' flex items-center'>
                                    <Link to={`/edit-product/${product.id}`}>
                                        <FaEdit className='mr-5 cursor-pointer' />
                                    </Link>
                                    <MdDelete onClick={() => deleteProduct(product.id)} className='cursor-pointer' />
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Product;


