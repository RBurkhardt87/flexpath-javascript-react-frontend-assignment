import React, { useState } from 'react'
import ResultsCard from '../Components/ResultsCard'




const SearchPage = () => {

    const [filterType, setFilterType] = useState("Device Model");
    const [keyword, setKeyword] = useState("");
    const [error, setError] = useState("");
    const [results, setResults] = useState([]);
    
    
    
    function handleFilterType(e) {
        setFilterType(e.target.value);
    }

    function handleKeyword(e) {
        setKeyword(e.target.value);
    }

    
    async function handleSubmit(e) {
        e.preventDefault();    
                
        //FETCH ALL THE DATA FROM API
        try {
            const response = await fetch("/api/data/search");
            const data = await response.json();
            console.log(data);


        //BEGIN FILTERING THE DATA USING USER INPUT
        //NOTE: look at Looping and Conditional Branching in JS video 

        if (keyword){
            let filteredData = data.filter(item => 
            item[filterType].toLowerCase() === keyword.toLowerCase());
            console.log("filtered results: ", filteredData);
            setResults(filteredData);
        } else {
            setResults(data);
        }



        
       


        } catch (error) {
            console.error("Something went wrong", error);
        }
    }

     console.log("Results: ", results);

/*
        NOTE:

              Once I get the filtering to work, I can then start working on displaying the data dynamically in the table. I believe I should be 
              able to map over the objects and create a new row for each one.

              Next, if my thinking is correct, I will need to write some functions that will give me the average and median of the search results
              displaying to populate the cards. I will save that for the end.

              After I get everything working, I can figure out if I want to break all of it up into components and just assemble it together on the SearchPage, but I will wait until I know I understand how to get things to work

*/              

    


  return (
    <div>
        <div className='container'>
            <h1>Search Page</h1>
            <br />
            <br />

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
       
            
            <br />

            

            <p>Display Message will be here... but will make it dynamic data</p>


            <ResultsCard />

            <br />

     

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">Device Model</th>
                        <th scope="col">Operating System</th>
                        <th scope="col">App Usage Time (min/day)</th>
                        <th scope="col">Screen On Time (hours/day)</th>
                        <th scope="col">Battery Drain (mAh/day)</th>
                        <th scope="col">Number of Apps Installed</th>
                        <th scope="col">Data Usage (MB/day)</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">User Behavior Class</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, index) => (
                        <tr key={index}>
                            <th scope="row">{ result["User ID"] }</th>
                            <td>{ result["Device Model"]}</td>
                            <td>{ result["Operating System"]}</td>
                            <td>{ result["App Usage Time (min/day)"]}</td>
                            <td>{ result["Screen On Time (hours/day)"]}</td>
                            <td>{ result["Battery Drain (mAh/day)"]}</td>
                            <td>{ result["Number Of Apps Installed"]}</td>
                            <td>{ result["Data Usage (MB/day)"]}</td>
                            <td>{ result["Age"]}</td>
                            <td>{ result["Gender"]}</td>
                            <td>{ result["User Behavior Class"] }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default SearchPage

/*

Map example:
      {items.map((item, index) => (
        <li key={index}>{item}</li> 
      ))}


NOTE: the spaces in the key names are throwing things off, look up how to deal with accessing those values for the table
*/