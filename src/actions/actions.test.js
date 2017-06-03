import * as actions from './index';
import fetchMock from 'fetch-mock';
import jest from 'jest';
import expect from 'expect';

describe('Testing actions', () => {

  it('should create an action to get trails based on search criteria', () => {
    const trails = { trailA: { name: 'trailA',
                               difficulty: 'green',
                               length: 5.5,
                               summary: 'its a great trail'
                             },
                     trailB: { name: 'trailB',
                               difficulty: 'blue',
                               length: 8.5,
                               summary: 'its a steep trail'
                             }
                  }
    const expectedAction = {
      type: 'GET_TRAILS',
      trails
    }

    expect(actions.getTrails(trails)).toEqual(expectedAction)
  })

  it('should create an action to set filtered trails', () => {
    const filter = { trailA: { name: 'trailA',
                               difficulty: 'green',
                               length: 5.5,
                               summary: 'its a great trail'
                             }
                           }

    const expectedAction = {
      type: 'SET_FILTER',
      filter
    }

    expect(actions.setFilter(filter)).toEqual(expectedAction)
  })


})
