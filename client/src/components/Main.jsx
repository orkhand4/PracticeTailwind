import React from 'react'
import { FaHtml5 } from "react-icons/fa";

const Main = () => {
  return (
    <div className='flex-auto flex h-screen'>
      <div className='w-64 border-r p-3 flex flex-col border-gray-200 divide-solid divide-gray-200 divide-y'>
        <nav>
          <a href="#" className='flex items-center h-10 rounded px-3 text-base text-blue-900 font-medium hover:bg-gray-100 transition-colors'>Anasayfa</a>
          <a href="#" className='flex items-center h-10 rounded px-3 text-base text-blue-900 font-medium hover:bg-gray-100 transition-colors'>Akis</a>
          <a href="#" className='flex items-center h-10 rounded px-3 text-base text-blue-900 font-medium hover:bg-gray-100 transition-colors'>Kesfet</a>
          <a href="#" className='flex items-center h-10 rounded px-3 text-base text-blue-900 font-medium hover:bg-gray-100 transition-colors'>Makaleler</a>
          <a href="#" className='flex items-center h-10 rounded px-3 text-base text-blue-900 font-medium hover:bg-gray-100 transition-colors'>Soru & Cevap</a>
        </nav>

        <nav className='mt-4 pt-4'>
          <a href="#" className='flex items-center h-10 rounded px-3 text-base text-blue-900 font-medium hover:bg-gray-100 transition-colors'>HTML</a>
          <a href="#" className='flex items-center h-10 rounded px-3 text-base text-blue-900 font-medium hover:bg-gray-100 transition-colors'>CSS</a>
          <a href="#" className='flex items-center h-10 rounded px-3 text-base text-blue-900 font-medium hover:bg-gray-100 transition-colors'>JavaScript</a>
          <a href="#" className='flex items-center h-10 rounded px-3 text-base text-blue-900 font-medium hover:bg-gray-100 transition-colors'>PHP</a>
          <a href="#" className='flex items-center h-10 rounded px-3 text-base text-blue-900 font-medium hover:bg-gray-100 transition-colors'>MySQL</a>
        </nav>

        <div className='mt-40 pt-3'>
        <button className=' w-full bg-gray-800 text-white h-10 rounded flex items-center px-4 text-sm hover:bg-gray-700'>
          Dark Mode
        </button>
        </div>

      </div>
      <div className='flex-auto py-6 px-10'>
        <div className='mx-auto max-w-screen-xl'>
        <h2 className='text-3xl font-semibold mb-3 leading-relaxed text-blue-900'>Kendine deger kat!</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem amet odio impedit magnam explicabo, temporibus asperiores? Tempora recusandae a iure.</p>

        <div className='grid mt-5 grid-cols-10 gap-28'>
          <div className='col-span-2'>
            <a href="#" className='border flex flex-col px-4 py-7 items-center rounded'>
              <span className='w-24 h-24 mb-4 border border-red-500 rounded-full flex items-center justify-center bg-red-500 bg-opacity-25'>
                <FaHtml5 className='text-red-700 w-20 h-16'/>
              </span>
              <span className='inline-flex items-center rounded h-10 px-5 text-white bg-red-500'>
                HTML
              </span>
            </a>
          </div>
          <div className='col-span-2'>
          <a href="#" className='border flex flex-col px-4 py-7 items-center rounded'>
              <span className='w-24 h-24 mb-4 border border-blue-500 rounded-full flex items-center justify-center bg-blue-500 bg-opacity-25'>
                <FaHtml5 className='text-blue-700 w-20 h-16'/>
              </span>
              <span className='inline-flex items-center rounded h-10 px-5 text-white bg-blue-500'>
                CSS
              </span>
            </a>
          </div>
          <div className='col-span-2'>
          <a href="#" className='border flex flex-col px-4 py-7 items-center rounded'>
              <span className='w-24 h-24 mb-4 border border-yellow-400 rounded-full flex items-center justify-center bg-yellow-400 bg-opacity-25'>
                <FaHtml5 className='text-yellow-400 w-20 h-16'/>
              </span>
              <span className='inline-flex items-center rounded h-10 px-5 text-white bg-yellow-400'>
                JavaScript
              </span>
            </a>
          </div>
          <div className='col-span-2'>
          <a href="#" className='border flex flex-col px-4 py-7 items-center rounded'>
              <span className='w-24 h-24 mb-4 border border-slate-700 rounded-full flex items-center justify-center bg-slate-700 bg-opacity-25'>
                <FaHtml5 className='text-slate-700 w-20 h-16'/>
              </span>
              <span className='inline-flex items-center rounded h-10 px-5 text-white bg-slate-700'>
                PHP
              </span>
            </a>
          </div>
          <div className='col-span-2'>
          <a href="#" className='border flex flex-col px-4 py-7 items-center rounded'>
              <span className='w-24 h-24 mb-4 border border-teal-600 rounded-full flex items-center justify-center bg-teal-600 bg-opacity-25'>
                <FaHtml5 className='text-teal-600 w-20 h-16'/>
              </span>
              <span className='inline-flex items-center rounded h-10 px-5 text-white bg-teal-600'>
                MySQL
              </span>
            </a>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Main
