import React from 'react'

function StatusRead({ changeStatusBook, book, shelf }) {
    return (
        <select
            onChange={event => {
                changeStatusBook(book, event.target.value);
            }}
            value={
                shelf !== "none"
                    ? shelf
                    : "none"
            }
        >
            <option value="move" disabled>
                Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
}

export default StatusRead
