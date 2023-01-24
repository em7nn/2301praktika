import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
function DetailPage() {

    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/cards/${id}`).then((response) => {
            console.log(response.data);
            setData(response.data)
        })
    })
    return (
        <>
            <div className='card1'>
                <div className='sekilli_yazi'>
                    <div className='imeyg'>
                        <img style={{ width: "50px", height: "50px" }} src={data.imgUrl} alt='imigi' />
                    </div>
                    <div className='yazilari'>
                        <div className='adi'>
                            <p>{data.title}</p>
                        </div>
                        <div className='dif'>
                            <p>{data.description}</p>
                        </div>
                        <div>
                            <Link to={"/"}><button>Go Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default DetailPage