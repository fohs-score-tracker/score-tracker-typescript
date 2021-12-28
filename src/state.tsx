import { createContext, useContext, useState, useMemo } from "react";

export const StateContext = createContext();

export const UseState = () => useContext(StateContext);

export function StateProvider(props: any) {
  const [state, setState] = useState({});
  const value = useMemo(() => [state, setState], [state]);
  return <StateContext.Provider value={value} {...props} />;
}
