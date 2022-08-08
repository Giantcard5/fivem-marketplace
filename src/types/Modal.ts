export type ModalProps = {
    title: string;
    subtitle: string;
    handleAccept?: () => void;
    handleDecline?: () => void;
}