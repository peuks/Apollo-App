import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

interface MinusProps {
  color?: string;
  width?: number;
  height?: number;
}

const MinusIcon = ({
  color = '#0B3D91',
  width = 20,
  height = 20,
}: MinusProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 21 21">
      <Path
        d="M10.5 0C4.70101 0 0 4.70101 0 10.5C0 16.299 4.70101 21 10.5 21C16.299 21 21 16.299 21 10.5C21 4.70101 16.299 0 10.5 0ZM4.47071 8.79272H16.5306V12.2072H4.47071V8.79272Z"
        fill={color}
      />
    </Svg>
  );
};

export default MinusIcon;
