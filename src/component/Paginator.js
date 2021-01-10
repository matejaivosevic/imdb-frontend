// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import '../styles/scss/paginator.scss'

const Paginator = ({length, changePage}) => {
    const [active, setActive] = useState(1)
    const numberOfPages = Math.ceil(length / 10)
    const arr = Array.from({length: numberOfPages}, (_, i) => i + 1)

    const handleClick = n => {
        setActive(n)
        changePage(n)
    }

    return (
        <div className="pagination">
            {arr.map((n, i) => (
                <span key={i} onClick={() => handleClick(n)} className={n === active ? 'active' : null}>{n}</span>
            ))}
        </div>
    )
}

export default Paginator