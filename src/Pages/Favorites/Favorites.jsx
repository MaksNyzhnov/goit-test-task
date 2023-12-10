import AdvertCard from "components/AdvertCard/AdvertCard"
import { Link } from "react-router-dom";
import { useState } from "react"
import { useSelector } from "react-redux"
import { getFavorites, getIsModalOpen } from '../../redux/selectors';
import css from '../Catalog/Catalog.module.css'
import Modal from "components/Modal/Modal";
const Favorites = () => {
    const [visible, setVisible] = useState(12)
    const adverts = useSelector(getFavorites)
    const modal = useSelector(getIsModalOpen)

    const onLoadMore = () => {
    setVisible(prevState => prevState + 12)
    };
    
    return <section className={css.catalog_section}>
        <ul className={css.adverts_list}>
            {adverts.slice(0, visible).map((car, index) => {
                const {id} = car
                return <li key={id}>
                    <AdvertCard carData={car}/>
                </li>
            } )}
        </ul>
        {adverts.length === 0 &&
            <div className={css.empty_list_block}>
            <p>Looks like you haven't added anything to your favorites yet</p>
            <Link to="/catalog">Go to catalog</Link>
        </div>}
        {visible <= adverts.length && (
  <button type="button" className={css.loadMore_btn} onClick={onLoadMore}>
    Load more
  </button>
)}
       {modal && <Modal/>}
    </section>

}

export default Favorites