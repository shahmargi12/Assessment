import React from "react";
import Tooltip from "../Tooltip/index";
import { nameToColor } from "../../util/helper";
import {
  StyledAvatarContainer,
  StyledInitialContainer,
  StyledAvatar,
} from "./Avatar.styled";

type FormLabelProps = {
  size?: "small" | "medium" | "meadiumlarge" | "large" | string;
  url: string;
  title?: string;
  icon?: React.ReactElement;
  color?: "primary" | "secondary";
  isCustomSize?: boolean;
  isSquare?: boolean;
  shouldShowTwoInitials?: boolean;
  fontSize?: string;
  fontWeight?: string;
  isTooltip?: boolean;
  isAvatarColor?: boolean;
};

const getNameInitials = (str: string) => {
  let initials: string;
  const fullName = str.split(" ");
  if (fullName && fullName.length) {
    initials = fullName[0].charAt(0);
  }
  return initials.toUpperCase();
};

const getTwoNameInitials = (name: string) => {
  let initials: string;
  const fullName = name && name.split(" ");

  fullName && fullName.length >= 1
    ? (initials = `${fullName[0] && fullName[0].charAt(0)}${
        fullName[1] !== undefined ? fullName[1].charAt(0) : ""
      }`)
    : fullName[0].charAt(0);
  return initials.toUpperCase();
};

function AvatarComponent({
  size,
  url,
  title = "",
  icon = null,
  color,
  isCustomSize,
  isSquare,
  shouldShowTwoInitials,
  fontSize,
  isTooltip,
  isAvatarColor,
  fontWeight,
}: FormLabelProps): JSX.Element {
  let width =
    size === "small"
      ? "22px"
      : size === "medium"
      ? "40px"
      : size === "mediumSmall"
      ? "38px"
      : size === "meadiumlarge"
      ? "60px"
      : size === "large"
      ? "70px"
      : "80px";
  let height =
    size === "small"
      ? "22px"
      : size === "medium"
      ? "40px"
      : size === "mediumSmall"
      ? "38px"
      : size === "meadiumlarge"
      ? "60px"
      : size === "large"
      ? "70px"
      : "80px";
  if (isCustomSize) {
    width = size;
    height = size;
  }
  if (isSquare) {
    return (
      <StyledAvatar
        widthContainer={width}
        heightContainer={height}
        classes={{ rounded: "rounded" }}
        variant="rounded"
        alt={title}
        src={url}
        fontSize={fontSize}
        avatarBackgroundColor={nameToColor(title)}
        isAvatarColor={isAvatarColor}
        fontWeight={fontWeight}
      >
        {shouldShowTwoInitials
          ? title
            ? getTwoNameInitials(title)
            : icon
          : getNameInitials(title)}
      </StyledAvatar>
    );
  }
  return (
    <>
      {isTooltip ? (
        <Tooltip title={title}>
          {url && url.length > 0 ? (
            <StyledAvatarContainer
              width={width}
              height={height}
              src={url}
              alt=""
            ></StyledAvatarContainer>
          ) : (
            <StyledInitialContainer
              color={color}
              widthContainer={width}
              heightContainer={height}
              fontSize={fontSize}
              avatarBackgroundColor={nameToColor(title)}
              isAvatarColor={isAvatarColor}
              fontWeight={fontWeight}
            >
              {shouldShowTwoInitials
                ? title
                  ? getTwoNameInitials(title)
                  : icon
                : getNameInitials(title)}
            </StyledInitialContainer>
          )}
        </Tooltip>
      ) : (
        <>
          {url && url.length > 0 ? (
            <StyledAvatarContainer
              width={width}
              height={height}
              src={url}
              alt=""
            ></StyledAvatarContainer>
          ) : (
            <StyledInitialContainer
              color={color}
              widthContainer={width}
              heightContainer={height}
              fontSize={fontSize}
              avatarBackgroundColor={nameToColor(title)}
              isAvatarColor={isAvatarColor}
              fontWeight={fontWeight}
            >
              {shouldShowTwoInitials
                ? title
                  ? getTwoNameInitials(title)
                  : icon
                : getNameInitials(title)}
            </StyledInitialContainer>
          )}
        </>
      )}
    </>
  );
}
AvatarComponent.defaultProps = {
  color: "primary",
  isCustomSize: false,
  isSquare: false,
  size: "small",
  shouldShowTwoInitials: false,
  fontSize: "12px",
  isTooltip: true,
  isAvatarColor: false,
};
export default AvatarComponent;
