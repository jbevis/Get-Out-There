import React, { Component } from 'react';
import { Card } from '../Card/Card';
import { WelcomeCard } from '../WelcomeCard/WelcomeCard';
import FilterControls from '../FilterControls/FilterControls'
import PropTypes from 'prop-types';

export default class CardGrid extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   filter: ''
    // }
  }

  render() {
    const { trails, displayTrails, handleSetDisplay, handleGetConditions } = this.props;
    const trailKeys = Object.keys(trails)
    const displayKeys = Object.keys(displayTrails)

    if (!trailKeys.length) { return <WelcomeCard /> }

    else if (!displayKeys.length) {
      return (
        <section className="card-grid">
          <FilterControls trails={trails}
                          handleSetDisplay={handleSetDisplay} />
          {/* <div id="filter-bar">
            <label>Filter by Difficulty:</label>
            <select name='difficulty'
              onChange={(e) => {this.setState({filter: e.target.value})}}>
              <option value='show-all'>Show All</option>
              <option value='green'>Easy</option>
              <option value='greenBlue'>Easy/Intermediate</option>
              <option value='blue'>Intermediate</option>
              <option value='blueBlack'>Intermediate/Difficult</option>
              <option value='black'>Difficult</option>
              <option value='dblack'>Extremely Difficult</option>
            </select>
            <button className='filter-btn'
              onClick={() => handleSetDisplay(trails, this.state.filter)}>
              Filter
            </button>
          </div> */}
          <section className='welcome-card'>
            <h3>Sorry, no trails matched that difficulty</h3>
            <p id='back-link'
               onClick={() => handleSetDisplay(trails, 'show-all') } >
              Back to trails
            </p>
          </section>
        </section>
      )
    }

    return (
      <section className="card-grid">
        <FilterControls trails={trails}
                        handleSetDisplay={handleSetDisplay} />

        {/* <div id="filter-bar">
          <label>Filter by Difficulty:</label>
          <select name='difficulty'
            onChange={(e) => {this.setState({filter: e.target.value})}}>
            <option value='show-all'>Show All</option>
            <option value='green'>Easy</option>
            <option value='greenBlue'>Easy/Intermediate</option>
            <option value='blue'>Intermediate</option>
            <option value='blueBlack'>Intermediate/Difficult</option>
            <option value='black'>Difficult</option>
            <option value='dblack'>Extremely Difficult</option>
          </select>
          <button className='filter-btn'
                  onClick={() => handleSetDisplay(trails, this.state.filter)}>
            Filter
          </button>
        </div> */}
        { displayKeys.map((key, index) => {
          return (
            <Card key={index}
                  trail={displayTrails[key]}
                  handleGetConditions={handleGetConditions}/>
            )
          }) }
        </section>
      )
    }
}

CardGrid.propTypes = {
  trails: PropTypes.object.isRequired,
  displayTrails: PropTypes.object.isRequired,
  handleGetConditions: PropTypes.func.isRequired,
  handleSetDisplay: PropTypes.func.isRequired,
  handleGetConditions: PropTypes.func.isRequired
}
