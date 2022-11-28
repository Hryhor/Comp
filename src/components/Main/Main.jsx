import React from 'react';
import style from './style.module.scss';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//components 
import MenuProducts from './MenuProducts/MenuProducts';
import SimpleSlider from './SimpleSlider/SimpleSlider';
import Benefits from './Benefits/Benefits';
import Products from './Products/Products';
import News from './News/News';
import About from './About/About';

//import products from './products.json';

const Main = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('https://6341eb9d20f1f9d7997bbdc8.mockapi.io/items').then(res => {
            return res.json();
        }).then((arr) => {
            setProducts(arr);
        });
    }, []);

    return(
        <main>
            <div className={style.container}>
                <div className={style.offer}>
                    <MenuProducts/>
                    <div className={`${style.offerCarousel} ${style.gridItemTwo}`}>
                      <SimpleSlider />
                    </div>
                   <Benefits />
                </div>
                <div className={style.products}>
                    <h2 className={style.title}>Топ продаж</h2>
                    <div className={style.cardWrap}>
                        {products.map((item, i) => <Products  key={`products item ${i}`} {...item} />)}
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <News />
            </div>
            <About />
        </main>

    );
}

export default Main;