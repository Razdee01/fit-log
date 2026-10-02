"use client"
import Link from 'next/link';
import React from 'react';
import { useContext } from "react";
import { exerciseContext } from "@/context/ExerciseContext";

const PlanSave = () => {
    const {add,save}=useContext(exerciseContext)
    return (
        <div className="navbar-end gap-5">
          <Link href="/My-plan" >
            <div className="flex items-center gap-2">
              <div>Plan</div>
              <div className="rounded-full text-black bg-[#C2F800]  px-2">{add.length}</div>
            </div>
          </Link>

             <Link href="/My-plan" >
            <div className="flex items-center gap-2">
              <div>Saved</div>
              <div className="rounded-full border border-white px-2">{save.length}</div>
            </div>
          </Link>
        </div>
    );
};

export default PlanSave;