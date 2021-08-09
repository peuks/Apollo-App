import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface ShareProps {
  color?: string;
  width?: number;
  height?: number;
}

const ShareIcon = ({
  color = "#3F3D56",
  width = 30,
  height = 30,
}: ShareProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.4884 9.16457L15.8091 4.43335L11.1299 9.16457L12.4884 10.5382L14.7525 8.24885V17.7876H16.7903V8.32516L19.0544 10.6145L20.4884 9.16457ZM23.5827 11.2251H21.6205H21.545V13.2091H23.5827V24.5793H7.73374V13.2091H9.696V11.2251H7.73374C6.67714 11.2251 5.77148 12.1408 5.77148 13.2091V24.5793C5.77148 25.6476 6.67714 26.5634 7.73374 26.5634H23.5827C24.6393 26.5634 25.545 25.6476 25.545 24.5793V13.2091C25.545 12.1408 24.6393 11.2251 23.5827 11.2251Z"
        fill={color}
      />
    </Svg>
  );
};

export default ShareIcon;
