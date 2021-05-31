import "./portfolioList.scss"

export default function PortfolioList({id,title,active,setSeleted}) {
    return (
        <li className= {active ? "portfolioList active" : "portfolioList"} 
            onClick = {()=>setSeleted(id)}>
            {title}
        </li>
    )
}
