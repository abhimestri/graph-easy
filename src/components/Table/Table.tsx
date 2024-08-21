import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "../Button";
import { ReactSVG } from "react-svg";
import { ReactComponent as CloseIcon } from "../../assets/Close.svg";
import { getCurrentGraphAttributes } from "../../utility/form";
import { GraphTypes } from "../../utility/utility";
import { ReactElement } from "react";

interface CustomTableProps {
  data: any[];
  columns: any[];
  fields: any[];
  register: any;
  append: any;
  remove: any;
  currentGraphType: GraphTypes["types"];
  body: ReactElement;
}

const CustomTable = ({
  data,
  columns,
  fields,
  register,
  append,
  remove,
  currentGraphType,
  body,
}: CustomTableProps) => {
  return (
    <div>
      <TableContainer>
        <Table size="small" aria-label="a dense table">
          <caption>
            <Button
              onClick={() =>
                append({
                  label: "label",
                  data: "0",
                })
              }
              variant="white-outlined"
              className="secondary-btn px-[1.2vw] py-[6px] text-[0.9vw] ml-[-10px]"
            >
              {" "}
              Add a row
            </Button>
          </caption>
          <TableHead>
            <TableRow>
              {columns?.map((item: any) => {
                return (
                  <TableCell
                    style={{
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      fontFamily: "montserrat",
                    }}
                    className="!montserrat"
                  >
                    {item}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>{body}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;
