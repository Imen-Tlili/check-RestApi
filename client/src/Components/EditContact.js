import { useEffect, useState } from "react"
import { Form,Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneContact, updateContact } from "../Redux/Actions/ContactActions"

const EditContact=()=>{
   const {id} = useParams()
   const navigate=useNavigate()
   const contact=useSelector(state=> state.contactReducer.contact)
   const [name,setName]=useState(contact.name)
   const [age,setAge]=useState(contact.age)
   const [email,setEmail]=useState(contact.email)
   const dispatch=useDispatch()
   useEffect(()=>{
       dispatch(getOneContact(id))
   },[])
   
   const handleEdit=()=>{
       dispatch(updateContact(id,{name,age,email}))
       navigate('/contacts')
   }
    return(
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Name</Form.Label>
               <Form.Control value={name}  onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Age</Form.Label>
               <Form.Control value={age} onChange={(e)=> setAge(e.target.value)} type="number" placeholder="Enter age" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control value={email} onChange={(e)=> setEmail(e.target.value)}type="email" placeholder="Enter email" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleEdit}>
               Submit
            </Button>
        </Form>
    </div>
    )
}
export default EditContact