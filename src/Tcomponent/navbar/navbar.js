import React from "react";
import { IoNotificationsOutline, IoNotifications,  IoSearchOutline} from "react-icons/io5";
import './input.scss';

//Horizontal
const HorizontalNav = () => {
    return (
        <nav className='horiNav'>
            <div className='margin-page'>
                <div className='horiNav-left'></div>
                <div className='horiNav-center'>
                    <div className='space-search'>
                        <label htmlFor='input-search' className='icon-search-cover'>
                            <IoSearchOutline className='icon-search' />
                        </label>
                        <input id='input-search' className='input-search' type='text' placeholder='Tìm kiếm học phần...'></input>
                    </div>
                </div>
                <div className='horiNav-right'>
                    <div className='notify'>
                        <IoNotificationsOutline className='icon-notify'/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

//Root nav
const Navbar = () => {
    return (
        <div>
            <HorizontalNav />
        </div>
    )
}

export default Navbar