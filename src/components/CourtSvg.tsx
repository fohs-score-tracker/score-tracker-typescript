import { useEffect, useState } from "react";
import { IApiCall } from "../api";
import { IPlayerResult } from "../schemaTypes";
import court from "../assets/court.png";
interface IProps {
  apiCall: IApiCall;
  ignoreClicks: boolean;
  requireActive: boolean;
  activePlayerList: IPlayerResult[];
}

export default function CourtSvg(props: IProps) {
  const { apiCall, ignoreClicks, requireActive, activePlayerList } = props;

  const [SvgClick, setSvgClick] = useState(false);
  const courtWidth = 549;
  const courtHeight = 320;

  useEffect(() => {}, [activePlayerList]);

  return (
    <div className="flex  justify-center  items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${courtWidth} ${courtHeight}`}
        onClick={(e) => {}}
        className={SvgClick ? "cursor-default" : "cursor-not-allowed"}
      >
        <image href={court} width="100%" height="100%" />
      </svg>
    </div>
  );
}
