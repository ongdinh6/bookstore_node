import axiosInstance from "../../api/axiosInstance/axiosInstance";
import {useEffect, useState} from "react";

interface Book {
    id: number,
    title: string,
    price: string,
}

const ListBooks = () => {
    const [listBooks, setListBooks] = useState<Book[]>([]);

    useEffect(() => {
        axiosInstance.get("/api/books")
            .then(response => setListBooks(response.data))
            .catch(error => console.error("Get api books is failed with details: ", error.data));
    }, [])

    return <div>
        <h3>List of Books</h3>
        <ul>
            {
                listBooks.map(book => <li key={book.id}>
                    <span>{book.title}</span>
                    <a href={"/api/"}>Remove</a>
                </li>)
            }
        </ul>
    </div>;
}

export default ListBooks;
