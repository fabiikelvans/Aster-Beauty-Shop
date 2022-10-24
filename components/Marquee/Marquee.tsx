import React from 'react';
import {BsStarFill} from "react-icons/bs";
import Marquee from "react-fast-marquee";

function Marquees() {
    return (
        <div className='marquees'>
            <Marquee gradient={false} speed={100}>

            <div className='marquees-item'>
                NEW ARRIVAL
            </div>
            <div className='marquees-item marquees-icon'>
                <BsStarFill/>
            </div>

                <div className='marquees-item'>
                    NEW ARRIVAL
                </div>
                <div className='marquees-item marquees-icon'>
                    <BsStarFill/>
                </div>

                <div className='marquees-item'>
                    NEW ARRIVAL
                </div>
                <div className='marquees-item marquees-icon'>
                    <BsStarFill/>
                </div>

                <div className='marquees-item '>
                    NEW ARRIVAL
                </div>
                <div className='marquees-item marquees-icon'>
                    <BsStarFill/>
                </div>
            </Marquee>
        </div>
    );
}

export default Marquees;