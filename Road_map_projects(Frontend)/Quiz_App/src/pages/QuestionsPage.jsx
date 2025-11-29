import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import ChevronsRight from '../components/chevronRight.jsx';
import ChevronsLeft from '../components/chevronLeft.jsx';
import QuestionCard from '../components/QuestionCard';
import SpotlightCard from '../components/SpotlightCard';
import quizQuestions from '../Questions.js';

const QuestionsPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasChosen, setHasChosen] = useState(false);
  const [exitMode, setExitMode] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [showPointAdded, setShowPointAdded] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const exitRef = useRef(null);
  const modalRef = useRef(null);

  // Get quiz settings from location state
  const { duration, numQuestions, points: pointsPerAnswer } = location.state || { 
    duration: 300, 
    numQuestions: 10, 
    points: 2 
  };

  useEffect(() => {
    setTimeLeft(duration);
    setTimerActive(true);

    // Shuffle questions and take only the requested number
    const shuffled = [...quizQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, numQuestions);
    setQuestions(shuffled);
    setLoading(false);
  }, [location.state, numQuestions, duration]);

  useEffect(() => {
    if (showResult) {
      const totalPoints = questions.reduce((sum, q) => {
        return sum + (q.points || pointsPerAnswer);
      }, 0);

      navigate('/result', { 
        state: { 
          score, 
          totalQuestions: questions.length,
          pointsPerAnswer,
          answeredQuestions,
          totalPoints
        } 
      });
    }
  }, [showResult, navigate, score, questions.length, pointsPerAnswer, answeredQuestions, questions]);

  useEffect(() => {
    let interval = null;
    
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
      setShowResult(true);
    }

    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  // Store the option text as selectedAnswer
  const handleAnswerSelect = (answerText) => {
    if (!hasChosen) {
      setSelectedAnswer(answerText);
    }
  };

  // Only update score when user checks the answer (not on next)
  const handleButtonClick = () => {
    if (!isFlipped && selectedAnswer !== null) {
      if (!hasChosen) {
        // User is checking the answer for the first time
        setHasChosen(true);

        const currentQ = questions[currentQuestionIndex];
        const isCorrect = selectedAnswer === currentQ.answer;
        const pointsToAdd = currentQ.points || pointsPerAnswer;

        // Only update score if not already answered
        if (!answeredQuestions[currentQuestionIndex] && isCorrect) {
          setScore(prev => prev + pointsToAdd);
          setShowPointAdded(true);
          setTimeout(() => setShowPointAdded(false), 1000);
        }

        setAnsweredQuestions(prev => ({
          ...prev,
          [currentQuestionIndex]: {
            selectedAnswer,
            isCorrect
          }
        }));
      } else {
        setIsFlipped(true);
      }
    } else if (isFlipped) {
      setIsFlipped(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      const nextQuestionAnswered = answeredQuestions[currentQuestionIndex + 1];
      if (nextQuestionAnswered) {
        setSelectedAnswer(nextQuestionAnswered.selectedAnswer);
        setHasChosen(true);
      } else {
        setSelectedAnswer(null);
        setHasChosen(false);
      }
      setIsFlipped(false);
    } else {
      setTimerActive(false);
      setShowResult(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      const prevQuestionAnswered = answeredQuestions[currentQuestionIndex - 1];
      if (prevQuestionAnswered) {
        setSelectedAnswer(prevQuestionAnswered.selectedAnswer);
        setHasChosen(true);
      } else {
        setSelectedAnswer(null);
        setHasChosen(false);
      }
      setIsFlipped(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const renderButtonLabel = () => {
    if (isFlipped) return 'Question';
    if (hasChosen) return 'Explanation';
    return 'Check';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading questions...</div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-2xl">No questions available</div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <span
        ref={exitRef}
        onClick={() => setExitMode(open => !open)}
        tabIndex={0}
        className='fixed top-3 left-3 cursor-pointer flex justify-center items-center group active:scale-90'>
        <img src={'https://img.icons8.com/F3F3F3/arcade/2x/exit-sign.png'} alt='exit' className='w-10'/>
        <p className='font-bold group-hover:text-2xl'>Exit</p>
      </span>
      
      <p className='text-4xl lg:text-5xl font-bold text-white mb-4'>Quiz Questions</p>
      
      <div className={`flex flex-col items-center relative w-full h-full transition-transform duration-400 transform-style-preserve-3d
        ${isFlipped ? 'rotate-y-180' : ''}`}>
        <QuestionCard className='p-6 w-full h-full lg:w-120 flex flex-col justify-between mb-4'>
          <div className={`-mt-4 flex justify-between items-center transition-transform duration-800 transform-style-preserve-3d
            ${isFlipped ? 'rotate-y-180' : ''}`}>
            <div className='w-25 mt-16'>
              <p className='font-bold ml-2'>Question</p>
              <span className='flex justify-around items-center'>
                <p className='text-xl'>{currentQuestionIndex + 1}</p>
                <p className='italic text-[15px] text-gray-400 mt-2'>of</p>
                <p className='text-xl'>{questions.length}</p>
              </span>
            </div>

            <div className="flex flex-col items-center gap-5">
              <div className="relative flex justify-center items-center">
                <svg className="rotate-90" width="120" height="120">
                  <circle
                    className="opacity-30"
                    stroke="#ddd"
                    strokeWidth="8"
                    fill="transparent"
                    r="50"
                    cx="60"
                    cy="60"
                  />
                  <circle
                    className="transition-[stroke-dashoffset] duration-500 ease-in-out"
                    stroke="#6a11cb"
                    strokeWidth="8"
                    fill="transparent"
                    r="50"
                    cx="60"
                    cy="60"
                    strokeDasharray="314.16"
                    strokeDashoffset={314.16 * (1 - timeLeft / (duration || 300))}
                  />
                </svg>
                <div className="absolute text-2xl font-bold text-black dark:text-white">
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>

            <div className="w-20 flex gap-2 justify-center items-center mt-20">
              <p className='text-2xl font-bold'>{score}</p>
              {showPointAdded && (
                <span className="absolute -top-6 right-0 text-green-400 animate-bounce">
                  +{currentQuestion.points || pointsPerAnswer}
                </span>
              )}
              <p className='text-[15px] text-gray-400'>Score</p>
            </div>
          </div>

          {!isFlipped ? (
            <div className="p-6 h-full">
              <p className='text-2xl'>{currentQuestion.question}</p>
              <div className='flex flex-col gap-3 mt-4'>
                {currentQuestion.options.map((option, index) => {
                  // Use option text as value
                  const value = option;
                  const isCorrect = option === currentQuestion.answer;
                  const isSelected = selectedAnswer === value;
                  const showCorrect = hasChosen && isCorrect;
                  const showIncorrect = hasChosen && isSelected && !isCorrect;

                  return (
                    <span key={index} className='flex justify-between items-center'>
                      <span>
                        <input
                          type='radio'
                          name='answer'
                          value={value}
                          className='mr-2'
                          checked={isSelected}
                          onChange={() => handleAnswerSelect(value)}
                          disabled={hasChosen}
                        />
                        <label
                          className={`text-white text-[19px] 
                            ${isSelected ? 'font-bold' : ''} 
                            ${showCorrect ? 'text-green-400' : ''} 
                            ${showIncorrect ? 'text-red-400' : ''}`}
                        >
                          {`${String.fromCharCode(65 + index)}. ${option}`}
                        </label>
                      </span>
                      {hasChosen && (
                        <>
                          {showCorrect && (
                            <img
                              src="https://img.icons8.com/3d-fluency/2x/checkmark.png"
                              className="w-7"
                              alt="correct"
                            />
                          )}
                          {showIncorrect && (
                            <img
                              src="https://img.icons8.com/3d-fluency/2x/delete-sign.png"
                              className="w-7"
                              alt="incorrect"
                            />
                          )}
                        </>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className={`p-6 h-60 transition-transform duration-800 transform-style-preserve-3d
              ${isFlipped ? 'rotate-y-180' : ''}`}>
              <p className='text-2xl text-center font-bold border-b-1'>Explanation</p>
              <span>
                <label className='text-white text-[19px]'>{currentQuestion.explanation}</label>
              </span>
            </div>
          )}

          <div className={`flex justify-around items-center mt-4 gap-5`}>
            <ChevronsLeft
              className={`active:scale-75 transition-all duration-75 ${isFlipped ? 'opacity-0 cursor-not-allowed' : ''}`}
              onClick={!isFlipped ? handlePreviousQuestion : undefined}
            />
            <button
              className={`w-38 h-13 px-6 py-3 bg-transparent text-[#f5f4f7] border-2 border-[#8b5cf6] rounded font-bold text-3xl cursor-pointer shadow-[0_0_5px_#8b5cf6,0_0_10px_#8b5cf6] transition-all duration-300 ease-in-out hover:bg-[#8b5cf6] hover:text-white hover:shadow-[0_0_10px_#8b5cf6,0_0_20px_#8b5cf6,0_0_40px_#8b5cf6] transform-style-preserve-3d
                ${isFlipped ? 'rotate-y-180' : ''}`}
              onClick={handleButtonClick}
              disabled={!hasChosen && selectedAnswer === null && !isFlipped}
            >
              {renderButtonLabel()}
            </button>
            <ChevronsRight
              className={`active:scale-75 transition-all duration-75 ${isFlipped ? 'opacity-0 cursor-not-allowed' : ''}`}
              onClick={!isFlipped ? handleNextQuestion : undefined}
            />
          </div>
        </QuestionCard>
      </div>
      
      {exitMode && (
        <div className='h-screen w-screen fixed top-0 left-0 right-0 bg-black/70'>
          <div className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' ref={modalRef}>
            <SpotlightCard className="items-center shadow-[0_0_30px_#8b5cf6] transition duration-300" spotlightColor="gray">
              <p className='text-center font-bold text-2xl'>Sure you want to exit quiz?</p>
              <span className='flex justify-around gap-6 mt-8'>
                <Link to={'/'}>
                  <button className='w-25 h-13 px-6 py-3 bg-transparent text-[#f5f4f7] border-2 border-[#8b5cf6] rounded font-bold text-3xl cursor-pointer shadow-[0_0_5px_#8b5cf6,0_0_10px_#8b5cf6] transition-all duration-300 ease-in-out hover:bg-[#8b5cf6] hover:text-white hover:shadow-[0_0_10px_#8b5cf6,0_0_20px_#8b5cf6,0_0_40px_#8b5cf6]'>Yes</button>
                </Link>
                <button onClick={(e) => {
                  e.preventDefault();
                  setExitMode(false);
                }} className='w-25 h-13 px-6 py-3 bg-transparent text-[#f5f4f7] border-2 border-[#8b5cf6] rounded font-bold text-3xl cursor-pointer shadow-[0_0_5px_#8b5cf6,0_0_10px_#8b5cf6] transition-all duration-300 ease-in-out hover:bg-[#8b5cf6] hover:text-white hover:shadow-[0_0_10px_#8b5cf6,0_0_20px_#8b5cf6,0_0_40px_#8b5cf6]'>No</button>
              </span>
            </SpotlightCard>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionsPage;

// Done