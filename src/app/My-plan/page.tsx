"use client"
import SaveList from "@/components/SaveList";
import { exerciseContext } from "@/context/ExerciseContext";
import { IExercise } from "@/types/Type";
import React, { useContext } from "react";


const MyPlanPage = () => {
  // const planExercises = [
  //   {
  //     id: 1,
  //     name: "Barbell Bench Press",
  //     duration: 12,
  //     calories: 100,
  //   },
  //   {
  //     id: 2,
  //     name: "Dumbbell Shoulder Press",
  //     duration: 11,
  //     calories: 90,
  //   },
  // ];

  // const totalMinutes = planExercises.reduce(
  //   (total, exercise) => total + exercise.duration,
  //   0
  // );

  // const totalCalories = planExercises.reduce(
  //   (total, exercise) => total + exercise.calories,
  //   0
  // );


   const {  add ,save} = useContext(exerciseContext);

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white">
      <div className="mx-auto max-w-[1280px] px-7 py-6">
        {/* Heading */}
        <div className="mb-5">
          <h1 className="text-xl font-bold uppercase tracking-wide">
            My Plan
          </h1>

          <p className="mt-1 text-xs text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-5 grid grid-cols-3 rounded-xl border border-gray-800 bg-[#15171c]">
          <div className="border-r border-gray-800 px-4 py-5">
            <p className="text-[10px] text-gray-500">Exercises</p>
            <p className="mt-1 text-2xl font-bold text-[#c8ff00]">
              {/* {planExercises.length} */}
            </p>
          </div>

          <div className="border-r border-gray-800 px-4 py-5">
            <p className="text-[10px] text-gray-500">Minutes</p>
            {/* <p className="mt-1 text-2xl font-bold">{totalMinutes}</p> */}
          </div>

          <div className="px-4 py-5">
            <p className="text-[10px] text-gray-500">Calories</p>
            {/* <p className="mt-1 text-2xl font-bold">{totalCalories}</p> */}
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex rounded-lg border border-gray-800 bg-[#15171c] p-1">
            <button className="rounded-md px-4 py-2 text-xs text-gray-500">
              Today&apos;s Plan
            </button>

            <button className="rounded-md bg-[#24272d] px-4 py-2 text-xs text-white">
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Sort By</span>

            <button className="rounded-md border border-gray-800 bg-[#15171c] px-3 py-2 text-white">
              Duration
            </button>
          </div>
        </div>

        {/* Exercise list */}
        
       <SaveList savedBook={save} />
          
      </div>
    </main>
  );
};

export default MyPlanPage;