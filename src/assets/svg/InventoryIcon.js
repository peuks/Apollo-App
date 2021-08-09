import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

interface InventoryProps {
  color?: string;
  width?: number;
  height?: number;
}

const InventoryIcon = ({
  color = '#3F3D56',
  width = 25,
  height = 25,
}: InventoryProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512">
      <G id="Outline">
        <Path
          d="m484.25 239.741a24 24 0 0 0 -29.871-16.114l-214.6 64.207a8.016 8.016 0 0 0 -3.185 1.835l-26.072 24.5a8 8 0 0 0 4.1 13.711l35.243 6.156a8.019 8.019 0 0 0 3.67-.216l174.128-52.1.754 16.475-55.33 16.554 4.586 15.33 61.314-18.346a8 8 0 0 0 5.7-8.029l-1.223-26.704 24.673-7.382a24 24 0 0 0 16.113-29.872zm-233.49 78.21-17.622-3.078 13.036-12.251 36.512-10.922 4.586 15.328zm51.84-15.511-4.586-15.328 128.142-38.341.754 16.476zm165.7-52.023a7.952 7.952 0 0 1 -4.748 3.867l-20.841 6.235-.754-16.475 17.009-5.089a8 8 0 0 1 9.334 11.462z"
          fill={color}
        />
        <Path
          d="m320 352h-136v-120a8 8 0 0 0 -8-8h-144a8 8 0 0 0 -8 8v256a8 8 0 0 0 8 8h288a8 8 0 0 0 8-8v-128a8 8 0 0 0 -8-8zm-88 16h32v32h-32zm-144-128h32v32h-32zm-48 0h32v40a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-40h32v112h-128zm48 128h32v32h-32zm-48 0h32v40a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-40h32v112h-128zm272 112h-128v-112h32v40a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-40h32z"
          fill={color}
        />
        <Path d="m280 448h16v16h-16z" fill={color} />
        <Path d="m136 448h16v16h-16z" fill={color} />
        <Path d="m136 320h16v16h-16z" fill={color} />
        <Path
          d="m152 80a16.019 16.019 0 0 1 16-16h48v16h-40a8 8 0 0 0 -8 8v120h16v-112h192v128h16v-136a8 8 0 0 0 -8-8h-40v-16h48a16.019 16.019 0 0 1 16 16v136h16v-136a32.036 32.036 0 0 0 -32-32h-77.754l5.515-22.06a8 8 0 0 0 -7.761-9.94h-64a8 8 0 0 0 -7.761 9.94l5.515 22.06h-77.754a32.036 32.036 0 0 0 -32 32v128h16zm80-16h24a8 8 0 0 0 7.761-9.94l-5.515-22.06h43.508l-5.515 22.06a8 8 0 0 0 7.761 9.94h24v16h-96z"
          fill={color}
        />
        <Path
          d="m408 408a16.019 16.019 0 0 1 -16 16h-48v16h48a32.036 32.036 0 0 0 32-32v-72h-16z"
          fill={color}
        />
        <Path d="m392 400v-56h-16v48h-32v16h40a8 8 0 0 0 8-8z" fill={color} />
        <Path
          d="m248 120a8 8 0 0 0 -8-8h-32a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8zm-16 24h-16v-16h16z"
          fill={color}
        />
        <Path
          d="m240 184h-32a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0 -8-8zm-8 32h-16v-16h16z"
          fill={color}
        />
        <Path d="m264 112h16v16h-16z" fill={color} />
        <Path d="m264 144h96v16h-96z" fill={color} />
        <Path d="m296 112h64v16h-64z" fill={color} />
        <Path d="m264 184h16v16h-16z" fill={color} />
        <Path d="m264 216h96v16h-96z" fill={color} />
        <Path d="m296 184h64v16h-64z" fill={color} />
      </G>
    </Svg>
  );
};

export default InventoryIcon;