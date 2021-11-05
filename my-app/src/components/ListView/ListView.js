import userData from '../../userData.json';
import { useState } from "react";
import './ListView.css';

export default function ListView(props) {
    let[users, setUsers] = useState(userData);
    let [data, setData] = useState(userData);
    let [id, setId] = useState(0);
    let editClicked = false;
        
    function editUser(e) {
        editClicked = true;    
        setId(e.target.id);
    }

    function deleteUserData(e) {
        const UserId = e.target.id;

        let list = users.filter(user => {
            return user.id != UserId;
        })

        setUsers(list);
    }    

    const onSave = (e) => {
        e.preventDefault();
    
        setUsers([...users]);
        console.log(users);
        localStorage.setItem('dudh0004', JSON.stringify(users));
        console.log("localstorage updated");
        setId(0);
    };


    const handleChange = (e) => {
    
        data.map(element => {
            if(element.id == id){
                console.log('matching element: ', element);
                console.log(`${e.target.name} : ${e.target.value}`)
                element[e.target.name] = e.target.value;
            }
        })
        
        setData(data);
    };

    const noChange = (e) => {
        let userName = document.getElementById('name').defaultValue;
        let userEmail = document.getElementById('Email').defaultValue;
        let userCity = document.getElementById('City').defaultValue;

        let index = users.findIndex((obj => obj.id == id));
            users = users[index];
    
            users.name = userName;
            users.Email = userEmail;
            users.City = userCity;
            setId(0);
    }


    return (
        <div className = "main">
            <div>
                {
                    users.map((item) => (
                    <>
                    {(((id == 0) && (!editClicked)) || !(item.id == id)) ? 
                    (
                    <div className="data" id={item.id}>
                        <div className="paragraph">
                            <p className={item.id}>{item.name}</p>
                            <p>{item.Email}</p>
                            <p>{item.City}</p>
                        </div>
                        <div className="button">
                            <button className="editButton" id={item.id} onClick={editUser}>Edit</button>
                            <button className="deleteButton" id={item.id} onClick={deleteUserData}>Delete</button>
                        </div>
                    </div>
                        ) : (
                            <form className="editUserForm">
                            <div className="inputData">
                                <p>
                                    <label>Name:</label>
                                    <input className="editUserName" name="name" id="name" onChange={handleChange} defaultValue = {item.name}></input>
                                </p>
                                <p>
                                    <label>Email:</label>
                                    <input className="editUserEmail" name="Email" id="Email" onChange={handleChange} defaultValue = {item.Email}></input>
                                </p>
                                <p>
                                    <label>City:</label>
                                    <input className="editUserCity" name="City" id="City" onChange={handleChange} defaultValue = {item.City}></input>
                                </p>
                            </div>
                            <div className="formButton">
                                <button onClick={onSave}>Save</button>
                                <button onClick={noChange}>Cancel</button>
                            </div>
                        </form>

                        )
                    }
                    </>
                ))
                }    
            </div>
        </div>
    )
}