import React from "react"
import { useSelector } from "react-redux"
import { useNavigate ,NavLink } from "react-router-dom"

function Student()
{
    const Storedata = useSelector((state)=>state.Student_data)
    console.log(Storedata)
    const navigate = useNavigate()
    return(
        <>
            <section className='student'>
            <h1 className='studenthead'>Student Details</h1>
            <button onClick={()=>navigate("/NewStudent") }  className='addnewstudent'>Add New Student</button>
            </section>
            
            {
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Batch</th>
                        <th>Course</th>
                        <th>Change</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                        {Storedata.map((element,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{element.name}</td>
                                    <td>{element.age}</td>
                                    <td>{element.course}</td>
                                    <td>{element.batch}</td>
                                    <td><NavLink to="/EditStudent" state={{index}}>Edit</NavLink></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
        </>
    )
}
export default Student