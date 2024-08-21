import { GraphTypes } from "./utility";

export const getFormFields = (graphType: any) => {
  switch (graphType) {
    case "Bubble":
      return {
        X: "",
        Y: "",
        R: "",
      };
    case "Scatter":
      return {
        label: "",
        data: "",
      };
    default:
      return {
        label: "",
        data: "",
      };
  }
};

export const getCurrentGraphAttributes = (graphType: GraphTypes["types"]) => {
  switch (graphType) {
    case "Bubble":
      return [
        {
          formLabel: "X",
          value: "X",
        },
        {
          formLabel: "Y",
          value: "Y",
        },
        {
          formLabel: "R",
          value: "R",
        },
      ];
    case "Scatter":
      return [
        {
          formLabel: "X",
          value: "X",
        },
      ];
    default:
      return [
        {
          formLabel: "Label",
          value: "label",
        },
        {
          formLabel: "Data",
          value: "data",
        },
      ];
  }
};
