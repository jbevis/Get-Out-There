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

export const quotes = [
                       { author: 'John Muir',
                         quote: "I’d rather be in the mountains thinking about God than in a church thinking about the mountains"},
                       { author: 'Edward Abbey',
                         quote: "Wilderness is not a luxury, but a necessity of the human spirit"},
                       { author: 'Charles Lindbergh',
                         quote: "Real freedom lies in wilderness not civilization"},
                       { author: 'John Muir',
                         quote: "The world is big and I want to have a good look at before it gets dark"},
                       { author: 'Jack Kerouac',
                         quote: "Because in the end, you won’t remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain."},
                       { author: 'Henry David Thoreau',
                         quote: "I took a walk in the woods and came out taller than the trees."},
                       { author: 'William Shakespeare',
                         quote: "One touch of nature makes the whole world kin."},
                       { author: 'Abraham Lincoln',
                         quote: "Laws change; people die; the land remains."},
                       { author: 'Terry Tempest Williams',
                         quote: "To be whole. To be complete. Wildness reminds us what it means to be human, what we are connected to rather than what we are separate from."},
                      ]
