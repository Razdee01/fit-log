import Image from "next/image";
import React from "react";

const ExercisesCard = ({ exercise }) => {
  return (
    <div className="rounded-xl border border-gray-800 bg-[#15171c]">

      {/* Image */}
      <div className="relative h-44 w-full">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Muscle Groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {exercise.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400 px-2.5 py-1 text-[10px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Exercise Name */}
        <h2 className="text-sm font-black uppercase text-white">
          {exercise.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-xs text-gray-500">
          {exercise.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-gray-800"></div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-gray-400">

          <span className="flex items-center gap-1">
            ◷
            {exercise.duration} min
          </span>

          <span className="flex items-center gap-1">
            ●
            {exercise.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            ☆
            {exercise.rating}
          </span>

        </div>
      </div>
    </div>
  );
};

export default ExercisesCard;