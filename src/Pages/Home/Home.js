import './Home.css'
import {Hero, MostPopular, GamingLibrary} from '../../sections/index'

function Home() {
  return (
    <>
    <h1>Home page</h1>
        <Hero/>
        <MostPopular/>
        <GamingLibrary/>
    </>
  )
}

export default Home