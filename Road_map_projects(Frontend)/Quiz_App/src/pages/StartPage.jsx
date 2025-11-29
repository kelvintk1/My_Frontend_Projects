import React, {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SpotlightCard from '../components/SpotlightCard';
import SplitText from '../components/SplitText';
import quizGif from '../assets/mind.gif';
import edit from '../assets/edit.gif';

export default function StartPage() {
  const [editMode, setEditMode] = useState(false);
  const editRef = useRef(null);
  const modalRef = useRef(null);
  const [numQuestions, setNumQuestions] = useState(10);
  const [duration, setDuration] = useState(5);
  const [durationUnit, setDurationUnit] = useState("min");
  const [points, setPoints] = useState(2);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      const clickedOutsideEdit = editRef.current && !editRef.current.contains(event.target);
      const clickedOutsideModal = modalRef.current && !modalRef.current.contains(event.target);

      if (clickedOutsideEdit && clickedOutsideModal) {
        setEditMode(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/questions', {
        state: {
          duration: duration * 60,
          numQuestions,
          points
        }
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <span className='fixed top-3 right-3 flex flex-col justify-center items-center group'
        ref={editRef}
        onClick={() => setEditMode(open => !open)}
        tabIndex={0}>
        <img src={edit} alt="Edit icon" className="w-10 h-10 cursor-pointer transition-transform duration-200 ease-in-out group-hover:scale-125 group-hover:rotate-90" />
        <p className='font-bold cursor-pointer group-hover:scale-125 -mt-4'>Setup</p>
      </span>
      
      <div className="flex flex-col items-center mt-8">
        <SplitText
          text="Welcome To The Quiz App"
          className="text-white text-4xl font-bold text-center mt-10 lg:mt-0"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <p className="text-gray-300 text-2xl lg:text-2xl mt-4 italic text-center">Test your knowledge with our quiz app to improve!</p>
      </div>
      
      <div className='flex justify-center'>
        <img src={quizGif} alt="Quiz GIF" className="w-60 h-60" />
      </div>
      
      <div className='flex justify-center items-center mt-0 mb-4'>
        {loading ? (
          <div className="flex justify-center items-center w-[100px] h-[100px]">
            <div className="relative w-[80px] h-[80px] rounded-full border-4 border-transparent border-t-[#8b5cf6] animate-spin">
              <div className="absolute top-[-4px] left-[-4px] right-[-4px] bottom-[-4px] rounded-full border-4 border-transparent border-t-[#8b5cf6] opacity-70 blur-sm animate-[neonGlow_1.5s_ease-in-out_infinite]" />
            </div>
          </div>
        ) : (
          <button
            onClick={handleStart}
            className='w-30 h-13 px-6 py-3 bg-transparent text-[#f5f4f7] border-2 border-[#8b5cf6] rounded font-bold text-3xl cursor-pointer shadow-[0_0_5px_#8b5cf6,0_0_10px_#8b5cf6] transition-all duration-300 ease-in-out hover:bg-[#8b5cf6] hover:text-white hover:shadow-[0_0_10px_#8b5cf6,0_0_20px_#8b5cf6,0_0_40px_#8b5cf6]'
          >
            Start
          </button>
        )}
      </div>
      
      <div className="flex flex-1 justify-center items-center gap-10 flex-wrap mb-2">
        <SpotlightCard className="custom-spotlight-card animate-[scalePause_6s_ease-in-out_infinite] mb-1" spotlightColor="gray">
          <div className='flex flex-col'>
            <span className='text-white text-[90px] font-bold mb-3 text-center -mt-10'>
              {numQuestions}
            </span>
            <span className="text-purple-500 text-2xl font-bold -mt-8 text-center">Questions</span>
          </div>
        </SpotlightCard>
        
        <SpotlightCard className="custom-spotlight-card animate-[scalePause_8s_ease-in-out_infinite] mb-1" spotlightColor="gray">
          <div className='flex flex-col'>
            <span className='flex justify-center items-center -mt-1 mb-3'>
              <p className='text-white text-[90px] font-bold mb-2 text-center -mt-8'>{duration}</p>
              <p className='text-2xl'>{durationUnit}</p>
            </span>
            <span className="text-purple-500 text-2xl font-bold -mt-10 text-center">Duration</span>
          </div>
        </SpotlightCard>
        
        <SpotlightCard className="custom-spotlight-card animate-[scalePause_10s_ease-in-out_infinite] mb-1" spotlightColor="gray">
          <div className='flex flex-col'>
            <span className='text-white text-[90px] font-bold mb-4 text-center -mt-8'>
              {points}
            </span>
            <span className="text-purple-500 text-2xl font-bold -mt-10 text-center">Points Per Answer</span>
          </div>
        </SpotlightCard>
      </div>
      
      {editMode && (
        <div className='fixed top-0 left-0 h-screen w-screen bg-black/70'>
          <div className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' ref={modalRef}>
            <SpotlightCard className="items-center shadow-[0_0_30px_#8b5cf6] transition duration-300" spotlightColor="gray">
              <p className='text-3xl font-bold text-center border-b-4 mb-5'>Quiz Setup</p>
              <form onSubmit={(e) => {
                e.preventDefault();
                setEditMode(false);
              }}>
                <span>
                  <p className='font-bold mb-2'>Number of Questions</p>
                  <input type='number' min={5} className='shadow-inner p-2 border-2 rounded-3xl' value={numQuestions} onChange={(e) => setNumQuestions(Number(e.target.value))}/>
                </span>
                <span>
                  <p className='font-bold mb-2'>Duration</p>
                  <span className='flex gap-2'>
                    <input type='number' min={1} className='shadow-inner p-2 border-2 rounded-3xl w-40' value={duration} onChange={(e) => setDuration(Number(e.target.value))}/>
                    <select className='shadow-inner p-2 border-2 rounded-3xl w-30' value={durationUnit} onChange={(e) => setDurationUnit(e.target.value)}>
                      <option value="min" className='text-black'>minutes</option>
                    </select>
                  </span>
                </span>
                <span>
                  <p className='font-bold mb-2'>Points Per Answer</p>
                  <input type='number' min={1} className='shadow-inner p-2 border-2 rounded-3xl' value={points} onChange={(e) => setPoints(Number(e.target.value))}/>
                </span>
                <span className='flex justify-center items-center mt-8'>
                  <button className='w-30 h-13 px-6 py-3 bg-transparent text-[#f5f4f7] border-2 border-[#8b5cf6] rounded font-bold text-3xl cursor-pointer shadow-[0_0_5px_#8b5cf6,0_0_10px_#8b5cf6] transition-all duration-300 ease-in-out hover:bg-[#8b5cf6] hover:text-white hover:shadow-[0_0_10px_#8b5cf6,0_0_20px_#8b5cf6,0_0_40px_#8b5cf6]'>Save</button>
                </span>
              </form>
            </SpotlightCard>
          </div>
        </div>
      )}
    </div>
  )
}