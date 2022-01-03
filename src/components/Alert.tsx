import { ReactNode } from "react";
import CloseButton from "./CloseButton";

interface IProps {
  show: boolean | "always";
  onClose?: () => void;
  className?: string;
  children?: ReactNode;
}

export default function Alert(props: IProps): JSX.Element {
  return (
    <>
      {props.show && (
        <div
          className={`rounded-lg flex p-2 px-4 shadow items-center justify-between ${props.className}`}
        >
          <div>{props.children || "Something went wrong"}</div>
          {props.show != "always" && (
            <CloseButton
              className="ml-1"
              onClick={() => props.onClose && props.onClose()}
            />
          )}
        </div>
      )}
    </>
  );
}
