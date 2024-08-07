import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "../Button";
import { ReactSVG } from "react-svg";
import { ReactComponent as CloseIcon } from "../../assets/Close.svg";

interface CustomTableProps {
  data: any[];
  columns: any[];
  fields: any[];
  register: any;
  append: any;
  remove: any;
}

const CustomTable = ({
  data,
  columns,
  fields,
  register,
  append,
  remove,
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
              variant="secondary"
              className="px-[10px] py-[6px] text-[0.8rem] ml-[-10px]"
            >
              {" "}
              Add a row
            </Button>
          </caption>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  paddingLeft: "12px",
                  paddingRight: "10px",
                  fontFamily: "montserrat",
                }}
                className="!montserrat"
              >
                Label
              </TableCell>
              <TableCell
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  fontFamily: "montserrat",
                }}
                className="!montserrat"
              >
                Data
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields?.map((field: any, index: any) => {
              return (
                <TableRow className="max-w-[6vw] p-0">
                  <TableCell
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    <input
                      className="montserrat max-w-[6vw] px-[6px] py-[10px] border-solid rounded-[6px] border-lightgrey border-[1px]"
                      {...register(`dataValues.${index}.label`)}
                      placeholder="label"
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    <input
                      className="montserrat max-w-[6vw] px-[6px] py-[10px] border-solid rounded-[6px] border-lightgrey border-[1px]"
                      {...register(`dataValues.${index}.data`)}
                      placeholder="0"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => remove(index)}
                      variant="white-outlined"
                      className="px-[6px] py-[6px] border-none"
                    >
                      <CloseIcon style={{ fill: "#FF5139" }} />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;
