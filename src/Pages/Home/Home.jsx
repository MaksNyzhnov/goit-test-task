import { Link } from 'react-router-dom'
import css from './Home.module.css'
const Home = () => {
    return  <section className={css.home_section}>
      
        <h1 className={css.page_title}>Drive the Experience, Explore the Journey.</h1>
        <p className={css.page_descr}>
                Welcome to our premier car rental service, where every journey becomes an adventure.
                Discover the freedom of the open road with our diverse fleet of vehicles, designed
                to cater to your every travel need. Whether it's a sleek sedan for a business trip
                or a spacious SUV for a family vacation, our range of cars ensures you have the
                perfect companion for the road ahead. Experience seamless booking, competitive prices,
                and the assurance of a reliable ride. Your next unforgettable journey starts here.
                Drive with us, and let the adventure unfold.
        </p>
        <Link to="/catalog" className={css.nav_link}>Our Cars</Link>
      
    </section>
}
export default Home