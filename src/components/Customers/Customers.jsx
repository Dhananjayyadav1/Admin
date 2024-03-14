import React, { useContext} from 'react';
import { MdDelete } from "react-icons/md";
import { GlobalContext } from '../../context/GlobalData';

const Orders = () => {

  const { customers, deleteCustomer } = useContext(GlobalContext);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

    <div className='text-center text-[#324d67] mb-5'>
        <h2 className='font-extrabold text-4xl'>
            Customers
        </h2>
    </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Shopping Worth
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Contact Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {customers.map((customer, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
              <img className="w-10 h-10 rounded-full" src={customer.image} alt="Jese" />
                <div className="ps-3">
                  <div className="text-base font-semibold">{customer.name}</div>
                  <div className="font-normal text-gray-500">{customer.email}</div>
                </div>
            </th>
                    <td className="px-6 py-4">
                        Rs. {customer.shoppingWorth}
                    </td>
                    <td className="px-6 py-4">
                        {`${customer.address?.city}, ${customer.address?.country}`}
                    </td>
                    <td className="px-6 py-4">
                        {customer.mobile}
                    </td>
                    <td className="px-6 py-4 text-lg">
                        <p className=' flex items-center'>
                            <MdDelete onClick={() => deleteCustomer(index)} className='cursor-pointer' />
                        </p>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
)
}

export default Orders;


