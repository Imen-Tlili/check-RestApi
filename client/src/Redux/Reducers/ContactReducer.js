import { GETCONTACTS, GETONECONTACT } from "../Types/ContactTypes"

const initialState={
      Contacts: [],
      contact:{}
}

const ContactReducer=(state=initialState,action)=>{
switch(action.type){

    case GETCONTACTS: return {...state,Contacts: action.payload.Contacts}
    case GETONECONTACT: return {...state,contact:action.payload.oneContact}
    default: return state

}
}
export default ContactReducer