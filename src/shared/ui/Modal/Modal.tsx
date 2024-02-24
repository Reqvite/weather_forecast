import './Modal.css'

import { ReactNode, useCallback, useEffect } from "react";

import PlusIcon from "@/shared/assets/icons/cross-svgrepo-com.svg?react";

import { Button } from '../Button/Button';
import { Portal } from "../Portal/Portal";
import { Text } from '../Text/Text';

interface ModalProps {
    title?: string;
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    onClick?: () => void;
    withFooter?: boolean;
}

export const Modal = (props: ModalProps):JSX.Element => {
    const { title, children, onClose = () => {},onClick, withFooter = true } = props;

    const onKeyPress = useCallback((e:KeyboardEvent) => {
        const key = e.code
        if (key === 'Escape' && onClose) {
            onClose()  
        }
    },[onClose])

    //@ts-expect-error ///
    const onOverlayClick = useCallback((e) => {
        const targetElement = e.target as HTMLElement;
        if (targetElement.classList.contains('modal')) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyPress)
        document.addEventListener('click', onOverlayClick)
        return () => {
            document.removeEventListener('keydown', onKeyPress)   
            document.removeEventListener('click', onOverlayClick)

        }
    }, [onKeyPress, onOverlayClick]);

    return (
        <Portal element={document.getElementById('modals') ?? document.body}>
            <div className='modal'>
                <div className='modal__content'>
                    <div className='modal__header'>
                        {title && <Text>{title}</Text>}
                        <Button className='modal__closeButton' onClick={onClose}><PlusIcon/></Button>
                    </div>
                    <div className='modal__body'>
                        {children}
                    </div>
                    {withFooter && <div className='modal-footer'>
                        <Button variant='outline' className='modal-footer__closeButton' onClick={onClose}>Close</Button>
                        <Button className='modal-footer__closeButton' onClick={onClick}>Save</Button>
                    </div>}
                </div>
            </div>
        </Portal>
    );
};
