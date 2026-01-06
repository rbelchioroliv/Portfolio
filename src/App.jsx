import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Lenis from 'lenis'
import './App.css'

export default function App() {
  
 
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])


  
  // --- Parallax da Foto ---
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50])


  // --- Dados do Currículo ---
  const skills = [
    "React", "React Native" , "JavaScript", "TypeScript", "HTML5", "CSS3", 
    "Three.js", "DevSecOps", "Infraestrutura", "Power BI"
  ];

  const experience = [
    {
      year: "2025",
      title: "NASA Space Apps Challenge - 1º Lugar Regional",
      desc: "Desenvolvimento de ferramenta 3D inclusiva para habitats espaciais (Projeto Singularidade). Foco em segurança e performance.",
      local: "Campeão Regional"
    },
    {
      year: "2024 - 2025",
      title: "Estagiário de TI / Full Stack",
      desc: "Desenvolvimento de sistemas web, suporte a servidores e infraestrutura de redes. Criação de dashboards em Power BI.",
      local: "OSS Pirangi"
    },
    {
      year: "2023 - 2025",
      title: "Análise e Desenvolvimento de Sistemas",
      desc: "Formação superior tecnológica com foco em desenvolvimento de software e gestão de projetos.",
      local: "FATEC Botucatu"
    },
    {
      year: "2022",
      title: "Trainee Front-End",
      desc: "Formação intensiva em React, e-commerce (Oracle Commerce Cloud) e metodologias ágeis.",
      local: "Compass.UOL"
    }
  ];
  const projects = [
    {
      title: "Portfólio",
      desc: "Meu portifólio de apresentação",
      techs: ["React", "JavaScriptS", "HTML/CSS", "Acessibilidade"],
      link: "https://github.com/rbelchioroliv/Portifolio",
      type: "Portifólio"
    },
    {
      title: "Singularidade (NASA Winner)",
      desc: "Ferramenta 3D inclusiva para criação de habitats espaciais. Vencedor regional do NASA Space Apps 2025.",
      techs: ["Three.js", "JS", "HTML/CSS", "Acessibilidade"],
      link: "https://github.com/rbelchioroliv/space-habitat-tool",
      type: "Destaque Regional"
    },
    {
      title: "DuckDuum FPS",
      desc: "Jogo FPS estilo Doom 2.5D com tema ambiental desenvolvido para a Bird Game Jam 2025.",
      techs: ["Game Design", "Lógica", "SFX"],
      link: "https://birdgamejam.itch.io/duckduum",
      type: "Game Jam"
    },
    {
      title: "Homelab Server",
      desc: "Implantação de servidor de virtualização com hardware legado focando em sustentabilidade.",
      techs: ["Proxmox", "Linux Server", "Redes"],
      link: "#", 
      type: "Infraestrutura"
    },
    {
      title: "Cartão Digital NFC",
      desc: "Solução inovadora para cartões de visita utilizando tecnologia NFC e Web.",
      techs: ["IoT", "HTML", "CSS", "Mobile"],
      link: "https://github.com/rbelchioroliv/Cartoes-de-Visita",
      type: "Front-End"
    }
  ];

  return (
    <>
      {/* HEADER */}
      <div className='header'>
        <motion.img 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="src/assets/LogoCortada.PNG" 
          alt="Logo" 
          title='Renan Belchior' 
        />
      </div>



      {/* SOBRE */}
      <div className='about' ref={ref}>
        <div className='about-text'>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Sobre
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
          </motion.p>

          <motion.a 
            href="/CV-Renan_Belchior.pdf"
            download="CV-Renan_Belchior.pdf"
            className="btn-download"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Baixar Currículo
          </motion.a>
        </div>

        <div className='about-photo'>
          <motion.div 
            className='border-photo'
            style={{ y: yParallax }} 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="src/assets/Renan.png" alt="profile-photo" />
          </motion.div>
          
          <motion.p 
            style={{ fontSize: 27, marginTop: '2rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <i>
              "The most dangerous phrase in the language is, 'We've always done it this way'." <br /> <b>- Grace Hopper</b>
            </i>
          </motion.p>
        </div>
      </div>


       {/* COMPETÊNCIAS */}
      <div className='skills-section'>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h2>
        <div className='skills-grid'>
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className='skill-card'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0 }}
              whileHover={{ scale: 1.1, backgroundColor: "#661cab", borderColor: "#fff" }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      
      {/* PROJETOS */}
      <div className='projects-section'>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Projetos em Destaque
        </motion.h2>

        <div className='projects-grid'>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className='project-card'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className='project-header'>
                <span className='project-type'>{project.type}</span>
                <h3>{project.title}</h3>
              </div>
              <p>{project.desc}</p>
              
              <div className='project-techs'>
                {project.techs.map((tech, i) => (
                  <span key={i} className='tech-tag'>{tech}</span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noopener noreferrer" className='project-link'>
                Ver Projeto &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      


      {/* TIMELINE */}
      <div className='timeline-section'>
        <motion.h2
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
        >
          Minha Jornada
        </motion.h2>
        <div className='timeline-container'>
          {experience.map((item, index) => (
            <motion.div 
              key={index}
              className='timeline-item'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className='timeline-year'>{item.year}</div>
              <div className='timeline-content'>
                <h3>{item.title}</h3>
                <span className='timeline-local'>{item.local}</span>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- CONTATO & FOOTER --- */}
      <footer className='contact-footer'>
        <motion.div 
          className='footer-content'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Vamos Conversar?</h2>
          <p>Estou aberto a novas oportunidades e parcerias inovadoras.</p>
          
          <div className='social-links'>
            {/* LINKEDIN */}
            <a href="https://www.linkedin.com/in/renan-belchior/" target="_blank" rel="noopener noreferrer" className='social-btn linkedin'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* GITHUB */}
            <a href="https://github.com/rbelchioroliv" target="_blank" rel="noopener noreferrer" className='social-btn github'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          <p className="copyright">&copy; 2026 Renan Belchior. Desenvolvido com React & Motion.</p>
        </motion.div>
      </footer>

      


     

    </>
  )
}