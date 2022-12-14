import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Xenia Portfolio</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section className="snap-center" id="experiences">
        <Experience />
      </section>

      <section className="snap-start" id="skills">
        <Skills />
      </section>

      <section className="snap-start" id="projects">
        <Projects />
      </section>
      
      <section className='snap-start' id='contact'>
        <ContactMe />
      </section>
    </div>
  )
}
