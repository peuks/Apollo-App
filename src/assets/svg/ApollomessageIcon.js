import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

interface ApollomessageProps {
  color?: string;
  width?: number;
  height?: number;
  line?: string;
}

const ApollomessageIcon = ({
  color = '#fff',
  width = 15,
  height = 15,
  line = '#3B69B6'
}: ApollomessageProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 12">
      <Rect x="1" width="18" height="12" rx="2" fill={color} />
      <Path
        d="M10 7.5L9.41451 8.31068L10 8.73353L10.5855 8.31068L10 7.5ZM19.5855 1.81068C20.0332 1.48732 20.134 0.862235 19.8107 0.414509C19.4873 -0.0332164 18.8622 -0.134037 18.4145 0.189321L19.5855 1.81068ZM0.414509 1.81068L9.41451 8.31068L10.5855 6.68932L1.58549 0.189321L0.414509 1.81068ZM10.5855 8.31068L19.5855 1.81068L18.4145 0.189321L9.41451 6.68932L10.5855 8.31068Z"
        fill={line}
      />
    </Svg>
  );
};

export default ApollomessageIcon;