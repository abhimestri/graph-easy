import { GRAPHS, GraphTypes } from "../utility/utility";
type attr = "types";
interface TopGraphOptionBarProps {
  setCurrentGraph: (data: GraphTypes[attr]) => void;
  currentGraphType?: GraphTypes[attr];
}

const TopGraphOptionBar = (props: TopGraphOptionBarProps) => {
  const { setCurrentGraph, currentGraphType } = props;
  return (
    <div className="py-[30px] px-[16px] flex gap-x-6 shadow-sm">
      {GRAPHS?.map((item: any) => {
        return (
          <div
            onClick={() => setCurrentGraph(item)}
            className={`montserrat cursor-pointer rounded-[6px] border-solid border-[2px] border-extralight p-[20px] py-[10px] text-center text-[2vmin] ${
              currentGraphType === item &&
              "border-selectedprimary font-semibold"
            }`}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default TopGraphOptionBar;
