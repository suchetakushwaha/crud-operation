import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EditUser from './Layout/EditUser';


function Home() {

  //  const data =[
    
  //   {
  //   name: "sucheta",
  //   email:"suchetakushwaha96@gmail.com",
  //  },
    
  //   {
  //   name: "sucheta",
  //   email:"suchetakushwaha96@gmail.com"
  //   },

      
  //   {
  //     name: "sucheta",
  //     email:"suchetakushwaha96@gmail.com"
  //     },
    
  //     {
  //       name: "sucheta",
  //       email:"suchetakushwaha96@gmail.com"
  //       },
    

  // ]

  const [data,setData] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(()=>{

     const items = JSON.parse(localStorage.getItem('items'));
     if(items){
      setData(items)
     }

  },[refresh])

  const handleDelete = (outinex)=>{

    const _data = data.filter((usedata, internalIndex)=>{

        if(internalIndex !== outinex)
        {
          return usedata
        }
      


    })
   setData(_data)
   localStorage.setItem('items',JSON.stringify(_data))
    
   console.log("data deleted")

  }



console.log(data);
  return (
    <div className='container mt-3'>
      <h2>Display user Information</h2>

      <table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>


<tbody>
  {

    data.map((items,index)=>{

return (

  <tr key={index}>
    <th scope ="row">{index+1}</th>
    <td>{items.name}</td>
    <td>{items.email}</td>
    <td>
   <EditUser refresh = {refresh}  setRefresh = {setRefresh} index = {index} data ={data}/>
 <Link className='btn btn-danger' style={{marginLeft:"9px"}} onClick={()=>handleDelete(index)}>Delete</Link>
  
    </td>
    
  </tr>
)

    } )
  }
  
</tbody> 


</table>
     
    </div>
  )
}

export default Home
