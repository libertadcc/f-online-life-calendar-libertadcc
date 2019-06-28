import React from 'react';
import { Link } from 'react-router-dom';

function Edit() {
  return (
  <div>
    <p>Edit</p>
    <Link to="/">
      <button>
        Guardar
      </button>
    </Link>
    <Link to="/">
      <button>
        Cancelar
      </button>
    </Link>
   </div>
  );
}

export default Edit;