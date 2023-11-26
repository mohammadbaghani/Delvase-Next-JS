import path from 'path';
import fs from 'fs/promises';

import { Fragment } from 'react';
import MainHeadercopy from "../main-header";
import c from './event-logistics.module.css';
import Image from 'next/image';
function ProductDetailPage(props) {

    const { loadedProduct } = props;

    if (!loadedProduct) {
        return <p>Loading...</p>
    }

    return (
        <Fragment>

            <div className="body">
                <MainHeadercopy />

                <section className={c.sweets}>





                    <div className={c.sweetschild}>
                    <Image
     
      width={500}
      height={500}
      alt="Picture of the author"
      src={loadedProduct.image} className={c.image}/>
                     



                        <h3 className='sub-titr'>
                            مناسب برای :

                            {loadedProduct.location}</h3>

                        <h3 className='titr'>{loadedProduct.title}</h3>


                        <p className={c.text}>






                            قیمت :

                            {loadedProduct.price}

                            هزار تومان
                            <Image
     
     width={25}
     height={25}
     alt="Picture of the author"
     src="/../images/price.png" />



                    



                        </p>



                        <p className={c.textone} >



                            {loadedProduct.description}

                            <Image
     
     width={25}
     height={25}
     alt="Picture of the author"
     src="/../images/recipe.png" />



                        </p>





                        <p className={c.texttwo}>
                            میزان ماندگاری :


                            {loadedProduct.stay}</p>




                        <p className={c.texthree}>





                            تحویل  :



                            یک روزه

                            <Image
     
     width={25}
     height={25}
     alt="Picture of the author"
     src="/../images/truck1.png" />

                         

                        </p>



                    </div>




                </section>



            </div>
        </Fragment>
    );
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return data;
}

export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;

    const data = await getData();

    const product = data.products.find(product => product.id === productId);

    if (!product) {
        return { notFound: true };
    }

    return {
        props: {
            loadedProduct: product,
        }
    };
}

export async function getStaticPaths() {
    const data = await getData();

    const ids = data.products.map(product => product.id);

    const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

    return {
        paths: pathsWithParams,
        fallback: true
    }
}

export default ProductDetailPage;


