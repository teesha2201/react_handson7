import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useLocation ,useNavigate } from "react-router-dom";
import { editStudent } from "../Slice/SliceCompo";
function EditStudent()
{
    const indexGet = useLocation().state.index
    console.log(indexGet)
    
     const  select = useSelector((state)=>state.Student_data)
     console.log(select)
     const navigate = useNavigate()

     const dispatch = useDispatch();
     const [info, setInfo] =useState({
        name:select[indexGet].name,
        age:select[indexGet].age,
        course:select[indexGet].course,
        batch:select[indexGet].batch
     })
        const handleChange = (e)=>{
            setInfo({...info,[e.target.name] : e.target.value})
            // console.log(info.name)s
        }
        const handleUpdate = ()=>{
            dispatch(editStudent({info , indexGet}))
            navigate("/Student")
            console.log(info)

        }

    return(
        <>
            {/* <h1>EditStudent</h1> */}

            <form onSubmit={handleUpdate} className='forrmaddnewstudent'>
                <label  htmlFor="name" className='name'>Name</label>
                    <input  type="text" id="name" name="name" className='nameadd' onChange={handleChange}/>
                    <br></br>
                <label  htmlFor="age"  className='age' >Age</label>
                    <input  type="number" id="age" name="age"   className='ageadd' onChange={handleChange}/> 
                    <br></br> 
                <label htmlFor="course" className='course'>Course</label> 
                    <input type="text" id="course" name="course" className='courseadd' onChange={handleChange}/>
                    <br></br> 
                <label htmlFor="batch"  className='batch'>Batch</label> 
                    <input type="text" id="batch" name="batch" className='batchadd' onChange={handleChange}/>      
                    <br></br>
                <button type="submit" className='updatelist'>Update</button>
                <button onClick={()=>navigate("/Student")} className='cancle'>Cancle</button>
                <h1 className='addtext'>Edit Existing  Student Details</h1> 
            </form >
        </>
    )
}
export default EditStudent