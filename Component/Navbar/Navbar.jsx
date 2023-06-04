import React,{ useState,useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
//Icons
import {MdNotifications} from 'react-icons/md';
import{BsSearch} from 'react-icons/bs';
import {CgMenuLeft, CgMenuRight} from 'react-icons/cg';

import Style from './Navbar.module.css';
import {Discover,HelpCenter,Notifications,Profile,Sidebar} from './index'
import { Button } from '../ComponentIndex'; 
import Images from '../../img';

const Navbar = () => {
  const [discover,setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const handleDiscover = () => {
    if (!discover) {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
    else {
      setDiscover(false)
    }
  }

  const handleHelpCenter = () => {
    if (!help) {
      setHelp(true);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    }
    else {
      setHelp(false)
    }
  }

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if(!profile) {
      setProfile(true)
      setNotification(false);
      setDiscover(false);
      setHelp(false);
    }
    else{
      setProfile(false);
    }
  }

  const openSideBar = () =>{
    if(!openSideMenu){
      setOpenSideMenu(true);
    }
    else{
      setOpenSideMenu(false);
    }
  }

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>

        {/* LEFT Container */}
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={Images.logo} alt="NFT Market Place" width={100} height={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type='text' placeholder='Search NFT' />
              <BsSearch onClick={() => {}} className={Style.search_icon}/>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className={Style.navbar_container_right}>

          {/* DISCOVER */}
          <div className={Style.navbar_container_right_discover} onClick={(e)=>handleDiscover()}>
            <p >Discover</p>
            {discover &&  
            (<div className={Style.navbar_container_right_discover_box} >
              <Discover />
            </div>)}
          </div>

            {/* HELP CENTER */}
          <div className={Style.navbar_container_right_help} onClick={() => handleHelpCenter() }>
              <p >Help Center</p>
              {help && 
              (<div className={Style.navbar_container_right_help_box}>
                  <HelpCenter/>
                </div>)}
          </div>

            {/* NOTIFICATION */}
            <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notifications />}
          </div>

              {/* BUTTON FOR CREATE */}
          <div className={Style.navbar_container_right_button}>
            <Button btnName="create" handleClick={()=> {}} />
          </div>

              {/* PROFILE */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image 
              src={Images.user1} 
              alt="Profile" 
              width={40} height={40} 
              onClick={()=>openProfile()} 
              className={Style.navbar_container_right_profile}/>
              {profile && <Profile/>}
            </div>
          </div>
          {/* MENU BUTTON FOR MOBILE VIEW */}
            <div className={Style.navbar_container_right_menuBtn} >
                <CgMenuRight className={Style.menuIcon} onClick={()=> openSideBar()}/>
            </div>
        </div>
      </div>

      {/* SIDEBAR COMPONENT */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <Sidebar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
