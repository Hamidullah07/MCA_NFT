import React from 'react';

import { NFTDescription,NFTDetailsImg,NFTTabs } from './NFTDetailIndex';
import Style from './NFTDetailPage.module.css';

const NFTDetailPage = () => {
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <NFTDetailsImg />
        <NFTDescription />
      </div>
    </div>
  );
};

export default NFTDetailPage;
