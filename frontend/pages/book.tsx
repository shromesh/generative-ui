import React, { useState } from 'react';
import axios from 'axios';


// backendから、strでtsxが送られてくる。
// const generateTestUI = () => {
//     return `
//         <div>
//             <h2>Book Search</h2>
//             <form>
//                 <input type="text" id="search" name="search" placeholder="Enter book title" />
//                 <button type="submit">Search</button>
//             </form>
//             <div id="results">
//                 {/* Search results will be displayed here */}
//             </div>
//         </div >
//     `;
// };

const generateTestUI = () => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Search</title>
</head>
<body>
    <div>
        <h2>Book Search</h2>
        <form id="search-form">
            <input type="text" id="search" name="search" placeholder="Enter book title" />
            <button type="submit">Search</button>
        </form>
        <div id="results">
            <h3>Search Results</h3>
            <ul id="results-list">
                <!-- Search results will be displayed here -->
            </ul>
        </div>
    </div>

    <script>
        const sampleBooks = [
            { id: '1', title: 'Book1', author: 'John', genre: 'Fiction', availability: true },
            { id: '2', title: 'Book2', author: 'Kevin', genre: 'Non-Fiction', availability: false },
            { id: '3', title: 'Book3', author: 'Ryan', genre: 'Fiction', availability: true }
        ];

        document.getElementById('search-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const resultsList = document.getElementById('results-list');
            resultsList.innerHTML = '';

            sampleBooks.forEach(book => {
                const listItem = document.createElement('li');
                listItem.textContent = \`\${book.title} by \${book.author} (\${book.genre}) - \${book.availability ? 'available' : 'unavailable'}\`;
                resultsList.appendChild(listItem);
            });
        });
    </script>
</body>
</html>
    `;
};

export default function BookSearchPage() {
    return (
        <div className="container">
            <div id="generated-ui" dangerouslySetInnerHTML={{ __html: generateTestUI() }}></div>
        </div>
    );
}

