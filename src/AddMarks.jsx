import React, { useState, useContext } from "react";
import { MarksContext } from "./MarksContext";

export default function AddMarks() {
    const [name, setName] = useState("");
    const [score, setScore] = useState("");
    const { addMarks } = useContext(MarksContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && score) {
            addMarks({ name, score });
            setName("");
            setScore("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Student Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                placeholder="Score" 
                type="number"
                value={score} 
                onChange={(e) => setScore(e.target.value)} 
            />
            <button type="submit">Add</button>
        </form>
    );
}