import React from 'react'
import { BackgroundBeamsWithCollisionDemo } from './Premium_Banner'
import PremiumPlans from './Premium_Card'

const Premium_Content = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <BackgroundBeamsWithCollisionDemo />
      </div>
      <div className="w-full mt-4">
        <PremiumPlans/>
      </div>
    </div>
  )
}

export default Premium_Content