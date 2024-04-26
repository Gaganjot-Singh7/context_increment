
import { valueContext } from './context/Context.jsx'

function Count() {

 const value=valueContext();

  return (
   <>
   <h1>Count:{value.count}</h1>
   <button className="bg-gray-300 rounded px-3" onClick={()=>{value.setCount(value.count + 1)}}>Increment</button>
   <button className="bg-gray-100 rounded px-3" onClick={()=>{value.setCount(value.count -1)}}>Decrement</button>
   </>
  )
}

export default Count