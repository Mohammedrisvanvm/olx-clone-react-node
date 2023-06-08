import { createContext, useState } from "react";
export const AuthContext = createContext(null);

export default function Context({ children }) {
    const [user, setUser]=useState({ login: null})
    const [search, setSearch]=useState("")
    const [category, setCategory]=useState(" ")
    const [refresh, setRefresh]=useState(false)

  return (
    <AuthContext.Provider value={{ user, refresh, setUser, setRefresh, search, setSearch, category, setCategory}}>
      {children}
    </AuthContext.Provider>
  );
}
