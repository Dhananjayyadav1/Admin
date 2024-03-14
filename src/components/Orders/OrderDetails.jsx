import { Fragment, useContext, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoClose } from "react-icons/io5";
import { GlobalContext } from '../../context/GlobalData';
import { useNavigate, useParams } from 'react-router-dom';


const OrderDetails = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const { orders, updateStatus } = useContext(GlobalContext);
    const tempo = orders.filter(o => o.id === orderId)[0];
    const [open, setOpen] = useState(true);

    const handleClose = (i) => {
        setOpen(i);
        navigate('/Orders');
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">Order Details</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => handleClose(false)}
                                                    >
                                                        <span className="absolute -inset-0.5" />
                                                        <span className="sr-only">Close panel</span>
                                                        <IoClose className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul className="-my-6 divide-y divide-gray-200">
                                                        {tempo.orderItems.map((product) => (
                                                            <li key={product.id} className="flex py-6">
                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                    <img
                                                                        alt="None"
                                                                        src={product.image}
                                                                        className="h-full w-full object-cover object-center"
                                                                    />
                                                                </div>

                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                                            <h3>
                                                                                {product.name}
                                                                            </h3>
                                                                            <p className="ml-4">Rs. {product.price}</p>
                                                                        </div>
                                                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                                        <p className="text-gray-500">Qty {product.quantity}</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                            <div>
                                                <form className="max-w-sm mx-5 mb-5">
                                                    <label htmlForfor="countries" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Delivery Status</label>
                                                    <select id="countries" onChange={(e) => updateStatus(e.target.value, tempo.id)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        <option defaultValue>{tempo.orderStatus}</option>
                                                        <option value="Ordered">Ordered</option>
                                                        <option value="Shipped">Shipped</option>
                                                        <option value="Out for Delivery">Out for Delivery</option>
                                                        <option value="Delivered">Delivered</option>
                                                    </select>
                                                </form>
                                            </div>
                                            <div className="flex mb-6 justify-between text-base font-medium text-gray-900">
                                                <p className='font-bold'>Total Amount</p>
                                                <p>Rs. {tempo.totalPrice}</p>
                                            </div>
                                            <p className='font-bold'>Shipping Address</p>
                                            <p className="mt-0.5 text-sm text-gray-500">{`${tempo.shippingInfo.address},${tempo.shippingInfo.city},`}</p>
                                            <p className="mt-0.5 text-sm text-gray-500">{`${tempo.shippingInfo.state},${tempo.shippingInfo.country},${tempo.shippingInfo.pinCode}.`}</p>
                                            <p className="mt-0.5 text-sm text-gray-500">{`${tempo.shippingInfo.phoneNo}`}</p>

                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    <button
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        onClick={() => handleClose(false)}
                                                    >
                                                        All Orders
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default OrderDetails;