import React from "react";
import { StyledStatusContainer } from "./ToggleSwitch.styled";
import Icons from "../../Icons";

type StatusProps = {
  defaultChecked?: boolean;
  onChange: (flag: boolean) => void;
  disabled?: boolean;
  labels?: StatusLabelsProps;
};

type StatusLabelsProps = {
  active: string;
  inactive: string;
};

const ToggleSwitch = ({
  defaultChecked = false,
  disabled,
  onChange,
  labels = { active: "School", inactive: "Student" },
  ...otherProps
}: StatusProps): JSX.Element => {
  return (
    <StyledStatusContainer inactiveLabel={labels.inactive}>
      <div
        className={
          defaultChecked
            ? disabled
              ? "switch-button checked disabled"
              : "switch-button checked"
            : "switch-button"
        }
      >
        <input
          className="switch-button-checkbox"
          type="checkbox"
          {...otherProps}
          defaultChecked={!defaultChecked}
          onChange={() => onChange(!defaultChecked)}
          disabled={disabled}
          checked={!defaultChecked}
        ></input>
        <label className="switch-button-label" htmlFor="test">
          <span
            className={
              defaultChecked
                ? "switch-button-label-span checked"
                : "switch-button-label-span"
            }
          >
            <Icons.SchoolIcon /> <span>{labels.active}</span>
          </span>
        </label>
      </div>
    </StyledStatusContainer>
  );
};
ToggleSwitch.defaultProps = {
  onChange: (e: boolean) => {
    console.log(e);
  },
};

export default ToggleSwitch;
