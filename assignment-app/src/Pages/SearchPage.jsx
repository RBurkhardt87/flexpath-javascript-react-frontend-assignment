import React, { useState, useEffect } from 'react'
import ResultsCard from '../Components/ResultsCard'
import ResultsTable from '../Components/ResultsTable';
import SearchForm from '../Components/SearchForm';




const SearchPage = () => {

    const [filterType, setFilterType] = useState("Device Model");
    const [keyword, setKeyword] = useState("");
    const [error, setError] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, SetLoading] = useState(false);
    const [averageAge, setAverageAge] = useState(0);
    
    
    //Average Handling --- Let's test with Age -- I want to use UseEffect so it only rerenders when the search is changed.
    // Had to convert the numbers from strings to actual Number data types. Otherwise they were concatenating together. 
    // Now I know the function works, I should be able to maybe make the property a parameter of the function and use it for all 4 properties.
    

    useEffect(() => {
        function findAgeAverage(){

            if (results.length > 0){
                let agesArray = results.map(result => Number(result["Age"]));

                let sumOfAges = agesArray.reduce((acc, curr) => acc + curr, 0);
                console.log("Sum of Ages: ", sumOfAges);

                let avgOfAges = sumOfAges / agesArray.length;
                console.log("length of array: ",agesArray);
                setAverageAge(avgOfAges);  
            } else {
                setAverageAge(0);
            }

        }
        findAgeAverage();
    }, [results]);
    
    console.log("Average Age: ", averageAge);

  

    
    
    
    
    
    //Form Handling
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
            console.error("Error occurred during search: ", error);
        }
    }

     console.log("Results: ", results);

           

  return (
    <div>
        <div className='container'>
                  
            <SearchForm 
                handleSubmit={ handleSubmit }
                handleKeyword={ handleKeyword }
                handleFilterType={ handleFilterType }
                keyword = { keyword }
                filterType = { filterType }                
            />
            
            <br /> 

            <p>{isLoading ? "Loading..." : "Display Results Here"}</p>

            {/* <ResultsCard /> */}

                <div>
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">Average Age: </h5>
                            <h6 className="card-subtitle mb-2 text-muted">Average Age: { averageAge } years old</h6>
                            {/* <p className="card-text">Median - { testingData.median } minutes </p> */}
                        </div>
                    </div>
                </div>

            <br />

            <ResultsTable results={ results } />     
        </div>
    </div>
  )
}

export default SearchPage

