import React, { useMemo, useRef } from "react";
import { StyledButton, StyledLoadingController } from "./Button.styled";

export type ButtonVariants =
  | "contained"
  | "text"
  | "outlined"
  | "secondary"
  | "outlined_secondary"
  | "closed";

export type ButtonSizes =
  | "mini"
  | "compact"
  | "small"
  | "regular"
  | "medium"
  | "large";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    secondary: true;
    outlined_secondary: true;
    closed: true;
  }

  interface ButtonPropsSizeOverrides {
    mini: true;
    compact: true;
    regular: true;
  }
}

export interface ButtonPropTypes {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: ButtonVariants;
  size: ButtonSizes;
  href?: string;
  isLoading: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  ref: React.MutableRefObject<HTMLButtonElement>;
  id: string;
  type?: "submit";
  form?: string;
}

export const LoadingSizeMap: Record<ButtonSizes, number> = {
  mini: 15,
  compact: 20,
  small: 20,
  regular: 20,
  medium: 25,
  large: 25,
};

export const getLoadingStyleAsPerVariantAndSize = (
  size: ButtonSizes
): { size: number } => {
  return {
    size: LoadingSizeMap[size],
  };
};

export const getDisabledClassnamesAsPerVariant = (
  variant: ButtonVariants
): string => {
  return `${variant}-disabled`;
};

function ButtonComponent({
  children,
  id,
  ref,
  disabled,
  endIcon,
  fullWidth,
  href,
  isLoading,
  size,
  startIcon,
  type,
  variant,
  onClick,
  form,
}: ButtonPropTypes): React.ReactElement {
  const buttonRef = useRef<HTMLButtonElement | null>();
  const loadingStyle = useMemo(
    () => getLoadingStyleAsPerVariantAndSize(size),
    [variant, size]
  );
  const disabledClassName = useMemo(
    () => getDisabledClassnamesAsPerVariant(variant),
    [variant]
  );

  return (
    <StyledButton
      variant={variant}
      disabled={disabled || isLoading}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      href={href}
      size={size}
      onClick={onClick}
      classes={{ disabled: disabledClassName }}
      type={type}
      form={form}
      ref={ref}
      id={id}
      {...(variant === "text" || variant === "closed"
        ? {
            disableRipple: true,
            disableElevation: true,
            disableFocusRipple: true,
          }
        : {})}
      {...(isLoading === true && buttonRef && buttonRef.current
        ? { style: { minWidth: buttonRef.current.clientWidth } }
        : {})}
    >
      {isLoading ? <StyledLoadingController {...loadingStyle} /> : children}
    </StyledButton>
  );
}

const defaultProps: Partial<ButtonPropTypes> = {
  variant: "contained",
  isLoading: false,
  size: "medium",
};

ButtonComponent.defaultProps = defaultProps;

export default ButtonComponent;
