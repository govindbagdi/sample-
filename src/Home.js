import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  
} from 'mdb-react-ui-kit';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

 function Home()
  {
    const [apidata,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
       fetch("https://fakestoreapi.com/products").then((result)=>{
           result.json().then((data)=>{
                setData(data)
           })
       })
    },[])
    function singleData(pid)
    {
        navigate("/item",{state:pid})
    }
  return (
    <div>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{padding:"10px"} }>
       {
        apidata.map((item,i)=>
       <MDBCol key={i}>
        <MDBCard className='h-100' style={{padding:"10px"}}>
         <center>
             <MDBCardImage
            src={item.image}
            alt='...'
            position='top'
            style={{width:"100px",height:"100px"}}
          />
         </center>
          <MDBCardBody>
            <MDBCardTitle style={{color:"red"}}>{item.title}</MDBCardTitle>
             <MDBCardTitle style={{color:"green"}}>{item.price*85} Rs</MDBCardTitle>
              <MDBCardTitle style={{color:"blue"}}>{item.category}</MDBCardTitle>
            <MDBCardText>
              {item.description.substring(0,100)}
            </MDBCardText>
            <MDBBtn style={{width:"120px",height:"36px"}}  onClick={()=>singleData(item.id)}>View Details</MDBBtn>&nbsp;&nbsp;&nbsp;&nbsp;
            <MDBBtn style={{width:"120px",height:"36px"}}>AddtoCart</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>  
        )
       }
      
    </MDBRow>
    <Footer></Footer>
    </div>
  );
}
export default Home;