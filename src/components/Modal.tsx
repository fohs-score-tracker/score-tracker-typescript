import { Dialog } from "@headlessui/react";
import { ReactNode } from "react";
import CloseButton from "./CloseButton";

interface IProps {
  onClose: () => void;
  open: boolean;
  children: ReactNode;
  title: ReactNode;
}

export default function Modal({ children, title, ...props }: IProps) {
  return (
    <Dialog
      {...props}
      className="fixed inset-0 flex items-center justify-center"
    >
      <Dialog.Overlay className="bg-secondary/50 inset-0 fixed backdrop-blur" />
      <div className="z-[1] rounded-lg overflow-hidden shadow-2xl shadow-tertiary">
        <div className="overflow-auto">
          <div className="bg-primary text-white px-4 py-1 flex items-center justify-between ">
            <div>{title}</div>
            <CloseButton onClick={() => props.onClose()} />
          </div>
          <div className="p-2 bg-gray-100">{children}</div>
        </div>
      </div>
    </Dialog>
  );
}
