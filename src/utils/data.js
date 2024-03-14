import { RiAccountBoxFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { MdApps } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";

export const categories = [
    {
        name: 'Products',
        image: <MdApps />,
    },
    {
        name: 'Customers',
        image: <HiUserGroup />,
    },
    {
        name: 'Orders',
        image: <FaClipboardList />,
    },
    {
        name: 'CalenderView',
        image: <FaRegCalendarDays />,
    },
    {
        name: 'Account',
        image: < RiAccountBoxFill />,
    }
]