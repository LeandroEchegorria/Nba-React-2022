import { Dialog } from "@mui/material";

const Modal = ({handleClose , open, children}) => {
    return (
        <>
            <Dialog onClose={handleClose} open={open}>
                {children}
            </Dialog>
        </>
    )
}
export default Modal;