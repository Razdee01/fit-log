'use client';

import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';
import { IExercise } from '@/types/Type';

// 1. Define the TypeScript interface for your context
export interface IExerciseContext {
  add: IExercise[];
  setAdd: Dispatch<SetStateAction<IExercise[]>>;
  save: IExercise[];
  setSave: Dispatch<SetStateAction<IExercise[]>>;
}

// 2. Pass the interface generic to createContext
export const exerciseContext = createContext<IExerciseContext>({
  add: [],
  setAdd: () => {},
  save: [],
  setSave: () => {},
});

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  // 3. Add explicit types to useState so TS knows these hold exercise objects
  const [add, setAdd] = useState<IExercise[]>([]);
  const [save, setSave] = useState<IExercise[]>([]);

  // 4. Pass the actual state variables and setters into shareData
  const shareData: IExerciseContext = {
    add,
    setAdd,
    save,
    setSave,
  };

  return (
    <exerciseContext.Provider value={shareData}>
      {children}
    </exerciseContext.Provider>
  );
};

export default ExerciseProvider;