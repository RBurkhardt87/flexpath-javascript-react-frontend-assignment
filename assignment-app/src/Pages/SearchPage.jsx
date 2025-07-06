import React, { useState } from 'react'
import ResultsCard from '../Components/ResultsCard'
import ResultsTable from '../Components/ResultsTable';
import SearchForm from '../Components/SearchForm';




const SearchPage = () => {

    const [filterType, setFilterType] = useState("Device Model");
    const [keyword, setKeyword] = useState("");
    const [error, setError] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, SetLoading] = useState(false);
    

    function handleFilterType(e) {
        setFilterType(e.target.value);
    }

    function handleKeyword(e) {
        setKeyword(e.target.value);
    }
    

    
    async function handleSubmit(e) {
        e.preventDefault();    
        SetLoading(true);
                
        //FETCH ALL THE DATA FROM API
        try {
            const response = await fetch("/api/data/search");
            const data = await response.json();
            console.log(data);
            
            


        //BEGIN FILTERING THE DATA USING USER INPUT
        //NOTE: TODO: Look at the demo video, I think I should change strictly equal to includes() for better user experience. 
        //The user may just want to search through all iphones and currently they would get no results if they did so. 
        //NOTE: If I make it includes then male and female aren't differentiated. 



            if (keyword){
                let filteredData = data.filter(item => 
                item[filterType].toLowerCase() === keyword.toLowerCase());
                console.log("filtered results: ", filteredData);
                setResults(filteredData);
                SetLoading(false);
            } else {
                setResults(data);
                SetLoading(false);
            }
      
        } catch (error) {
            console.error("Something went wrong", error);
        }
    }

     console.log("Results: ", results);

           

  return (
    <div>
        <div className='container'>
            <h1>Search Page</h1>
            <br />
            <br />     
                
            <SearchForm 
                handleSubmit={ handleSubmit }
                handleKeyword={ handleKeyword }
                handleFilterType={ handleFilterType }
                keyword = { keyword }
                filterType = { filterType }                
            />
            
            <br /> 

            <p>{isLoading ? "Loading..." : "Display Results Here"}</p>

            <ResultsCard />

            <br />

            <ResultsTable results={ results } />     
        </div>
    </div>
  )
}

export default SearchPage

