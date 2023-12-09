import { useSelector, useDispatch } from 'react-redux'
import ReactDom from 'react-dom'
import { useEffect } from 'react'
import { onModalOpen } from '../../redux/carsSlice'
import css from './Modal.module.css'
import { getIsModalOpen } from '../../redux/selectors'


const Modal = ({carData}) => {
    const dispatch = useDispatch()
    const isModalOpen = useSelector(getIsModalOpen)
     useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        dispatch(onModalOpen());
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, isModalOpen]);
    

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
        description,
        rentalConditions,
        fuelConsumption,
        engineSize,
        accessories } = carData
     
    const splittedRentalConditions = rentalConditions.split('\n')
    const splittedAge = splittedRentalConditions[0].split(':')
    const splitedAddress = address.split(',')

    return  ReactDom.createPortal(<div className={css.modal_overlay}>
        <div className={css.modal_content}>
            <button className={css.modal_close_btn} onClick={() => dispatch(onModalOpen())} type='button'>X</button>
            <div className={css.modal_image}><img src={img} alt="car" /></div>
            <p className={css.modal_car_title}>{make}<span> {model}</span>, {year}</p>
            <ul className={css.modal_descr_list}>
                <li><p className={css.modal_descr_text}>{splitedAddress[1]}</p></li>
                <li><p className={css.modal_descr_text}>{splitedAddress[2]}</p></li>
                <li><p className={css.modal_descr_text}>{rentalCompany}</p></li>
                <li><p className={css.modal_descr_text}>Type:{type}</p></li>
                <li><p className={css.modal_descr_text}>Fuel Consumption: {fuelConsumption}</p></li>
                <li><p className={css.modal_descr_text}>Engine Size: {engineSize}</p></li>
            </ul>
            <p className={css.modal_car_descr}>{description}</p>
            <div className={css.modal_car_featurs}>
                <p className={css.modal_text_title}>Accessories and functionalities:</p>
                <ul className={css.modal_car_featurs_list}>
                    {[...accessories, ...functionalities]
                        .map(item => {
                            return <li>
                                <p className={css.modal_car_featurs_list_item}>
                                {item}
                                </p>
                                   </li>
                        })}
                </ul>
                <p className={css.modal_text_title}>Rental Conditions:</p>
                <ul className={css.rental_list}>
                    <li>
                    <p className={css.modal_rental_text}>{splittedAge[0]}:
                    <span>{splittedAge[1]}</span>
                </p>
                </li>
                    {splittedRentalConditions[1] && <li>
                        <p className={css.modal_rental_text}>{splittedRentalConditions[1]}
                        </p>
                    </li>}
                    {splittedRentalConditions[2] && <li>
                        <p className={css.modal_rental_text}>{splittedRentalConditions[2]}
                        </p>
                    </li>}
                    <li>
                        <p className={css.modal_rental_text}>Mileage: 
                            <span> {mileage}</span>
                        </p>
                    </li>
                    <li>
                        <p className={css.modal_rental_text}>Price: 
                            <span> {rentalPrice}</span>
                        </p>
                    </li>
                
                </ul>
                <a href="tel:+380730000000" className={css.modal_rent_btn}>Rental Car</a>
            </div>
      </div>
  </div>, document.getElementById('portal'))
}

export default Modal