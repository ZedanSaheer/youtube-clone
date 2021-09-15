import React from 'react'
import "./SidebarRow.css"

const SidebarRow = ({selected , title , Icon}) => {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon"/>
            <h3 className="sidebarRow__title">{title}</h3>
        </div>
    )
}

export default SidebarRow
