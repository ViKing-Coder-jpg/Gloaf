import React from 'react'
import { FaLock, FaMinus, FaPlus, FaTag, FaTrash } from 'react-icons/fa6'
import { IoInformationCircle } from 'react-icons/io5'
import { MdOutlineArrowForward } from 'react-icons/md'
import burgerImage from '../../../assets/Images/Burger.jpg'
import cookieImage from '../../../assets/Images/cookies.jpg'
import waffleImage from '../../../assets/Images/Waffle.jpg'
import {Link} from 'react-router-dom'

const cartItems = [
  {
    id: 'classic-cheeseburger',
    name: 'Classic Cheeseburger',
    restaurant: 'Burger Joint',
    customizations: '+ Extra Cheese, No Onions, Medium Rare',
    price: 24.0,
    quantity: 2,
    image: burgerImage,
    tone: 'bg-[#fbf3d3]',
  },
  {
    id: 'warm-choco-cookies',
    name: 'Warm Choco Cookies',
    restaurant: 'Sweet Tooth Bakery',
    customizations: 'Original Flavor',
    price: 4.5,
    quantity: 1,
    image: cookieImage,
    tone: 'bg-[#f6efe3]',
  },
  {
    id: 'avocado-salad-bowl',
    name: 'Avocado Salad Bowl',
    restaurant: 'Fresh & Green',
    customizations: 'Extra Avocado, Balsamic Dressing',
    price: 14.9,
    quantity: 1,
    image: waffleImage,
    tone: 'bg-[#e5f8ee]',
  },
]

const addOnItems = [
  {
    id: 'iced-coffee',
    name: 'Iced Coffee',
    price: 3.5,
    image: waffleImage,
    tone: 'bg-[#f3f2f0]',
  },
  {
    id: 'soda-can',
    name: 'Soda Can',
    price: 1.5,
    image: cookieImage,
    tone: 'bg-[#fbeff0]',
  },
]

const subtotal = cartItems.reduce((total, item) => total + item.price, 0)
const deliveryFee = 2.99
const tax = 3.47
const total = subtotal + deliveryFee + tax

const CartItemCard = ({ item }) => (
  <article className='flex flex-col gap-3 rounded-[22px] border border-[#efdfca] bg-white p-3.5 shadow-[0_12px_28px_rgba(112,76,28,0.07)] md:flex-row md:items-start md:justify-between'>
    <div className='flex flex-1 gap-4'>
      <div className={`h-24 w-24 shrink-0 overflow-hidden rounded-[18px] ${item.tone}`}>
        <img src={item.image} alt={item.name} className='h-full w-full object-cover' />
      </div>
      <div className='flex min-w-0 flex-1 flex-col justify-between'>
        <div>
          <h3 className='text-[1.45rem] font-semibold tracking-tight text-[#431d09]'>{item.name}</h3>
          <p className='mt-0.5 text-base text-[#b18461]'>{item.restaurant}</p>
          <div className='mt-2 inline-flex rounded-[10px] bg-[#fbf2e4] px-3 py-1 text-sm text-[#b18461]'>
            {item.customizations}
          </div>
        </div>
        <div className='mt-3 flex flex-wrap items-center gap-4'>
          <div className='flex items-center rounded-[14px] border border-[#efddc4] bg-[#fffaf2] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]'>
            <button className='flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#fcf5ea] text-sm text-[#8d5626] transition duration-300 hover:bg-[#f2e2c5]'>
              <FaMinus />
            </button>
            <span className='px-4 text-lg font-semibold text-[#431d09]'>{item.quantity}</span>
            <button className='flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#f6bd2d] text-sm text-[#4a2208] transition duration-300 hover:bg-[#ebae14]'>
              <FaPlus />
            </button>
          </div>
          <button className='flex items-center gap-2 text-base text-[#ccab8b] transition duration-300 hover:text-[#a05f2b]'>
            <FaTrash />
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
    <div className='shrink-0 text-right text-[1.55rem] font-semibold text-[#431d09] md:pl-3'>
      ${item.price.toFixed(2)}
    </div>
  </article>
)

const AddOnCard = ({ item }) => (
  <article className='rounded-[20px] border border-[#efdfca] bg-white p-3 shadow-[0_12px_26px_rgba(112,76,28,0.06)]'>
    <div className={`h-20 overflow-hidden rounded-[16px] ${item.tone}`}>
      <img src={item.image} alt={item.name} className='h-full w-full object-cover' />
    </div>
    <div className='mt-4 flex items-start justify-between gap-3'>
      <div>
        <h3 className='text-lg font-semibold text-[#431d09]'>{item.name}</h3>
        <p className='mt-1 text-base text-[#a05f2b]'>${item.price.toFixed(2)}</p>
      </div>
      <button className='flex h-9 w-9 items-center justify-center rounded-full bg-[#fbf1df] text-sm text-[#a6642f] transition duration-300 hover:bg-[#f2dfbb]'>
        <FaPlus />
      </button>
    </div>
  </article>
)

