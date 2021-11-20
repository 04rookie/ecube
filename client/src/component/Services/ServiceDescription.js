import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
export default function ServiceDescription(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.cardData.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ul>
              {props.cardData.body.map((point) => {
                return <li>{point}</li>;
              })}
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} autoFocus>
            Hide
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
