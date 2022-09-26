import React from 'react';

const Country = (props) => {
    const {name,flags,capital,region}=props.country;
    return (
        <div className='Country'>
            <h2>Name: {name.common}</h2>
            <h4>{capital}</h4>
            <img src={flags.png} alt="" />
            <p><small>{region}</small></p>
        </div>
    );
};

export default Country;