import React from 'react'
import { Card } from './Card'

export const IdeaContainer = ({ideas}) => {

  const cards = ideas.map(idea => <Card key={idea.id} {...idea} />)

  return (
    <div>
      {cards}
    </div>
  )
}