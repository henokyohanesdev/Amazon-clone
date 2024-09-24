import React from 'react'
import { RingLoader } from "react-spinners";

export default function Loader() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"30vw"}}>
      <RingLoader color='#F3A847'/>
    </div>
  );
}
