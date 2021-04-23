import React,{useState} from 'react'

 const TestComponent =()=> {
    const [show, setShow] = useState(true);
    const [count,setCount] =useState(0);
    const handleClick=()=>{
        setShow(!show);
    }
    const onCount =()=>{
        setCount(count+1)
    }
    return (
        <div>
           <button className='click' onClick={handleClick}></button>
           <h1 className='hh'>hi</h1>
           <h1 className='hhh'>kk</h1>
           {show &&
           <div>hello</div>  }
           <span>{count}</span>
           <button className='count' onClick={onCount}>count</button>
        </div>
    )
}
export default TestComponent;