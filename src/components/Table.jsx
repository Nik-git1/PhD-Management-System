import React from "react";
import { useTable, useSortBy } from "react-table";



const Table = () => {
  const data = React.useMemo(
    () => [
      {
        firstName: "John ",
        lastName: "Doe",
        age: 32,
        email: "john.doe@example.com",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        age: 28,
        email: "jane.doe@example.com",
      },
      {
        firstName: "Bob",
        lastName: "Smith",
        age: 45,
        email: "bob.smith@example.com",
      },
      {
        firstName: "Alice",
        lastName: "Jones",
        age: 24,
        email: "alice.jones@example.com",
      },
      
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip Code",
        accessor: "zipCode",
      },
      {
        Header: "Phone Number",
        accessor: "phoneNumber",
      },
      {
        Header: "Occupation",
        accessor: "occupation",
      },
      {
        Header: "Company",
        accessor: "company",
      },
      {
        Header: "Salary",
        accessor: "salary",
      },
      {
        Header: "Dummy",
        accessor: "dummy",
      },
    ],
    []
  );
  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <div style={{ overflowX: "auto" }}>
      <table  {...getTableProps()} className="table-fixed mt-10 divide-y divide-gray-200 border border-gray-400">
        <thead >
          {headerGroups.map((headerGroup) => (
            <tr  {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="p-4"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200" {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="p-4 ">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
