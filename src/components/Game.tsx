import React from "react";
import { IApiCall } from "../api";

interface IProps {
  apiCall: IApiCall;
  gameName: string;
}

export default function Game(props: IProps) {
  const { apiCall, gameName } = props;
  return (
    <div className="">
      <p> {gameName} </p>
    </div>
  );
}
