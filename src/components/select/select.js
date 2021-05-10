import React from 'react';

const Select = ({ select, options, handleSelect }) => {
    const optionElements = options.map((item, index) => {
       return (
        <option key={index} value={item.value}>{item.text}</option>
       )
    })
    return (
        <select value={select.value} onChange={(event) => handleSelect(event.target.value)}>
           {optionElements}
        </select>
    )
};

export default Select;