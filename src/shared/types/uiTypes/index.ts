import { ReactNode } from "react";

export interface ModalProps {
    title?: string;
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    onClick?: () => void;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    withFooter?: boolean;
}