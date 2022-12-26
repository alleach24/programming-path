import React, { useState } from "react";
import Books from "./Books"
import MainNavbar from "./MainNavbar";


export default function Resources() {
    const [revealBooks, setRevealBooks] = useState(false)


    const booksButton = (e) => {
        setRevealBooks(current => !current);
        console.log(revealBooks)
    }



    return (
        <div>
            <MainNavbar />
            <h1>Resources</h1>
            <h2>Books</h2>
            {!revealBooks && (
                <button onClick={booksButton}>Search for books</button>
            )}
            {revealBooks && (
                <button onClick={booksButton}>Hide books search</button>
            )}
            {revealBooks && (
                <Books />
            )}
        </div>
    )
}

