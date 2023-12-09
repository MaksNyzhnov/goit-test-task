import { useDispatch, useSelector } from 'react-redux';
import { useEffect,} from 'react';
import { fetchAdverts } from '../../redux/operations';
import { getAdverts } from '../../redux/selectors';
import AdvertCard from 'components/AdvertCard/AdvertCard';
import { getIsModalOpen } from '../../redux/selectors';
import css from './Catalog.module.css'


const Catalog = () => {
    const modal = useSelector(getIsModalOpen)
    console.log(modal)
    
    
    const dispatch = useDispatch();

    const onLoadMore = () => {

  };

    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);
    const adverts = useSelector(getAdverts)
    
    

    return <section className={css.catalog_section}>
        <ul className={css.adverts_list}>
            {adverts.map((car, index) => {
                const {id} = car
                return <li key={id}><AdvertCard carData={car}
                     /></li>
            } )}
        </ul>
        <button type='button' onClick={onLoadMore} className={css.loadMore_btn} >Load More</button>
       
    </section>
}

export default Catalog