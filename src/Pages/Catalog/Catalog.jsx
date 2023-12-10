import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef} from 'react';
import { fetchAdverts } from '../../redux/operations';
import { getAdverts, getIsModalOpen } from '../../redux/selectors';
import AdvertCard from 'components/AdvertCard/AdvertCard';
import Modal from 'components/Modal/Modal';
import Filter from 'components/Filter/Filter';
import css from './Catalog.module.css'


const Catalog = () => {
  
  const [page, setPage] = useState(1);
  const adverts = useSelector(getAdverts)
  const allAdvertsNumber = adverts.length
  const modal = useSelector(getIsModalOpen)
    
    
    
    const initialized = useRef(false)
    const dispatch = useDispatch();

  const onLoadMore = () => {
      setPage((prevPage) => prevPage + 1);
   
  };
    useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      dispatch(fetchAdverts(page));
    }
    });
  
    useEffect(() => {
    if (page !== 1) dispatch(fetchAdverts(page));
    }, [dispatch, page]);

    
    
    
    

  return <>
    <Filter/>
    <section className={css.catalog_section}>
        <ul className={css.adverts_list}>
            {adverts.map((advert, index) => {
                const {id} = advert
                return <li key={id}><AdvertCard carData={advert}
                     /></li>
            } )}
        </ul>
        {allAdvertsNumber > 0 && allAdvertsNumber < 32  && (
  <button type="button" className={css.loadMore_btn} onClick={onLoadMore}>
    Load more
  </button>
)}
       {modal && <Modal/>}
    </section>
    </>
}

export default Catalog