import React from 'react'
import { Button } from 'react-bootstrap'

const Benifits = ({ data, setBenifits, Benifit }) => {

    return (
        <div className='d-flex flex-column gap-2'>
            <h4>Benefits*</h4>
            <div className='d-flex align-items-center gap-3'>
                {
                    data.map((item, index) => (
                        <Button onClick={() => {
                            if (Benifit.includes(item?.name)) {
                                setBenifits((b) =>
                                    b.filter((bn) => bn !== item?.name)
                                )
                            } else {
                                setBenifits((b) => [...b, item?.name])
                            }
                        }} key={index} variant={Benifit?.includes(item?.name)?'dark':'outline-dark'}>{item?.name}</Button>
                    ))
                }
            </div>
        </div>
    )
}

export default Benifits