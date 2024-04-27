import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi'; // Importing Plus icon from react-icons/fi

const DietTracker = () => {
    const [meals, setMeals] = useState([
        { id: 1, name: 'Breakfast', calories: 300 },
        { id: 2, name: 'Lunch', calories: 500 },
        { id: 3, name: 'Dinner', calories: 700 },
      ]);
    
      const addMeal = () => {
        const id = meals.length + 1;
        const name = `Meal ${id}`;
        const calories = 200;
        setMeals([...meals, { id, name, calories }]);
      };

      const [exercises, setExercises] = useState([
        { id: 1, name: 'Running', duration: '30 minutes' },
        { id: 2, name: 'Weight Lifting', duration: '45 minutes' },
      ]);
    
      const addExercise = () => {
        const id = exercises.length + 1;
        const name = `Exercise ${id}`;
        const duration = '30 minutes';
        setExercises([...exercises, { id, name, duration }]);
      };

      <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Food Diary</h2>
            {/* Food Diary content */}
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full">
              <FiPlus className="mr-2" /> {/* Plus icon */}
              Add Meal
            </button>
          </div>
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]">
      <header className="bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF] py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Diet and Weight Management</h1>
        
        </div>
      </header>
      <main className="flex-1 py-4 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dashboard */}
          <div className="bg-white shadow-md rounded-lg p-6">
  <h2 className="text-xl font-bold mb-4">Dashboard</h2>
  <div className="grid grid-cols-2 gap-4">
    <div>
      <p className="text-gray-500 mb-2">Current Weight</p>
      <p className="text-2xl font-bold">175 lbs</p>
    </div>
    <div>
      <p className="text-gray-500 mb-2">Target Weight</p>
      <p className="text-2xl font-bold">160 lbs</p>
    </div>
    <div>
      <p className="text-gray-500 mb-2">Progress</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-green-500 h-2.5 rounded-full" style={{width: '40%'}}></div>
      </div>
    </div>
    <div>
      <p className="text-gray-500 mb-2">Calories Consumed Today</p>
      <p className="text-2xl font-bold">1500 cal</p>
    </div>
    <div>
      <p className="text-gray-500 mb-2">Exercise Done Today</p>
      <p className="text-2xl font-bold">30 min</p>
    </div>
  </div>
</div>
          {/* Food Diary */}
          <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Food Diary</h2>
      {meals.map(meal => (
        <div key={meal.id}>
          <h3>{meal.name}</h3>
          <p>{meal.calories} calories</p>
        </div>
      ))}
      <button
        onClick={addMeal}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full"
      >
        <FiPlus className="mr-2" /> {/* Plus icon */}
        Add Meal
      </button>
    </div>
          {/* Exercise Tracking */}
          <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Exercise Tracking</h2>
      {exercises.map(exercise => (
        <div key={exercise.id}>
          <h3>{exercise.name}</h3>
          <p>{exercise.duration}</p>
        </div>
      ))}
      <button
        onClick={addExercise}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full"
      >
        <FiPlus className="mr-2" /> {/* Plus icon */}
        Add Exercise
      </button>
    </div>
          {/* Weight Loss Plan */}
          <div className="bg-white shadow-md rounded-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
  <h2 className="text-xl font-bold mb-4">Weight Loss Plan</h2>
  <div>
    <p className="text-gray-500 mb-2">Current Weight</p>
    <p className="text-2xl font-bold">175 lbs</p>
  </div>
  <div>
    <p className="text-gray-500 mb-2">Target Weight</p>
    <p className="text-2xl font-bold">160 lbs</p>
  </div>
  <div>
    <p className="text-gray-500 mb-2">Plan Duration</p>
    <p className="text-2xl font-bold">3 months</p>
  </div>
  <div>
    <p className="text-gray-500 mb-2">Daily Calorie Intake</p>
    <p className="text-2xl font-bold">1500 cal</p>
  </div>
  <div>
    <p className="text-gray-500 mb-2">Exercise Plan</p>
    <p className="text-2xl font-bold">30 min of cardio daily</p>
  </div>
</div>
        </div>
      </main>
    
    </div>
  );
};

export default DietTracker;
