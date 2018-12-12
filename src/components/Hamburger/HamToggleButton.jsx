import React from 'react'

const HamToggleButton = (props) => (
    <div>
        <button className='toggle-button' onClick={props.click}>
            <div className='toggle-button-line'></div>
            <div className='toggle-button-line'></div>
            <div className='toggle-button-line'></div>
        </button>
    </div>
)

export default HamToggleButton