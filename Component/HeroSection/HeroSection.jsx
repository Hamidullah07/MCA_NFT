import React from 'react';
import Image from 'next/image';

import Style from "./HeroSection.module.css";
import { Button } from '../ComponentIndex';
import images from "../../img";

function HeroSection() {
    return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, Collect, and sell NFTs 🖼️</h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button
            btnName="Start your search"
          />
        </div>
        <div className={Style.heroSection_box_right}>
            <Image
              className={Style.hero_img}
            src={images.hero}
            alt="Hero section"
          />
        </div>
      </div>
    </div>
    );
}

export default HeroSection;
