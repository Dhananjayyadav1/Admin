import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";

import { GlobalContext } from '../../context/GlobalData';

const Account = () => {

  const { products, customers, orders } = useContext(GlobalContext);
  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center m-10">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://xsgames.co/randomusers/assets/avatars/female/64.jpg" alt="Bonnie" />
          <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Dhananjay Yadav</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">dhananjayyadav6264385920@gmail.com</span>
        </div>
        <div className='m-10 text-sm'>
          <div className='flex flex-row gap-4'>
            <p>My Products: {products.length}</p>
            <Link to={'/Products'}>
              <FaExternalLinkAlt />
            </Link>
          </div>
          <div className='flex flex-row gap-4'>
            <p>My Customers: {customers.length}</p>
            <Link to={'/Customers'}>
              <FaExternalLinkAlt />
            </Link>
          </div>
          <div className='flex flex-row gap-4'>
            <p>Total Orders: {orders.length}</p>
            <Link to={'/Orders'}>
              <FaExternalLinkAlt />
            </Link>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Account