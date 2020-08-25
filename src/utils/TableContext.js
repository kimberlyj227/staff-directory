import React, {createContext} from "react";


const TableContext = createContext({
  users: [],
  order: "",
  filteredUsers: [],
  headings: {}
});

export default TableContext;