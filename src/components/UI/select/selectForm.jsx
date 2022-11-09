import React from 'react';

const SelectForm = ({options, defaultValue, value, onChange}) => {
  return (
    <select 
      onChange={e => onChange(e.target.value)}
      value={value}
    >
        <option disabled value=''>{defaultValue}</option>
        {options.map(option => 
          <option value={option.value} key={option.value}>{option.name}</option>
        )}
    </select>
  );
}

export default SelectForm;
