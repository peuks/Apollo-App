import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

interface ParkingProps {
  color?: string;
  width?: number;
  height?: number;
}

const ParkingIcon = ({
  color = '#3F3D56',
  width = 20,
  height = 20,
}: ParkingProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 56 56">
      <Circle cx="28" cy="28" r="27.5" stroke={color} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.33374 27.4507C9.33374 17.1414 17.6911 8.78406 28.0004 8.78406C38.3049 8.79563 46.6555 17.1462 46.6671 27.4507C46.6671 37.76 38.3097 46.1174 28.0004 46.1174C17.6911 46.1174 9.33374 37.76 9.33374 27.4507ZM12.4456 27.4504C12.4456 36.0415 19.41 43.006 28.0011 43.006C36.5882 42.9962 43.5469 36.0375 43.5567 27.4504C43.5567 18.8593 36.5922 11.8949 28.0011 11.8949C19.41 11.8949 12.4456 18.8593 12.4456 27.4504Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.638 19.7645H30.1625C33.2136 19.7645 35.687 22.1891 35.687 25.1799C35.687 28.1707 33.2136 30.5952 30.1625 30.5952H26.2164V36.7841H23.0596V21.3118C23.0596 20.4572 23.7663 19.7645 24.638 19.7645ZM26.2168 27.5008H30.1629C31.4705 27.5008 32.5305 26.4617 32.5305 25.1799C32.5305 23.8981 31.4705 22.8591 30.1629 22.8591H26.2168V27.5008Z"
        fill={color}
      />
    </Svg>
  );
};

export default ParkingIcon;