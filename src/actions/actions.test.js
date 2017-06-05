import * as actions from './index';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';
import { trails, conditions } from '../ops/mockData'

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

  it('should create an action to show trails', () => {
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
      type: 'SHOW_TRAILS',
      trails
    }

    expect(actions.showTrails(trails)).toEqual(expectedAction)
  })

  it('should create an action to get trail conditions', () => {
    const conditions = { trailA: { name: 'trailA',
                                   difficulty: 'green',
                                   length: 5.5,
                                   summary: 'its a great trail',
                                   currentConditions: 'muddy',
                                   conditionsHistory: 'typically dry trail, with some wet spots during late spring'
                             }
                      }

    const expectedAction = {
      type: 'GET_CONDITIONS',
      conditions
    }

    expect(actions.getConditions(conditions)).toEqual(expectedAction)
  })
})

describe('Testing async actions', () => {

  const middlewares = [ thunk ];
  const mockStore = configureMockStore(middlewares);

  afterEach(() => {
    nock.cleanAll()
  })

  it('creates GET_TRAILS and SHOW_TRAILS when fetching trails has been completed', () => {

    nock('https://maps.google.com')
    .get('/api/geocode/json?addres=denver')
    .reply(200, {lat: '39.7392', long: '-104.9903'} )

    nock('https://www.thehikingproject.com')
    .get('/data/')
    .reply(200, trails )

    const expectedActions = [
      { type: 'GET_TRAILS', trails},
      { type: 'SHOW_TRAILS', trails}
    ]

    const store = mockStore({ trails: {}, display: {} })

    return store.dispatch(actions.fetchTrails())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('creates a GET_CONDITIONS action object when fetching conditions has resolved', () => {
    const trail = { id: 7008385,
                    name: 'test trail'
                  }

    nock('https://www.thehikingproject.com')
    .get('/conditions/')
    .reply(200, trails )

    const expectedAction = [
      { type: 'GET_CONDITIONS', conditions}
    ]

    const store = mockStore({ conditions: {} })

    return store.dispatch(actions.fetchConditions(trail))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction)
      })
  })
})
