import React, {useRef} from "react";
import {IoCreateOutline, IoCreate, IoHomeOutline, IoHome, IoFolderOpenOutline, IoFolderOpen} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { hoverUti } from "../../functionglobal";
import './vertical.scss'

const data = [
    {
        icon: <IoHomeOutline className='icon-verNav'/>,
        name: 'Home',
        link: '/',
    },
    {
        icon: <IoFolderOpenOutline className='icon-verNav'/>,
        name: 'bài viết của bạn',
        link: '/bai_viet',
    },
    {
        icon: <IoCreateOutline className='icon-verNav'/>,
        name: 'Tạo',
        link: '/tao',
    },
]

// vertical
const ItemVerNav = ({item: {icon, name, link}}) => {
    return (
        <NavLink to={link}>
            <li className='verNav-item'>
                {icon}
                <span className='hover-infor'>{name}</span>
            </li>
        </NavLink>
    )  
}

const VerticalNav = () => {
    const itemVerNav = data.map((item, index) => <ItemVerNav key={index} item={item}/>)

    const verNavList = useRef(null)
    const hoverUties = hoverUti(verNavList, '.hover-infor', 1000)
    return (
        <nav className='verNav'>
            <ul className='varNav-list' ref={verNavList} onMouseEnter={hoverUties}>
                {itemVerNav}
            </ul>
        </nav>
    )
}

export default VerticalNav