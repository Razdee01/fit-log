"use client";

import { exerciseContext } from "@/context/ExerciseContext";
import { IExercise } from "@/types/Type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface IaddProps {
  exercise: IExercise;
}

const AddButton = ({ exercise }: IaddProps) => {
  const { add , setAdd } = useContext(exerciseContext);

  const handleAdd = () => {

    const isAlreadyAdded = add.some((item) => item.id === exercise.id);

   
    if (isAlreadyAdded) {
      toast.info(`"${exercise.name}" is already in your today's plan!`);
      return;
    }

   
    setAdd([...add, exercise]);
    toast.success(`You have added "${exercise.name}" to your today's plan`);
  };

  return (
    <div>
      <button
        onClick={handleAdd}
        className="bg-[#b6ff00] text-black text-xs font-bold px-5 py-3 rounded-lg hover:bg-[#a3e600] transition-colors"
      >
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default AddButton;