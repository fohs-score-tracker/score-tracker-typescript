import { ReactNode } from "react";

interface IProps {
  className?: string;
  children: ReactNode;
}

export default function RouteWrapper({ children, className }: IProps) {
  return <div className={`m-4 ${className || ""}`}>{children}</div>;
}
