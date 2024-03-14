import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../components/Products/AddProduct';
import Navbar from '../components/Navbar/Navbar';
import Account from '../components/Account/Account';
import Orders from '../components/Orders/Orders';
import Products from '../components/Products/Product';
import Dashboard from '../components/Dashboard/Dashboard';
import Customers from '../components/Customers/Customers';
import CalenderView from '../components/Calender/CalenderView';
import GlobalData from '../context/GlobalData';
import OrderDetails from '../components/Orders/OrderDetails';

const Main = () => {

  return (
    <>
    <div className="px-2 md:px-5 min-h-[calc(100vh-140px)]">
      <div className="bg-gray-50">
        <Navbar />
      </div>
      <div className="h-full">
        <GlobalData>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/CalenderView" element={<CalenderView />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:productId" element={<AddProduct />} />
          <Route path="/Orders/order-details/:orderId" element={<OrderDetails />} />
        </Routes>
        </GlobalData>
      </div>
      
    </div>
  </>
  );
};

export default Main;