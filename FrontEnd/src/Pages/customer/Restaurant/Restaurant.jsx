import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaLocationDot, FaPhone, FaShareNodes, FaStar } from 'react-icons/fa6'
import { FaHeart, FaLeaf } from 'react-icons/fa'
import { MdOutlineVerified } from 'react-icons/md'
import { GiKnifeFork } from 'react-icons/gi'
import { getRestaurantBySlug } from '../../../utils/constants'

const BadgeIcon = ({ label }) => {
  if (label.toLowerCase().includes('best')) {
    return <FaStar />
  }
  if (label.toLowerCase().includes('sustainable')) {
    return <FaLeaf />
  }
  return <MdOutlineVerified />
}

const Restaurant = () => {
  const { restaurantSlug } = useParams()
  const restaurant = getRestaurantBySlug(restaurantSlug)
  const [activeSection, setActiveSection] = useState(restaurant?.menuSections?.[0]?.title || '')

  if (!restaurant) {
    return (
      <div className='mx-auto flex min-h-[60vh] max-w-[1100px] items-center justify-center px-6 py-16'>
        <div className='rounded-[28px] border border-[#ecdac2] bg-white px-10 py-12 text-center shadow-[0_18px_40px_rgba(104,69,21,0.08)]'>
          <h1 className='text-3xl font-semibold text-[#441d09]'>Restaurant not found</h1>
          <p className='mt-3 text-[#9a7251]'>The page you are looking for does not exist in the current sample data.</p>
          <Link
            to="/customer/collection"
            className='mt-6 inline-flex rounded-[18px] bg-[#f1b93d] px-6 py-3 font-semibold text-[#4a2208] transition duration-300 hover:bg-[#e4aa21]'
          >
            Back to Search
          </Link>
        </div>
      </div>
    )
  }

  const activeMenu =
    restaurant.menuSections.find((section) => section.title === activeSection) ||
    restaurant.menuSections[0]
  const featureSections = restaurant.menuSections.filter((section) => section.title === 'Desserts')
  const mainSections = restaurant.menuSections.filter(
    (section) => section.title !== 'Popular Items' && section.title !== 'Desserts'
  )

  return (
    <div className='min-h-screen relative z-0 text-[#411d09]'>
      <section className={`relative -z-10 h-[220px] bg-gradient-to-r ${restaurant.bannerTone}`}>
        <div className='absolute  inset-0 bg-[radial-gradient(circle_at_center,rgba(255,199,124,0.14),transparent_55%)]' />
        <div className='absolute inset-x-0 top-12 flex justify-center text-[86px] text-white/14'>
          <GiKnifeFork />
        </div>
      </section>

      <div className='mx-auto -mt-14 flex w-full max-w-[1180px] flex-col gap-6 px-6 pb-24 md:px-8 lg:px-10'>
        <section className='rounded-[30px] border border-[#ead8bf] bg-white px-6 py-7 shadow-[0_18px_45px_rgba(105,70,20,0.12)] md:px-8'>
          <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between'>
            <div className='min-w-0'>
              <h1 className='text-4xl font-semibold tracking-tight text-[#441d09] md:text-5xl'>{restaurant.name}</h1>
              <div className='mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#9b7251] md:text-base'>
                <span className='flex items-center gap-2 font-medium text-[#4a2208]'>
                  <FaStar className='text-[#f0ae2e]' />
                  {restaurant.rating}
                  <span className='font-normal text-[#a57e5b]'>({restaurant.ratingsCount})</span>
                </span>
                <span className='text-[#dbc8b4]'>•</span>
                <span>{restaurant.cuisine.join(' • ')}</span>
                <span className='text-[#dbc8b4]'>•</span>
                <span>{restaurant.distance}</span>
                <span className='text-[#dbc8b4]'>•</span>
                <span className={restaurant.isOpen ? 'text-[#0f7a34]' : 'text-[#935231]'}>
                  {restaurant.isOpen ? `Open until ${restaurant.openUntil}` : 'Currently closed'}
                </span>
              </div>
              <div className='mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#9a7251]'>
                <span className='flex items-center gap-2'>
                  <FaLocationDot className='text-[#a86d3a]' />
                  {restaurant.address}
                </span>
                <span className='flex items-center gap-2'>
                  <FaPhone className='text-[#a86d3a]' />
                  {restaurant.phone}
                </span>
              </div>
            </div>
            <div className='flex shrink-0 flex-col gap-3'>
              <button className='flex items-center justify-center gap-3 rounded-[16px] border border-[#ecd9c0] px-6 py-3 font-medium text-[#52240c] transition duration-300 hover:bg-[#fff8ef]'>
                <FaHeart className='text-[#c17b39]' />
                Save
              </button>
              <button className='flex items-center justify-center gap-3 rounded-[16px] border border-[#ecd9c0] px-6 py-3 font-medium text-[#52240c] transition duration-300 hover:bg-[#fff8ef]'>
                <FaShareNodes className='text-[#c17b39]' />
                Share
              </button>
            </div>
          </div>
          <div className='mt-6 h-px w-full bg-[#efe2cf]' />
          <div className='mt-5 flex flex-wrap gap-3'>
            {restaurant.featuredBadges.map((badge) => (
              <div key={badge.label} className={`inline-flex items-center gap-2 rounded-[12px] px-4 py-2 text-sm font-medium ${badge.tone}`}>
                <BadgeIcon label={badge.label} />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className='grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]'>
          <aside className='h-fit rounded-[24px] border border-[#ecdcc5] bg-white p-4 shadow-[0_14px_34px_rgba(108,73,27,0.08)]'>
            <h2 className='px-3 pb-3 text-2xl font-semibold text-[#4a2208]'>Menu</h2>
            <div className='space-y-2'>
              {restaurant.menuSections.map((section) => (
                <button
                  key={section.title}
                  className={`flex w-full items-center justify-between rounded-[14px] px-4 py-3 text-left text-base transition duration-300 ${
                    activeMenu.title === section.title
                      ? 'border border-[#f1c778] bg-[#fff6e6] text-[#4a2208]'
                      : 'text-[#8f6847] hover:bg-[#fffaf1]'
                  }`}
                  onClick={() => setActiveSection(section.title)}
                >
                  <span>{section.title}</span>
                  <span className='rounded-full bg-[#f8eee0] px-2 py-0.5 text-xs'>{section.count}</span>
                </button>
              ))}
            </div>
          </aside>

          <div className='space-y-10'>
            <div>
              <div className='mb-5 flex items-center gap-3'>
                <FaStar className='text-[#f0ae2e]' />
                <h2 className='text-4xl font-semibold tracking-tight'>{restaurant.popularItems.length ? 'Popular Items' : activeMenu.title}</h2>
              </div>
              <div className='grid gap-4 md:grid-cols-2'>
                {restaurant.popularItems.map((item) => (
                  <article key={item.name} className='flex items-center gap-4 rounded-[22px] border border-[#eedec8] bg-white p-4 shadow-[0_12px_28px_rgba(110,74,25,0.06)]'>
                    <div className='min-w-0 flex-1'>
                      <h3 className='text-2xl font-medium text-[#3f1b09]'>{item.name}</h3>
                      <p className='mt-2 text-sm leading-7 text-[#b18461]'>{item.description}</p>
                      <div className='mt-4 flex items-center justify-between'>
                        <span className='text-[1.9rem] font-semibold text-[#3f1b09]'>${item.price.toFixed(2)}</span>
                        <button className='flex h-10 w-10 items-center justify-center rounded-full bg-[#fbf1e2] text-xl text-[#7c4920] transition duration-300 hover:bg-[#f0e0c4]'>
                          +
                        </button>
                      </div>
                    </div>
                    <div className='h-28 w-28 shrink-0 overflow-hidden rounded-[18px] bg-[#fdf3e7]'>
                      <img src={item.image} alt={item.name} className='h-full w-full object-cover' />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {mainSections.map((section) => (
              <div key={section.title}>
                <h2 className='mb-5 text-4xl font-semibold tracking-tight'>{section.title}</h2>
                <div className='space-y-4'>
                  {section.items.map((item) => (
                    <article key={item.name} className='flex flex-col gap-4 rounded-[22px] border border-[#eedec8] bg-white p-4 shadow-[0_12px_28px_rgba(110,74,25,0.06)] sm:flex-row sm:items-center'>
                      <div className='h-28 w-full shrink-0 overflow-hidden rounded-[18px] bg-[#fbf4e3] sm:w-32'>
                        <img src={item.image} alt={item.name} className='h-full w-full object-cover' />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <div className='flex flex-wrap items-center justify-between gap-3'>
                          <h3 className='text-2xl font-medium text-[#3f1b09]'>{item.name}</h3>
                          {item.pill ? (
                            <span className='rounded-md bg-[#25b84a] px-2 py-1 text-xs font-semibold text-white'>{item.pill}</span>
                          ) : null}
                        </div>
                        <p className='mt-2 text-sm leading-7 text-[#b18461]'>{item.description}</p>
                        <div className='mt-4 flex flex-wrap items-center justify-between gap-4'>
                          <span className='text-[1.9rem] font-semibold text-[#3f1b09]'>${item.price.toFixed(2)}</span>
                          <button className='rounded-[14px] bg-[#faf0df] px-5 py-3 font-medium text-[#4a2208] transition duration-300 hover:bg-[#efdfc2]'>
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            {featureSections.map((section) => (
              <div key={section.title}>
                <h2 className='mb-5 text-4xl font-semibold tracking-tight'>{section.title}</h2>
                <div className='grid gap-4 md:grid-cols-2'>
                  {section.items.map((item) => (
                    <article key={item.name} className='rounded-[22px] border border-[#eedec8] bg-white p-4 shadow-[0_12px_28px_rgba(110,74,25,0.06)]'>
                      <div className='h-52 overflow-hidden rounded-[18px] bg-[#f7f1e7]'>
                        <img src={item.image} alt={item.name} className='h-full w-full object-cover' />
                      </div>
                      <div className='mt-4 flex items-start justify-between gap-3'>
                        <h3 className='text-2xl font-medium text-[#3f1b09]'>{item.name}</h3>
                        <span className='text-2xl font-semibold text-[#3f1b09]'>${item.price.toFixed(2)}</span>
                      </div>
                      <p className='mt-2 text-sm leading-7 text-[#b18461]'>{item.description}</p>
                      <button className='mt-5 w-full rounded-[14px] bg-[#faf0df] px-5 py-3 font-medium text-[#4a2208] transition duration-300 hover:bg-[#efdfc2]'>
                        Add to Order
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Restaurant
