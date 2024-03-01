// FileContext.js
import React, { createContext, useState, useContext } from "react";

const FileContext = createContext();

export const useFile = () => useContext(FileContext);

export const FileProvider = ({ children }) => {
  const [file, setFile] = useState(null);
  const [srcSet, setSrcSet] = useState("");

  return (
    <FileContext.Provider value={{ file, setFile, srcSet, setSrcSet }}>
      {children}
    </FileContext.Provider>
  );
};
