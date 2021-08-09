import React from 'react';
import Svg, {Circle} from 'react-native-svg';

interface NewMessageProps {
  color?: string;
  width?: number;
  height?: number;
}

const NewMessageIcon = ({
  color = '#FAFAFA',
  width = 15,
  height = 15,
}: NewMessageProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 12">
      <Circle cx="6" cy="6" r="6" fill={color} />
    </Svg>
  );
};

export default NewMessageIcon;