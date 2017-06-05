export const createElevGain= (data) => {
  return [
  {trailPoint: 1, elev: data.high},
  {trailPoint: 2, elev: data.high + (data.ascent / 2)},
  {trailPoint: 3, elev: data.low},
  {trailPoint: 4, elev: data.high + (data.ascent / 2)},
  {trailPoint: 5, elev: data.high}
  ];
}

export const createTotalGain= (data) => {
  return [
    {trailPoint: 1, elev: data.ascent},
    {trailPoint: 2, elev: data.ascent - (data.ascent / 2)},
    {trailPoint: 3, elev: 0},
    {trailPoint: 4, elev: (data.ascent / 2)},
    {trailPoint: 5, elev: data.ascent}
  ];
}
