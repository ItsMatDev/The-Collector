import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [items, setItems] = useState("");
  const [objectives, setObjectives] = useState("");
  const [score, setScores] = useState(0);
  const [time, setTime] = useState(0);

  const contextValue = useMemo(() => {
    return {
      items,
      objectives,
      score,
      time,
      setItems,
      setObjectives,
      setScores,
      setTime,
    };
  }, [items, objectives, score, time]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}
export { GlobalContextProvider, useGlobalContext };

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
