import './Tarifs.scss'
import {Button} from "../Button/Button.jsx";

export const Tarifs = () => {

    return (
        <div id="tarifs" className="tarifs">
            <span>Узнать о тарифах</span>
            <a href="https://www.mgnp.info/tarifs/" target="_blank"><Button>Тарифы</Button></a>
        </div>
    )
}