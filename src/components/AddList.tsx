"use client";

import { exerciseContext } from "@/context/ExerciseContext";
import { IExercise } from "@/types/Type";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

interface IaddProps {
  addedBook: IExercise[];
}

const AddList = ({ addedBook }: IaddProps) => {

  const {setAdd}=useContext(exerciseContext)
  const [mark,setMark]=useState(false)
  const handleMark=()=>{
    setMark(true)
  }

  const handleRemove=(id)=>{
    const remainings=addedBook.filter((book)=>id!==book.id)
    setAdd(remainings)
  }
  return (
    <div className="min-h-[170px] rounded-xl border border-gray-800 bg-[#0d0f12] p-5">
      {addedBook.length > 0 ? (
        <div className="space-y-3">
          {addedBook.map((exercise) => (
            <div
              key={exercise.id}
              className="flex items-center justify-between rounded-lg border border-gray-800 bg-[#15171c] px-4 py-3"
            >
              <div className="flex gap-3 items-center">
                <Image className="rounded-3xl" src={exercise.image} width={80} height={80} alt="image"/>
              
                <div>
                   <h3 className="text-2xl font-semibold">{exercise.name}</h3>
                   <h2 className="text-sm font-normal">{exercise.equipment}</h2>

                <p className="mt-1 text-sm text-gray-500">
                   {exercise.duration} min • {exercise.caloriesBurned} calories  • {exercise.rating}
                </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link href={`exercise/${exercise.id}`} className="rounded-full border border-white px-3 py-2 text-xs font-semibold  ">
                View Details
              </Link>
                <button disabled={mark} onClick={()=>handleMark()} className="rounded-full border border-[#c8ff00]/30 bg-[#c8ff00]/10 px-3 py-2 text-xs font-semibold text-[#c8ff00] hover:bg-[#c8ff00] hover:text-black">
                {mark?"Done":"Mark as done"}
              </button>
                <button onClick={()=>handleRemove(exercise.id)} className="rounded-md  px-3 py-2 text-xs ">
                <RxCross1 />
              </button>
              </div>
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