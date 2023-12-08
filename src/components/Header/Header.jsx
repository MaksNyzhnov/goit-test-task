import { Link } from 'react-router-dom'
import css from './Header.module.css'
const Header = () => {

    return <header className={css.header}>
        <nav>
            <ul className={css.nav_list}>
                <li><Link to='/' className={css.nav_link}>Home</Link></li>
                <li><Link to="/catalog" className={css.nav_link}>Catalog</Link></li>
                <li><Link to="/favorites" className={css.nav_link}>Favorites</Link></li>
            </ul>
            
        </nav>
    </header>
}

export default Header