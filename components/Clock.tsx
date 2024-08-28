import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const PomodoroClock: React.FC = () => {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isBreak, setIsBreak] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else if (!isActive && minutes === 0 && seconds === 0) {
      clearInterval(interval!);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      // Play beep sound when timer reaches 0
      if (audioRef.current) {
        audioRef.current.play();
      }

      // Switch between focus and break
      if (isBreak) {
        setMinutes(25);
      } else {
        setMinutes(5);
      }
      setIsBreak(!isBreak);
      // setIsActive(false);
    }
  }, [minutes, seconds, isBreak]);

  const toggleStartPause = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(isBreak ? 5 : 25);
    setSeconds(0);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-6">
        {isBreak ? 'Break Time' : 'Focus Time'}
      </h1>
      <div className="timer"

      >
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="flex gap-6">
        <button
          onClick={toggleStartPause}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          {isActive ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          {/*isActive ? 'Pause' : 'Start'*/}
        </button>
        <button
          onClick={resetTimer}
          className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          <RotateCcw className="w-6 h-6" />
        </button>
      </div>

      <audio ref={audioRef} src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
    </div>
  );
};

export default PomodoroClock;
