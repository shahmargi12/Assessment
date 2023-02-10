import React, { MouseEventHandler, useState } from "react";
import { IconButton } from "@mui/material";
import Button from "../Button/Button.component";
// import ThemeIcons from '@foster/ThemeIcons';
import { StyledDiv, StyledModalContainer } from "./ConfirmationDialog.styled";

type DialogProps = {
  onConfirm: MouseEventHandler;
  isShowCloseIcon?: boolean;
  onCancel: MouseEventHandler;
  onClose: MouseEventHandler;
  text: {
    questionText: string;
    title: string;
    okayText: string;
    cancelText: string;
  };
  disabled?: boolean;
  width?: string;
};

function ConfirmationDialog({
  onConfirm,
  onClose,
  isShowCloseIcon = true,
  onCancel,
  text,
  disabled = false,
  width,
}: DialogProps): JSX.Element {
  const [open, setOpen] = useState(true);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isShowCloseIcon) {
      setOpen(false);
    }
    if (onClose) {
      onClose(e);
    }
  };

  const handleOnConfirm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onConfirm(e);
  };

  const handleOnCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onCancel(e);
  };

  return (
    <StyledDiv>
      <StyledModalContainer
        open={open}
        onClose={handleClose}
        width={width}
        height="auto"
      >
        <div className="dialogContainer">
          <div className="dialog">
            <div className="dialogHeader">
              <div>
                <h2>{text.title}</h2>
              </div>

              <div className="rightSection">
                {isShowCloseIcon && (
                  <IconButton onClick={handleClose}>
                    {/* <ThemeIcons.CloseIcon width={15} height={15} /> */}
                  </IconButton>
                )}
              </div>
            </div>
            <div className="body">{text.questionText}</div>
          </div>
          <div className="btn">
            <Button
              variant="contained"
              size="medium"
              disabled={disabled}
              onClick={handleOnConfirm}
            >
              {text.okayText}
            </Button>
            <Button variant="outlined" size="medium" onClick={handleOnCancel}>
              {text.cancelText}
            </Button>
          </div>
        </div>
      </StyledModalContainer>
    </StyledDiv>
  );
}

ConfirmationDialog.defaultProps = {};
export default ConfirmationDialog;
