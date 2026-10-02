"use client";
import { exerciseContext } from "@/context/ExerciseContext";
import { IExercise } from "@/types/Type";
import React, { useContext } from "react";
import { toast } from "react-toastify";
interface IsaveProps {
  exercise: IExercise;
}

const SaveButton = ({ exercise }: IsaveProps) => {
  const {save,setSave}=useContext(exerciseContext)
  const handleSave = () => {

    const isAlreadyAdded = save.some((item) => item.id === exercise.id);

   
    if (isAlreadyAdded) {
      toast.info(`"${exercise.name}" is already in your today's plan!`);
      return;
    }

   
    setSave([...save, exercise]);
    toast.success(`You have added "${exercise.name}" to your today's plan`);
  };

  return (
    <div>
      <button onClick={()=>handleSave()} className="border border-gray-700 text-gray-300 text-xs px-5 py-3 rounded-lg">
        Save for later
      </button>
    </div>
  );
};

export default SaveButton;
