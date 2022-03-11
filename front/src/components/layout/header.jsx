import {Link} from "react-router-dom"

export default function Header(){
    return (
        <nav className="header-nav">
            <Link to="/">Accueil</Link>
            <Link to="/register">S'enregistrer</Link>
            <Link to="/login">Se connecter</Link>
        </nav>
    )
}