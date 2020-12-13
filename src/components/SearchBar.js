import React, { useRef } from 'react';

export default function SearchBar({ onNewLocation, onClose }) {
    const input = useRef();
    const handleForm = (e) => {
        const { current } = input;
        e.preventDefault();
        onNewLocation(current.value);
        onClose(false);
        current.value = "";
    };
    return (
        <form onSubmit={(e) => handleForm(e)}>
            <label>Enter your location below:</label>
            <input ref={input} type="text" placeholder="Ex: New Delhi, India" required />
            <button type="submit">Search</button>
        </form>
    );
};