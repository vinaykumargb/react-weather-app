import React from 'react';

export default function ErrorPage({ errCode, errMsg, setLoc, setPop }) {
    const handleClick = () => {
        setLoc(undefined);
        setPop(true);
    }
    return (
        <div className="error-page">
            <h1 className="error-code">{errCode}</h1>
            <span className="error-msg">{errMsg}</span>
            <button type="button" onClick={handleClick}><i className="fas fa-arrow-left"></i>&nbsp;Go back</button>
        </div>
    );
} 