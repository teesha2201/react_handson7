import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudent } from "../Slice/SliceCompo";
function NewStudent()
{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [info ,setInfo] = useState(
        {
            name:'',
            age:'',
            course:'',
            batch:''
        }
    )
    const handleChange = (e)=>{
       setInfo({...info , [e.target.name]:e.target.value})
    }
    const handleUpdate = ()=>{
        dispatch(addStudent(info))
        console.log(info)
        navigate('/Student')
    }

    return(
        <>
            <h1>NewStudent</h1>

            <form onSubmit={handleUpdate} className='forrmaddnewstudent' >
                <label  htmlFor="name" className='name'>Name</label>
                    <input  type="text" id="name" name="name" placeholder="Enter Name"  className='nameadd' required onChange={handleChange}/>
                    <br></br>
                <label  htmlFor="age" className='age'>Age</label>
                    <input  type="number" id="age" name="age" placeholder="Enter Age" className='ageadd' required  onChange={handleChange}/> 
                    <br></br> 
                <label htmlFor="course"  className='course'>Course</label> 
                    <input type="text" id="course" name="course"  placeholder="Enter Course"  className='courseadd' required onChange={handleChange}/>
                    <br></br> 
                <label htmlfor="batch" className='batch'>Batch</label> 
                    <input type="text" id="batch" name="batch" placeholder="Enter Batch"  className='batchadd' required onChange={handleChange}/>      
                    <br></br>
                <button type="submit" className='updatelist'>Added</button>
                <button onClick={()=>navigate("/Student")} className='cancle'>Cancle</button>
                <h1 className='addtext'>Add New Student</h1>
            </form>
        </>
    )
}
export default NewStudent