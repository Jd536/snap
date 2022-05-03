import React from 'react';

import "./CompanyBox.scss";

const CompanyBox = () => {
  return (
    <div className="company-box-container">
      <div className="feature">
        <span className="feature-text">History</span>
      </div>
      <div className="feature">
        <span className="feature-text">Our Team</span>
      </div>
      <div className="feature">
        <span className="feature-text">Blog</span>
      </div>
    </div>
  )
}

export default CompanyBox;