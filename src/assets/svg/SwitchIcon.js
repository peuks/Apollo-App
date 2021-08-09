import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

interface SwitchProps {
  color?: string;
  width?: number;
  height?: number;
}

const SwitchIcon = ({
  color = '#3F3D56',
  width = 25,
  height = 25,
}: SwitchProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 56 56">
      <Path
        d="m10 26h39.172l-3.586 3.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.023-.195 1.414-.586l7-7c.781-.781.781-2.047 0-2.828l-7-7c-.781-.781-2.047-.781-2.828 0s-.781 2.047 0 2.828l3.586 3.586h-39.172c-1.104 0-2 .896-2 2s.896 2 2 2z"
        fill={color}
      />
      <Path
        d="m54 38h-39.172l3.586-3.586c.781-.781.781-2.047 0-2.828-.78-.781-2.048-.781-2.828 0l-7 7c-.781.781-.781 2.047 0 2.828l7 7c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-3.586-3.586h39.172c1.104 0 2-.896 2-2s-.896-2-2-2z"
        fill={color}
      />
    </Svg>
  );
};

export default SwitchIcon;