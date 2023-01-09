import React, { createContext, useState, useContext, ContextType, ReactNode } from "react";
type ContextProps = {
    type: string;
    setType: ( type: string ) => void;
};
const ArithmeticContext = createContext<ContextProps>({
    type: '',
    setType: ( type ) => {}
});
