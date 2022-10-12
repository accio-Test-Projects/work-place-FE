import React, { useState } from 'react'
import './Section2.css'
import cards from './Section2-card'
import { ListItemSecondaryAction } from '@mui/material';

const Section2 = () => {

    const [item, setItem] = useState(cards);

    return (
        <>
            <div className="section-2">
                <div className="title">
                    <h1>One Platform<br />Many <span className='solution'>Solutions</span></h1>
                </div>
                <div className="card-container">

                    {
                        item.map((elem) => {
                            const { id, svg, jobProfile, vacancy } = elem

                            return (

                                <div className="single-card">
                                    <div className="section2-logo">
                                        {svg}
                                    </div>
                                    <div className="section2-des">
                                        <p className='job-profile'>{jobProfile}</p>
                                        <p2 className='vacancy'>{vacancy}</p2>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Section2