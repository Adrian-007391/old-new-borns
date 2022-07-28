 import React, {useState} from 'react'
import './Bloqued.css'
 function Bloqued(props){
    return(
       <div className='Bloqued'>
            <h1>
                pagina de bloqueo
            </h1>
           <h2>
               pon tu email para que te lleguen las notificaciones
           </h2>
           <form>
               <input placeholder='email'></input>
               <button type="submit">send mail</button>
           </form>
           <form>
               <div onClick={props.changeacces}>write password</div>
           </form>
       </div>
    )

}
export default Bloqued
