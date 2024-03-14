import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalData'
import { useNavigate, useParams } from 'react-router-dom';
import { categories } from '../../utils/productData';

const AddProduct = () => {

    const { productId } = useParams();
    const navigate = useNavigate();
    const { products, addProduct, updateProduct } = useContext(GlobalContext);


    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        price: undefined,
        stock: undefined,
        image: "",
    });

    useEffect(() => {
        if (productId !== undefined) {
            const index = products.findIndex(product => product.id === productId);
            if (index !== undefined) {
                setFormData(products[index]);
            }
        }
    }, [productId, products]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productId !== undefined) {
            updateProduct(productId, formData);
        } else {
            addProduct(formData);
        }
        setFormData({
            name: '',
            description: '',
            category: '',
            price: undefined,
            stock: undefined,
            image: "",
        });

        navigate('/Products');
    };

    return (
        <div className="flex justify-center items-center h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-lg font-semibold text-gray-900">{productId !== undefined ? 'Edit Product' : 'Add Product'}</h3>
                    </div>
                    <form onSubmit={handleSubmit} className="p-4 md:p-5">
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Product Name</label>
                                <input onChange={handleChange} value={formData.name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type product name" required />
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                                <select onChange={handleChange} value={formData.category} name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    <option defaultValue>Select category</option>
                                    {categories.map((category, index) => (
                                        <option key={index} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                                <input onChange={handleChange} value={formData.price} name="price" type="number" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="$2999" required />
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900">Stock</label>
                                <input onChange={handleChange} value={formData.stock} name="stock" type="number" id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="999" required />
                            </div>

                            <div className="col-span-2">
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Image Url</label>
                                <input onChange={handleChange} value={formData.image} name="image" type="text" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type product name" />
                            </div>

                            <div className="col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Product Description</label>
                                <textarea onChange={handleChange} value={formData.description} name="description" id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write product description here"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            {productId !== undefined ? 'Edit Product' : 'Add Product'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct