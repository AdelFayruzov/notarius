import {Header} from "./components/Header/Header.jsx";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Preview} from "./components/Preview/Preview.jsx";
import {Info} from "./components/Info/Info.jsx";
import {Actions} from "./components/Actions/Actions.jsx";
import {Tarifs} from "./components/Tarifs/Tarifs.jsx";
import {Address} from "./components/Address/Address.jsx";
import {YMap} from "./components/Map/Map.jsx";
import Preloader from "./components/Preloader/Preloader.jsx";

function App() {

    return (
        <Preloader>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Preview/>
                <Info/>
                <Actions/>
                <Tarifs/>
                <Address/>
                <YMap/>
            </div>
        </Preloader>
    )
}

export default App
