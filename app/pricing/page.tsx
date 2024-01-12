import Link from 'next/link'
import Image from 'next/image'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import myGif from '../../public/e9eacada077b5325276ed09d6434922a.gif'

export default function Home() {
    return (
        <>
            <MaxWidthWrapper className="nb-12 mt-8 sm:mt-10 flex flex-col items-center justify-center text-center">
                
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
                    CALMA LA MEU AMIGO
                </h1>
                <p className='mt-5 max-w-prose text-zinc-700 md:text-2xl lg:text-3xl'>
                   eu e meu parça estamos pensando em algo para colocar aqui 
                </p>

                <Image
                    src={myGif}
                    alt='product preview'
                    width={566}
                    height={566}
                    quality={100}
                    className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />

            </MaxWidthWrapper>
        </>
    )
}