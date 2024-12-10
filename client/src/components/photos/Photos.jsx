import React from 'react'
import Navbar from '../nav/Navbar';
import PeanutBrittle from './images/PeanutBrittle.jpg';
import PopcornBall from './images/PopcornBall.jpg';
import CheeseCake from './images/CheeseCake.jpg';
import OreoBalls from './images/OreoBalls.jpg';
import Fudge from './images/Fudge.jpg';
import LavaCake from './images/LavaCake.jpg';
import CheeseBall from './images/CheeseBall.jpg';
import FriedRice from './images/FriedRice.jpg';
import Alfredo from './images/Alfredo.jpg';
import LoMein from './images/LoMein.jpg';
import OrangeChicken from './images/OrangeChicken.jpg';
import Pizza from './images/Pizza.jpg';
import PizzaRolls from './images/PizzaRolls.jpg';
import RiceBowl from './images/RiceBowl.jpg';
import Tamale from './images/Tamale.jpg';
import TamaleBowl from './images/TamaleBowl.jpg';
import TTostada from './images/TTostada.jpg';
import './photos.css';

const Photos = () => {
  return (
    <section>
      <Navbar />
      <div className='bigbox'>
        <div className='phootos1'>
          <img className='pic' src={TTostada} alt="" />
          <img className='pic' src={Tamale} alt="" />
          <img className='pic' src={RiceBowl} alt="" />
          <img className='pic' src={TamaleBowl} alt="" />
          <img className='pic' src={FriedRice} alt="" />
          <img className='pic' src={PizzaRolls} alt="" />
          <img className='pic' src={CheeseBall} alt="" />
          <img className='pic' src={Alfredo} alt="" />
          <img className='pic' src={LoMein} alt="" />
          <img className='pic' src={OrangeChicken} alt="" />
          <img className='pic' src={Pizza} alt="" />
          <img className='pic' src={Fudge} alt="" />
          <img className='pic' src={PeanutBrittle} alt="" />
          <img className='pic' src={PopcornBall} alt="" />
          <img className='pic' src={OreoBalls} alt="" />
          <img className='pic' src={CheeseCake} alt="" />
          <img className='pic' src={LavaCake} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Photos