import React from "react";
import CustomTable from "../components/Table/Table";
import { GraphTypes } from "../utility/utility";
import { getCurrentGraphAttributes } from "../utility/form";
import { TableRow, TableCell } from "@mui/material";
import Button from "../components/Button";
import { ReactComponent as CloseIcon } from "../assets/Close.svg";

interface GraphDataFormProps {
  fields: any[];
  register: any;
  append: any;
  remove: any;
  currentGraphType: GraphTypes["types"];
  entity: "modal" | "sidebar";
}

const GraphDataForm = ({
  fields,
  register,
  append,
  remove,
  currentGraphType,
  entity,
}: GraphDataFormProps) => {
  return (
    <div>
      {" "}
      <CustomTable
        data={[]}
        columns={getCurrentGraphAttributes(currentGraphType)?.map(
          (item: any) => item?.formLabel
        )}
        fields={fields}
        register={register}
        append={append}
        remove={remove}
        currentGraphType={currentGraphType}
        body={
          <>
            {fields?.map((field: any, index: any) => {
              return (
                <TableRow>
                  {getCurrentGraphAttributes(currentGraphType)?.map((item) => {
                    return (
                      <TableCell
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      >
                        <input
                          className={
                            entity === "modal"
                              ? "extended-form-input"
                              : "form-input-style"
                          }
                          {...register(`dataValues.${index}.${item?.value}`)}
                          placeholder={`${item?.value}`}
                        />
                      </TableCell>
                    );
                  })}
                  <Button
                    onClick={() => remove(index)}
                    variant="white-outlined"
                    className="form-remove-field-btn"
                  >
                    <CloseIcon style={{ fill: "#FF5139" }} />
                  </Button>
                </TableRow>
              );
            })}
          </>
        }
      />{" "}
    </div>
  );
};

export default GraphDataForm;
