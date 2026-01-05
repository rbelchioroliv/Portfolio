import { useState } from 'react'


import './App.css'


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <img src="src/assets/LogoCortada.PNG" alt="Logo" srcset="" title='Renan Belchior' />
      </div>

      <div className='about'>

        <div className='about-text'>
          <h1>Sobre</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>

        <div className='about-photo'>

          <img src="src/assets/LogoRoxo.PNg" alt="profile-photo" srcset="" />

          <p style={{'fontSize': 27}}>
            <i>
              "Frase motivacional"
            </i>
          </p>

        </div>

      </div>

    </>
  )
}


