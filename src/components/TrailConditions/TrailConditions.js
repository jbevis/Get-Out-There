import React from 'react';
// import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryArea, VictoryStack, VictoryTheme } from 'victory';
import { NavLink } from 'react-router-dom';

export const TrailConditions = ({ currentConditions }) => {
  console.log(currentConditions.length, currentConditions.ascent);
  const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];



  const currentKeys = Object.keys(currentConditions)
  if (!currentKeys.length) {
    return (
      <section className="trail-conditions">
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
      <img alt={currentConditions.conditionColor} src={currentConditions.conditionImg} />
      <p>{currentConditions.conditionStatus}</p>
      <p>{currentConditions.conditionDetails}</p>
      <p>Latest Update: {currentConditions.conditionDate}</p>
      <p>length: {currentConditions.length} miles</p>
      <section className="data-sets">
        <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryStack>
          <VictoryBar
            data={data2012}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2013}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2014}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2015}
            x="quarter"
            y="earnings"
          />
        </VictoryStack>
      </VictoryChart>
        {/* <VictoryChart domainPadding={10}>
          <VictoryBar data={trailLength} x="label" y="stat"
            animate={{ onLoad: { duration: 1000 } }}
            style={{ data: { width: 50 } }}
            colorScale={'warm'}
          />
        </VictoryChart> */}
      </section>
    </section>
  )
}
