import videoUrl from "../../assets/moscow.mp4";
import MoscowLogo from "../../assets/moscow-gerb.svg?react";
import './Preview.scss'
import {Button} from "../Button/Button.jsx";
import {motion} from "framer-motion";

export const Preview = () => {
    return (
        <div id="preview" className="preview">
            <video muted autoPlay loop>
                <source src={videoUrl} type="video/mp4"/>
            </video>
            <motion.div className="preview__text" initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}} transition={{duration: 2}}>
                <MoscowLogo/>
                <span className="preview__text__title">Нотариус города Москвы</span>
                <span className="preview__text__name">Сергеенков Александр Владимирович</span>
                <a href='#address'><Button>Обратиться</Button></a>
            </motion.div>
        </div>
    )
}