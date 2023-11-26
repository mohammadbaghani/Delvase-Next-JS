import Link from 'next/link';

import classes from './main-header.module.css';

function MainHeader() {
    return (


        <>
            <header>





                < div className='parent-nav'>
                    <div className='child-nav'>


                        <div className='ghandi'>
                            قنادی دلوسه

                        </div>

                        <div className='left'>
                            Delvaseh Confectionery

                        </div>




                        <Link href={`../Callus`} className='link-top'>

                            تماس با ما
                        </Link>

                        <Link href={`../About`} className='link-top'>

                            درباره ما
                        </Link>

                        <Link href={`../products-list`} className='link-top'>

                            سفارش آنلاین
                        </Link>     <Link href={`../firstpage`} className='link-top'>



خانه
                        </Link>
                    </div>

                </div>





            </header>

        </>

    )
}

export default MainHeader;