import "./topbar.scss"
export default function Topbar({ menuOpen, setMenuOpen}) {
    return (

        <div className={"topbar "+ (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                <a href="#intro" className="logo">VIJAY</a>
                
                </div>
                
                <div className="right">
                    
                    <a href="#intro">Home</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#skills">Skills</a>
                    <a href="#works">Works</a>
                    <a href="#contact">Contact</a>

                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>
        </div>
    )
}
