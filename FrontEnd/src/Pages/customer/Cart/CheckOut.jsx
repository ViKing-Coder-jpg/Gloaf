import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowLeft,
  FaHouse,
  FaLock,
  FaTag,
  FaWallet,
} from 'react-icons/fa6'
import { FaCcMastercard, FaCcVisa, FaRegCreditCard } from 'react-icons/fa'
import { HiCurrencyDollar } from 'react-icons/hi2'
import { IoInformationCircle } from 'react-icons/io5'
import { MdOutlineVerifiedUser } from 'react-icons/md'

const checkoutItems = [
  { id: 1, quantity: 2, name: 'Classic Cheeseburger', price: 24.0 },
  { id: 2, quantity: 1, name: 'Warm Choco Cookies', price: 4.5 },
  { id: 3, quantity: 1, name: 'Avocado Salad Bowl', price: 14.9 },
]

const subtotal = 43.4
const deliveryFee = 2.99
const tax = 3.47
const total = 49.86

const paymentMethods = [
  { id: 'card', label: 'Card', icon: <FaRegCreditCard /> },
  { id: 'wallet', label: 'Wallet', icon: <FaWallet /> },
  { id: 'cash', label: 'Cash', icon: <HiCurrencyDollar /> },
]

const SecurityNote = ({ icon, text }) => (
  <div className='flex items-center gap-3 text-sm text-[#b38764]'>
    <span className='text-base text-[#b17b4c]'>{icon}</span>
    <span>{text}</span>
  </div>
)

