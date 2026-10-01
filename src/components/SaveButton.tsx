"use client";
import { exerciseContext } from "@/context/ExerciseContext";
import { IExercise } from "@/types/Type";
import React, { useContext } from "react";
interface IsaveProps {
  exercise: IExercise;
}

const SaveButton = ({ exercise }: IsaveProps) => {
  const {save,setSave}=useContext(exerciseContext)
    const handleSave=()=>{
      setSave([...save,exercise])
        console.log("save btton clck");
        
    }

  return (
    <div>
      <button onClick={()=>handleSave()} className="border border-gray-700 text-gray-300 text-xs px-5 py-3 rounded-lg">
        Save for later
      </button>
    </div>
  );
};

export default SaveButton;
