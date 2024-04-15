import './Actions.scss'
import {CheckCircleFilled} from "@ant-design/icons";
import {motion} from "framer-motion";

export const Actions = () => {

    return (
        <div id="actions" className="actions">
            <span className="actions__title">
                Мы совершаем все нотариальные действия:
            </span>
            <div className="actions__list">
                <motion.span transition={{duration: 0.1}} initial={{opacity: 0}} whileInView={{opacity: 1}}>
                    <CheckCircleFilled/> НАСЛЕДСТВО
                </motion.span>
                <motion.span transition={{duration: 0.2}} initial={{opacity: 0}} whileInView={{opacity: 1}}>
                    <CheckCircleFilled/> УДОСТОВЕРЕНИЕ ФАКТОВ
                </motion.span>
                <motion.span transition={{duration: 0.3}} initial={{opacity: 0}} whileInView={{opacity: 1}}>
                    <CheckCircleFilled/> ОБЕСПЕЧЕНИЕ ДОКАЗАТЕЛЬСТВ
                </motion.span>
                <motion.span transition={{duration: 0.4}} initial={{opacity: 0}} whileInView={{opacity: 1}}>
                    <CheckCircleFilled/> ПОДЛИННОСТЬ ПОДПИСИ
                </motion.span>
                <motion.span transition={{duration: 0.5}} initial={{opacity: 0}} whileInView={{opacity: 1}}>
                    <CheckCircleFilled/> ДЕПОЗИТ НОТАРИУСА
                </motion.span>
                <motion.span transition={{duration: 0.6}} initial={{opacity: 0}} whileInView={{opacity: 1}}>
                    <CheckCircleFilled/> ОПЦИОН
                </motion.span>
                <motion.span transition={{duration: 0.7}} initial={{opacity: 0}} whileInView={{opacity: 1}}>
                    <CheckCircleFilled/> ПЕРЕДАЧА ЗАЯВЛЕНИЙ В ИФНС
                </motion.span>
                <motion.span transition={{duration: 0.8}} initial={{opacity: 0}} whileInView={{opacity: 1}}>
                    <CheckCircleFilled/> ПЕРЕДАЧА ДОКУМЕНТОВ ДЛЯ РЕГИСТРАЦИИ ПРАВ НА НЕДВИЖИМОЕ ИМУЩЕСТВО
                </motion.span>
                <motion.span transition={{duration: 0.9}} initial={{opacity: 0}} whileInView={{opacity: 1}}>
                    <CheckCircleFilled/> ИНЫЕ НОТАРИАЛЬНЫЕ ДЕЙСТВИЯ (удостоверение органов управления юрлиц,
                    исполнительная надпись, залог движимого имущества, внесение сведения в Федресурс и т.д.)
                </motion.span>
                <motion.span transition={{duration: 1}} initial={{opacity: 0}} whileInView={{opacity: 1}}>
                    <CheckCircleFilled/> КОНСУЛЬТАЦИИ
                </motion.span>
            </div>
        </div>
    )
}