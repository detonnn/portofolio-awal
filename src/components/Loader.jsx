import React from 'react';

function Loader() {
  return (
    <div id="loader">
      <div className="loader-content">
        <h2 className="loader-title">Ibnu dexton</h2>
        <button id="enterBtn" className="enter-btn">
          <span>enter</span>
          <span className="enter-btn-icon"><i className="fas fa-arrow-right"></i></span>
        </button>
      </div>
    </div>
  );
}

export default Loader;
