import { Modal, ModalHeader, ModalBody, ModalFooter, ModalContent } from "@nextui-org/modal";
import CustomButton from "./button";

type ModalProps = {
  isOpen: boolean;
  size?: "xl" | "2xl" | "4xl";
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  save: () => void;
};

export default function CustomModal({ isOpen, size = "4xl", onClose, children, title, save }: ModalProps) {
  return (
    <>
      <Modal
        backdrop="blur"
        size={size}
        isOpen={isOpen}
        onClose={onClose}
        className="bg-gradient-to-b from-slate-900 to-slate-700 min-h-[400px]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-white">{title}</ModalHeader>
              <ModalBody className="w-full h-full">{children}</ModalBody>
              <ModalFooter>
                <CustomButton text="Guardar" onClick={save} buttonType="primary" />
                <CustomButton text="Cerrar" onClick={onClose} buttonType="secondary" />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
