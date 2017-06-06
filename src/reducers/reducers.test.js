import conditionsReducer from './conditionsReducer';
import displayReducer from './displayReducer';
import trailsReducer from './trailsReducer';

import expect from 'expect';

describe('conditions reducer testing', () => {

  it('should return the initial state', ()=> {

    expect(conditionsReducer(undefined, {})).toEqual({})
  })

  it('should return the current conditions of a given trail', () => {
    const action = {
      type: 'GET_CONDITIONS',
      conditions: { trailA: { currentConditions: 'dry',
                              weather: 'sunny'
                            }
                  }
    }

    const expected = { trailA: { currentConditions: 'dry',
                            weather: 'sunny'
                          }
                }

    expect(conditionsReducer({}, action)).toEqual(expected)
  })
})

describe('display reducer testing', () => {

  it('should return the initial state', ()=> {

    expect(displayReducer(undefined, {})).toEqual({})
  })

  it('should display the trail data based on what has been dispatched', () => {
    const action = {
      type: 'SHOW_TRAILS',
      trails: { trailA: { name: 'trail A',
                          length: 5,
                          difficulty: 'green'
                        },
                diffLevel: 'green'
                  }
    }

    const expected = { diffLevel: 'green',
                       trailA: { name: 'trail A',
                        length: 5,
                        difficulty: 'green'
                          }
                }

    expect(displayReducer({}, action)).toEqual(expected)
  })
})

describe('trails reducer testing', () => {

  it('should return the initial state', ()=> {

    expect(displayReducer(undefined, {})).toEqual({})
  })

  it('should return an object of corresponding trail data', () => {
    const action = {
      type: 'GET_TRAILS',
      trails: { trailA: { name: 'trail A',
                          length: 5,
                          difficulty: 'green'
                        },
                trailB: { name: 'trail B',
                          length: 7,
                          difficulty: 'blue'
                        }
              }
    }

    const expected = { trailA: { name: 'trail A',
                        length: 5,
                        difficulty: 'green'
                      },
              trailB: { name: 'trail B',
                        length: 7,
                        difficulty: 'blue'
                      }
            }

    expect(trailsReducer({}, action)).toEqual(expected)
  })
})
