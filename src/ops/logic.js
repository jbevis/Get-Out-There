import icon from '../images/hikeicon.svg';

export const formatConditionData = (trail, conditions) => {
  return Object.assign({}, trail, conditions)
}

export const formatTrailData = (data) => {
  return data.trails.reduce((acc, trail) => {
    if (!acc[trail.name]) {
      acc[trail.name] = trail
    }
    return acc
  }, {})
}

export const imgCheck = (image) => {
  return image === "" ? icon : image
}

export const randomQuoteGenerate = (quotes) => {
  return quotes[Math.floor(Math.random()*quotes.length)];
}

export const difficultyLevel = (difficulty) => {
  switch (difficulty.difficulty) {
  case 'green':
    return 'Easy'
  case 'greenBlue':
    return 'Easy/Intermediate'
  case 'blue':
    return 'Intermediate'
  case 'blueBlack':
    return 'Intermediate/Difficult'
  case 'black':
    return 'Difficult'
  case 'dblack':
    return 'Extremely Difficult'
  default:
  }
}
