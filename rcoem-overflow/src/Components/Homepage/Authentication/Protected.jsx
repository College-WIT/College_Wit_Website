import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let loggedin = localStorage.getItem('login');
        if (!loggedin) {
            navigate('/login');
        }
    })
    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected