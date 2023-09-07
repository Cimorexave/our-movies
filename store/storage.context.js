import { createContext } from "react";

const initialStorageContext = {
    movies: [],
};

export default StorageContext = createContext(initialStorageContext);