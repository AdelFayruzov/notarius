export const YMap = () => {
    return (
        <div style={{position: 'relative', overflow: 'hidden'}}>
            <a href="https://yandex.ru/maps/org/notarius_g_moskvy_sergeyenkov_a_v_/29438639720/?utm_medium=mapframe&utm_source=maps"
               style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>Нотариус г. Москвы Сергеенков
                А. В.</a>
            <a href="https://yandex.ru/maps/213/moscow/category/notaries/184105624/?utm_medium=mapframe&utm_source=maps"
               style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>Нотариусы в Москве</a>
            <a href="https://yandex.ru/maps/213/moscow/category/legal_services/184105630/?utm_medium=mapframe&utm_source=maps"
               style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '28px'}}>Юридические услуги в
                Москве</a>
            <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.471782%2C55.665196&mode=poi&poi%5Bpoint%5D=37.471618%2C55.665167&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D29438639720&z=20.93"
                width="100%" height="400" frameBorder="1" allowFullScreen={true}
                style={{position: 'relative'}}></iframe>
        </div>

    )
}