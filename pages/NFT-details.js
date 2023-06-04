import React from 'react';

import { Button,Category,Brand } from '@/Component/ComponentIndex';
import NFTDetailPage from '@/NFTDetailPage/NFTDetailPage';

const NFTDetails = () => {
    return (
      <div>
        <NFTDetailPage/>
        <Category />
        <Brand />
      </div>
    );
};

export default NFTDetails;
