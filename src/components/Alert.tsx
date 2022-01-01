import { ReactNode } from "react";

interface IState {}

interface IProps {
  type?: string;
  className?: string;
  children?: ReactNode;
}

export default function Alert(props: IProps) {
  return (
    <div
      className={`alert alert-dismissible d-flex align-items-center alert-${props.type} ${props.className}`}
    >
      {props.children || "Something went wrong"}
      <button type="button" className="btn-close btn" data-bs-dismiss="alert" />
    </div>
  );
}
