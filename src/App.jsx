
import { useState } from "react";



const App = () => {

  const [contador, setContador] = useState(0);

  

  return (
    <>
    
       <div className="container">
        <h3>OPERACIONES EN REACT</h3>
        <div className="row">
          <div className="col-9">

            <button 
              className="btn btn-warning m-2"
              onClick={ ()  =>  setContador( (contador) => contador + 1)}
            >
              SUMAR</button>


            <button className="btn btn-danger">RESETEAR</button>
            <button className="btn btn-success m-2">RESTA</button>

          </div>
          <div className="col-3">
            <h1>{state}</h1>

          </div>
        </div>
       </div>
    </>
  )
}

export default App;