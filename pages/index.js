import styles from '../styles/Home.module.css'
import MainHeader from "./main-header";
import MainFooter from "./main-footer";
import DD from "./firstpage";
import Main from "./Main";
import React from "react";
import dynamic from "next/dynamic";

import NoSSR from 'react-no-ssr';
import Image from 'next/image'

function Home() {






  return (

    <div className={styles.container}>
      <MainHeader /> <NoSSR />
      <DD />

    </div >
  )
}



export default Home;