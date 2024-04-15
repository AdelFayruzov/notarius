import './Navbar.scss'
import {BookOutlined, HomeOutlined, MenuOutlined, PhoneOutlined, QuestionCircleOutlined} from "@ant-design/icons";
import {useState} from "react";
import classNames from "classnames";
import logoUrl from '../../assets/logo.png'
import {motion} from "framer-motion";

export const Navbar = () => {

    const [isScrolling, setIsScrolling] = useState(false)

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 212) {
            setIsScrolling(true)
        } else {
            setIsScrolling(false)
        }
    });

    return (
        <motion.nav className={classNames('navbar',
            {'navbar--scroll': isScrolling})}>
            {isScrolling && <motion.img initial={{width: 0}}
                                        whileInView={{width: "initial"}}
                                        transition={{duration: 0.5}}
                                        viewport={{once: true}} alt="logo" src={logoUrl} className="navbar__logo"/>}
            <a href="#preview"><HomeOutlined/> <span>Главная</span></a>
            <a href="#info"><QuestionCircleOutlined/> <span>О нас</span></a>
            <a href="#actions"><MenuOutlined/> <span>Услуги</span></a>
            <a href="#tarifs"><BookOutlined/> <span>Тарифы</span></a>
            <a href="#address"> <PhoneOutlined/> <span>Контакты</span></a>
        </motion.nav>
    )
}