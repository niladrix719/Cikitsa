import Link from 'next/link'
import { SymptomBox } from './components/SymptomBox'
import data from './data.json'

type Symptom = {
  name: string
  description: string
  image: string
}

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <h1
        className='text-9xl font-black mt-8 mb-8'
        style={{
          letterSpacing: '-3px',
          backgroundImage: 'linear-gradient(180deg, #555, #000)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Cikitsa
      </h1>
      <div className='flex flex-row w-full flex-wrap justify-evenly px-24'>
        {data.symptoms.map((symptom: Symptom, index: number) => (
          <SymptomBox key={index} symptom={symptom} />
        ))}
      </div>
      <div className='w-80 flex justify-evenly'>
        <Link href='/qna' type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Predict and Analyse
        </Link>
        <button type='button' className='text-black border font-bold py-2 px-4 rounded'>
          Cancel
        </button>
      </div>
    </main>
  )
}
