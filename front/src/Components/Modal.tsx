import type { ReactNode } from "react";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-fit min-w-[280px] max-w-md max-h-[90vh] overflow-y-auto bg-surface rounded-xl shadow-lg border border-border p-5">
        <div className="flex justify-end">
          <Button
            className=" top-3 right-3 "
            text="Close"
            onClick={onClose}
          ></Button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
