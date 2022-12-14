import style from './style.module.scss';

const About = () => {
    return(
        <div className={style.about}>
            <div className={style.aboutContainer}>
                <h2>Магазин компьтерной техники и Аксессуар v-comp.com.ua</h2>
                <div className={style.aboutText} >
                    <p>
                        Интернет-магазин v-comp.com.ua – всеукраинский магазин компьютерной техники и комплектующих, в котором без труда Вы сможете найти подходящий Вам компьютер с минимальной стоимостью. 
                    </p>
                    <p>
                         Посетив наш интернет-магазин, Вы сможете приобрести компьютеры и комплектующие, которые есть у нас в наличии или осуществить их заказ.
                    </p> 
                    <p>
                        И в кротчайшие сроки Мы доставим товар приглянувшийся Вам.
                    </p>
                    <p>
                        В базе электронного магазина v-comp.com.ua представлены тысячи актуальных товаров компьютерной техники: ноутбуки, мониторы, мыши, клавиатуры, материнские платы, процессоры; для работы с интернетом: сервера, модемы, роутеры, свич-кабеля, обжимные; для игр, отдыха и развлечений: суперовые gamebox сборки, game игровые видеокарты; для компании, офиса - офисные сборки. 
                    </p>
                    <p>
                        Мы подберем под Вас удобные недорогие компьютеры по Вашим целям и сделаем хорошие скидки, при оформлении покупки большого количества компьютеров.
                    </p>
                    <p>
                        Ваша модель компьютера устарела, мы поможем модернизировать устаревшее оборудование. Подберем для Вас наилучшие компьютерные комплектующие по низким ценам. Наша команда Интернет-магазина v-comp.com.ua соберет для Вас любую сборку по Вашим потребностям, а случае, если Ваш компьютер, ноутбук, материнская плата, принтер, сканер, копир, МФУ или другие составные части вышли из строя, поломались. 
                        Не беда! Мы выявим проблему, починим, произведем ремонт или заменим деталь, оборудование на новое. И все это в одном месте, не нужно обходить большое количество магазинов, сервисных центров, ждать по две, три недели. 
                    </p>
                    <p>
                        Компьютерный Интернет-магазин v-comp.com.ua
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;