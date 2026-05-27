import AnimatedBackdrop from '@/motion/AnimatedBackdrop'
import SkipLink from '@/components/SkipLink/SkipLink'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Expertise from '@/components/Expertise/Expertise'
import Projects from '@/components/Projects/Projects'
import Process from '@/components/Process/Process'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function App() {
  return (
    <>
      <SkipLink />
      <AnimatedBackdrop />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
