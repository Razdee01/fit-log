"use client";
import { exerciseContext } from "@/context/ExerciseContext";
import { IExercise } from "@/types/Type";
import React, { useContext} from "react";
interface IaddProps {
  exercise: IExercise;

}

const AddButton = ({ exercise }: IaddProps) => {
 
    const {add,setAdd}=useContext(exerciseContext)
   
    
  const handleAdd = () => {
      setAdd([...add,exercise])
    
     
  };
  
   

  return (
    <div>
      <button
        onClick={() => handleAdd()}
        className="bg-[#b6ff00] text-black text-xs font-bold px-5 py-3 rounded-lg"
      >
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default AddButton;
