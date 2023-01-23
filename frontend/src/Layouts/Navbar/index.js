import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

function Navbar() {
    return (
        <>
            <div className='MainNav'>
                <div className='nav'>
                    <div className='logokimi'>
                        <h1>Notary</h1>
                    </div>
                    <div className='linkler'>
                        <Link className='stil' to={"/"}>Home</Link>
                        <Link className='stil' to={"/addpage"}>Add</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar