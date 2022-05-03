import React from "react";

import {ReactComponent as Databiz} from '../images/client-databiz.svg'
import {ReactComponent as Audiophile} from '../images/client-audiophile.svg';
import {ReactComponent as Meet} from '../images/client-meet.svg';
import {ReactComponent as Maker} from '../images/client-maker.svg';
import DeskTopHeroImage from '../images/image-hero-desktop.png';
import MobileHeroImage from '../images/image-hero-mobile.png';

import './Main.scss'

const Main = () => {
  return (
    <main className="main-container">
        <div className="main-left">
          <div className="main-call">
            <h1> Make <br/>remote work</h1>       
            <p>Get your team in sync, no matter your location. Streamline processes,create team rituals, and watch productivity soar.</p>
            <button>Learn more</button>
            <div className="clients-container">
              <Databiz />
              <Audiophile />
              <Meet />
              <Maker />
            </div>
          </div>
        </div>
        <div className="main-right">
          <div className="image-container">
            <img src={DeskTopHeroImage} alt="" className="desktop-hero"/>
            <img src={MobileHeroImage} alt="" className="mobile-hero"/>
          </div>

        </div>
    </main>
  )
}

export default Main;