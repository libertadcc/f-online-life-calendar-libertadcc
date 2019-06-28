import React from 'react';
import { Link } from 'react-router-dom';

function Edit({updateMood, updateDate}) {
  return (
  <div>
    <React.Fragment>
    <p>Edit</p>
      <form>
        <div>
          <label htmlFor="date">
            Fecha
          </label>
          <input 
          type="date" 
          required
          onChange={updateDate}/>
        </div>
        <div>
          <div>
            <label htmlFor="happy">
              <input 
              type="radio" 
              name="state" 
              defaultValue="happy" 
              onClick={updateMood}/> 
              :)
            </label>
          </div>
          <div>
            <label htmlFor="sad">
              <input 
              type="radio" 
              name="state" 
              defaultValue="sad" 
              onClick={updateMood}/> 
              :( 
            </label>
          </div>
        </div>
        <div>
          <textarea 
          name="opinion" 
          placeholder="¿Por qué es un buen día?"/>
        </div>
        <div>
          <Link to="/">
            <input type="submit" />
          </Link>
          <Link to="/">
            <button>
              Cancelar
            </button>
          </Link>
        </div>
      </form>
    </React.Fragment>
   </div>
  );
}

export default Edit;