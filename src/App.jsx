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
            Sou Renan Belchior, um desenvolvedor apaixonado por Front-End e Tecnologia da Informação, 
            focado em criar soluções tecnológicas que impulsionam a inovação. Atualmente conclui o curso de 
            <b> Análise e Desenvolvimento de Sistemas</b> na <b>FATEC</b> de Botucatu, possuo experiência prática 
            como Full Stack, dominando tecnologias essenciais como <b>React</b>, <b>JavaScript</b>, <b>HTML</b>, 
            <b> CSS</b>, <b>TypeScript</b> e ferramentas de 
            gerenciamento de infraestrutura. Um grande marco na minha trajetória recente foi a conquista mundial do 
            primeiro lugar no <b>NASA Space Apps Challenge 2025</b>, onde atuei no desenvolvimento de sistemas seguros. 
            Além disso, minha bagagem inclui formação intensiva na <b>Compass.UOL</b> e vivência real em suporte técnico na <b>OSS Pirangi</b>. 
            Com inglês avançado e visão estratégica, transformo desafios complexos em interfaces digitais eficientes, 
            sempre buscando evoluir tecnicamente e colaborar para o sucesso de produtos impactantes no mercado atual.
          </p>
        </div>

        <div className='about-photo'>

          <div className='border-photo'>
            <img src="src/assets/Renan.png" alt="profile-photo" srcset="" />
          </div>


          <p style={{ 'fontSize': 27 }}>
            <i>
              "The most dangerous phrase in the language is, 'We've always done it this way'."  <b>- Grace Hopper</b>
            </i>
          </p>

        </div>

      </div>

    </>
  )
}


