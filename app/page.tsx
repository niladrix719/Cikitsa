import Image from 'next/image'
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
        className='text-9xl font-black mt-16 mb-8'
        style={{
          letterSpacing: '-3px',
          backgroundImage: 'linear-gradient(180deg, #555, #000)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Cikitsa
      </h1>
      <div className='flex flex-row w-full flex-wrap justify-evenly'>
        {data.symptoms.map((symptom: Symptom, index: number) => (
          <SymptomBox key={index} symptom={symptom} />
        ))}
      </div>
    </main>
  )
}
