import React from "react";

const Tile = ({ index, description }) => {
    
    let values = Object.values(description);
    
    return (
        <div className="tile-container">
            {
                values.map((e)=>{
                    return (
                        <>
                        <p className="tile">{e}</p>
                        </>
                    )
                })
            }
            
        </div>
    )
}

export default Tile;