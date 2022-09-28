import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import getCookie from '../../../hooks/getCookie';



const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let loggedin = getCookie('login');
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