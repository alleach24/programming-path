import React, { useState } from "react";
import BookSearch from "./BookSearch"

export default function Books() {
    const [revealResults, setRevealResults] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')


    const handleChange = (event) => {
      setSearchQuery(event.target.value)
    }

    function handleSubmit(event) {
      console.log("pressed submit")
      console.log(searchQuery)
      event.preventDefault()
      setRevealResults(current => !current)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
              <input type="text" id="bookQuery" class="search-input" onChange={handleChange}/>
              <button class="special-button" type="submit" value="Search">Search</button>
            </form>
            {revealResults && <BookSearch search={searchQuery} />}
        </div>
    )
}