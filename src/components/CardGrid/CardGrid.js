import React, { Component } from 'react';
import { Card } from '../Card/Card';
import { WelcomeCard } from '../WelcomeCard/WelcomeCard';
import FilterControls from '../FilterControls/FilterControls'
import PropTypes from 'prop-types';

export default class CardGrid extends Component {
  constructor(props) {
    super(props)
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
