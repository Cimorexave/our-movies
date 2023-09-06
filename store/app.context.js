import { createContext } from "react";

export const initialAppContext = {
    pageName: "pick",
}
export const AppContext = createContext(initialAppContext);