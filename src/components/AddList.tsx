"use client";

import { IExercise } from "@/types/Type";

interface IaddProps {
  addedBook: IExercise[];
}

const AddList = ({ addedBook }: IaddProps) => {
  return (
    <div className="min-h-[170px] rounded-xl border border-gray-800 bg-[#0d0f12] p-5">
      {addedBook.length > 0 ? (
        <div className="space-y-3">
          {addedBook.map((exercise) => (
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

              <button className="rounded-md border border-[#c8ff00]/30 bg-[#c8ff00]/10 px-3 py-2 text-xs font-semibold text-[#c8ff00] hover:bg-[#c8ff00] hover:text-black">
                Add
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-[130px] flex-col items-center justify-center text-center">
          <h3 className="text-sm font-bold uppercase">No Workouts Available</h3>

          <p className="mt-1 text-[10px] text-gray-500">
            Check back later for new exercises to add to your list.
          </p>

          <button className="mt-4 rounded-full bg-[#c8ff00] px-5 py-2 text-[10px] font-semibold text-black">
            Explore All
          </button>
        </div>
      )}
    </div>
  );
};

export default AddList;