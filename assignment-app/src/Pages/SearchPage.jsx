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
    const [averageAppUsage, setAverageAppUsage] = useState(0);
    const [averageScreenTime, setAverageScreenTime] = useState(0);
    const [averageAppsInstalled, setAverageAppsInstalled] = useState(0);



  
    
    //Average Handling --- Let's test with Age -- I want to use UseEffect so it only rerenders when the search is changed.
    // Had to convert the numbers from strings to actual Number data types. Otherwise they were concatenating together. 
    // Now I know the function works, I should be able to maybe make the property a parameter of the function and use it for all 4 properties.

    //So, I was able to bracket notation the property variable in and pass the argument as a string
    // I think I probably need to do some kind of rounding for the averages...double check the video, but cleaner numbers are more user friendly
    

    useEffect(() => {
        function findAverage(property){

            if (results.length > 0){
                let propertyArray = results.map(result => Number(result[[property]]));
                let sum = propertyArray.reduce((acc, curr) => acc + curr, 0);             
                let avg = sum / propertyArray.length;
                return Math.round(avg) 
            } else {
                return 0;
            }
        }
        setAverageAppUsage(findAverage("App Usage Time (min/day)"));
        setAverageScreenTime(findAverage("Screen On Time (hours/day)"));
        setAverageAppsInstalled(findAverage("Number of Apps Installed"));
        setAverageAge(findAverage("Number of Apps Installed"));        
    }, [results]);



    //Median Handling...
    
  
    
    
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

            {/* NOTE: This is what it needs to display when results are returned :::    Display NUMBER Results 
                        I want to try a nested ternary to get this to function correctly... 
            */}

            <p>{isLoading ? "Loading..." : results ? "Displaying " + results.length + " Results" : "No Results To Display"}</p>


            {/* NOTE: Need to make these result cards inline (columns) and not rows. Also, i can eventually just put the data in an 
                array of objects that hold the info and map over maybe returning a single card for each object -- I could make a data folder to 
                hold the array of objects. I am not sure how the variables would work doing it like this though, maybe just try and test it out
                to see for future knowledge
            */}

            <div>
                <ResultsCard 
                    title= {"App Usage Time (min/day)"}
                    average={"Average - " + averageAppUsage + " Minutes"}
                    median = {"Median - " + " Minutes"}                 
                />
                <ResultsCard 
                    title= {"Screen On Time (hours/day)"}
                    average={"Average - " + averageScreenTime + " Hours"}
                    median = {"Median - " + " Hours"}                 
                />
                <ResultsCard 
                    title= {"Number of Apps Installed"}
                    average={"Average - " + averageAppsInstalled + " Apps"}
                    median = {"Median - " +  " Apps"}                    
                />
                <ResultsCard 
                    title= {"Age"}
                    average={"Average - " + averageAge + " Years Old"}
                    median = {"Median - " + " Yeas Old"}                 
                />
            </div>
  



            <br />

            <ResultsTable results={ results } />     
        </div>
    </div>
  )
}

export default SearchPage

