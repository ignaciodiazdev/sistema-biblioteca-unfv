import { AppContext } from "../context";
import { useContext } from "react";

export const useApp = () => useContext(AppContext);
