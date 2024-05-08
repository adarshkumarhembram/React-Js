import ResturentCard from "./components/ResturentCard"

const Body =()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            <ResturentCard resName="Maghana food" cuisine="Biryani, North indian, Asian" />
            <ResturentCard resName="KFC" cuisine="Burger,Fast food" />
            
            
            
            
            </div>

               
        </div>
    )   
}
export default Body;