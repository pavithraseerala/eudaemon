import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render(){
        return(
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <nav>
                <Link to="/">
                    <li>About</li>
                </Link>
                <Link to="/newchild">
                    <li>New Child</li>
                </Link>
                <Link to="/childedit">
                    <li>Child Edit</li>
                </Link>
            </nav>
        </div>
        )
    }
}