import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import icecreamAction from '../redux/icecream/icecreamAction';

function IceCreamContainer() {

  const numOfIceCream = useSelector(state => state.icecream.numOfIceCream)
  const  dispatch = useDispatch()

    return (  
     <div>
         <h2>Number Of Ice Creams:{numOfIceCream}</h2>
         <button onClick = { ()=> dispatch(icecreamAction())}>Buy IceCream</button>
     </div>

    );
}

export default IceCreamContainer;