const CartPage = () => {
  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,#f9edd8_0%,#fcf6ea_30%,#fcf7ef_100%)] text-[#431d09]'>
      <div className='mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-6 py-10 md:px-8 lg:px-10'>
        <div>
          <h1 className='text-4xl font-semibold tracking-tight text-[#431d09]'>Your Cart</h1>
        </div>

        <div className='grid gap-8 xl:grid-cols-[minmax(0,1fr)_350px]'>
          <section className='space-y-5'>
            <div className='flex items-center justify-between border-b border-[#eadbc7] pb-4'>
              <span className='text-xl font-semibold text-[#431d09]'>3 Items in cart</span>
              <button className='text-lg font-medium text-[#bf6a1c] transition duration-300 hover:text-[#8d4310]'>
                Clear all
              </button>
            </div>

            <div className='space-y-5'>
              {cartItems.map((item) => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>

            <div className='pt-6'>
              <h2 className='text-2xl font-semibold tracking-tight text-[#431d09]'>Frequently added together</h2>
              <div className='mt-5 grid gap-4 sm:grid-cols-2 xl:max-w-[380px]'>
                {addOnItems.map((item) => (
                  <AddOnCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>

          <aside className='space-y-5'>
            <div className='sticky top-28 rounded-[26px] border border-[#efdfca] bg-white p-6 shadow-[0_18px_40px_rgba(112,76,28,0.1)]'>
              <h2 className='text-3xl font-semibold tracking-tight text-[#431d09]'>Order Summary</h2>

              <div className='mt-7 space-y-4 text-[1.35rem]'>
                <div className='flex items-center justify-between'>
                  <span className='text-[#7b4e25]'>Subtotal</span>
                  <span className='font-semibold text-[#431d09]'>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-[#7b4e25]'>Delivery Fee</span>
                  <span className='font-semibold text-[#431d09]'>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='flex items-center gap-2 text-[#7b4e25]'>
                    Tax
                    <IoInformationCircle className='text-[#c4a07f]' />
                  </span>
                  <span className='font-semibold text-[#431d09]'>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className='mt-7 rounded-[18px] bg-[#fcf5e8] p-3.5'>
                <div className='flex gap-3'>
                  <div className='flex flex-1 items-center gap-3 rounded-[12px] border border-[#e9d8c1] bg-white px-3.5 py-3 text-[#c6a080]'>
                    <FaTag />
                    <span className='text-base'>Promo code</span>
                  </div>
                  <button className='rounded-[12px] bg-[#9a5317] px-5 py-3 text-base font-semibold text-white transition duration-300 hover:bg-[#7f4312]'>
                    Apply
                  </button>
                </div>
              </div>

              <div className='mt-7 border-t border-dashed border-[#e9d8c1] pt-7'>
                <div className='mb-2 text-right text-sm uppercase tracking-[0.28em] text-[#c1a58a]'>USD</div>
                <div className='flex items-end justify-between gap-4'>
                  <span className='text-2xl font-semibold text-[#431d09]'>Total</span>
                  <span className='text-4xl font-semibold tracking-tight text-[#4a2208]'>${total.toFixed(2)}</span>
                </div>
              </div>
                <Link to='/customer/checkout' >
              <button className='mt-7 flex w-full items-center justify-center gap-3 rounded-[18px] bg-[#f7bc2f] px-7 py-3.5 text-[1.35rem] font-semibold text-[#431d09] shadow-[0_14px_30px_rgba(247,188,47,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#efb217]'>
                Proceed to Checkout
                <MdOutlineArrowForward className='text-2xl' />
              </button>
              </Link>

              <p className='mt-4 text-center text-sm text-[#c0a082]'>
                By proceeding, you agree to our Terms of Service.
              </p>
            </div>

            <div className='rounded-[20px] border border-[#d8f1de] bg-[#ebfbf0] px-4 py-3.5 text-[#1f7f45] shadow-[0_10px_24px_rgba(73,153,98,0.08)]'>
              <div className='flex items-start gap-4'>
                <div className='mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#1f9b4e] text-sm text-white'>
                  <FaLock />
                </div>
                <div>
                  <h3 className='text-xl font-semibold'>Secure Checkout</h3>
                  <p className='mt-1.5 text-sm text-[#4f9d6c]'>
                    Your payment information is encrypted and secure.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default CartPage
