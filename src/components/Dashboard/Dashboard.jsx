import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalData';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { Link } from 'react-router-dom';
import PieChart from './PieChart';

const Dashboard = () => {

  const { products, customers, orders, calculateTotal, outOfStock, totalStock } = useContext(GlobalContext);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-[#cbd635] p-5 m-2 rounded-md flex justify-between items-center shadow">
          <div>
            <h3 className="font-bold">Total Customers</h3>
            <p className="text-white">{customers.length}</p>
          </div>
          <Link to='/Customers'>
            <FaExternalLinkAlt className='text-xl cursor-pointer' />
          </Link>
        </div>

        <div className="bg-[#b05252] p-5 m-2 rounded-md flex justify-between items-center shadow">
          <div>
            <h3 className="font-bold">Total Products</h3>
            <p className="text-white">{products.length}</p>
          </div>
          <Link to='/Products'>
            <FaExternalLinkAlt className='text-xl cursor-pointer' />
          </Link>
        </div>

        <div className="bg-[#69a6d2] p-5 m-2 rounded-md flex justify-between items-center shadow">
          <div>
            <h3 className="font-bold">Total Orders</h3>
            <p className="text-white">{orders.length}</p>
          </div>
          <Link to='/Orders'>
            <FaExternalLinkAlt className='text-xl cursor-pointer' />
          </Link>
        </div>

        <div className="bg-[#4f9e4e] p-5 m-2 rounded-md flex justify-between items-center shadow">
          <div>
            <h3 className="font-bold">Total Sales</h3>
            <p className="text-white">{`Rs. ${calculateTotal()}`}</p>
          </div>
          <Link to='/Products'>
            <FcSalesPerformance className='text-6xl cursor-pointer' />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className='bg-[#ffffff] shadow-md p-5 m-2 rounded-md'>
          <PieChart />
          <h3 className='m-2 font-bold'>Total count of different types of products</h3>
        </div>

        <div className='grid grid-cols-1'>
        <div className="bg-[#7d645c] p-5 m-2 rounded-md flex justify-between items-center shadow">
          <div>
            <h3 className="font-bold">Out of Stock Items</h3>
            <p className="text-white">{outOfStock()}</p>
          </div>
            <FcInTransit className='text-9xl cursor-pointer' />
        </div>

        <div className="bg-[#b36198] p-5 m-2 rounded-md flex justify-between items-center shadow">
          <div>
            <h3 className="font-bold">Total Stock of All Products</h3>
            <p className="text-white">{totalStock()}</p>
          </div>
            <FcCustomerSupport className='text-9xl cursor-pointer' />
        </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;