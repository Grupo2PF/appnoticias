import React, {useEffect} from "react";
import { getNotices } from '../redux/actions/index'
import {useDispatch, useSelector} from 'react-redux';

export default function Home() {

    const dispatch = useDispatch();

    const getNoticesAction = useSelector((state) => state.noticias);
    
    useEffect(() => {
        dispatch(getNotices());
        handleRender();
    },[]);

    function handleRender(){
      if (getNoticesAction.length > 0) {
        return( console.log(getNoticesAction))}}


    const handleClick = (e) => {
      e.preventDefault();
      dispatch(getNotices());
    };


  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Get Notices</button>
    </div>
  );
}