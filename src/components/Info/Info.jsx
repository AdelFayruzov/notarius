import './Info.scss'
import {InfoCircleFilled} from "@ant-design/icons";
import {Divider} from "../Devider/Devider.jsx";
import {motion} from "framer-motion";

export const Info = () => {

    return (
        <div id="info" className="info">
            <motion.span
                transition={{duration: 2}}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}><InfoCircleFilled/></motion.span>
            <span>СВЕДЕНИЯ О НОТАРИУСЕ</span>
            <motion.div className="info__content" initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}} transition={{duration: 0.5}}>
                <span>Выписка из протокола ГУ Минюста России по г. Москве №3 от 01-03.06.2015</span>
                <Divider/>
                <span>Приказ о наделении полномочиями нотариуса ГУ Минюста России  по г. Москве №721 от 04.12.2018</span>
                <Divider/>
                <span>Номер в реестре нотариусов 77/2149-н/77</span>
            </motion.div>
        </div>
    )
}