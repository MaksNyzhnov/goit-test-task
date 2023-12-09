import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdverts } from '../../redux/operations';
import { getAdverts } from '../../redux/selectors';
import AdvertCard from 'components/AdvertCard/AdvertCard';
import css from './Catalog.module.css'
const Catalog = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);
    const adverts = useSelector(getAdverts)
    console.log(adverts)
    return <section className={css.catalog_section}>
        <ul className={css.adverts_list}>
            {adverts.map(({img, year, model, make, rentalPrice, rentalCompany, type, functionalities, mileage, address, id }) => {
                return <li key={id}><AdvertCard
                    img={img}
                    year={year}
                    model={model}
                    make={make}
                    rentalPrice={rentalPrice}
                    rentalCompany={rentalCompany}
                    type={type}
                    functionalities={functionalities}
                    mileage={mileage}
                    address={address} /></li>
            } )}
        </ul>
    </section>
}

export default Catalog