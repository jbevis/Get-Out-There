import React from 'react';
import { randomQuoteGenerate } from '../../ops/logic'
import { quotes } from '../../ops/graphData'

export const WelcomeCard = () => {
  const quote = randomQuoteGenerate(quotes)
  return (
    <article className='welcome-card'>
      {/* <h3>Find your next adventure</h3> */}
      <h2 className='quote'>"{quote.quote}"</h2>
      <h4 className='quote'>- {quote.author}</h4>
    </article>
  )
}
