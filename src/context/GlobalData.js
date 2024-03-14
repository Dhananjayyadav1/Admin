import React, { createContext, useState } from 'react';
import { productData } from '../utils/productData';
import { customerData } from '../utils/customerData';
import { orderData } from '../utils/orderData';

export const GlobalContext = createContext(null);

const GlobalData = ({ children }) => {
  const [products, setProducts] = useState(productData);
  const [customers, setCustomers] = useState(customerData);
  const [orders, setOrders] = useState(orderData);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const updateProduct = (productId, updatedProduct) => {
    const index = products.findIndex(product => product.id === productId);
    const updatedProducts = [...products];
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  };

  const allCategories = () => {
    return [...new Set(products.map(product => product.category))];
  }

  const totalProducts = () => {
    const categories = allCategories();
    const noOfProducts = new Array(categories.length).fill(0);

    for(let i=0;i<categories.length;i++) {
      const temp = products.filter((product) => product.category === categories[i])
      noOfProducts[i] = temp.length;
    }
    return noOfProducts;
  }

  const outOfStock = () => {
    let ans = 0;
    for(let i=0;i<products.length;i++) {
      if(products[i].stock === 0)
      ++ans;
    }
    return ans;
  }

  const totalStock = () => {
    let ans = 0;
    for(let i=0;i<products.length;i++) {
      ans += products[i].stock;
    }
    return ans;
  }

  const updateStatus = (s, orderId) => {
    const index = orders.findIndex(order => order.id === orderId);
    const updatedOrders = [...orders];
    updatedOrders[index].orderStatus = s;
    setOrders(updatedOrders);
  }

  const deleteProduct = (productId) => {
    const index = products.findIndex(product => product.id === productId);
    setProducts(products.filter((_, i) => i !== index));
  }

  const deleteOrder = (OrderId) => {
    const index = orders.findIndex(order => order.id === OrderId);
    setOrders(orders.filter((_, i) => i !== index));
  }

  const deleteCustomer = (i) => {
    setCustomers(customers.filter((_, idx) => idx !== i));
  }

  const calculateTotal = () => {
    let totalSales = 0;
    for (let i = 0; i < orders.length; i++) {
      totalSales += orders[i].totalPrice;
    }
    return totalSales;
  }

  return (
    <GlobalContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, customers, deleteCustomer, deleteOrder, orders, calculateTotal, allCategories, totalProducts, totalStock, outOfStock, updateStatus }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalData;
