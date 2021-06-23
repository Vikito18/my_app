import { Link } from "react-router-dom";

import classNames from "../classNames";

const LinkButton = (props) => {
  const { variant = "primary", size, ...otherProps } = props;
  return (
    <Link
      {...otherProps}
      {...classNames(
        `btn btn-${variant} ${size ? `btn-${size}` : ""}`,
        otherProps
      )}
    />
  );
};

export default LinkButton;
