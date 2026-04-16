import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchBar } from '../../../Components/Utilities/BasicUtils'
import { FoodCard, RestroCard } from '../../../Components/Utilities/Cards'
import { FaHamburger, FaLeaf, FaSlidersH, FaStar } from 'react-icons/fa'
import { GiMeal } from 'react-icons/gi'
import { dishSearchResults, restaurantSearchResults } from '../../../utils/constants'

const filterPills = [
  { label: 'Rating 4.5+', icon: <FaStar className='text-[#d98c1f]' /> },
  { label: 'Under 30 min' },
  { label: 'Price: Low to High' },
  { label: 'Vegetarian', icon: <FaLeaf className='text-[#2d8b47]' /> },
]

const FilterChip = ({ label, icon, active = false, variant = 'default' }) => {
  if (variant === 'primary') {
    return (
      <button className='inline-flex items-center gap-2 rounded-full bg-[#4f2206] px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(79,34,6,0.22)] transition duration-300 hover:bg-[#6a300d]'>
        {icon}
        <span>{label}</span>
      </button>
    )
  }

  return (
    <button
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition duration-300 ${
        active
          ? 'border-[#d7b792] bg-[#fff4e6] text-[#5b2d11]'
          : 'border-[#eadfce] bg-white/90 text-[#4f2308] hover:border-[#ddb98e] hover:bg-[#fff9f1]'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

const SectionTitle = ({ icon, title }) => (
  <div className='mb-6 flex items-center gap-3 text-[#4a2008]'>
    <div className='text-2xl text-[#efb12d]'>{icon}</div>
    <h2 className='text-[2rem] font-semibold tracking-tight'>{title}</h2>
  </div>
)

const SearchPage = () => {
  const [params, setParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchedTerm, setSearchedTerm] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [visibleRestaurants, setVisibleRestaurants] = useState(4)

  useEffect(() => {
    const query = params.get('query') || ''
    setSearchTerm(query)
    setSearchedTerm(query)
    setHasSearched(Boolean(query))
    setVisibleRestaurants(4)
  }, [params])

  const handleSearch = () => {
    const nextQuery = searchTerm.trim()
    setSearchedTerm(nextQuery)
    setHasSearched(Boolean(nextQuery))
    setVisibleRestaurants(4)
    setParams(nextQuery ? { query: nextQuery } : {})
  }

  const shownRestaurants = restaurantSearchResults.slice(0, visibleRestaurants)
  const hasMoreRestaurants = visibleRestaurants < restaurantSearchResults.length

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,#f9edd8_0%,#fcf6ea_30%,#fcf7ef_100%)] text-[#4a2008]'>
      <div className='mx-auto flex w-full max-w-[1180px] flex-col px-6 pb-24 pt-10 md:px-8 lg:px-10'>
        <section className='relative overflow-hidden rounded-[36px] px-5 py-10 md:px-10 md:py-14'>
          <div className='pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-[#f6dbad]/40 blur-3xl' />
          <div className='relative mx-auto flex max-w-[760px] flex-col items-center'>
            <SearchBar
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              onSubmit={handleSearch}
              className='w-full'
              placeholder='Search spicy food, cuisines, or restaurants'
            />
            {hasSearched ? (
              <p className='mt-5 text-center text-sm text-[#b27f57] md:text-base'>
                Found <span className='font-semibold text-[#8c4e1c]'>{dishSearchResults.length + restaurantSearchResults.length} results</span> for "{searchedTerm}"
              </p>
            ) : (
              <p className='mt-5 text-center text-sm text-[#b27f57] md:text-base'>
                Search to explore dishes and restaurants around you.
              </p>
            )}
          </div>
        </section>

        {hasSearched ? (
          <>
            <section className='mt-10 flex flex-wrap items-center gap-3'>
              <FilterChip label='Filters' icon={<FaSlidersH />} variant='primary' />
              {filterPills.map((filter) => (
                <FilterChip key={filter.label} {...filter} />
              ))}
              <div className='mx-1 hidden h-8 w-px bg-[#e4d4be] md:block' />
              <button className='px-3 py-2 text-sm font-medium text-[#b06e35] transition duration-300 hover:text-[#7d4316]'>
                Clear all
              </button>
            </section>

            <section className='mt-14'>
              <SectionTitle icon={<FaHamburger />} title='Dishes' />
              <div className='overflow-x-auto pb-4'>
                <div className='flex w-max gap-5 pr-6'>
                  {dishSearchResults.map((dish) => (
                    <FoodCard key={dish.title} data={{ ...dish, compact: true, className: 'min-w-[280px]' }} />
                  ))}
                </div>
              </div>
            </section>

            <section className='mt-14'>
              <SectionTitle icon={<GiMeal />} title='Restaurants' />
              <div className='grid gap-5 lg:grid-cols-2'>
                {shownRestaurants.map((restaurant) => (
                  <RestroCard key={restaurant.title} data={restaurant} />
                ))}
              </div>
              {hasMoreRestaurants ? (
                <div className='mt-8 flex justify-center'>
                  <button
                    className='rounded-[18px] border border-[#dfbf97] bg-white px-7 py-4 text-base font-semibold text-[#6d3811] shadow-[0_12px_24px_rgba(109,56,17,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff6eb]'
                    onClick={() => setVisibleRestaurants((count) => count + 2)}
                  >
                    Load More Restaurants
                  </button>
                </div>
              ) : null}
            </section>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default SearchPage
