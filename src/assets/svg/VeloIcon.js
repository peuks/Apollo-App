import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

interface VeloProps {
  color?: string;
  width?: number;
  height?: number;
}

const VeloIcon = ({color = '#3F3D56', width = 40, height = 40}: VeloProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 56 56">
      <Circle cx="28" cy="28" r="27.5" stroke={color} />
      <Path
        d="M34.3123 15.9214C36.275 15.9214 37.8809 14.3156 37.8809 12.3528C37.8809 10.39 36.275 8.78418 34.3123 8.78418C32.3495 8.78418 30.7437 10.39 30.7437 12.3528C30.7437 14.3156 32.3495 15.9214 34.3123 15.9214Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.13672 35.6859C7.13672 30.8545 11.0896 26.9016 15.921 26.9016C20.7523 26.9016 24.7053 30.8545 24.7053 35.6859C24.7053 40.5173 20.7524 44.4702 15.921 44.4702C11.0896 44.4702 7.13672 40.5173 7.13672 35.6859ZM9.77304 35.6859C9.77304 39.1118 12.4962 41.835 15.9221 41.835C19.3479 41.835 22.0711 39.1118 22.0711 35.6859C22.0711 32.2601 19.3479 29.5369 15.9221 29.5369C12.4962 29.5369 9.77304 32.2601 9.77304 35.6859Z"
        fill={color}
      />
      <Path
        d="M40.0789 25.0897V21.6387C37.4746 21.6387 35.3043 20.6898 33.7417 19.1368L30.3561 15.8584C29.8352 15.2545 28.9671 14.8231 28.0122 14.8231C27.0573 14.8231 26.1892 15.1682 25.5815 15.8584L20.8069 20.6035C20.1992 21.2075 19.7651 22.0702 19.7651 23.0192C19.7651 23.9683 20.1992 24.831 20.8069 25.5212L26.2759 30.3525V38.98H29.7484V28.1956L25.9287 24.3996L30.0088 20.2584L31.311 21.5525C33.4812 23.7956 36.5196 25.0897 40.0789 25.0897Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.2925 35.6859C31.2925 30.8545 35.2454 26.9016 40.0768 26.9016C44.9082 26.9016 48.8611 30.8545 48.8611 35.6859C48.8611 40.5173 44.9082 44.4702 40.0768 44.4702C35.2454 44.4702 31.2925 40.5173 31.2925 35.6859ZM33.9285 35.6859C33.9285 39.1118 36.6516 41.835 40.0775 41.835C43.5034 41.835 46.2265 39.1118 46.2265 35.6859C46.2265 32.2601 43.5034 29.5369 40.0775 29.5369C36.6516 29.5369 33.9285 32.2601 33.9285 35.6859Z"
        fill={color}
      />
    </Svg>
  );
};

export default VeloIcon;
