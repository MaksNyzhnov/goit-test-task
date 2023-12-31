import { onModalOpen, addToFavorites, removeFromFavorites, setCurrentItem } from '../../redux/carsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import css from './AdvertCard.module.css'
import { getFavorites, getAdverts } from '../../redux/selectors'
import noImage from '../../images/nocar.jpg'



const AdvertCard = ({ carData }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch()
    const { img,
        year,
        model,
        make,
        rentalPrice,
        rentalCompany,
        type,
        functionalities,
        mileage,
        address,
        id,
         } = carData 
    const splitedAddress = address.split(',')
    
    
    const adverts = useSelector(getAdverts)
    const favorites = useSelector(getFavorites)
    
   
    const onAddToFavoritesClick = (id) => {
        const currentAdvert = adverts.find((advert) => advert.id === id)
        const isInFavorites = favorites.some((advert) => advert.id === id)
        if (isInFavorites) {
            dispatch(removeFromFavorites(id))
            return
        }
        dispatch(addToFavorites(currentAdvert))
    }

    const onImageError = (e) => {
        e.target.src = noImage;
    }
    const onLearMore = () => {
        dispatch(onModalOpen())
        dispatch(setCurrentItem(carData))
    }
useEffect(() => {
    if (favorites !== null) {
      const advertIsInFavList = favorites.some((advert) => advert.id === id);

      setIsFavorite(advertIsInFavList);
    }
  }, [favorites, id]);
    return <div className={css.card}>
        
        <div className={css.card_image}>
            <button type='button' className={css.favorite_btn} onClick={() => onAddToFavoritesClick(id)}>
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {!isFavorite && <path d="M15.6301 2.45753C15.247 2.07428 14.7922 1.77026 14.2916 1.56284C13.791 1.35542 13.2545 1.24866 12.7126 1.24866C12.1707 1.24866 11.6342 1.35542 11.1336 1.56284C10.633 1.77026 10.1782 2.07428 9.79509 2.45753L9.00009 3.25253L8.20509 2.45753C7.43132 1.68376 6.38186 1.24906 5.28759 1.24906C4.19331 1.24906 3.14386 1.68376 2.37009 2.45753C1.59632 3.2313 1.16162 4.28075 1.16162 5.37503C1.16162 6.4693 1.59632 7.51876 2.37009 8.29253L3.16509 9.08753L9.00009 14.9225L14.8351 9.08753L15.6301 8.29253C16.0133 7.90946 16.3174 7.45464 16.5248 6.95404C16.7322 6.45345 16.839 5.91689 16.839 5.37503C16.839 4.83316 16.7322 4.2966 16.5248 3.79601C16.3174 3.29542 16.0133 2.84059 15.6301 2.45753Z" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>}
                    {isFavorite && <path d="M15.6301 2.45753C15.247 2.07428 14.7922 1.77026 14.2916 1.56284C13.791 1.35542 13.2545 1.24866 12.7126 1.24866C12.1707 1.24866 11.6342 1.35542 11.1336 1.56284C10.633 1.77026 10.1782 2.07428 9.79509 2.45753L9.00009 3.25253L8.20509 2.45753C7.43132 1.68376 6.38186 1.24906 5.28759 1.24906C4.19331 1.24906 3.14386 1.68376 2.37009 2.45753C1.59632 3.2313 1.16162 4.28075 1.16162 5.37503C1.16162 6.4693 1.59632 7.51876 2.37009 8.29253L3.16509 9.08753L9.00009 14.9225L14.8351 9.08753L15.6301 8.29253C16.0133 7.90946 16.3174 7.45464 16.5248 6.95404C16.7322 6.45345 16.839 5.91689 16.839 5.37503C16.839 4.83316 16.7322 4.2966 16.5248 3.79601C16.3174 3.29542 16.0133 2.84059 15.6301 2.45753Z" fill="#3470FF" stroke="#3470FF" stroke-linecap="round" stroke-linejoin="round"/>
}
                </svg>
            </button>
            <img src={img} alt={model}  onError={onImageError} loading='lazy' />
        </div>
        <div className={css.card_headline}><p>{make}<span> {model}</span>, {year}</p><p>{rentalPrice}</p></div>
        <div className={css.card_car_descr}>
            <ul className={css.car_descr_list}>
                <li><p className={css.car_descr_text}>{splitedAddress[1]}</p></li>
                <li><p className={css.car_descr_text}>{splitedAddress[2]}</p></li>
                <li><p className={css.car_descr_text}>{rentalCompany}</p></li>
                <li><p className={css.car_descr_text}>{type}</p></li>
                <li><p className={css.car_descr_text}>{model && make}</p></li>
                <li><p className={css.car_descr_text}>{mileage}</p></li>
                <li><p className={css.car_descr_text}>{functionalities[0]}</p></li>
            </ul>
      </div>
        <button type='button' className={css.card_btn} onClick={onLearMore}>Learn more</button>
        
    </div>
}

export default AdvertCard