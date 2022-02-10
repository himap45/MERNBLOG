import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlepost/SinglePost';
import './single.css'
function Single(props) {
    return (
        <div>
           <SinglePost />
           <Sidebar />
        </div>
    );
}

export default Single;