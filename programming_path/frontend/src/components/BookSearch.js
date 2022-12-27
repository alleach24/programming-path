import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

export default function BookSearch({search}) {
    
    const [searchQuery, setSearchQuery] = useState(search)
    const [booksList, setBooksList] = useState([[]])

    useEffect(() => {
        searchBooks()
    }, [])

    async function searchBooks() {
      try {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
        const response = await fetch(url);
        const { statusCode, statusMessage, ...data } = await response.json();
        if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
        displayBooks(data);
      } catch (error) {
        console.error(error);
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
        setBooksList(list)
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