import React, { useState } from 'react';
import image from '../../Assets/Trackers.jpg'
import { useNavigate } from 'react-router-dom';

function Questionnaire() {
  const [part, setPart] = useState('A');
   const navigate = useNavigate();
  const handleNext = () => {
    window.scrollTo(0, 0);
    setPart((prevPart) => {
      if (prevPart === 'A') return 'B';
      if (prevPart === 'B') return 'C';
      if (prevPart === 'C') return 'D';
      if (prevPart === 'D') return 'E';
      if (prevPart === 'E') return 'F';
      return prevPart;
    });
  };
  
  const handlePrev = () => {
    window.scrollTo(0, 0);
    setPart((prevPart) => {
      if (prevPart === 'B') return 'A';
      if (prevPart === 'C') return 'B';
      if (prevPart === 'D') return 'C';
      if (prevPart === 'E') return 'D';
      if (prevPart === 'F') return 'E';
      return prevPart;
    });
  };

  return (
    <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', fontFamily:"'Rubik', sans-serif" }} className='w-full min-h-[90vh]'>
    <div className="max-w-lg mx-auto my-10 p-4 rounded-md shadow-md bg-white">
    {part === 'A' && (
      <div>
      <h2 className="text-4xl font-semibold mb-4 text-center py-5">Please Help Us to Evaluate Your Wellness Score</h2>
        <form>
          {[
            'Do you have any existing medical condition?',
            'Have you ever been hospitalized?',
            'Are you currently taking any medication?',
            'Do you have any kind of allergies?',
            'Have you ever gone through any surgery or significant medical procedure in past?',
            'Are there any medical conditions that run in your family?',
          ].map((question, index) => (
            <div key={index} className="mb-4">
              <label className="block mb-2">{question}</label>
              <div className="flex items-center mb-2">
                <input type="radio" id={`question${index}Yes`} name={`question${index}`} className="mr-2" value="yes" />
                <label htmlFor={`question${index}Yes`} className="mr-4">Yes</label>
                <input type="radio" id={`question${index}No`} name={`question${index}`} className="mr-2" value="no" />
                <label htmlFor={`question${index}No`}>No</label>
              </div>
              <textarea id={`question${index}Details`} name={`question${index}Details`} className="w-full p-2 border rounded-md" placeholder="If yes, please specify." />
            </div>
          ))}
        </form>
      </div>
    )}

    {part === 'B' && (
  <div>
    <form>
      <div className="mb-4">
        <label className="block mb-2">How would you rate your overall health?</label>
        <select className="block w-full border border-gray-300 rounded-md p-2">
          <option>Excellent</option>
          <option>Good</option>
          <option>Average</option>
          <option>Below Average</option>
          <option>Poor</option>
        </select>
      </div>
      {[
        'Do you experience any type of pain or discomfort regularly?',
        'Your current weight?',
        'Your current height?',
        'Are you satisfied with your current weight?',
        'Your daily water intake?',
        'Do you have any mobility issue?',
        'How often you play or exercise?',
        'How is your daily routine or life style (Level of Physical Activity)?',
      ].map((question, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">{question}</label>
          <input type="text" className="block w-full border border-gray-300 rounded-md p-2" placeholder="Please specify" />
        </div>
      ))}
    </form>
  </div>
)}

{part === 'C' && (
  <div>
    <form>
      {[
        'Have you ever been diagnosed with a mental health disorder?',
        'How would you rate your overall mental health?',
        'Do you experience any symptoms of stress, anxiety, or depression?',
        'Do you take any medication for stress, anxiety, or depression?',
        'Have you ever received counseling or therapy for mental health?',
      ].map((question, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">{question}</label>
          <input type="text" className="block w-full border border-gray-300 rounded-md p-2" placeholder="Please specify" />
        </div>
      ))}
    </form>
  </div>
)}

{part === 'D' && (
  <div>
    <h2 className="text-4xl font-semibold mb-4 text-center py-5">Part D</h2>
    <form>
      {[
        'Do you smoke?',
        'Do you consume alcohol?',
        'Do you use recreational drugs?',
        'How many hours do you typically sleep per night?',
        'Do you feel well-rested when you wake up in the morning?',
        'Do you have trouble falling asleep or getting up early?',
        'How would you describe your diet?',
      ].map((question, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">{question}</label>
          <input type="text" className="block w-full border border-gray-300 rounded-md p-2" placeholder="Please specify" />
        </div>
      ))}
    </form>
  </div>
)}

{part === 'E' && (
  <div>
    <form>
      {[
        'Have you experienced any significant stress or life event recently?',
        'How would you rate your current mood and stress level?',
        'How is your stress level at your workplace?',
        'Do you feel work-related stress or physical stress?',
        'When did you have your last health checkup?',
        'How often do you take health checkups?',
      ].map((question, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">{question}</label>
          <input type="text" className="block w-full border border-gray-300 rounded-md p-2" placeholder="Please specify" />
        </div>
      ))}
    </form>
  </div>
)}

{part === 'F' && (
  <div>
    <form>
      {[
        'Do you have any specific health concerns or symptoms which you would like to discuss?',
        'Is there anything else you want to share?',
      ].map((question, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">{question}</label>
          <input type="text" className="block w-full border border-gray-300 rounded-md p-2" placeholder="Please specify" />
        </div>
      ))}
    </form>
  </div>
)}

<div className="mt-8 flex justify-between">
  {part !== 'A' && (
    <button onClick={handlePrev} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
      Previous
    </button>
  )}
  {part !== 'F' ? (
    <button onClick={handleNext} className="bg-[#f99a1c] hover:bg-white hover:text-[#f99a1c] hover:border border hover:border-[#f99a1c] text-white font-bold py-2 px-4 rounded">
      Next
    </button>
  ) : (
    <button onClick={() => {navigate('/user-dashboard'); window.scrollTo(0, 0);}} className="bg-[#f99a1c] hover:bg-white hover:text-[#f99a1c] border hover:border border-[#f99a1c] text-white font-bold py-2 px-4 rounded">
      Submit
    </button>
  )}
</div>
    </div>
    </div>
  );
}

export default Questionnaire;
