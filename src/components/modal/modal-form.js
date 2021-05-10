import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
//import TableService from '../../services';
import s from './modal-form.module.css';

const ModalForm = ({ isOpen, toggleModalForm, item = {} }) => {
  //const service = new TableService();
  const refCreatedBy = useRef();
  const refTitle = useRef();
  const refNote = useRef();

  const [createdBy, setCreatedBy] = useState('');
  //const [updatedBy, setUpdatedBy] = useState('');
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const initForm = (el) => {
    return el.hasOwnProperty('id')? (
      setCreatedBy(el.createdBy),
      setTitle(el.title),
      setNote(el.note)
    ) : null;
  };
  
  useEffect(() => {
    initForm(item);
  }, [isOpen, item]);

  const closeModal = () => {
    toggleModalForm();
  };
  
  const handleChange = (event) => {
    switch (event.target.name) {
        case 'createdBy': 
            setCreatedBy(event.target.value);
            break;
        case 'title':
            setTitle(event.target.value);
            break;
        case 'note':
            setNote(event.target.value);
            break;
        default: 
            break;
     };
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

   return (
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    ariaHideApp={false}
  >
      <div className={s.content}>
          <button onClick={closeModal}>close</button>
          <form className={s.content} onSubmit={handleSubmit}>
              <label>
                  Name:
                  <input 
                      ref={refCreatedBy} 
                      name={'createdBy'}
                      placeholder={'enter your name'}
                      onChange={handleChange}
                      value={createdBy}
                      />
              </label>
              <label>
                  Title:
                  <textarea 
                      ref={refTitle} 
                      rows={'4'}
                      name={'title'} 
                      placeholder={'write title here'}
                      onChange={handleChange}
                      value={title}/>
              </label>
              <label>
                  Note:
                  <textarea 
                      ref={refNote} 
                      rows={'10'} 
                      name={'note'} 
                      placeholder={'write your notes here'} 
                      onChange={handleChange}
                      value={note}/>
              </label>
              <input type="submit" value="send" />
          </form>
      </div>
  </Modal>
   )
};

export default ModalForm;