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
            <h1><span class="animate-character">Resources</span></h1>

            {!revealBooks && (
                <button class="special-button search" onClick={booksButton}>Search for books</button>
            )}
            {/* {revealBooks && (
                <button class="non-special-button" onClick={booksButton}>Hide books search</button>
            )} */}
            {revealBooks && (
                <Books />
            )}
        </div>
    )
}

