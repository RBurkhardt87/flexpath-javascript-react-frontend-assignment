import React from 'react'

const ResultsCard = () => {

    let testingData = {
        title : "App Usage Time min/day",
        average: "271",
        median: "227.5"
    }

    let testData = [
        {
            title : "App Usage Time min/day",
            appUsageTime: "271",
            
        },
        {
            title : "App Usage Time min/day",
            appUsageTime: "393",
        },
        {
            title : "App Usage Time min/day",
            appUsageTime: "239",           
        },
        {
            title : "App Usage Time min/day",
            appUsageTime: "154",           
        }
    ]


    /*
    NOTE: To find the median, you have to put the numbers in ascending order.
    For Odd: the median is the number in the middle of the set
    For Even: you add the two middle numbers together and divide by 2 (find the average)

    FIRST THOUGHT PROCESS: there's got to be a cleaner way to do the median... 

    ---> use a mathematical method that puts the numbers from smallest to largest. 
    ---> check if the number set is odd or even by looking for a remainder when divided by 2
    ---> NOTE:  check the length of the array of objects to test if odd or even
                If odd, take the length -1 and divide by 2. Then iterate over that number plus 1 to find the median
                EX: 7 objects:::  7-1 = 6    6/2 =3  3+1 = 4 (which is the median number) 1 2 3 4 5 6 7
    ---> NOTE:  If even, divide the length by 2. Then add that number plus the next number together and divide by 2
                EX: 6 objects::: 6/2 = 3    3+4=7   7/3= 3.5 (which is the median number) 1 2 3 4 5 6



    NOTE:   The average is just adding all the numbers in the set together and dividing by how many numbers are in the set. 
            Add all the numbers for the objects returned as results together, and divide that number by the length of the array.
            EX: 1+2+3+4+5+6+7 = 28  28/7 = 4 (which is the average) 


    NOTE:   Create two functions that will do the math. 
            We need to be able to reuse these functions for the four different keys: App Usage Time, Screen Time On, Number Of Apps installed, Age

           
            NOTE: NOTE: NOTE: read something about using map and reduce method together to get the sum of a specific property of an 
            array of objects. Then I can divide that sum to reach the average.

            So, map over the specific property. It will create a new array with those values. 
                EX:     let appUsageTimes = results.map(result => result.appUsageTime)

            Look up syntax for reduce method... 
    
    */



   


  return (
    <div>
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{ testingData.title }</h5>
                <h6 className="card-subtitle mb-2 text-muted">Average - { testingData.average } minutes</h6>
                <p className="card-text">Median - { testingData.median } minutes </p>
            </div>
        </div>
    </div>
  )
}

export default ResultsCard
