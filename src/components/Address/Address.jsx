import './Address.scss'
import {ClockCircleOutlined, GlobalOutlined, PhoneOutlined} from "@ant-design/icons";


export const Address = () => {

    return (
        <div id="address" className="address">
            <div className="address__container">
                <span><GlobalOutlined/> <strong>Адрес:</strong></span>
                <a href="https://yandex.ru/maps/-/CDRtqM4N" target="_blank" rel="noopener noreferrer">ул. Покрышкина,
                    дом 8,
                    корпус 3, этаж 2, Москва, 119602</a>
                <span> <PhoneOutlined/> <strong>Контакты:</strong></span>
                <a href="tel:+7 (495) 198-13-01"> <strong>Телефон:</strong> +7 (495) 198-13-01</a>
                <a href={"tel:+7 916 322-45-35"}> <strong>WhatsApp</strong> / <strong>Telegram</strong> +7 916
                    322-45-35</a>
                <a href={"mailto:notkontora18@yandex.ru"}> <strong>Email:</strong> notkontora18@yandex.ru</a>
            </div>
            <div className="address__time">
                <span><ClockCircleOutlined/> <strong>Время работы:</strong></span>
                <span>Понедельник 10:00 – 13:00 14:00 – 18:30</span>
                <span>Вторник 10:00 – 13:00 14:00 – 18:30</span>
                <span>Среда 10:00 – 13:00 14:00 – 18:30</span>
                <span>Четверг 10:00 – 13:00 14:00 – 18:30</span>
                <span>Пятница 10:00 – 13:00 14:00 – 17:30</span>
                <span>Суббота Выходной</span>
                <span>Воскресенье Выходной</span>
            </div>
        </div>
    )
}