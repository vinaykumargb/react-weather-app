import React, { Fragment, useState } from 'react';
import AppHeader from './components/AppHeader.js';
import AppContainer from './components/AppContainer.js';
import Popup from './components/Popup.js';
import './App.css';

export default function App({ icons }) {
    const [showPopup, setPopup] = useState(true);
    const [Loc, setLoc] = useState("");

    return (
        <Fragment>
            {!Loc ? (
                <main className="app-container">
                    <AppHeader handleClick={setPopup} />
                </main>
            ) : (
                <AppContainer popup={showPopup} Loc={Loc} changeLoc={setPopup} setLoc={setLoc} icons={icons} />
            )}
            <Popup show={showPopup} onClose={setPopup} newLocation={setLoc} />
        </Fragment>
    );
};