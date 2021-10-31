import React, { useEffect, useState } from 'react';

const ManageAllOrder = () => {
    const [orders,setOrders]=useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/order')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])

    const handleDelete=id=>{
        const url=`http://localhost:5000/order/${id}`;
        fetch(url,{
            method:'Delete'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deleted){
                alert('Are you sure you want to delete?')
                const remaining=orders.filter(order=>order._id !==id)
            setOrders(remaining)
            }
            
        })
    }
    return (
        <div>
            <h2>Manage all data</h2>
            {
                orders.map(order=><div key={order._id}>
                    <h2>{order.name}</h2>
                    <button onClick={()=>handleDelete(order._id)}>Delete</button>
                     </div>)
            }

        </div>
    );
};

export default ManageAllOrder;