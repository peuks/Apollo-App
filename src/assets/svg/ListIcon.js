import React from 'react';
import Svg, {Circle, Rect} from 'react-native-svg';

interface ListProps {
  color?: string;
  width?: number;
  height?: number;
}

const ListIcon = ({color = '#3F3D56', width = 15, height = 15}: ListProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 10 10">
      <Circle cx="0.583083" cy="1.08308" r="0.583083" fill={color} />
      <Circle cx="0.583083" cy="5.00001" r="0.583083" fill={color} />
      <Rect
        x="2.22559"
        y="4.41693"
        width="7.12163"
        height="1.16617"
        rx="0.583083"
        fill={color}
      />
      <Rect
        x="2.22559"
        y="8.33386"
        width="7.12163"
        height="1.16617"
        rx="0.583083"
        fill={color}
      />
      <Circle cx="0.583083" cy="8.91695" r="0.583083" fill={color} />
      <Rect
        x="2.22559"
        y="0.5"
        width="7.12163"
        height="1.16617"
        rx="0.583083"
        fill={color}
      />
    </Svg>
  );
};

export default ListIcon;