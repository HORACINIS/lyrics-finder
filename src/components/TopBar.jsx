import React from 'react';
import soundWave from '../images/soundWave.png';

const TopBar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#!">
                    <img src={soundWave} alt="sound wave" className="d-inline-block align-top" /> <span style={{ fontSize: '300%', marginLeft: '20px' }}>Lyrics</span>
                </a>
            </div>
        </nav>
    )
}

export default TopBar;
