import React from 'react';
import './country.css'
const Country = (props) => {
    const {name,flags, population, area } = props.country;
    return (
        // approach 1
        // <div className='country'> 
        //     <h2>Name :- {props.name}</h2>
        //     <h4>Population :- {props.population}</h4>
        //     <p>Area :- <small>{props.area}</small></p>
        // </div>


        /*<-------------------------->*/


         // approach 2

    //    <div className='country'>
    //        <h2>Name :- {props.country.name.common}</h2>
    //        <h4>Population :- {props.country.population}</h4>
    //        <p>Area :- <small>{props.country.area}</small></p>
    //    </div>



       /*<-------------------------->*/


         // approach 3

         <div className='country'>
             <h2>Name :- {name.common}</h2>
             <img src={flags.png} alt="" />
             <h4>Population :- {population}</h4>
             <p>Area :- <small>{area}</small></p>

         </div>

    );
};

export default Country;