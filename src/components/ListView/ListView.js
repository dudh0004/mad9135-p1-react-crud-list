import userData from '../../userData.json';
import ListItem from '../ListItem/ListItem';
import { useState } from "react";
import './ListView.css';

export default function ListView(props) {
    let localData = JSON.parse(localStorage.getItem(('dudh0004')));

    if(!localData) {
        localStorage.setItem('dudh0004', JSON.stringify(userData));
    }

    let[users, setUsers] = useState(localData);
    let [data, setData] = useState(localData);
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
        localStorage.setItem('dudh0004', JSON.stringify(list));
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
                            <p className={item.id}><strong>Name: </strong>{item.name}</p>
                            <p><strong>Email: </strong>{item.Email}</p>
                            <p><strong>City: </strong>{item.City}</p>
                        </div>
                        <div className="button">
                            <button className="editButton" id={item.id} onClick={editUser}>Edit</button>
                            <button className="deleteButton" id={item.id} onClick={deleteUserData}>Delete</button>
                        </div>
                    </div>
                        ) : (
                            <ListItem item = {item} save = {onSave} change = {handleChange} noChange = {noChange}/>
                            )
                    }
                    </>
                ))
                }    
            </div>
        </div>
    )
}