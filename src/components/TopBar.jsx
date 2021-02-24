import React from 'react';
import soundWave from '../images/soundWave.png';

import soundWaveGreen from '../images/soundWaveGreen.png';  // parece que si

import soundWaveOrange from '../images/soundWaveOrange.png';
import soundWaveRed01 from '../images/soundWaveRed01.png';
import soundWaveRed02 from '../images/soundWaveRed02.png';





const TopBar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#!">
                    <img src={soundWave} alt="sound wave" className="d-inline-block align-top" /> <span style={{ fontSize: '300%', marginLeft: '20px' }}>Lyrics x</span>
                </a>
            </div>
        </nav>
    )
}
export default TopBar;




