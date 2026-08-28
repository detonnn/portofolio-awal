import React from 'react';

function CursorFollower() {
  return (
    <>
      <canvas id="particleCanvas"></canvas>
      <canvas id="particleCanvasFront"></canvas>

      <div className="cursor-follower">
        <img src="/money-cash.gif" alt="Cursor Follower" id="cursorFollowerImg" />
      </div>

      {/* Cursor Follower Settings + Language Switcher */}
      <div className="cf-settings" id="cfSettings">
        <button className="cf-settings-btn" id="cfSettingsBtn" data-i18n-aria="cfSettingsAria" aria-label="Pengaturan Cursor">
          <i className="fas fa-gear"></i>
        </button>
        <div className="cf-settings-menu" id="cfSettingsMenu">
          <button className="cf-settings-item" id="cfToggleBtn">
            <i className="fas fa-eye"></i> <span id="cfToggleLabel" data-i18n="cfToggleOff">Matiin</span>
          </button>
          <div className="cf-settings-divider"></div>
          <span className="cf-settings-title" data-i18n="cfChangeModel">Ganti Model</span>
          <div id="cfModelList"></div>

          <div className="cf-settings-divider"></div>
          <span className="cf-settings-title" data-i18n="langSectionTitle">Bahasa</span>
          <div id="cfLangList"></div>
        </div>
      </div>

      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>

      <audio id="hoverSound" src="/hov.MP3" preload="auto" />
    </>
  );
}

export default CursorFollower;
