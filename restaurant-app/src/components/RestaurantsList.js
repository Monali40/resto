import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class RestaurantsList extends Component {
    constructor() {
        super(); // Calls the constructor of the superclass (Component)
        this.state = {
            list: null,// Initialize state with null for list (no data initially)// 'list' will hold the fetched restaurants data
        };
    }

    componentDidMount() { // Lifecycle method called after the component mounts
        // Fetch restaurants data from an API endpoint
        fetch("http://localhost:3000/restaurants")
            .then(response => {
                if (!response.ok) { // Check if response is ok; if not, throw an error
                    throw new Error('Network response was not ok');// Throw an error
                }
                return response.json();// Parse response body as JSON
            })
            .then(data => {// Update 'list' state with the fetched data
                this.setState({ list: data }); // Set list in state to fetched data
            })
            .catch(error => {
                console.error('Error fetching data:', error); // Log any errors that occur during fetch
            });
    }

    render() { // Render means display/show method to define the component's UI
        return (
            <div>

                <h1>Restaurants List</h1>
                {this.state.list ? (
                    <div>
                        <Table striped bordered hover>

                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Cuisine</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                this.state.list.map((item, i) => //(
                                    // <div key={i}>
                                    //   <span>{item.name}</span>
                                    // <span>{item.cuisine}</span>
                                    // <span>{item.address}</span>
                                    //<span>{item.email}</span>
                                    // </div>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.cuisine}</td>
                                        <td>{item.address}</td>
                                        <td>{item.email}</td>
                                        <td>{item.rating}</td>
                                    </tr>
                                //)
                              )
                           }
                            </tbody>
                        </Table>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}

            </div>
        );
    }
}

export default RestaurantsList;
