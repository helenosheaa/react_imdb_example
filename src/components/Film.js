import React, {Component} from 'react';

const Film = function (props) {
    return (
    <li>
        <a href={props.url}> {props.title}</a>
    </li>
    );
}

export default Film;
