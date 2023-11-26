import styles from '../styles/Home.module.css'
import Link from 'next/link';
import React, { useState } from "react";

import MainHeader from "./main-header";
import MainFooter from "./main-footer";
import Image from 'next/image';
function Home() {





  return (

    <div className={styles.container}>
      <MainHeader />
      <div className='parent-header'>

        ارائه دهنده بهترین و مرغوب ترین شیرینی ها
        <br>
        </br>
        لطفا برای سفارش شیرینی بر روی دکمه زیر کلیک نمایید
        <div className='first-title'>
          قنادی دلوسه

        </div>




        <Link href={`./products-list`} className='button'>

          سفارش شیرینی
        </Link>

        <Image
          src="/../images/conf21.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className='conf' />


      </div>


      <div className='allflipcards'>
        <p className='title-cards'>
          محصولات ما
        </p>


        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="../images/smill.jpg" className="front-image" alt="Avatar" ></img>
            </div>
            <div className="flip-card-back">
              <h>محصولات سالم و بهداشتی</h>
              <p>چربی با در صد مناسب </p>
              <p>استفاده از مواد تازه و مرغوب </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="../images/s.jpg" className="front-image" alt="Avatar" ></img>
            </div>
            <div className="flip-card-back">
              <h>شیرینی های محبوب جهانی </h>
              <p>اضافه کردن شیرینی های برتراز سراسر دنیا </p>
              <p>آپدیت محصولات به طور سالانه</p>
            </div>
          </div>
        </div>






      </div>







      <div className='parent-recipes'>
        <p className='magazine'>
          مجله دلوسه
        </p>



        <div
          className='right-recipe'>


          <Link href={`/`} className='right-link'>
            <span >
              توضیحات بیشتر
            </span>


          </Link>




          <p className='right-sub-text'>
            تأثیر مضر مواد افزودنی در کیک و شیرینی‌ها بر سلامتی قابل توجه است. بهتر است در این باره بیشتر بدانیم تا علاوه بر حفظ سلامتی خود از مواد غذایی سالم استفاده کنیم
          </p>

          <img src="../images/simple .jpg" className='right-image' alt="Avatar" ></img>




          <p className='right-text'>

            تاثیر مواد افزودنی  بر سلامتی              </p>
        </div>
        <div
          className='right-recipe'>


          <Link href={`/`} className='right-link'>
            <span >
              توضیحات بیشتر
            </span>


          </Link>




          <p className='right-sub-text'>
            در این مقاله طرز تهیه کیک ساده برای کودکان با دستور پخت و مواد لازم به همراه انواع قالب کیک، نوشیدنی های مناسب و تزئین کیک شرح داده شده است
          </p>
          <img src="../images/mah.jpg" className='right-image' alt="Avatar" ></img>

          <p className='right-text'>

            طرز تهیه شیرین گردویی    </p>
        </div>








      </div>

      <MainFooter />


    </div >
  )
}



export default Home;