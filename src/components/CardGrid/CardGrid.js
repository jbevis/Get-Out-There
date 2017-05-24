import React, { Component } from 'react';
import { Card } from '../Card/Card'

export default class CardGrid extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { trails } = this.props;
    const trailKeys = Object.keys(trails)

    if (!trails.length) {
      return (
        <h3>No trails in the area</h3>
      )
    }
    return (
      <section className="card-grid">
        { trailKeys.map((trail, index) => {
          return (
            <Card trails={trails}/>
          )
        })}
      </section>
    )
  }
}
