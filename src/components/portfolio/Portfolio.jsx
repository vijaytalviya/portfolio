import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {useState, useEffect} from 'react'
import {featuredPortfolio,frontend,backend} from "../../data"
export default function Portfolio() {
    const [selected, setSeleted] = useState("featured");
    const [data, setdata] = useState([])
    const list = [
        {
            id:"featured",
            title: "Featured"
        },
        {
            id:"frontend",
            title: "Frontend"
        },
        {
            id:"backend",
            title: "Backend"

        }
    ]

    useEffect(() => {
        switch(selected){
            case "featured":
                setdata(featuredPortfolio)
                break;
            case "frontend":
                setdata(frontend)
                break;
            case "backend":
                setdata(backend)
                break;
            default:
                setdata(featuredPortfolio)
        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
             {list.map((item)=>{
                 return <PortfolioList 
                 title={item.title} 
                 active={selected===item.id} 
                 setSeleted={setSeleted}
                 id={item.id}/>
             })}
        </ul>
        <div className="container">
            {data.map(d=>(
                <div className="item">
                <img src={d.img} alt=""/>
                <h3>{d.title}</h3>
            </div>
            ))}
            
              
        </div>
            
        </div>
    )
}
