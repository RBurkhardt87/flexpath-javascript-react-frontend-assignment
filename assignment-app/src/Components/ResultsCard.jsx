import PropTypes from 'prop-types';
import React from 'react'

const ResultsCard = ({ title, average, median }) => {

   
  return (

                    <div>
                    <div className="card" >
                        <div className="card-body text-center">
                            <h5 className="card-title">{ title }</h5>
                            <p className="card-subtitle mb-2 ">{ average }</p>
                            <p className="card-subtitle mb-2 "> { median } </p>
                        </div>
                    </div>
                </div>
  )
}

export default ResultsCard

ResultsCard.propTypes = {
    title: PropTypes.string,
    average: PropTypes.number,
    median: PropTypes.number
};