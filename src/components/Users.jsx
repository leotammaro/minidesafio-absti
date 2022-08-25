import React from "react";
import { useFilters, useGlobalFilter, useSortBy, useTable } from "react-table";
import users from "../constants/users";
import "./Users.scss";
import direction from "../assets/direction.svg";
import directionNeutral from "../assets/direction-neutral.svg";
import search from "../assets/search.svg";

function Users() {
  const data = React.useMemo(() => users, []);
  const columns = React.useMemo(
    () => [
      { Header: "Nombre", accessor: "nombre" },
      { Header: "Edad", accessor: "edad" },
      { Header: "Carrera", accessor: "carrera" },
      { Header: "Hobbie", accessor: "hobbie" },
    ],
    []
  );
  const tableWithUsers = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = tableWithUsers;
  const [inputValue, setInputValue] = React.useState("");
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    setGlobalFilter(e.target.value);
  };

  return (
    <div className="table-container">
      <div className="search-container">
        <img src={search} className="magnifying" alt="lupa" />
        <input
          placeholder="Busqueda"
          className="input"
          onChange={handleOnChange}
          value={inputValue}
        />
      </div>
      <table {...getTableProps()} className="users-table">
        <thead className="header-table">
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="row-container"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="header-title"
                >
                  <div className="header-content">
                    {column.render("Header")}
                    <img
                      src={column.isSorted ? direction : directionNeutral}
                      alt="direction user"
                      className={column.isSortedDesc ? "icon-down" : "icon-up"}
                    />
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.length > 0 ? (
            rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="user-row">
                  {row.cells.map((cell) => {
                    return (
                      <td className="user-value" {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="row-with-no-values">
                No se encontro ningun resultado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
