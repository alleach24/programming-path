import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";  
import MainNavbar from "./MainNavbar";
// import axios from 'axios'
import Table from 'react-bootstrap/Table';

export default function BookSearch({search}) {
    
    const [searchQuery, setSearchQuery] = useState(search)
    const [booksList, setBooksList] = useState([[]])

    useEffect(() => {
        searchBooks()
    }, [])

    async function searchBooks() {
      console.log('hit the searchBooks function')
      try {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
        console.log(url)
        const response = await fetch(url);
        const { statusCode, statusMessage, ...data } = await response.json();
        if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
        displayBooks(data);
        // console.log(data)
      } catch (error) {
        console.error(error);
        // console.log(data)
        // setData({ content: "Opps... Something went wrong" });
      }
    }

    function displayBooks(data) {
        let list = []
        for (let i = 0; i < 6; i++) {
            try {
                list.push([data.items[i].volumeInfo.title, data.items[i].volumeInfo.authors, data.items[i].volumeInfo.description])
            } catch {
                break
            }
        }
        console.log(list)
        setBooksList(list)
        console.log(booksList)
    }

    return (
        <div>
            <Table striped bordered hover class="table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Authors</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>     
                    {booksList.map((data) => {
                        return(
                            <tr class="table-row">
                                <td class="table-column">{data[0]}</td>
                                <td class="table-column">{data[1]}</td>
                                <td class="table-column">{data[2]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}