import React from 'react'
import "./index.scss"
function LegalSolutions() {
  return (
    <>
      <div className='LegalSolutions_main'>
        <div className='legal'>
          <div className='birinci'>
            <img src='https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp' alt='kisi' />
          </div>
          <div className='ikinci'>
            <p id='p1'>We Have <strong Solutions>Legal Solutions</strong></p>
            <p id='p2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?</p>
            <p id='p3'>Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.</p>
            <div className='iconlu'>
              <div className='ic'>
                <i class="fa-solid fa-check"></i>
                <p>Aperiam iste nam molestias</p>
              </div>
              <div className='ic'>
                <i class="fa-solid fa-check"></i>
                <p>Modi perferendis ipsa</p>
              </div>
              <div className='ic'>
                <i class="fa-solid fa-check"></i>
                <p>Perspic iste culpa</p>
              </div>
            </div>
          </div>
          <div className='ucuncu'>
            <div className="dropdown">
              <button id='bitien' className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">How to download and register?</button>
              <div class="dropdown-menu">
              <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>  
              </div>
            </div>
            <div className="dropdown">
              <button id='bitien' className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">How to create your paypay account?</button>
              <div class="dropdown-menu">  
              <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
              </div>
            </div>
            <div className="dropdown">
              <button id='bitien' className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">How to link your paypal and bank account?</button>
              <div class="dropdown-menu"> 
              <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LegalSolutions