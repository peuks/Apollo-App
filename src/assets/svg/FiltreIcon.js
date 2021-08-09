import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

interface FiltreProps {
  color?: string;
  width?: number;
  height?: number;
}

const FiltreIcon = ({
  color = '#3F3D56',
  width = 40,
  height = 40,
}: FiltreProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 37">
      <Path
        d="M5.00007 11.0069C5.00007 11.0069 5.00009 10.4029 5.00009 9.65858C5.00009 8.91385 5 8.3103 5 8.3103H27.0001C27.0001 8.3103 27.0001 8.91385 27.0001 9.65858C27.0001 10.4029 27.0001 11.0069 27.0001 11.0069H5.00007Z"
        fill={color}
      />
      <Path
        d="M5.00007 20.1582C5.00007 20.1582 5.00009 19.5542 5.00009 18.8099C5.00009 18.0652 5 17.4617 5 17.4617H27.0001C27.0001 17.4617 27.0001 18.0652 27.0001 18.8099C27.0001 19.5542 27.0001 20.1582 27.0001 20.1582H5.00007Z"
        fill={color}
      />
      <Path
        d="M5.00007 29.3098C5.00007 29.3098 5.00009 28.7059 5.00009 27.9616C5.00009 27.2168 5 26.6133 5 26.6133H27.0001C27.0001 26.6133 27.0001 27.2168 27.0001 27.9616C27.0001 28.7059 27.0001 29.3098 27.0001 29.3098H5.00007Z"
        fill={color}
      />
      <Circle
        cx="21"
        cy="14"
        r="3"
        fill="#FAFAFA"
        stroke={color}
        stroke-width="2"
      />
      <Circle
        cx="14"
        cy="22"
        r="3"
        fill="#FAFAFA"
        stroke={color}
        stroke-width="2"
      />
      <Circle
        cx="11"
        cy="6"
        r="3"
        fill="#FAFAFA"
        stroke={color}
        stroke-width="2"
      />
    </Svg>
  );
};

export default FiltreIcon;