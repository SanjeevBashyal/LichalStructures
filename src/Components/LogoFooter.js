import React from "react";
import LogoOriginal from './others/LogoOriginal';
import './LogoFooter.css'

export default function LogoFooter() {
  return (
    <div className="LogoFooter">
      <div className="copyright">
        <h4>
        © 2021
        </h4>
      </div>
      <div className="logo_footer">
        <LogoOriginal size="50" id1="hue1" id2="hue2"/>
      </div>
    </div>
  );
}
