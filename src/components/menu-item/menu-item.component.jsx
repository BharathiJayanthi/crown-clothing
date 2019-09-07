import React from 'react';
import './menu-item.styles.scss';
const MenuItem = ({ title, key, size, imageUrl }) => {
    return(
        <div key={key}  className={`${size} menu-item`}>
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}} />
        <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span classname="subtitle">SHOP NOW</span>
        </div>
        </div>
    );
}
export default MenuItem;