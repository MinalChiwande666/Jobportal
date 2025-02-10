import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = ({ size, start }) => {
    return (
        <>
            {
                start &&
                <Spinner size={size}>
                   
                </Spinner>
            }
        </>
    )
}

export default Loader