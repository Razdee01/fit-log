import ExercisesCard from "./ExercisesCard";
import { IExercise } from "@/types/Type";

const exercisePromise = async (): Promise<IExercise[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  const data = await response.json();
  return data;
};

const AllExercises = async () => {
  const exercisesData = await exercisePromise();

  return (
    <div className="container mx-auto space-y-4">
      <h2 className="text-4xl font-bold">THE LIBRARY</h2>
      <p>Twelve lifts covering every major muscle group.</p>

      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exercisesData.map((exercise) => (
          <ExercisesCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default AllExercises;