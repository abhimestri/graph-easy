import * as XLSX from "xlsx";

export interface GraphTypes {
  types:
    | "Bar"
    | "Pie"
    | "Bubble"
    | "Line"
    | "Doughnut"
    | "Polar Area"
    | "Scatter"
    | "Radar";
}

export const GRAPHS = [
  "Bar",
  "Pie",
  "Bubble",
  "Line",
  "Doughnut",
  "Polar Area",
  "Scatter",
  "Radar",
];

export const parseExcelData = (workbookData: any) => {
  const firstSheetName = workbookData.SheetNames[0];
  const worksheet = workbookData.Sheets[firstSheetName];
  const json: any = XLSX.utils.sheet_to_json(worksheet, { header: "A" });
  const dt: any = {
    scrappedData: [],
    fieldValues: [json[0].A, json[0].B],
  };
  json?.slice(1).forEach((data: any, i: any) => {
    dt["scrappedData"] = [
      ...dt["scrappedData"],
      { label: data?.A, data: data?.B },
    ];
  });
  return dt;
};
