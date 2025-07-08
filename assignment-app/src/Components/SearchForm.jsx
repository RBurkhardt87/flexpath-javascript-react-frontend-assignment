import PropTypes from 'prop-types';
import React from 'react'


const SearchForm = ({ handleSubmit, handleKeyword, handleFilterType, keyword, filterType }) => {

          
  return (
    <div>
        <div className='container'>
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
        </div>
    </div>
  )
}

export default SearchForm;

SearchForm.propTypes = {
    handleSubmit: PropTypes.func,
    handleKeyword: PropTypes.func,
    handleFilterType: PropTypes.func,
    keyword: PropTypes.string,
    filterType: PropTypes.string
};