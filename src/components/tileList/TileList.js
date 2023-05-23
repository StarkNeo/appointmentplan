import React from "react";
import Tile from "../tile/Tile";


export const TileList = ({list}) => {
    
    return (
        <div>
            {
            
            list.map((e, index)=>{
               return (
               <div>
                <Tile key={index} description={e} />
                </div>
               )
            })
            
            }
        
        </div>
    );
};
