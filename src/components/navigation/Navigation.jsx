import React, { useState, useEffect } from 'react';

import {ReactComponent as UpArrow} from '../../images/icon-arrow-up.svg';
import {ReactComponent as DownArrow} from '../../images/icon-arrow-down.svg';
import {ReactComponent as Logo} from '../../images/logo.svg';
import {ReactComponent as MenuIcon} from '../../images/icon-menu.svg';
import {ReactComponent as CloseIcon} from '../../images/icon-close-menu.svg';

import FeaturesBox from '../NavButtons/FeaturesBox';
import CompanyBox from '../NavButtons/CompanyBox';

import './Navigation.scss';

const Navigation = () => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const handleFeaturesClick = () => {
    setOpenFeatures(!openFeatures);
    if(openCompany){
      setOpenCompany(false)
    }
  }
  const handleCompanyClick = () => {
    setOpenCompany(!openCompany);
    if(openFeatures){
      setOpenFeatures(false)
    }
  }

  const closeOpenList = () => {
    if(openFeatures){
      setOpenFeatures(false)
    }
    if(openCompany){
      setOpenCompany(false)
    }
  }

  return (
    <header >
      <div className="header-container">
        <nav>
          <Logo />
        {/* <h1 className='branding'>snap</h1> */}
          <ul>
            <li onClick={handleFeaturesClick}>
              Features
              {openFeatures?<UpArrow />:<DownArrow />}
            </li>
            <li onClick={handleCompanyClick}>
              Company
              {openCompany?<UpArrow />:<DownArrow />}
            </li>
            <li onClick={closeOpenList} >Careers</li>
            <li onClick={closeOpenList} >About</li>
          </ul>
        </nav>
        <div className="login-and-register-button-container">
          <button id='login'>Login</button>
          <button id='register'>Register</button>
        </div>
        {openFeatures?<FeaturesBox />:''}
        {openCompany?<CompanyBox />: ''}
        <MenuIcon className='menu-icon'/>
        <CloseIcon className='close-icon'/>
      </div>
    </header> 
  )
}

export default Navigation;