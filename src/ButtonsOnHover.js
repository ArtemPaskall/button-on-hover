import React, { useState }from 'react';
import './Style.scss';

  const  ButtonsOnHover = ({ ...props }) => {
  
    const attributes = props.rootElement.attributes;

    const changedAttribute = attributes['change-attribute'].value;
    const defaultValue = attributes['default'].value;
    const valuesList = attributes['values-per-button'].value.split(',').map(el => el.toUpperCase());

    let valueFromStorage = window.localStorage.getItem(changedAttribute);
    const [selectedValue, setSelectedValue] = useState(valueFromStorage);

    if (!valueFromStorage) {
      setSelectedValue(defaultValue.toUpperCase())
      window.localStorage.setItem(changedAttribute, defaultValue.toUpperCase())
    }

    const path = window.location.href;
    const searchParamsStart = path.split('').indexOf('?');
    const searchParams = path.slice(searchParamsStart);


    
    function changeAttributeValue(value) {
      setSelectedValue(value)
      window.localStorage.setItem(changedAttribute, value)

      
      const valuePosition = searchParams.toLowerCase().indexOf(selectedValue.toLocaleLowerCase());
      const w = searchParams.slice(0, valuePosition)
      console.log(w);
    }


  return (
    <div className='button-hover'>
      <div className='current-value'>
        <span className='current-value-span'>{selectedValue}</span>
      </div>
      <div className='values-list'>
        {valuesList.map(value => 
          <div
            value
            key={value}
            className='values-list-item'
            onClick={() => changeAttributeValue(value)}
          >
            {value}
          </div>
        )}
      </div>
    </div>
  );
  }

export default ButtonsOnHover;
