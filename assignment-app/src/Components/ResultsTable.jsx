import PropTypes from 'prop-types';
import React from 'react'

const ResultsTable = ({ results }) => {


  return (
    <div>
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
                        <td>{ result["Number of Apps Installed"]}</td>
                        <td>{ result["Data Usage (MB/day)"]}</td>
                        <td>{ result["Age"]}</td>
                        <td>{ result["Gender"]}</td>
                        <td>{ result["User Behavior Class"] }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ResultsTable

ResultsTable.propTypes = {
    results: PropTypes.array
};