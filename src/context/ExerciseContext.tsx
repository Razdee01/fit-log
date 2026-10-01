'use client'
import React, {createContext, ReactNode, useState } from 'react';


export const exerciseContext=createContext({})



const ExerciseProvider = ({children}:{children:ReactNode}) => {
    const[add,setAdd]=useState([])
    const[save,setSave]=useState([])
    const shareData={
        add,
        setAdd,
        save,
        setSave
    }

    return (
        <exerciseContext.Provider value={shareData}>
            {children}
        </exerciseContext.Provider>
    );
};

export default ExerciseProvider;