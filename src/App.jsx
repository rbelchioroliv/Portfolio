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
      link: "#",
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

    </>
  )
}