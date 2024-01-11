import MaxWidthWrapper from '../components/MaxWidthWrapper'

export default function Home() {
  return (
    <MaxWidthWrapper className="nb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
       <p className='text-sm font-semibold text-gray-700'>
          {/* Seek And Find = SAF */}
          SAF agora é publico!
       </p>
      </div>
      <h1 className='max-w-4x1 text-5x1 font-bold md:text-6x1 lg:text-7x1'>
        chat with your <span className='text-dark-600'>documents</span> in seconds
      </h1>
     
    </MaxWidthWrapper>
  )
}
