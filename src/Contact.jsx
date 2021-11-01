import React, { useState } from 'react';
const Contact=()=>{
    const [data, setData]=useState({
        fullname: "",
        phone:"",
        email:"",
        msg:"",
        });

        const InputEvent=(event)=>{
            const {name,value}=event.target;

            setData((preVal)=>{
                return{
                    ...preVal,
                    [name]:value,
                     
                };
            });
        };

    const formSubmit= (e) => {
        e.preventDefault();
        alert(`Your name is ${data.fullname}.
Your phone no. is ${data.phone}.
Your Email is ${data.email}.
It is submited`);

    };


    return(
        <>
        <br/>
        <div className="my-5 mt-8">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                        Full name
                        </label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="exampleFormControlInput1" 
                        name="fullname"
                        value={data.fullname}
                        onChange={InputEvent}
                        placeholder="Enter your name"/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                        Phone 
                        </label>
                        <input 
                        type="number" 
                        class="form-control" 
                        id="exampleFormControlInput1" 
                        name="phone"
                        value={data.phone}
                        onChange={InputEvent}
                        placeholder="Mobile No."/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                        Email address
                        </label>
                        <input 
                        type="email" 
                        class="form-control" 
                        id="exampleFormControlInput1" 
                        name="email"
                        value={data.email}
                        onChange={InputEvent}
                        placeholder="name@example.com"/>
                    </div>


                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">
                        Message
                        </label>
                        <textarea 
                        class="form-control" 
                        id="exampleFormControlTextarea1" 
                        name="msg"
                        value={data.msg}
                        onChange={InputEvent}
                        rows="3"></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-outline-primary ">Submit form</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};
export default Contact;