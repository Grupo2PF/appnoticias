import React, {useEffect} from "react";
import { getNotices } from '../redux/actions/index'
import {useDispatch, useSelector} from 'react-redux';

export default function Home() {

    const dispatch = useDispatch();

    const getNoticesAction = useSelector((state) => state.noticias);
    

    const handleClick = (e) => {
      e.preventDefault();
      dispatch(getNotices());
      // console.log(getNoticesAction);  
    };


  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Get Notices</button>
      <li>
        {getNoticesAction?.map((data) => <li><a href={data.url}>{data.title}</a></li>)}
      </li>
    </div>
  );
}