
import path from 'path';
import fs from 'fs/promises';
import classes from '../../styles/event-item.module.css';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import MainHeadercopy from "../main-header";
import React, { useEffect, useState } from "react";

import db from "../../data/dummy-backend";

function Home(props) {

  const { products } = props;

  const [search, setSearch] = useState("");
  const [homes, setHomes] = useState([...db.products]);

  useEffect(() => {

    const seareched = db.products.filter((home) => home.title.startsWith(search));
    setHomes(seareched);
  }, [search]);


  function price() {

    const price = db.products.sort((b, a) => a.price - b.price);



    setHomes(price);


  }

  function deserts() {

    const newst = db.products.filter(a => a.kind === "desert");

    setHomes(newst)


  }

  function newst() {

    const sweet = db.products.filter(a => a.kind === "sweet");

    setHomes(sweet)


  }


  function name() {

    const name = db.products.filter(a => a.kind === "cake");

    setHomes(name);



  }



  function all() {



    setHomes([...db.products])


  }




  return (

    <div className={styles.container}>





      <MainHeadercopy />





      <Head>
        <title>
          سفارش آنلاین
        </title>

      </Head>


      <div className="filter-container">


        <p className="filter-title">




          منوی کیک ها و شیرینی های ما !
        </p>
        <div className="filtering">
          <a onClick={() => all()} >

            همه

          </a>
        </div>
        <div className="filtering">
          <a onClick={() => newst()} >

            شیرینی ها
          </a>
        </div>



        <div className="filtering">
          <a onClick={() => deserts()} >
            دسر ها

          </a>
        </div>


        <div className="filtering">
          <a onClick={() => name()} >
            کیک ها

          </a>
        </div>
        <div className="filtering price-filter">
          <a onClick={() => price()} >
            فیلتر بر اساس
            قیمت



          </a>
        </div>
        <div className="filtering search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجو کنید"
          />
        </div>
      </div>

      <ul className={classes.list}>

        {homes.map((product) => (
          <li key={product.id} className={classes.item}>

            <div className={classes.content}>






              {product.title}



              <div className={classes.date}>


                <h1>



                  قیمت :
                  {product.price}

                  هزار

                  تومان
                </h1>




                <Image
                  src={product.image}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className='image-hover' />



                <Link href={`/products/${product.id}`}>
                  <span className={classes.details}>
                    مشاهده جزئیات
                  </span></Link>

              </div>



            </div>
          </li>

        ))}







      </ul>
    </div >
  )
}

export async function getStaticProps() {

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');

  const jsonData = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }

  if (data.products.length === 0) {
    return { notFound: true }
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default Home;