import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'


const tiers = [
  {
    name: 'Basic',
    href: '#',
    priceMonthly: "Free",
    description: 'Get Free version for 14 Days!',
    features: [
      'Unlimited TV Display',
      'Unlimited Wokrout Tracking',
      'Unlimited Workout Performance',
    ],
  },
  {
    name: 'Premium',
    href: '#',
    priceMonthly: "$9",
    description: 'Investing in quality software make you progress fast',
    features: [
      'Unlimited Backup Data',
      'Advanced Workout Performance',
      'Special Analytics Platform',
    ],
  },
]

export default function PriceCard() {
  return (
    <div className="bg-gray-200">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-4xl leading-6  text-black font-bold  tracking-wider ">Pricing </h2>
            {/* <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-lg">
              The right price for you, whoever you are
            </p> */}
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12  sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24 bg-gray-200 ">
        <div className="relative">
          <div data-aos="fade-up" className="absolute inset-0 " />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-gray-100 sm:p-10 sm:pb-6">
                    <div >
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-100 text-gray-100"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl text-gray-900 font-extrabold">
                      {tier.priceMonthly}
                      <span className="ml-1 text-2xl font-medium text-gray-100">/mo</span>
                    </div>
                    <p className="mt-5 text-lg font-bold text-gray-700">{tier.description}</p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="  rounded-md	outline outline-blue-100 shadow">
                      <a
                        href={tier.href}
                        className="flex items-center justify-center px-5 py-3  text-base font-medium hover:bg-blue-100  "
                        aria-describedby="tier-standard"
                      >
                        Choose plan
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

