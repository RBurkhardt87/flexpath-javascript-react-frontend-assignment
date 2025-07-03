import React from 'react'
import SearchForm from '../Components/SearchForm'
import ResultsCard from '../Components/ResultsCard'


const Search = () => {

  return (
    <div>
        <div className='container'>
            <h1>Search Page</h1>
            <br />
            <br />

            <SearchForm />
            
            <br />

            <p>Display Message will be here... but will make it dynamic data</p>

            {/* Have cards here */}
            <ResultsCard />

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