import React from 'react';
import { Link } from 'react-router-dom';
import './Edit.scss';

function Edit ({updateDate, updateMood, newMood, updateApp}){
  return (
  <div className="edit__page">
    <h1 className="edit__title">
      ¿Cómo te ha ido el día?
    </h1>
    <form className="edit__form">
      <div className="form__date">
        <label 
        htmlFor="date"
        className="form__date--title">
          Fecha
        </label>
        <input  
        className="form__date--input"
        type="date" 
        required
        onChange={updateDate}/>
      </div>
      <div className="form__mood">
        <h2 className="form__mood--title">Estado:</h2>
        <div className="form__mood--content">
          <div className="form__mood--happy">
            <label 
            htmlFor="happy"
            className="happy__title">
              <input 
              className="happy__input"
              type="radio" 
              name="state" 
              defaultValue="happy" 
              onClick={updateMood}
              /> 
              :)
            </label>
          </div>
          <div className="form__mood--sad">
            <label 
            htmlFor="sad"
            className="sad__title">
              <input 
              className="sad__input"
              type="radio" 
              name="state" 
              defaultValue="sad" 
              onClick={updateMood}
              /> 
              :( 
            </label>
          </div>
        </div>
      </div>
      <div className="form__message"> 
        <h2 className="form__message--title">Mensaje:</h2>
        <textarea className="form__message--content"
        name="message" 
        placeholder="¿Por qué es un buen día?"
        disabled = {`${newMood}` === 'happy' ? false : true} />
      </div>
      <div className="edit__buttons">
        <Link
        className="edit__save"
        to="/">
          <input 
          className="edit__save--btn" type="submit" value="guardar"
          onClick={updateApp}/>
        </Link>
        <Link 
        className="edit__cancel"
        to="/">
          <button className="edit__cancel--btn">
            Cancelar
          </button>
        </Link>
      </div>
    </form>
   </div>
  );
}


export default Edit;