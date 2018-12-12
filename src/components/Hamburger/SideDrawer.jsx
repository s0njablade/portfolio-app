import React from 'react'

const SideDrawer = (props) => {

    let drawerClasses = 'side-drawer'

    if (props.show) {
        drawerClasses = 'side-drawer open'
    }

    return (
        <div>
            <nav className={drawerClasses}>
                <ul>
                    <li><a href='/'>Projects</a></li>
                    <li><a href='/components/Resume'>Resume</a></li>
                    <li><a href='/components/BackgroundContact'>Contact</a></li>
                    <li><a href='/'>About Me</a></li>
                    <li><a href='/'>Homepage</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default SideDrawer