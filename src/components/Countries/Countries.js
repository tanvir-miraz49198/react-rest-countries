import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        
        <div>
            <h1>All The Countries In The World</h1>

           <div  className='countries-container'>
           {
                // approach 1
                // countries.map(country => <Country
                // name = {country.name.common}
                // population = {country.population}
                // area = {country.area}
                // ></Country>)

                /*<-------------------------->*/

                // approach 2

                // countries.map(country => <Country
                // country = {country}

                // ></Country>)


                /*<-------------------------->*/

                // approach 3

                countries.map(country => <Country
                country = {country}
                key = {country.cca3}
                ></Country>)

            }
           </div>
        </div>
    );
};

export default Countries;