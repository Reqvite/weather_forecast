import './Modal.css'

import { useCallback, useEffect } from "react";

import PlusIcon from "@/shared/assets/icons/cross-svgrepo-com.svg?react";
import { ModalProps } from '@/shared/types/uiTypes';

import { Button } from '../Button/Button';
import { Portal } from "../Portal/Portal";
import { Text } from '../Text/Text';

export const Modal = (props: ModalProps):JSX.Element => {
    const { title, children, onClose = () => {},onClick, onSubmit,  withFooter = true} = props;

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
                <form autoComplete="off" className='modal__content' onSubmit={onSubmit}>
                    <div className='modal__header'>
                        {title && <Text>{title}</Text>}
                        <Button type='button' className='modal__closeButton' onClick={onClose}><PlusIcon/></Button>
                    </div>
                    <div className='modal__body'>
                        {children}
                    </div>
                    {withFooter && <div className='modal-footer'>
                        <Button type='button'  variant='outline' className='modal-footer__closeButton' onClick={onClose}>Close</Button>
                        <Button className='modal-footer__closeButton' onClick={onClick}>Save</Button>
                    </div>}
                </form>
            </div>
        </Portal>
    );
};
