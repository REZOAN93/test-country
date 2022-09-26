import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = () => {
    const [Countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(json => setCountries(json))
    },[])
    return (
        <div>
            <h1>list of Countries: {Countries.length}</h1>
            <div className='Countries'>
                {
                    Countries.map(cd=><Country country={cd} key={cd.name.common}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;