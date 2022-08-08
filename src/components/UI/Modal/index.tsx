import React from 'react';

import { 
    Container,
    Buttons
} from './styles';

import Text from 'components/UI/Text';
import Button from 'components/UI/Button';

import { 
    ModalProps 
} from 'types/Modal';

const Modal: React.FC<ModalProps> = (props)=> {    
    return (
        <Container>
            <Text type='modalTitle'>{props.title}</Text>
            <Text type='modalSubtitle'>{props.subtitle}</Text>

            <Buttons>
                <Button type='modal' onClick={props.handleAccept}>
                    <Text type='modalButtons'>Accept</Text>
                </Button>

                <Button type='modal' onClick={props.handleDecline}>
                    <Text type='modalButtons'>Decline</Text>
                </Button>
            </Buttons>
        </Container>
    )
}

export default Modal;