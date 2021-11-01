import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img1.png"
const Card=(props)=>{
    return(
        <>
        
                
                        <div className="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={props.imgsrc} height='200px' width='200px' className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bolt">{props.title}</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the make up
                                        bulk of the card content.
                                    </p>
                                    <NavLink to="./contact" className="btn btn-primary">
                                        Click Here
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    
                
            
        </>
    );
};
export default Card;