import base from '../scss/base.scss';
import Nav from '../components/Nav/Nav';
import CartProducts from '../components/Cart/Cart';
import Footer from '../components/Footer/Footer';

const Cart = () => {
    return(
        <div>
            <Nav />
            <div className={base.container}>
                <CartProducts />
            </div>
            <Footer/>
        </div>
    )
}

export default Cart;