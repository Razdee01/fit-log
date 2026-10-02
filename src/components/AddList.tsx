"use client";

import { exerciseContext } from "@/context/ExerciseContext";
import { IExercise } from "@/types/Type";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";

interface IaddProps {
  addedBook: IExercise[];
}

const AddList = ({ addedBook }: IaddProps) => {
  const { setAdd } = useContext(exerciseContext);
  const [mark, setMark] = useState(false);

  const handleMark = () => {
    setMark(true);
  };

  const handleRemove = (id: number) => {
    const remainings = addedBook.filter((book) => id !== book.id);
    setAdd(remainings);
  };

  return (
    <div className="min-h-[170px] rounded-xl border border-gray-800 bg-[#0d0f12] p-3 sm:p-5">
      {addedBook.length > 0 ? (
        <div className="space-y-3">
          {addedBook.map((exercise) => (
            <div
              key={exercise.id}
              className="flex flex-col gap-3 rounded-lg border border-gray-800 bg-[#15171c] p-3.5 sm:p-4 lg:flex-row lg:items-center lg:justify-between"
            >
              {/* Top row on Mobile / Left section on Desktop */}
              <div className="flex w-full items-start justify-between gap-3 min-w-0 lg:w-auto lg:flex-1 lg:items-center">
                <div className="flex items-start gap-3 min-w-0 flex-1 sm:items-center">
                  <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                    <Image
                      className="rounded-2xl object-cover"
                      src={exercise.image}
                      fill
                      sizes="(max-width: 640px) 64px, 80px"
                      alt={exercise.name}
                    />
                  </div>

                  <div className="min-w-0 flex-1 pr-2">
                    <h3 className="truncate text-base font-semibold text-white sm:text-xl lg:text-2xl">
                      {exercise.name}
                    </h3>

                    <h4 className="truncate text-xs font-normal text-gray-300 sm:text-sm">
                      {exercise.equipment}
                    </h4>

                    <p className="mt-1 text-[11px] text-gray-400 sm:text-sm leading-tight">
                      {exercise.duration} min • {exercise.caloriesBurned}{" "}
                      calories • ★ {exercise.rating}
                    </p>
                  </div>
                </div>

                {/* Remove button placed next to header on Mobile so it doesn't squish text */}
                <button
                  onClick={() => handleRemove(exercise.id)}
                  aria-label="Remove exercise"
                  className="shrink-0 rounded-md p-1.5 text-gray-400 hover:text-white transition-colors lg:hidden"
                >
                  <RxCross1 size={18} />
                </button>
              </div>

              {/* Action Buttons: Full width on Mobile, inline on Desktop */}
              <div className="flex w-full items-center gap-2 border-t border-gray-800/80 pt-3 lg:w-auto lg:border-t-0 lg:pt-0 lg:shrink-0">
                <Link
                  href={`/exercise/${exercise.id}`}
                  className="flex-1 rounded-full border border-white px-3 py-2 text-center text-xs font-semibold whitespace-nowrap transition-colors hover:bg-white hover:text-black lg:flex-none"
                >
                  View Details
                </Link>

                <button
                  disabled={mark}
                  onClick={handleMark}
                  className="flex-1 rounded-full border border-[#c8ff00]/30 bg-[#c8ff00]/10 px-3 py-2 text-center text-xs font-semibold text-[#c8ff00] transition-colors hover:bg-[#c8ff00] hover:text-black disabled:opacity-50 lg:flex-none whitespace-nowrap"
                >
                  {mark ? "Done" : "Mark as done"}
                </button>

                {/* Desktop-only remove button */}
                <button
                  onClick={() => handleRemove(exercise.id)}
                  aria-label="Remove exercise"
                  className="hidden shrink-0 rounded-md p-2 text-gray-400 hover:text-white transition-colors text-xs lg:block"
                >
                  <RxCross1 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-[130px] flex-col items-center justify-center text-center p-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">
            No Workouts Available
          </h3>

          <p className="mt-1 text-xs text-gray-500 max-w-xs">
            Check back later for new exercises to add to your list.
          </p>

          <Link
            href="/"
            className="mt-4 rounded-full bg-[#c8ff00] px-5 py-2 text-xs font-semibold text-black transition-opacity hover:opacity-90"
          >
            Explore All
          </Link>
        </div>
      )}
    </div>
  );
};

export default AddList;