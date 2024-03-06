import { Table, Form, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Order from "./Services(Crud)";
import { useNavigate } from "react-router-dom";


function List() {
    const [Customer, setCustomer] = useState([]);
    const navigate=useNavigate();
    // const [editedStudent, setEditedStudent] = useState({});
    // const [showEditForm, setShowEditForm] = useState(false);

    const baseURL = "http://localhost:3000";

    const setCustomerData = () => {
        //  axios.get(baseURL + "/OrderForm")

        Order.getorder()

            // Service.getCustomer()
            .then((response) => {
                setCustomer(response.data);
                //  console.log(response.data);
            })
            .catch(error => {
                alert("Error Ocurred while loading data:" + error);
            });
    }

    useEffect(() => { setCustomerData(); }, []);

    const removeCustomer = (id) => {
        //  console.log(id);
        // axios.delete(baseURL + "/OrderForm/" +id)

        Order.deleteorder(id)

            // Service.deleteCustomer(id)
            .then((response) => {
                alert("Customer deleted");
                setCustomerData();

            }).catch(error => {
                alert("error===" + error);
            });
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>PhNo</th>
                        <th>Options</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Customer.map((Customer, index) => (
                        <tr key={Customer.id}>

                            <td>{index + 1}</td>
                            <td>{Customer.name}</td>
                            <td>{Customer.email}</td>
                            <td>{Customer.gender}</td>
                            <td>{Customer.phno}</td>
                            <td>{Customer.options}</td>
                            <td>{Customer.address}</td>
                            <td>
                                <FaEdit onClick={() => navigate("/edit/" +Customer.id)} />
                                
                                <FaTrash onClick={() => removeCustomer(Customer.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


        </div>
    );
}

export default List;