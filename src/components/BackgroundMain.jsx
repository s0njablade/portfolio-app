import React, { Component } from 'react'
import london from '../london.jpg'

class BackgroundMain extends React.Component {

    render() {
        return (
            <div className="BackgroundMain">
                <div className='headshot'>
                    <img className='SonjaPic' src={london} alt='london'></img>
                </div>
            </div>
        )
    }
}
export default BackgroundMain;