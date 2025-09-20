import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
   
    const handleVisitedCountries = (country)=>{
        console.log('handle visited country clicked', country);
        const newVisitedCountries = [...visitedCountries,  country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag)=>{
        console.log('flags added', flag);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
        
    }

    return (
        <div>
            <h1 className='countries-h1'>In the countries: <span className='cty-span'>{countries.length}</span></h1>

            <h3 className='countries-h3'>Total Countries Visited: <span className='cty-span'>{visitedCountries.length}</span></h3>

            <h3 className='countries-h3'>Total Flags Visited: <span className='cty-span'>{visitedFlags.length}</span></h3>
            
            <ol className='countries-ol'>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div> 

            <div className='countries-div'>
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;