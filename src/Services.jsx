import React from 'react';
import Card from "./Card.jsx";
import Cdata from './Cdata.jsx';

const Services=()=>{
    return(
        <>
        <br/>
        <div className="my-5 service">
            <h1 className="text-center service"><b>Our Services</b></h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            Cdata.map((val,ind)=>{
                            return <Card key={ind}
                            imgsrc={val.imgsrc} 
                            title={val.title}

                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Services;