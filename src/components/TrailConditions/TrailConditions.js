import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTheme } from 'victory';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const TrailConditions = ({ currentConditions }) => {
  const elevGain = [
  {trailPoint: 1, elev: currentConditions.high},
  {trailPoint: 2, elev: currentConditions.high + (currentConditions.ascent / 2)},
  {trailPoint: 3, elev: currentConditions.low},
  {trailPoint: 4, elev: currentConditions.high + (currentConditions.ascent / 2)},
  {trailPoint: 5, elev: currentConditions.high}
];

  const totalGain = [
  {trailPoint: 1, elev: currentConditions.ascent},
  {trailPoint: 2, elev: currentConditions.ascent - (currentConditions.ascent / 2)},
  {trailPoint: 3, elev: 0},
  {trailPoint: 4, elev: (currentConditions.ascent / 2)},
  {trailPoint: 5, elev: currentConditions.ascent}
];

  const currentKeys = Object.keys(currentConditions)
  if (!currentKeys.length) {
    return (
      <section   className="trail-conditions">
        <NavLink to='/'
                 activeClassName='nav-button'
                 className='button'>
          Back To Trails
        </NavLink>
        <h4>Please select a trail to see conditions</h4>
      </section>
    )
  }

  return (
    <section className="trail-conditions">
      <NavLink to='/'
               activeClassName='nav-button'
               className='button'>
        Back To Trails
      </NavLink>
      <h4>{currentConditions.name}</h4>
      <img  id='meter'alt={currentConditions.conditionColor}
            src={currentConditions.conditionImg} />
      <p>{currentConditions.conditionStatus}</p>
      <p>{currentConditions.conditionDetails}</p>
      <p>Latest Update: {currentConditions.conditionDate}</p>
      <p>length: {currentConditions.length} miles</p>
      <p>Elevation Gain:</p>
      <section className="data-sets">
        <VictoryChart domainPadding={20}
                      theme={VictoryTheme.material}
                      responsive={false}
                      id='elevation'>
        <VictoryAxis  tickValues={[1, 2, 3, 4, 5]}
                      tickFormat={[ "Trailhead",
                                    "1/2",
                                    "Summit",
                                    "3/4",
                                    "End"
                                  ]}
        />
        <VictoryAxis  dependentAxis
                      label='Elevation (feet)'
                      tickFormat={(x) => (`${x}'`)} />
        <VictoryStack colorScale={"heatmap"} >
          <VictoryBar data={elevGain}
                      x="trailPoint"
                      y="elev"
                      animate={{ onLoad: { duration: 500 } }} />
          <VictoryBar data={totalGain}
                      x="trailPoint"
                      y="elev"
                      animate={{ onLoad: { duration: 500 } }} />
        </VictoryStack>
      </VictoryChart>
      </section>
    </section>
  )
}

TrailConditions.propTypes = {
  currentConditions: PropTypes.object.isRequired,
}
