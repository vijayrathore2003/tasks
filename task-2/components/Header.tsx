import React from "react"

function Header() {
    return (
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tasks</h1>
    )
}

export default React.memo(Header)