import './index.css';
import React,{UseState, UseEffect, useState, useEffect} from 'react';
const App=()=>{
  const [fake,setFake]= useState([])
  console.log(fake)
  useEffect(()=>{
    fixstore();
  },[])
  const fixstore=async()=>{
    const response= await fetch("https://fakestoreapi.com/products");
    // console.log(response)
    const jsonData=await response.json();
    // console.log(jsonData);
    setFake(jsonData)
  }

  return (

    <div className="container">
        <h1>Wellcome to Fake Store</h1>
        {fake.map((values)=>{
          return(
            <>
          <div className="box">
              <div className="contante">
                  <h1>{values.title}</h1>
                  <p>{values.description}</p>
                  <img src={values.image} alt="" />
              </div>
          </div>
            </>
          );
        })}
      </div>

  )

}

export default App;
