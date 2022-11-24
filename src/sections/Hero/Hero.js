import './Hero.css'

import {PrimaryButton} from './../../components/index';

function Hero() {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'>welcome to Cyborg</h6>
            <h4 className='hero-title'><em>Browse</em> Our Popular Games Here</h4>

            <PrimaryButton>Browes Now</PrimaryButton>

            {/* <div className='main-button'>
                <a href="browse.html">Browes Now</a>
  </div> */}
        </div>
    </div>
  )
}

export default Hero