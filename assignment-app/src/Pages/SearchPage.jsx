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
    const [medianAge, setMedianAge] = useState(0);
    const [medianAppUsage, setMedianAppUsage] = useState(0);
    const [medianScreenTime, setMedianScreenTime] = useState(0);
    const [medianAppsInstalled, setMedianAppsInstalled] = useState(0);
   

    //Average Handling
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



    //Median Handling
    useEffect(() => {
        function findMedian(property){

            if ( results.length > 0) {
                let propertyArray = results.map(result => Number(result[property])).sort((a, b) => a - b);
               
                if ( propertyArray.length % 2 === 0) {
                    let medianIndex1 = propertyArray.length /2;
                    let medianIndex2 = medianIndex1 - 1;
                    let medianNum = ((propertyArray[medianIndex1] + propertyArray[medianIndex2]) /2);
                    return medianNum;
                } else {
                    let medianIndex = Math.floor(propertyArray.length /2);
                    let medianNum = propertyArray[medianIndex];   
                    return medianNum;                
                } 
            } else {
                return 0;
            }             
        }
        setMedianAppUsage(findMedian("App Usage Time (min/day)"));
        setMedianScreenTime(findMedian("Screen On Time (hours/day)"));
        setMedianAppsInstalled(findMedian("Number of Apps Installed"));
        setMedianAge(findMedian("Number of Apps Installed")); 
    }, [results]);
    
  
        
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
                
        try {
            const response = await fetch("/api/data/search");
            const data = await response.json();
            console.log(data);
            
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
            <p>{isLoading ? "Loading..." : results ? "Displaying " + results.length + " Results" : "No Results To Display"}</p>
            <div className="row align-items-start">
                <div className="col">
                    <ResultsCard 
                        title= {"App Usage Time (min/day)"}
                        average={"Average - " + averageAppUsage + " Minutes"}
                        median = {"Median - " + medianAppUsage + " Minutes"}                 
                    />
                </div>             
                <div className="col">
                    <ResultsCard 
                        title= {"Screen On Time (hours/day)"}
                        average={"Average - " + averageScreenTime + " Hours"}
                        median = {"Median - " + medianScreenTime + " Hours"}                 
                    />
                </div>   
                <div className="col">
                    <ResultsCard 
                        title= {"Number of Apps Installed"}
                        average={"Average - " + averageAppsInstalled + " Apps"}
                        median = {"Median - " + medianAppsInstalled + " Apps"}                    
                    />
                </div>
                <div className="col">
                    <ResultsCard 
                        title= {"Age"}
                        average={"Average - " + averageAge + " Years Old"}
                        median = {"Median - " + medianAge + " Yeas Old"}                 
                    />
                </div>
            </div>     
            <br />
            <ResultsTable results={ results } />     
        </div>
    </div>
  )
}

export default SearchPage

