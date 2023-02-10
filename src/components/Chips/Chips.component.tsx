import React from "react";
import Chip, { ChipProps } from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Icons from "../../Icons";
import { StyleChipsContainer, StyledIcon } from "./Chips.styled";

type ChipsProps = {
  label: string;
  variant?: "outlined" | "filled";
  onDelete: React.MouseEventHandler;
};

const MySVGComponent = (props: ChipProps["deleteIcon"]): JSX.Element => {
  return (
    <StyledIcon {...props}>
      <Icons.CloseIcon height={10} width={10} />
    </StyledIcon>
  );
};

function ChipsComponent({ label, variant, onDelete }: ChipsProps): JSX.Element {
  return (
    <StyleChipsContainer>
      <Stack direction="row" spacing={1}>
        <Chip
          classes={{ root: "customChipRoot" }}
          label={label}
          variant={variant}
          onDelete={onDelete}
          deleteIcon={<MySVGComponent key={""} type={""} props={undefined} />}
        />
      </Stack>
    </StyleChipsContainer>
  );
}

export default ChipsComponent;
