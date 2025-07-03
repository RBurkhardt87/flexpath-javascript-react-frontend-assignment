import React from 'react'

const ResultsCard = () => {

    let testingData = {
        title : "App Usage Time min/day",
        average: "271",
        median: "227.5"
    }



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
