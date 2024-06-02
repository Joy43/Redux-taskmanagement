import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

function Modal({ isOpen, setIsOpen, title, children }) {
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-2xl space-y-4 space-x-3 border bg-white p-12">
            <DialogTitle className=" text-center text-lg font-extralight">
              {title}
            </DialogTitle>
            {children}
            {/* <Description>
              This will permanently deactivate your account
            </Description>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div> */}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
export default Modal;
