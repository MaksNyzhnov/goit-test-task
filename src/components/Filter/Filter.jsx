import { useDispatch, useSelector } from 'react-redux';
import {getFilter} from '../../redux/selectors'
import options from '../../utils/dropdownOptions';
import DropdownSelect from './DropdownSelect';
import css from './Filter.module.css'
import { fetchFilteredAllCars } from '../../redux/operations';

const Filter = () => {
    const formData = useSelector(getFilter);

  const dispatch = useDispatch();
 

     const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchFilteredAllCars(formData));
  };

    return <div className={css.filter}>
        <form onSubmit={onFormSubmit} className={css.filter_form}>
            <DropdownSelect  width={'w-[224px]'}
            title={'Car Brand'}
            placeholder={'Select a model'}
            options={options}
                filterType={'make'} />
            <button type='submit' className={css.search_btn}>Search</button>
        </form>
    </div>
}

export default Filter