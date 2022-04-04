import { Card,Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteContact } from "../Redux/Actions/ContactActions"

const CardContact=(contact)=>{
    const dispatch= useDispatch()
    return(
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
            <Card.Body>
              <Card.Title>{contact.name}</Card.Title>
             
          <Button variant="primary" onClick={()=>dispatch(deleteContact(contact._id))}>Delete</Button>
          <Link to={`/updateContact/${contact._id}`}><Button variant="primary">Edit</Button></Link>
         </Card.Body>
        </Card>
    </div>
    )
}
export default CardContact