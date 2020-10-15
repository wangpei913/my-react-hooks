import React from 'react'

function Button({ children, onClick }) {
    return (
        <>
            {children && <button className="button">{children}</button>}
        </>
    )
}
export default Button;