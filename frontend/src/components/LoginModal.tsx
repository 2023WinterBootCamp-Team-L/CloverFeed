import { ReactNode } from 'react';

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function LoginModal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300 bg-opacity-50"
          onClick={props.toggle}
        >
          <div
            className="bg-emerald-50 bg-opacity-70w-flex h-flex p-4 rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
