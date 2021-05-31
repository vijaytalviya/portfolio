import  "./constact.scss"
import {Phone,Email,KeyboardArrowUp,Contacts} from "@material-ui/icons"
import {useState} from "react"

export default function Contact() {
        const [message,setMessage] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className = "contact" id="contact">
        <div className="left">
        <div className="itemContainer">
        <Phone className="icon"/><span>+917970084510</span>
        </div>
        <div className="itemContainer">
        <Email className="icon"/> <span>talviyav@gmail.com</span>
        </div>
        
        </div>
        <div className='right'>
            <div className="itemContainer">
            <Contacts className="icon"/>
            <h2>Contact</h2>
            
            </div>
            
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder = "Email"/>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message &&<sapn>Thanks, I'll soon Respond</sapn>}
            </form>

            <div className="scroll">
            <a href="#intro">
            <KeyboardArrowUp className="icon" style={{color:"#7d2ae8"}}/>
            </a>
            </div>
        </div>
        
            
        </div>
    )
}
