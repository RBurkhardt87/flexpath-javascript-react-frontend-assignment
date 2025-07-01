import React, { useState } from 'react'

const Search = () => {

    const [filterType, setFilterType] = useState("");
    const [keyword, setKeyword] = useState("");


    function handleFilterType(e) {
        setFilterType(e.target.value);
    }

    function handleKeyword(e) {
        setKeyword(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        //maybe do a try catch block here... 
        //TODO: pause here and read up more on documentation. Seems a little different than sending it to our backend like in media wrangler
        // const data = await fetch(`/api/data/search`);


        
    }





  return (
    <div>
        <div className='container'>
            <h1>Search Page</h1>
            <br />
            <br />
            <form onSubmit={ handleSubmit }>
                <p>Select data point to filter search by</p>
                {/* put dropdown filterType options here */}
                <div className='col-sm-2'>
                    <select 
                        className="form-select"
                        id="filterType"
                        name="filterType"
                        value= { filterType }
                        onChange={ handleFilterType }
                    >
                        <option value="1">model</option>
                        <option value="2">gender</option>
                        <option value="3">operatingSystem</option>
                        <option value="4">behaviorclass</option>
                    </select>
                </div>
                <br />

                {/* create field input here for free search using keyword */}
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
                    <button type="button" className="form-control btn btn-outline-secondary"> Search </button>
                </div>

            </form>
            <br />
            <p>Display Message will be here... but will make it dynamic data</p>

            {/* Have cards here */}

            <br />

            {/* Create a table to display the results in */}
        </div>
    </div>
  )
}

export default Search

/* 
This page needs to have a form that...
 1. filterType option
 const filterTypeOptions = ["gender", "operatingSystem", "model", "behaviorclass"]

Create a dropdown menu that will populate with the filterTypes above

 2. free text search input for keyword
 

 When there are no record to display, the page will show this message "No Records To Display" under the search button

 When there are records to display, it will display this message "Display [number of records returned from the search] Records"
    EXAMPLE: "Displaying 217 Records"

 When the search is being executed, the message should display "Loading..."

 If you have filterType option selected without keyword, there should be 700 records from "/api/data/search"


 */