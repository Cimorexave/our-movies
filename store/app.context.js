import { createContext } from "react";

const initialAppContext = {
    pageName: "pick",
    selectedGenres: [],
}
export default AppContext = createContext(initialAppContext);