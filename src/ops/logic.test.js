import * as helpers from './logic';
import icon from '../images/hikeicon.svg';
import expect from 'expect';
import { createElevGain, createTotalGain } from './graphData';

describe('testing helper functions', () => {

  it('should format the condition data', () => {
    const trail = { trail: 'Trail A' }
    const conditions = { conditions: 'very cloudy' }
    const expected = { trail: 'Trail A',
                       conditions: 'very cloudy'
                     }

    expect(helpers.formatConditionData(trail, conditions)).toEqual(expected)
  })

  it('should return the default image if passed an empty string', () => {

    expect(helpers.imgCheck("")).toEqual(icon)
  })

  it('should format trail data', () => {
    const data = {
                  trails: [
                            {
                              id: 7008385,
                              name: "Highline Canal Trail",
                              type: "Featured Hike",
                              summary: "Widely recognized as one of the best urban trails in the country.",
                              difficulty: "green",
                              stars: 4.5,
                              starVotes: 4,
                              location: "Roxborough Park, Colorado",
                              url: "https://www.hikingproject.com/trail/7008385/highline-canal-trail",
                              imgSqSmall: "https://cdn-files.apstatic.com/hike/7007020_sqsmall_1441647849.jpg",
                              imgSmall: "https://cdn-files.apstatic.com/hike/7007020_small_1441647849.jpg",
                              imgSmallMed: "https://cdn-files.apstatic.com/hike/7007020_smallMed_1441647849.jpg",
                              imgMedium: "https://cdn-files.apstatic.com/hike/7007020_medium_1441647849.jpg",
                              length: 61.3,
                              ascent: 369,
                              descent: -468,
                              high: 5435,
                              low: 5549,
                              longitude: -105.0908,
                              latitude: 39.487
                            }
                          ]
                      }
    const expected = { "Highline Canal Trail": {  id: 7008385,
                                                  name: "Highline Canal Trail",
                                                  type: "Featured Hike",
                                                  summary: "Widely recognized as one of the best urban trails in the country.",
                                                  difficulty: "green",
                                                  stars: 4.5,
                                                  starVotes: 4,
                                                  location: "Roxborough Park, Colorado",
                                                  url: "https://www.hikingproject.com/trail/7008385/highline-canal-trail",
                                                  imgSqSmall: "https://cdn-files.apstatic.com/hike/7007020_sqsmall_1441647849.jpg",
                                                  imgSmall: "https://cdn-files.apstatic.com/hike/7007020_small_1441647849.jpg",
                                                  imgSmallMed: "https://cdn-files.apstatic.com/hike/7007020_smallMed_1441647849.jpg",
                                                  imgMedium: "https://cdn-files.apstatic.com/hike/7007020_medium_1441647849.jpg",
                                                  length: 61.3,
                                                  ascent: 369,
                                                  descent: -468,
                                                  high: 5435,
                                                  low: 5549,
                                                  longitude: -105.0908,
                                                  latitude: 39.487
                                                }
                      }
    expect(helpers.formatTrailData(data)).toEqual(expected)
  })

  it('should return the correct string based on switch statement for filter', () => {

    const green = {difficulty: 'green'}
    const greenBlue = {difficulty: 'greenBlue'}
    const blue = {difficulty: 'blue'}
    const blueBlack = {difficulty: 'blueBlack'}
    const black = {difficulty: 'black'}
    const dblack = {difficulty: 'dblack'}

    expect(helpers.difficultyLevel(green)).toEqual('Easy')
    expect(helpers.difficultyLevel(greenBlue)).toEqual('Easy/Intermediate')
    expect(helpers.difficultyLevel(blue)).toEqual('Intermediate')
    expect(helpers.difficultyLevel(blueBlack)).toEqual('Intermediate/Difficult')
    expect(helpers.difficultyLevel(black)).toEqual('Difficult')
    expect(helpers.difficultyLevel(dblack)).toEqual('Extremely Difficult')
  })

  it('should create data for the elevation graph', () => {
    const mockData = { high: 7000,
                 low: 5280,
                 ascent: 1720
               }

    const expectedGain = [  { elev: 7000, trailPoint: 1 },
                            { elev: 7860, trailPoint: 2 },
                            { elev: 5280, trailPoint: 3 },
                            { elev: 7860, trailPoint: 4 },
                            { elev: 7000, trailPoint: 5 }
                          ]
    const expectedTotal = [ { elev: 1720, trailPoint: 1 },
                            { elev: 860, trailPoint: 2 },
                            { elev: 0, trailPoint: 3 },
                            { elev: 860, trailPoint: 4 },
                            { elev: 1720, trailPoint: 5 }
                          ]

    expect(createElevGain(mockData)).toEqual(expectedGain)
    expect(createTotalGain(mockData)).toEqual(expectedTotal)
  })

  it('should generate a random quote from given array', () => {
    const array = ['hello', 'testing', '123']
    const expected = 'hello' || 'testing' || '123'

    expect(helpers.randomQuoteGenerate(array)).toEqual(expected)
  })
})
