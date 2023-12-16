import styled from "styled-components";
import { useApp } from "../../hooks";

export const Table = ({ columnas, data }) => {
  const { theme } = useApp();
  console.log(theme);

  return (
    <Container className="table-responsive">
      <table className={theme === "light" ? "table" : "table table-dark"}>
        <thead>
          <tr>
            {columnas.map((column, index) => (
              <th key={index} className={`col-${column.width}`}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columnas.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.buttons ? (
                    <div className="d-flex justify-content-center gap-4">
                      {column.buttons.map((button, buttonIndex) => (
                        <button
                          key={buttonIndex}
                          className={`btn btn-${button.color}`}
                        >
                          {button.label}
                        </button>
                      ))}
                    </div>
                  ) : (
                    row[column.field]
                  )}
                </td>
              ))}
              
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

const Container = styled.div`
  /* margin: 4rem 3rem; */
  border-radius: 0.5rem !important;
  overflow: hidden !important;
  box-shadow: 0px 5px 4px 2px rgba(0, 17, 0, 0.1);
  th,
  td,
  tr {
    font-family: "Roboto", sans-serif !important;
  }
  td,
  th {
    padding: 8px 20px;
    vertical-align: middle;
    font-weight: 400;
  }
  thead {
    th {
      color: ${(props) => props.theme.colorTableHeader};
      font-weight: bold;
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
  tbody {
    th,
    td {
      color: ${(props) => props.theme.colorTableRow};
    }
  }
`;
