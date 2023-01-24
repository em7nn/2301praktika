import React, { useEffect, useState } from 'react'
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
        <button className='btn' onClick={() => { setData([...data].sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))) }}>title a-z</button>
        <button className='btn' onClick={() => { setData([...data].sort((a, b) => (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0))) }}>description a-z</button>
        <div className='middle'>
          <p><strong>Practice</strong> Areas</p>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>
        <div className='map'>
          {
            data.map((element) => {
              return (
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
                        <Link to={`/cards/${element.id}`}><button>Go To</button></Link>
                        <button onClick={() => deletefunc(element.id)}>delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default PracticeAreas