import React, { Fragment, useEffect, useState } from 'react'
import "./index.scss"
import axios from "axios";
import { Link } from 'react-router-dom';
function PracticeAreas() {
  const [data, setData] = useState([])


  useEffect(() => {
    axios.get(`http://localhost:8080/cards`).then((response) => {
      setData(response.data)
    })
  })

  const deletefunc = (id) => {
    axios.delete(`http://localhost:8080/cards/${id}`)
      .then((response) => {
        axios.get(`http://localhost:8080/cards`)
          .then((response) => {
            setData(response.data)
          })
      })
  }

  return (
    <>
      <div className='PracticeAreas_main'>
        <div className='middle'>
          <p><strong>Practice</strong> Areas</p>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>
        <div className='map'>
          
          {
            data.map((element,index) => {
              return (
                
                <Fragment key={index}>
                <div className='card1'>
                  <div className='sekilli_yazi'>
                    <div className='imeyg'>
                      <img style={{ width: "50px", height: "50px" }} src={element.imgUrl} alt='imigi' />
                    </div>
                    <div className='yazilari'>
                      <div className='adi'>
                        <p>{element.title}</p>
                      </div>
                      <div className='dif'>
                        <p>{element.description}</p>
                      </div>
                      <div>
                        <Link to={`/cards/${element._id}`}><button>Go To</button></Link>
                        <button onClick={() => deletefunc(element._id)}>delete</button>
                      </div>
                    </div>
                  </div>
                </div>
                </Fragment>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default PracticeAreas