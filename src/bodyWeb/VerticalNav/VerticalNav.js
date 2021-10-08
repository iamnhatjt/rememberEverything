import React, {useRef} from "react";
import {IoCreateOutline, IoCreate, IoHomeOutline, IoHome, IoFolderOpenOutline, IoFolderOpen} from "react-icons/io5";
import { hoverUti } from "../../functionglobal";
import './vertical.scss'

const data = [
    {
        icon: <IoHomeOutline className='icon-verNav'/>,
        name: 'Home',
    },
    {
        icon: <IoFolderOpenOutline className='icon-verNav'/>,
        name: 'bài viết của bạn',
    },
    {
        icon: <IoCreateOutline className='icon-verNav'/>,
        name: 'Tạo',
    },
]

// vertical
const ItemVerNav = ({item: {icon, name}}) => {
    return (
        <li className='verNav-item'>
            {icon}
            <span className='hover-infor'>{name}</span>
        </li>
    )  
}

const VerticalNav = () => {
    const itemVerNav = data.map((item, index) => <ItemVerNav key={index} item={item}/>)

    const verNavList = useRef(null)
    const hoverUties = hoverUti(verNavList, '.hover-infor')
    return (
        <nav className='verNav'>
            <ul className='varNav-list' ref={verNavList} onMouseEnter={hoverUties}>
                {itemVerNav}
            </ul>
        </nav>
    )
}

export default VerticalNav