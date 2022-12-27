import React, { useState } from "react";
import BookSearch from "./BookSearch"
import { useParams, useNavigate } from "react-router-dom";  
import MainNavbar from "./MainNavbar";
// import axios from 'axios'
import Table from 'react-bootstrap/Table';

export default function Books() {
    const [revealResults, setRevealResults] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')


    const handleChange = (event) => {
      setSearchQuery(event.target.value)
      // console.log(event.target.value)
      // console.log('hit this function')
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
              <input type="text" id="bookQuery" onChange={handleChange}/>
              <button class="special-button" type="submit" value="Search">Search</button>
            </form>
            {revealResults && <BookSearch search={searchQuery} />}
        </div>
    )
}