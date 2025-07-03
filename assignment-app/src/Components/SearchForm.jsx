import React, { useState } from 'react'
import { submitSearch } from '../Services/SearchService';

const SearchForm = () => {

    const [filterType, setFilterType] = useState("Device Model");
    const [keyword, setKeyword] = useState("");
    const [error, setError] = useState("");


    function handleFilterType(e) {
        setFilterType(e.target.value);
    }

    function handleKeyword(e) {
        setKeyword(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();                

        const dataInput = {
            filterType,
            keyword
        }
        
        try {
            const responseMessage = await submitSearch(dataInput); 

            if (responseMessage === "Success") {
                console.log("Search was successful");        
            } else {
                setError(responseMessage);
            }        
        } catch (error) {
            console.error("Unexpected error during search submission: ", error);
            setError({error: "An unexpected error occurred. Please try again"})
        }
    };
        

  return (
    <div>
        <div className='container'>
            <form onSubmit={ handleSubmit }>
                <p>Select data point to filter search by</p>
                <div className='col-sm-2'>
                    <select 
                        className="form-select"
                        id="filterType"
                        name="filterType"
                        value= { filterType }
                        onChange={ handleFilterType }
                    >
                        <option value="Device Model">model</option>
                        <option value="Gender">gender</option>
                        <option value="Operating System">operatingSystem</option>
                        <option value="User Behavior Class">behaviorclass</option>
                    </select>
                </div>
                <br />

                <div className="col-sm-4">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search by Keyword"
                        id="keyword"
                        value={ keyword }
                        onChange={ handleKeyword }
                    >                    
                    </input>
                </div>
                <br />

                <div className='col-sm-4'>
                    <button type="submit" className="form-control btn btn-outline-secondary"> Search </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SearchForm