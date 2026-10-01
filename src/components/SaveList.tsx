"use client";

import { IExercise } from "@/types/Type";

interface IsaveProps {
  savedBook: IExercise[];
}

const SaveList = ({ savedBook }: IsaveProps) => {
  return (
    <div className="min-h-[170px] rounded-xl border border-gray-800 bg-[#0d0f12] p-5">
      {savedBook.length > 0 ? (
        <div className="space-y-3">
          {savedBook.map((exercise) => (
            <div
              key={exercise.id}
              className="flex items-center justify-between rounded-lg border border-gray-800 bg-[#15171c] px-4 py-3"
            >
              <div>
                <h3 className="text-sm font-semibold">{exercise.name}</h3>

                <p className="mt-1 text-xs text-gray-500">
                  {exercise.duration} min • {exercise.caloriesBurned} calories
                </p>
              </div>

              <button className="rounded-md border border-gray-700 px-3 py-2 text-xs text-gray-400 hover:text-white">
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-[130px] flex-col items-center justify-center text-center">
          <h3 className="text-sm font-bold uppercase">Nothing Here Yet</h3>

          <p className="mt-1 text-[10px] text-gray-500">
            Browse the library and add a lift to get moving.
          </p>

          <button className="mt-4 rounded-full bg-[#c8ff00] px-5 py-2 text-[10px] font-semibold text-black">
            Go to workouts
          </button>
        </div>
      )}
    </div>
  );
};

export default SaveList;