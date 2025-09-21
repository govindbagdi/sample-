import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
function Item()
{
  var location=useLocation()
  console.log(location.state)
    const [apidata,setData]=useState({})
    useEffect(()=>{
         fetch("https://fakestoreapi.com/products/"+location.state).then((result)=>{
             result.json().then((data)=>{
                console.log(data)
                  setData(data)
             })
         })
      },[])
   return(
    <div>
        <h1>Item</h1>
        <center>
            <br></br>
            <MDBCard style={{margin:"100px"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={apidata.image} fluid alt='...'  style={{width:"200px",height:"200px"}}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{fontSize:"40px",color:"red"}}>{apidata.title}</MDBCardTitle>
        <MDBCardTitle style={{fontSize:"25px",color:"blue"}}>{apidata.price*85} Rs</MDBCardTitle>
        <MDBCardTitle style={{fontSize:"25",color:"green"}}>{apidata.category}</MDBCardTitle>
         {/* <MDBCardTitle style={{fontSize:"25",color:"orange"}}>{apidata.rating.rate}</MDBCardTitle>
          <MDBCardTitle style={{fontSize:"25",color:"brown"}}>{apidata.rating.count}</MDBCardTitle> */}
        <MDBCardText>
          {apidata.description}
        </MDBCardText>
        <MDBBtn href='#'>Buy Now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </center>
    </div>
   )
} export default Item;