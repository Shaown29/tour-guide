import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const {user} = useAuth();
    const [order,setOrder]=useState([]);
    console.log('my order');

    // useEffect(()=>{
    //      fetch(`http://localhost:5000/order`)
    //     //  fetch(`http://localhost:5000/order/617e987827622f44619104f1`)
    //     .then(res=>res.json())
    //     .then(data=>setOrder(data))
    // },[orderId])
    

        useEffect(()=>{
            fetch('http://localhost:5000/single-order',{
            method:'Post',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({email:user.email})
        })
            .then(res=>res.json())
            .then(data=>setOrder(data))
        
        },[])

    return (
        <div>
            <h2>{order.name}</h2>
            <h3>{order.address}</h3>
            <h3>{order.phone}</h3>
            
        </div>
    );
};

export default MyOrder;