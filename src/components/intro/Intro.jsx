import "./intro.scss"
import {LinkedIn,GitHub,KeyboardArrowDown} from "@material-ui/icons"


export default function Intro() {
    return (
        <div className="intro" id="intro">
           <div className="left">
                <div className="itemContainer">
                    <a href="https://www.linkedin.com/in/vijay-talviya-8104a4202/"><LinkedIn/></a>
                    
                </div>
                <div className="itemContainer">
                    <a href="https://github.com/vijaytalviya"><GitHub/></a>
                    
                </div>
           </div>
           <div className="right">
                <div className="wrapper">
                    <div className="text">
                        <h2>Hi There, I'm</h2>
                        <h1>Vijay Talviya</h1>
                        <h3>Web Developer</h3>
                    </div>
                    <div className="imgContainer">
                    <img src="" alt=""/>
                    </div>
                </div>
                <div className="scroll">
                    <a href="#portfolio">
                        <KeyboardArrowDown className="icon"/>
                    </a>
                </div>
           </div>
           
            
        </div>
    )
}
