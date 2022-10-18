import style from '../style.module.scss'

import { listBenefits } from './listBenefits.js';


const Benefits = () => {
    return(
        <div className={`${style.offerBenefits} ${style.gridItemThree}`}>
            {  
                 listBenefits.map((item, i) => (
                    <img className={style.benefitsImg} src={item.img} alt={item.desc} key={`benefits item ${i}`} />
            ))} 
        </div>
    );
}

export default Benefits;