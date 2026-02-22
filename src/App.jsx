import React from "react";  
import AddMarks from "./AddMarks.jsx";
import MarksList from "./MarksList.jsx";
import MarksProvider from "./MarksContext.jsx";

export default function App() {
  return (
    <MarksProvider>
      <div className="app-container">
        <h1>Welcome to KL University Marks Portal</h1>
        <AddMarks />
        <hr />
        <MarksList />
      </div>
    </MarksProvider>
  )
}