import React from 'react'

const Main = () => {
  return (
    <div className='flex-auto flex'>
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
          <a href="#" className='flex items-center h-10 rounded px-3 text-base text-blue-900 font-medium hover:bg-gray-100 transition-colors'>JavaCript</a>
          <a href="#" className='flex items-center h-10 rounded px-3 text-base text-blue-900 font-medium hover:bg-gray-100 transition-colors'>PHP</a>
          <a href="#" className='flex items-center h-10 rounded px-3 text-base text-blue-900 font-medium hover:bg-gray-100 transition-colors'>MySQL</a>
        </nav>

        <div className='mt-auto pt-3'>
        <a href="#" className='bg-gray-800 text-white h-10 rounded flex items-center px-4 text-sm hover:bg-gray-700'>
          Dark Mode
        </a>
        </div>

      </div>
      <div className='flex-auto py-6 px-10'>
        <div className='mx-auto max-w-screen-xl'>
        <h2>Kendine deger kat!</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem amet odio impedit magnam explicabo, temporibus asperiores? Tempora recusandae a iure.</p>
        </div>
      </div>
    </div>
  )
}

export default Main
