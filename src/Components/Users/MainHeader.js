import {NavLink} from 'react-router-dom';

import styles from './MainHeader.module.css';

const MainHeadr = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName = {styles.active} to='/LoginPage'>Login</NavLink>
                    </li>
                    <li >
                        <NavLink activeClassName = {styles.active} to='/AddUserPage'>Add User</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName = {styles.active} to='/UsersPage'>User Profiles</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};



export default MainHeadr;