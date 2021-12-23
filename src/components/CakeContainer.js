import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import buyCake from "../redux/cake/cakeAction";

function CakeContainer() {

 const numOfCakes = useSelector(state => state.cake.numOfCakes)  
 const dispatch = useDispatch()
  return (
    <div>
      <h2>Number Of Cakes:{numOfCakes}</h2>
      <button onClick={()=> dispatch(buyCake())}>Buy Cakes</button>
    </div> 
  );
}

export default CakeContainer;
