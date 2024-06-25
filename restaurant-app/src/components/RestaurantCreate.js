/*The onChange event in React is essential for handling user input in forms.
By defining an onChange handler and attaching it to form elements, you can 
capture changes, update the component's state, and dynamically reflect those
changes in the UI. This allows for interactive and responsive form inputs in
React applications*/
import React, { Component } from 'react';

class RestaurantCreate extends Component {
    constructor()
    {
        super();
        this.state={
            name:null,
            cuisine:null,
            address:null,
            email:null,
            rating:null
        }
    }
    create()
    {
        fetch("http://localhost:3000/restaurants",{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been added")

            })
            
        })
        }
        
    
    render() {
        return (
            <div>
                <h1>Restaurant Create</h1>
                <div>


                    <input
                        onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Restaurant Name"
                    /> <br /> <br />

                    <input
                        onChange={(event) => { this.setState({ cuisine: event.target.value }) }}
                        placeholder="Restaurant Cuisine"
                    /><br /> <br />

                    <input
                        onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Restaurant Address"
                    /><br /> <br />
                    <input
                        onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Restaurant Email"
                    /><br /> <br />
                    <input
                        onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder="Restaurant Rating"
                    /><br /> <br />
                    <button onClick={()=>{this.create()}}>Add Restaurant</button>
                   
                </div>
            </div >
        );
    }
}

export default RestaurantCreate;
