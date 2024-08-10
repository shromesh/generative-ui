import React from 'react';

// backendから、strでtsxが送られてくる。
const generateTestUI = () => {
    return `
        <div>
            <h2>Book Search</h2>
            <form>
                <input type="text" id="search" name="search" placeholder="Enter book title" />
                <button type="submit">Search</button>
            </form>
            <div id="results">
                {/* Search results will be displayed here */}
            </div>
        </div >
    `;
};

export default function BookSearchPage() {
    return (
        <div className="container">
            {generateTestUI()}
        </div>
    );
}
