//styles
import style from '../style.module.scss';
//react
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../app/slices/cartSclice';
//svg icons
import like from '../../../assets/img/main/products/icon-like.svg';
import scalec from '../../../assets/img/main/products/icon-scales.svg';

const Products = ({id, imgUrl, desc, reviews, price}) => {
    const dispatch = useDispatch();

    const onClickAdd = () => {
        const obj = {
            id,
            price,
            imgUrl,
            desc,
            reviews,
        };
        dispatch(addItem(obj));
        console.log(obj);
    }

    return(
       <>
            <div className={style.card}>
                <div className={style.cardIconsWrap}>
                    <img src={scalec} alt="scales"/>
                    <img src={like} alt="like"/>
                    </div>
                 <div className={style.cardImg}>
                     <img src={imgUrl} alt="products" width="218px" height="214px"/>
                </div>
                <div className={style.cardDesc}>{desc}</div>
                <div className={style.cardReviews}>Отзывов: {reviews}</div>
                <div className={style.orderWrap}>
                    <div className={style.cardPrice}>{price} грн</div>
                        <button onClick={onClickAdd} className={style.cardBtnOrder}>КУПИТЬ</button>
                    </div>
                </div>
        </>
    )
}

export default Products;