const CheckOut = () => {
  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,#f9edd8_0%,#fcf6ea_30%,#fcf7ef_100%)] text-[#431d09]'>
      <div className='mx-auto flex w-full max-w-[1280px] flex-col gap-9 px-6 py-10 md:px-8 lg:px-10'>
        <div className='flex items-center gap-5'>
          <Link
            to="/customer/cart"
            className='flex h-10 w-10 items-center justify-center rounded-full text-[#431d09] transition duration-300 hover:bg-[#fff4e2]'
          >
            <FaArrowLeft className='text-xl' />
          </Link>
          <h1 className='text-4xl font-semibold tracking-tight text-[#431d09]'>Checkout</h1>
        </div>

        <div className='grid gap-8 xl:grid-cols-[minmax(0,1fr)_380px]'>
          <section className='space-y-6'>
            <div className='rounded-[24px] border border-[#efdfca] bg-white p-6 shadow-[0_14px_32px_rgba(112,76,28,0.07)]'>
              <div className='flex items-start justify-between gap-4'>
                <div className='flex items-start gap-4'>
                  <div className='flex h-11 w-11 items-center justify-center rounded-full bg-[#fff2de] text-[#c0711d]'>
                    <FaHouse />
                  </div>
                  <div>
                    <h2 className='text-2xl font-semibold text-[#431d09]'>Delivery Address</h2>
                    <p className='mt-1 text-base text-[#bb8e68]'>Where should we send your order?</p>
                  </div>
                </div>
                <button className='text-lg font-medium text-[#c36a1a] transition duration-300 hover:text-[#9a4f13]'>
                  Edit
                </button>
              </div>

              <div className='mt-5 rounded-[18px] border border-[#efdfca] bg-[#fbf3e5] p-5'>
                <div className='flex items-start gap-4'>
                  <div className='mt-1 text-[#b67f50]'>
                    <FaHouse />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-[#431d09]'>Home</h3>
                    <p className='mt-1 text-base leading-7 text-[#b38764]'>
                      123 Maple Street, Apt 4B
                      <br />
                      New York, NY 10001
                    </p>
                    <p className='mt-2 text-sm text-[#c2a082]'>Note: Please leave at the front desk.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='rounded-[24px] border border-[#efdfca] bg-white p-6 shadow-[0_14px_32px_rgba(112,76,28,0.07)]'>
              <div className='flex items-start gap-4'>
                <div className='flex h-11 w-11 items-center justify-center rounded-full bg-[#fff2de] text-[#c0711d]'>
                  <FaRegCreditCard />
                </div>
                <div>
                  <h2 className='text-2xl font-semibold text-[#431d09]'>Payment Method</h2>
                  <p className='mt-1 text-base text-[#bb8e68]'>Select how you'd like to pay</p>
                </div>
              </div>

              <div className='mt-6 grid gap-4 md:grid-cols-3'>
                {paymentMethods.map((method, index) => {
                  const isActive = index === 0
                  return (
                    <button
                      key={method.id}
                      className={`rounded-[18px] border px-5 py-5 text-center transition duration-300 ${
                        isActive
                          ? 'border-[#f3b126] bg-[#fffaf0] text-[#431d09] shadow-[0_0_0_1px_rgba(243,177,38,0.25)]'
                          : 'border-[#efdfca] text-[#b38764] hover:bg-[#fff9f0]'
                      }`}
                    >
                      <div className='flex flex-col items-center gap-3'>
                        <span className='text-3xl'>{method.icon}</span>
                        <span className='text-xl font-medium'>{method.label}</span>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className='mt-8'>
                <div className='mb-4 flex items-center justify-between'>
                  <h3 className='text-xl font-medium text-[#431d09]'>Card Details</h3>
                  <div className='flex items-center gap-3 text-[#8f8f8f]'>
                    <FaRegCreditCard className='text-xl' />
                    <span className='rounded-[10px] border border-[#ece2d2] px-2.5 py-1 text-sm font-medium'>VISA</span>
                    <span className='rounded-[10px] border border-[#ece2d2] px-2.5 py-1 text-sm font-medium'>MC</span>
                  </div>
                </div>

                <div className='space-y-5'>
                  <div>
                    <label className='mb-2 block text-sm font-semibold uppercase tracking-[0.08em] text-[#a87c57]'>
                      Card Number
                    </label>
                    <div className='flex items-center justify-between rounded-[16px] border border-[#efdfca] bg-[#fff8ed] px-4 py-4 text-[#c6a080]'>
                      <div className='flex items-center gap-3'>
                        <FaRegCreditCard />
                        <span className='text-xl'>0000 0000 0000 0000</span>
                      </div>
                      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-[#1f9b4e] text-xs text-white'>
                        <MdOutlineVerifiedUser />
                      </div>
                    </div>
                  </div>

                  <div className='grid gap-5 md:grid-cols-2'>
                    <div>
                      <label className='mb-2 block text-sm font-semibold uppercase tracking-[0.08em] text-[#a87c57]'>
                        Expiry Date
                      </label>
                      <div className='rounded-[16px] border border-[#efdfca] bg-[#fff8ed] px-4 py-4 text-xl text-[#d0b091]'>
                        MM/YY
                      </div>
                    </div>
                    <div>
                      <label className='mb-2 block text-sm font-semibold uppercase tracking-[0.08em] text-[#a87c57]'>
                        CVV / CVC
                      </label>
                      <div className='flex items-center justify-between rounded-[16px] border border-[#efdfca] bg-[#fff8ed] px-4 py-4 text-xl text-[#d0b091]'>
                        <span>123</span>
                        <IoInformationCircle className='text-[#c6a080]' />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className='mb-2 block text-sm font-semibold uppercase tracking-[0.08em] text-[#a87c57]'>
                      Name on Card
                    </label>
                    <div className='rounded-[16px] border border-[#efdfca] bg-[#fff8ed] px-4 py-4 text-xl text-[#d0b091]'>
                      John Doe
                    </div>
                  </div>

                  <label className='flex items-center gap-3 text-base text-[#9d704c]'>
                    <span className='h-6 w-6 rounded-[6px] border border-[#e7d3b8] bg-[#fff9ef]' />
                    Securely save this card for future orders
                  </label>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap gap-x-10 gap-y-3 pb-2'>
              <SecurityNote icon={<FaLock />} text='SSL Encrypted Transaction' />
              <SecurityNote icon={<MdOutlineVerifiedUser />} text='24/7 Support Protection' />
              <SecurityNote icon={<HiCurrencyDollar />} text='Money Back Guarantee' />
            </div>
          </section>

          <aside className='space-y-5'>
            <div className='sticky top-28 rounded-[26px] border border-[#efdfca] bg-white p-6 shadow-[0_18px_40px_rgba(112,76,28,0.1)]'>
              <h2 className='text-3xl font-semibold tracking-tight text-[#431d09]'>Order Summary</h2>

              <div className='mt-6 space-y-4 text-lg'>
                {checkoutItems.map((item) => (
                  <div key={item.id} className='flex items-center justify-between gap-4'>
                    <div className='flex min-w-0 items-center gap-3'>
                      <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] border border-[#ecdac2] bg-[#fff8ed] text-sm text-[#8e5a2c]'>
                        {item.quantity}
                      </span>
                      <span className='truncate text-[#431d09]'>{item.name}</span>
                    </div>
                    <span className='font-semibold text-[#431d09]'>${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className='mt-6 border-t border-dashed border-[#e9d8c1] pt-6'>
                <div className='space-y-4 text-[1.35rem]'>
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

              <div className='mt-7 border-t border-[#f0e0cd] pt-7'>
                <div className='mb-2 text-right text-sm uppercase tracking-[0.28em] text-[#c1a58a]'>USD</div>
                <div className='flex items-end justify-between gap-4'>
                  <span className='text-2xl font-semibold text-[#431d09]'>Total</span>
                  <span className='text-4xl font-semibold tracking-tight text-[#4a2208]'>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className='mt-7 flex w-full items-center justify-center gap-3 rounded-[18px] bg-[#f7bc2f] px-7 py-3.5 text-[1.35rem] font-semibold text-[#431d09] shadow-[0_14px_30px_rgba(247,188,47,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#efb217]'>
                Confirm Payment
                <FaLock className='text-lg' />
              </button>

              <p className='mt-4 text-center text-sm text-[#c0a082]'>
                By clicking the button, you agree to the Terms and Privacy Policy.
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

export default CheckOut
