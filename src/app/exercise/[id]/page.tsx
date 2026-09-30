import { IExercise } from "@/types/Type";
import Image from "next/image";
import React from "react";

interface IdetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const exercisePromise = async (): Promise<IExercise[]> => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  const data = await response.json();
  return data;
};

const ExerciseDetails = async ({ params }: IdetailsProps) => {
  const { id } = await params;

  const exercisesData = await exercisePromise();

  const exercise = exercisesData.find(
    (exercise) => exercise.id === Number(id)
  );

  if (!exercise) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f1014] text-white">
        <h2 className="text-2xl font-bold">Exercise not found</h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f1014] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,590px)_minmax(0,1fr)] gap-7 bg-[#15171c] p-4 md:p-6 rounded-xl">

          {/* Image */}
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[640px]">
            <Image
              src={exercise.image}
              alt={exercise.name}
              fill
              sizes="(max-width: 1024px) 100vw, 590px"
              className="object-cover rounded-xl"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold uppercase">
              {exercise.name}
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm mt-2">
              {exercise.description}
            </p>

            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2 mt-4">
              {exercise.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-[#b6ff00] text-black px-3 py-1 rounded-full text-xs font-bold"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Exercise Information */}
            <div className="border border-gray-800 rounded-lg mt-5">

              <div className="flex justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-[10px] text-gray-500 uppercase">
                  Equipment
                </span>
                <span className="text-xs text-gray-300">
                  {exercise.equipment}
                </span>
              </div>

              <div className="flex justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-[10px] text-gray-500 uppercase">
                  Difficulty
                </span>
                <span className="text-xs text-gray-300">
                  {exercise.difficulty}
                </span>
              </div>

              <div className="flex justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-[10px] text-gray-500 uppercase">
                  Sets
                </span>
                <span className="text-xs text-gray-300">
                  {exercise.sets}
                </span>
              </div>

              <div className="flex justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-[10px] text-gray-500 uppercase">
                  Reps
                </span>
                <span className="text-xs text-gray-300">
                  {exercise.reps}
                </span>
              </div>

              <div className="flex justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-[10px] text-gray-500 uppercase">
                  Duration
                </span>
                <span className="text-xs text-gray-300">
                  {exercise.duration} min
                </span>
              </div>

              <div className="flex justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-[10px] text-gray-500 uppercase">
                  Calories
                </span>
                <span className="text-xs text-gray-300">
                  {exercise.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex justify-between px-4 py-3">
                <span className="text-[10px] text-gray-500 uppercase">
                  Rating
                </span>
                <span className="text-xs text-gray-300">
                  {exercise.rating}
                </span>
              </div>

            </div>

            {/* Instructions */}
            <div className="mt-5">
              <h2 className="text-sm font-bold uppercase mb-3">
                Instructions
              </h2>

              <ol className="space-y-2">
                {exercise.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-400"
                  >
                    {index + 1}. {instruction}
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <button className="bg-[#b6ff00] text-black text-xs font-bold px-5 py-3 rounded-lg">
                Add to today&apos;s plan
              </button>

              <button className="border border-gray-700 text-gray-300 text-xs px-5 py-3 rounded-lg">
                Save for later
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ExerciseDetails;