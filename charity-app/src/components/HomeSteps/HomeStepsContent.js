import React from "react";
import "./HomeStepsContent.scss";
import TshirtIcon from "../../assets/Icon-1.svg";
import BagIcon from "../../assets/Icon-2.svg";
import SearchIcon from "../../assets/Icon-3.svg";
import CycleIcon from "../../assets/Icon-4.svg";

export default function HomeStepsContent() {
  const iconHeight = 83;
  return (
    <div className="steps-content">
      <div className="container">
        <div className="item">
          <img src={TshirtIcon} alt="decoration" height={iconHeight} />
          <h1>Wybierz rzeczy</h1>
          <div className="divider"></div>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="item">
          <img src={BagIcon} alt="decoration" height={iconHeight} />
          <h1>Spakuj je</h1>
          <div className="divider"></div>
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div className="item">
          <img src={SearchIcon} alt="decoration" height={iconHeight} />
          <h1>Zdecyduj komu chcesz pomóc</h1>
          <div className="divider"></div>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div className="item">
          <img src={CycleIcon} alt="decoration" height={iconHeight} />
          <h1>Zamów kuriera</h1>
          <div className="divider"></div>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
    </div>
  );
}
