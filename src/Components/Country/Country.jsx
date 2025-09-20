import React, { useState } from 'react';

const Country = ({country , handleVisitedCountries, handleVisitedFlags }) => {
    // console.log(country.name.common);
    // console.log(handleVisitedCountries);
    
    const [visited, setVisited] = useState(false)
    
    const handleVisited = ()=> {
        // setVisited(visited ? false : true)
        setVisited(!visited)
        handleVisitedCountries(country);
    }

    return (
        <div className= {`country-div ${visited && 'country-visited'}`}>

          <img src= {country.flags.flags.png} className='w-[300px] h-[150px] mb-3' alt= {country.flags.flags.alt} />

          <h3 className='country-h3'>Name: <span className='cty-span'>{country.name.common}</span></h3>

          <h3 className='country-h3'>Capital: <span className='cty-span'>{country.capital.capital}</span></h3>

          <p className='country-h3'>Population: <span className='cty-span'>{country.population.population}</span></p>

          <p className='country-h3'>Area: <span className='cty-span'>{country.area.area}</span> <span className='font-medium'>{country.area.area > 200000 ? "(Big Country)" : "(Small Country)"}</span></p>

          <p className='country-h3'>Currencies: <span className='cty-span'>{country.currencies.currencies && Object.values(country.currencies.currencies).map(cur => `${cur.name} (${cur.symbol})`).join(", ")}</span>
          </p>

          <button onClick={handleVisited} className='btn-gray'>
            {
                visited ? 'Visited' : 'Not Visited' 
            }
          </button>

          <button onClick={()=>{handleVisitedFlags(country.flags.flags.png)}} className='btn-gray ml-3'>Add Visited Flags</button>
    
          {/* <p className='country-h3'>Currencies: <span className='cty-span'>{country.currencies.currencies.map(cur => `${cur.name} (${cur.symbol})`).join(", ")}</span></p> */}
        </div>
    );
};

export default Country;