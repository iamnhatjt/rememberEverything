import React from "react";
import VerticalNav from "./VerticalNav/VerticalNav.js";
import './body.scss'

const Body = () => {
    return (
        <main className='body-web'>
            <VerticalNav />
            {/* tất cả body viết trong div body-main  này */}
            <div className='body-main'>

            </div>
        </main>
    )
}

export default Body