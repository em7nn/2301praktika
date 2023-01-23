import React from 'react'
import "./index.scss"
function HappyCustomers() {
  return (
    <>
      <div className='HappyCustomers_main'>
        <div className='happy'>
          <div className='orta'>
            <h2>Happy Customers</h2>
          </div>
          <div className='three_cards'>
            <div className='card1'>
              <div className='sekilli_yazi'>
                <div className='imeyg'>
                  <img src='https://preview.colorlib.com/theme/notary/images/person_2.jpg' alt='imigi' />
                </div>
                <div className='yazilari'>
                  <div className='adi'>
                    <p>Lina Gold</p>
                  </div>
                  <div className='pesesi'>
                  <p>Owner, Ford</p>
                  </div>
                </div>
              </div>
              <p className='piu'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
            </div>
            <div className='card2'>
              <div className='sekilli_yazi'>
                <div className='imeyg'>
                  <img src='https://preview.colorlib.com/theme/notary/images/person_1.jpg.webp' alt='imigi' />
                </div>
                <div className='yazilari'>
                  <div className='adi'>
                    <p>Mike Fisher</p>
                  </div>
                  <div className='pesesi'>
                  <p>Owner, Ford</p>
                  </div>
                </div>
              </div>
              <p className='piu'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
            </div>
            <div className='card3'>
              <div className='sekilli_yazi'>
                <div className='imeyg'>
                  <img src='https://preview.colorlib.com/theme/notary/images/person_3.jpg.webp' alt='imigi' />
                </div>
                <div className='yazilari'>
                  <div className='adi'>
                    <p>Sheen Yu</p>
                  </div>
                  <div className='pesesi'>
                    <p>Owner, Ford</p>
                  </div>
                </div>
              </div>
              <p className='piu'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HappyCustomers