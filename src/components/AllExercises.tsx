import React from "react";
import ExercisesCard from "./ExercisesCard";

const exercisePromise = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  const data = await response.json();
  return data;
};

const AllExercises = async () => {
  const exercisesData = await exercisePromise();

  console.log(exercisesData);

  return (
    <div className="container mx-auto space-y-4">
      <h2 className="text-4xl font-bold">THE LIBRARY</h2>
      <p>Twelve lifts covering every major muscle group.</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {exercisesData.map((exercise) => (
          <ExercisesCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default AllExercises;
