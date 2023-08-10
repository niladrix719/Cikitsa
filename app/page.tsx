import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex justify-center'>
      <h1
        className='text-9xl font-black mt-32'
        style={{
          letterSpacing: '-3px',
          backgroundImage: 'linear-gradient(180deg, #555, #000)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Cikitsa
      </h1>
    </main>
  )
}
