import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import fireworks from '../assets/fireworks.gif'
import rotate from '../assets/rotate.gif'
import SpotlightCard from '../components/SpotlightCard'

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // If user lands here directly, redirect to home
  if (!location.state) {
    navigate('/', { replace: true });
    return null;
  }

  const {
    score = 0,
    totalQuestions = 0,
    pointsPerAnswer = 1,
    answeredQuestions = {},
    totalPoints = totalQuestions * pointsPerAnswer
  } = location.state;

  // Calculate correct and wrong answers
  const correctCount = Object.values(answeredQuestions).filter(q => q.isCorrect).length;
  const wrongCount = totalQuestions - correctCount;

  // Calculate percentage
  const percentage = totalPoints > 0 ? Math.round((score / totalPoints) * 100) : 0;

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='w-screen flex flex-col items-center mt-7'>
        <span className='text-4xl lg:text-5xl font-bold text-center'>Quiz Completed</span>
        <span className='-mt-30 flex'>
          <img src={fireworks} alt='fireworks' className='w-50' />
          <img src={fireworks} alt='fireworks' className='w-50' />
        </span>
      </div>
      <div className='flex flex-col justify-around items-center gap-5 -mt-14'>
        <p className='text-2xl'>Here's your result</p>
        <span>
          <SpotlightCard className='flex flex-col justify-center items-center'>
            <p className='absolute top-2 right-5 text-2xl font-semibold'>{percentage}%</p>
            <p className='absolute top-4 left-5 text-[17px] font-semibold'>Score</p>
            <p className='font-bold text-5xl'>{score}</p>
            <span className='flex gap-2 justify-center items-center'>
              <p className='italic'>out of</p>
              <p className='text-xl font-bold'>{totalPoints}</p>
            </span>
          </SpotlightCard>
        </span>
        <span className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 '>
          <SpotlightCard className='flex flex-col justify-center items-center'>
            <p className='absolute top-4 left-5 text-[17px] font-semibold'>Questions</p>
            <p className='font-bold text-5xl'>{correctCount}</p>
            <p className='text-2xl font-semibold text-green-500'>Correct</p>
          </SpotlightCard>
          <SpotlightCard className='flex flex-col justify-center items-center'>
            <p className='absolute top-4 left-5 text-[17px] font-semibold'>Questions</p>
            <p className='font-bold text-5xl'>{wrongCount}</p>
            <p className='text-2xl font-semibold text-red-500'>Wrong</p>
          </SpotlightCard>
        </span>
      </div>
      <div className='mt-5 lg:mt-9 mb-5'>
        <Link to={'/'}>
          <button className='flex justify-center items-center  bg-transparent text-[#f5f4f7] border-2 border-[#8b5cf6] rounded font-bold text-3xl cursor-pointer shadow-[0_0_5px_#8b5cf6,0_0_10px_#8b5cf6] transition-all duration-300 ease-in-out hover:bg-[#8b5cf6] hover:text-white hover:shadow-[0_0_10px_#8b5cf6,0_0_20px_#8b5cf6,0_0_40px_#8b5cf6]'>
            <img src={rotate} alt='rotate' className='w-8' />
            <p>Take Quiz Again</p>
          </button>
        </Link>
      </div>
    </div>
  )
}