import React, { useEffect, useState, useContext } from "react";

import Style from "../styles/searchPage.module.css";
import { Slider, Brand } from "@/Component/ComponentIndex";
import { SearchBar } from "@/SearchPage/SearchPageIndex";
import { Filter } from "@/Component/ComponentIndex";

import { NFTCardTwo, Banner } from "@/Collection/CollectionIndex";
import images from "../img";

const SearchPage = () => {
  const collectionArray = [
    { image: images.nft_image_1 },
    { image: images.nft_image_2 },
    { image: images.nft_image_3 },
    { image: images.nft_image_1 },
    { image: images.nft_image_2 },
    { image: images.nft_image_3 },
    { image: images.nft_image_1 },
    { image: images.nft_image_2 },
  ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar
      // onHandleSearch={onHandleSearch}
      // onClearSearch={onClearSearch}
      />
      <Filter />
      {/* {nfts.length == 0 ? <Loader /> : <NFTCardTwo NFTData={nfts} />} */}
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default SearchPage;
