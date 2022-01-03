import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface IProps {
  onClick: () => void;
  className?: string;
  iconProps?: FontAwesomeIconProps;
}

/** button with X symbol */
export default function CloseButton({ iconProps, onClick, ...props }: IProps) {
  return (
    <button type="button" {...props} onClick={() => onClick()}>
      <FontAwesomeIcon {...iconProps} icon={faTimesCircle} />
    </button>
  );
}
