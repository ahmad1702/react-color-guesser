import * as React from 'react';
import { NotifMsg } from './models';
import { randomHex } from './utils';

export default function App() {
  const [msg, setMsg] = React.useState<NotifMsg | null>(null);
  const choices = [randomHex(), randomHex(), randomHex()];
  const correctChoice =
    choices[Math.floor(Math.random() * choices.length - 1) + 1];

  const handleClick = (choice: string) => {
    if (choice === correctChoice) {
      setMsg({
        status: 'correct',
        msg: 'Answer is Correct!'
      });
    } else {
      setMsg({
        status: 'incorrect',
        msg: `Incorrect, answer was ${correctChoice}`,
      });
    }
  };

  return (
    <div className='relative h-screen w-full flex flex-col items-center justify-center'>
      <div className='absolute left-0 top-0 w-full h-[76px] border-b-2 border-neutral-300 flex items-center justify-center'>
        <div className='text-4xl font-extrabold tracking-tighter'>Lets<span className='text-teal-500'>Hex</span></div>
      </div>
      <div className='absolute left-0 top-[calc(76px+1.25rem)] w-full flex items-center justify-center'>
        <div className={` rounded-3xl p-5 duration-300 ${msg ? 'opacity-100' : 'opacity-0'} ${msg?.status === 'correct' && ('bg-green-200')} ${msg?.status === 'incorrect' && ('bg-red-200')}`}>
          {msg && <div className='text-xl'>{msg.msg}</div>}
        </div>
      </div>
      <div
        style={{
          background: correctChoice,
        }}
        className={`mb-4 h-64 w-64 rounded-3xl`}
      />
      <div>
        {choices.map((choice, i) => (
          <button
            className={`bg-neutral-200 hover:bg-neutral-300 py-2 px-3 rounded-xl duration-300 ${choices.length - 1 === i || ('mr-3')}`}
            onClick={(e) => handleClick(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
    </div >
  );
}