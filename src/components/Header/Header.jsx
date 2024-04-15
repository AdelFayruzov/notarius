import './Header.scss'
import logoUrl from '../../assets/logo.png'

export const Header = () => {

    return (
        <header className="header">
            <img className="header__logo" alt="Московская городская нотариальная палата" src={logoUrl}/>
            <h1 className="header__title">Московская городская нотариальная палата</h1>
        </header>
    )
}