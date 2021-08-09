import React from 'react';
import Svg, {Path, Circle, Rect} from 'react-native-svg';

interface GrenierProps {
  color?: string;
  width?: number;
  height?: number;
}

const GrenierIcon = ({
  color = '#3F3D56',
  width = 40,
  height = 40,
}: GrenierProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 56 56">
      <Circle cx="28" cy="28" r="27.5" stroke={color} />
      <Path
        d="M13.1625 38.9802H9.33374L17.0344 21.9606H20.8632L13.1625 38.9802Z"
        fill={color}
      />
      <Path
        d="M21.9467 38.9802H18.1179L25.8185 21.9606H29.6473L21.9467 38.9802Z"
        fill={color}
      />
      <Path
        d="M26.3816 38.9802H22.5098L30.2104 21.9606H34.0392L26.3816 38.9802Z"
        fill={color}
      />
      <Path
        d="M46.6666 38.9802L38.7695 21.9606H38.7254H34.843H34.7989L26.9019 38.9802H30.8283L36.7842 26.15L42.7401 38.9802H46.6666Z"
        fill={color}
      />
      <Path
        d="M24.4809 21.7577V18.6665H21.4695V21.7577H21.4264L13.7258 38.9802H17.5976L25.2552 21.7577H24.4809Z"
        fill={color}
      />
      <Rect
        x="34.5884"
        y="32.9412"
        width="2.24599"
        height="1.75686"
        fill={color}
      />
      <Rect
        x="37.2837"
        y="32.9413"
        width="2.24599"
        height="1.75686"
        fill={color}
      />
      <Rect
        x="37.2837"
        y="35.1373"
        width="2.24599"
        height="2.19608"
        fill={color}
      />
      <Rect
        x="34.5881"
        y="35.1373"
        width="2.24599"
        height="2.19608"
        fill={color}
      />
    </Svg>
  );
};

export default GrenierIcon;