import React from 'react';
import {NavLink} from "react-router-dom";

function NotFoundPage(props) {
    return (
        <div>
            404 - Page Not Found.<br/><br/>
            <NavLink to="/">Back to Home Page.</NavLink>
        </div>
    );
}

export default NotFoundPage;