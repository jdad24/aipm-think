import React from 'react';
import './sideBar.css';
import menuIcon from '../../../../assets/menu.svg';
import uploadIcon from '../../../../assets/upload.svg';
import addUserIcon from '../../../../assets/addUser.svg';

const sideBar = () => (
    <div className="sideBar">
    <div><img src={menuIcon}/></div>
    <div><img src={uploadIcon}/></div>
    <div><img src={addUserIcon}/></div>
    </div>
);

export default sideBar;