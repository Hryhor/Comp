import '../scss/reset.scss';
import '../scss/base.scss';

import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return(
        <div>  
            <Nav />
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default Home;