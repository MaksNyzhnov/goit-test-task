import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState,} from 'react';
import { fetchAdverts } from '../../redux/operations';
import { getAdverts, getIsModalOpen } from '../../redux/selectors';
import AdvertCard from 'components/AdvertCard/AdvertCard';
import Modal from 'components/Modal/Modal';
import css from './Catalog.module.css'


const Catalog = () => {
  const [visible, setVisible] = useState(12)
  const modal = useSelector(getIsModalOpen)
    
    
    
    
    const dispatch = useDispatch();

    const onLoadMore = () => {
    setVisible(prevState => prevState + 12)
  };

    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);
    const adverts = useSelector(getAdverts)
    
    

    return <section className={css.catalog_section}>
        <ul className={css.adverts_list}>
            {adverts.slice(0, visible).map((advert, index) => {
                const {id} = advert
                return <li key={id}><AdvertCard carData={advert}
                     /></li>
            } )}
        </ul>
        {visible <= adverts.length && (
  <button type="button" className={css.loadMore_btn} onClick={onLoadMore}>
    Load more
  </button>
)}
       {modal && <Modal/>}
    </section>
}

export default Catalog