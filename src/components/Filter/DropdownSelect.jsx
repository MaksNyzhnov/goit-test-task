import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { dropdownStyles } from '../../utils/dropdownStyles';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { advertsFilter } from '../../redux/carsSlice';
import { useState } from 'react';
import css from './Filter.module.css'


const animatedComponents = makeAnimated();
const uniqueId = nanoid();

 const DropdownSelect = ({
  width,
  title,
  placeholder,
  options,
  filterType,
}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();
  const indicatorSeparatorStyle = {
    display: 'none',
  };


  const IndicatorSeparator = ({ innerProps }) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };

  const handleDataChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';

    dispatch(advertsFilter({ [filterType]: value }));
    setSelectedValue(value);
  };

  

  return (
    <div className={css.dropdownSelect}>
      <h3 className={css.dropdownSelect_title}>
        {title}
      </h3>
      <Select
        id={uniqueId}
        options={options}
        styles={dropdownStyles}
        value={options.find((option) => option.value === selectedValue)}
        isSearchable={false}
        isMulti={false}
        onChange={handleDataChange}
        components={(animatedComponents, { IndicatorSeparator })}
        placeholder={placeholder}
      />
    </div>
  );
};

export default DropdownSelect