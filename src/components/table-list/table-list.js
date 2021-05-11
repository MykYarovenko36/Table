import React, { useEffect, useState } from 'react';

const TableList = ({ tableList, deleteElement, toggleModalForm }) => {
  const [itemsList, setItemsList] = useState([]);
  useEffect(() => {
    setItemsList(tableList);
  }, [tableList]);
  return (
    <>
      {itemsList.map(el => {
        return (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{el.created_by}</p>
            <p>{el.note}</p>
            <p>created at {new Date(+el.date).toLocaleDateString()}</p>
            <button onClick={() => deleteElement(el.id)}>Delete</button>
            <button onClick={() => toggleModalForm(el)}>Edit</button>
            <hr />
          </li>
        )
      })
      }
    </>
  )
};

export default TableList;