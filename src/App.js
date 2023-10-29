
import { useState } from 'react';
import './App.css';
function Ceel({filled,onClick,isDisabled}){
  return (
  <button
  type='button'
  className={filled?"cell-activated":"cell"}
  onClick={onClick}
  disabled={isDisabled}
  />
  )
}
function App() {
  const [order,setOrder]=useState([]);
  const [isDeactivting,setIsDeactivating]=useState(false);
    const config=[
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]
  const deactivatedcell=()=>{
    setIsDeactivating(true);
    const timer=setInterval(()=>{
      setOrder((origOrder)=>{
        const newOrder=origOrder.slice();
        newOrder.pop();
        if(newOrder.length===0){
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      })
    },300);
  };
  const activateCell=(index)=>{
    // if(order.includes(index)){
    //   console.log("included");
    //   return;
    // }
    const neworder=[...order,index];
    setOrder(neworder);
    console.log(neworder);
    if(neworder.length===config.flat(1).filter(Boolean).length){
      deactivatedcell();
    } 
      
  };
  return (
    <div className='wrapper'>
      <div className="grid"
      style={{gridTemplateColumns:`repeat(${config[0].length},1fr)`}}
      >
      {config.flat(1).map((element,index)=>(
       element?<Ceel 
       key={index}
       filled={order.includes(index)}
       onClick={(e)=>activateCell(index)}
       isDisabled={order.includes(index)||isDeactivting}
       />:<span></span>
      ))}
        </div>
    </div>
  );
}

export default App;
