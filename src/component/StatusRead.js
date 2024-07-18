import React from 'react'

function StatusRead({ changeStatusBook, book, shelf }) {
    return (
        <select
            onChange={event => {
                changeStatusBook(event.target.value, book);
            }}
            value={
                shelf !== "none"
                    ? shelf
                        .toLowerCase().trim().split(" ").join("")
                    : "none"
            }
        >
            <option value="move" disabled>
                Move to...
            </option>
            <option value="currentlyreading">Currently Reading</option>
            <option value="wanttoread">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
}

export default StatusRead
