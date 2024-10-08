import html2canvas from "html2canvas";
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

export const parseExcelData = (
  workbookData: any,
  currentGraphType: GraphTypes["types"]
) => {
  const firstSheetName = workbookData.SheetNames[0];
  const worksheet = workbookData.Sheets[firstSheetName];
  const json: any = XLSX.utils.sheet_to_json(worksheet, { header: "A" });
  const dt: any = {
    scrappedData: [],
    fieldValues:
      currentGraphType === "Bubble"
        ? [(json[0].A, json[0].B, json[0].C)]
        : [(json[0].A, json[0].B)],
  };
  if (currentGraphType === "Bubble") {
    json?.slice(1).forEach((data: any, i: any) => {
      dt["scrappedData"] = [
        ...dt["scrappedData"],
        { X: data?.A, Y: data?.B, R: data?.C },
      ];
    });
  } else {
    json?.slice(1).forEach((data: any, i: any) => {
      dt["scrappedData"] = [
        ...dt["scrappedData"],
        { label: data?.A, data: data?.B },
      ];
    });
  }
  return dt;
};

export const handleCaptureImage = (id: string) => {
  const element = document.getElementById(id); // Get the element you want to capture

  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "graph-snapshot.png";
    link.click();
  });
};
