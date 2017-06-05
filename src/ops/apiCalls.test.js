import fetchMock from 'fetch-mock';
// import nock from 'nock';
import apiCalls from './apiCalls';
import { trailsKey } from '../apiKeys';
import expect from 'expect';

describe.skip('Testing api calls', () => {
  const location = 'denver'
  const radius = '20'
  const mockCoordinates = { lat: 39.487, long: -105.0908 }
  const mockTrailsObj = {
                          trails: [
                                    {
                                      id: 7008385,
                                      name: "Highline Canal Trail",
                                      longitude: -105.0908,
                                      latitude: 39.487
                                    },
                                    {
                                      id: 7011837,
                                      name: "City Park Loop",
                                      longitude: -104.9567,
                                      latitude: 39.7495
                                    }
                          ],
                          success: 1
                          }
  const mockConditions = {
                          0: {
                              id: 7000108,
                              name: "Angels Landing",
                              url: "https://www.hikingproject.com/trail/7000108/angels-landing",
                              urlConditionsHistory: "https://www.hikingproject.com/trail/7000108/angels-landing?modal=trail-conditions-modal",
                              urlConditionsUpdate: "https://www.hikingproject.com/trail/7000108/angels-landing?action=update-conditions",
                              conditionStatus: "All Clear",
                              conditionColor: "Green",
                              conditionDetails: "Dry",
                              conditionImg: "https://cdn.apstatic.com/img/conditions/green.svg",
                              conditionDate: "2017-04-23 14:29:37"
                          }
                        }

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('should return the lat and long based on a search area', async () => {

    const mockMaps = fetchMock.mock('https://maps.googleapis.com/maps/api/geocode/json?address=denver', {
      status: 200,
      body: mockCoordinates
    })

    const mockTrails = fetchMock.mock(`https://www.hikingproject.com/data/get-trails?lat=39.487&lon=-105.0908&maxDistance=${radius}&maxResults=20&key=${trailsKey}`, {
      status: 200,
      body: mockTrailsObj
    })

    const promise = Promise.all([mockMaps, mockTrails])

    const search = apiCalls.searchByLocation(location, radius)

    const mockApiCalls = () => {
      promise
      search
    }

    mockApiCalls()

    console.log(search);

    expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.lastUrl()).toEqual(`https://www.hikingproject.com/data/get-trails?lat=39.487&lon=-105.0908&maxDistance=20&maxResults=20&key=${trailsKey}`);
  })
})
