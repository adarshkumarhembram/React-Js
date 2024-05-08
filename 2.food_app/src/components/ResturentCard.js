const ResturentCard = (props)=>{
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}} >
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nitlydb3aql1df311rw6" alt="res-logo" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.3 Star</h4>
            <h4>38 Minutes</h4>
        </div>
    )
}

export default ResturentCard;