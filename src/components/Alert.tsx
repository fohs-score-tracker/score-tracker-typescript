import { ReactNode } from "react";

interface IProps {
  show: boolean;
  onClose?: () => void;
  type?: string;
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
          <button
            type="button"
            className="text-2xl"
            title="Dismiss"
            onClick={() => props.onClose && props.onClose()}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
