import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import './AppHeader.css';

export default function AppHeader(props) {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />
        <h1>User List</h1>
        <h3>
            <NavLink className="active" to={{pathname: '/add'}}>New Item </NavLink>
        </h3>
        </header>
    )
}