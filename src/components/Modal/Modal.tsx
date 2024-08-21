import { ReactElement } from "react";
import { ReactComponent as Close } from "../../assets/Close.svg";
import { Modal, Dialog, Box, Typography, Button } from "@mui/material";

type CommonModalProps = {
  open: boolean;
  handleClose: () => void;
  body: any;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "1px solid #FFF",
  borderRadius: "10px",
  backgroundColor: "#FFF",
  padding: "10px",
};

const CommonModal: React.FC<CommonModalProps> = ({
  open,
  handleClose,
  body,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      //   aria-labelledby="modal-title"
      //   aria-describedby="modal-description"
    >
      <Box sx={style}>
        <div className="p-20">
          <div className="modal-style">
            <Close
              fill="#000"
              onClick={handleClose}
              className="modal-close-icon"
            />
          </div>
          <div className="modal-body">{body}</div>
        </div>
      </Box>
    </Modal>
  );
};

export default CommonModal;
