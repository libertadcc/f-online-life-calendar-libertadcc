import React from 'react';
import { Link } from 'react-router-dom';

function Edit({updateMood, updateDate}) {
  return (
  <div className="edit__page">
    <h1 className="edit__title">¿Cómo te ha ido el día?</h1>
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
        <div className="form__mood--happy">
          <label 
          htmlFor="happy"
          className="happy__title">
            <input 
            className="happy__input"
            type="radio" 
            name="state" 
            defaultValue="happy" 
            onClick={updateMood}/> 
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
            onClick={updateMood}/> 
            :( 
          </label>
        </div>
      </div>
      <div className="form__opinion"> 
        <textarea 
        name="opinion" 
        placeholder="¿Por qué es un buen día?"/>
      </div>
      <div className="edit__buttons">
        <Link
        className="edit__save"
        to="/">
          <input type="submit" />
        </Link>
        <Link 
        className="edit__cancel"
        to="/">
          <button>
            Cancelar
          </button>
        </Link>
      </div>
    </form>
   </div>
  );
}

export default Edit;