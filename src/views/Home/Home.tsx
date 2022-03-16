import React from 'react';
import { Link } from 'react-router-dom'
import './Home.scss'
import iconArrowRight from '../../assets/icons/iconArrowRight.svg'

interface IUser {
    id: number;
    name: string;
    email: string;
    category: string;
    supervisor: boolean;
}

const Home = () =>
(
    <div>
        <header className="header-container">
            <p>Client</p>
            <h1>Admin Portal</h1>
            <a href="https://github.com/joakimsq/code_test">Github</a>
        </header>
        <main className="content-container">
            <ul className="routes-container">
                <Link className="link-wrapper" to="/members" >
                    <p className="link-text">Members</p>
                    <img className="link-icon" src={iconArrowRight} />
                </Link>
            </ul>
        </main>
    </div>
)

export default Home;
