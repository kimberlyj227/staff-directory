import React, {useContext} from "react";
import DataBody from "../DataBody/DataBody.js";
import "./DataTable.css";
import TableContext from "../../utils/TableContext";
import {FaChevronCircleDown} from "react-icons/fa";

const Table = () => {
  const {headings} = useContext(TableContext);
  return (
    <div className = "dataTable">
      <table id="table" className="table">
        <thead>
          <tr>
            {headings.map(({ name, width}) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{width}}
                  onClick={() => {
                    context.handleSort(name);
                  }} >
                    {name}
                    <span className="pointer">
                      <FaChevronCircleDown/>
                      </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <DataBody />

      </table>
    </div>
  )
}

export default Table;