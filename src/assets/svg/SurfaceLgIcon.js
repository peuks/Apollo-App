import React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';

interface SurfaceProps {
  color?: string;
  width?: number;
  height?: number;
}

const SurfaceLgIcon = ({
  color = '#3F3D56',
  width = 30,
  height = 30,
}: SurfaceProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 56 56">
      <Circle cx="28" cy="28" r="27.4" stroke={color} stroke-width="1.2" />
      <Path
        d="M30.3825 24.0624H14.832C14.4119 24.0352 14.0003 24.1903 13.7026 24.488C13.4049 24.7857 13.2498 25.1973 13.277 25.6174V41.1679C13.2498 41.5881 13.4049 41.9996 13.7026 42.2973C14.0003 42.595 14.4119 42.7501 14.832 42.7229H30.3825C30.8027 42.7501 31.2142 42.595 31.5119 42.2973C31.8096 41.9996 31.9647 41.5881 31.9375 41.1679V25.6174C31.9647 25.1973 31.8096 24.7857 31.5119 24.488C31.2142 24.1903 30.8027 24.0352 30.3825 24.0624Z"
        fill={color}
      />
      <Path
        d="M41.9126 36.9335L41.4853 37.4086V29.3322L41.9126 29.789C42.1902 30.0735 42.5541 30.2421 42.9381 30.2641C43.3173 30.2426 43.6759 30.0737 43.9466 29.789C44.2257 29.5061 44.3837 29.113 44.3837 28.7018C44.3837 28.2907 44.2257 27.8976 43.9466 27.6147L41.0409 24.5266C40.7762 24.2283 40.4085 24.0593 40.0239 24.0593C39.6393 24.0593 39.2715 24.2283 39.0069 24.5266L36.1012 27.6329C35.7378 28.0213 35.5959 28.5875 35.7289 29.1181C35.8619 29.6487 36.2496 30.0631 36.7459 30.2053C37.2423 30.3474 37.7718 30.1957 38.1352 29.8073L38.5796 29.3505V37.4268L38.1352 36.9518C37.7688 36.5633 37.2364 36.4134 36.7385 36.5584C36.2407 36.7034 35.853 37.1213 35.7215 37.6547C35.5901 38.1881 35.7348 38.756 36.1012 39.1444L39.0069 42.2507C39.2845 42.5352 39.6484 42.7037 40.0324 42.7258C40.4174 42.7327 40.7859 42.5591 41.0409 42.2507L43.9637 39.1444C44.5254 38.544 44.5254 37.5705 43.9637 36.97C43.402 36.3696 42.4914 36.3696 41.9297 36.97L41.9126 36.9335Z"
        fill={color}
      />
      <Path
        d="M13.7424 16.9758L16.8561 19.881C17.1369 20.1647 17.532 20.326 17.9459 20.326C18.3597 20.326 18.7548 20.1647 19.0357 19.881C19.3347 19.6164 19.5041 19.2487 19.5041 18.8642C19.5041 18.4796 19.3347 18.112 19.0357 17.8474L18.5594 17.4202H26.6551L26.1972 17.8474C25.8981 18.112 25.7287 18.4796 25.7287 18.8642C25.7287 19.2487 25.8981 19.6164 26.1972 19.881C26.4747 20.1638 26.8668 20.3248 27.2778 20.3248C27.6888 20.3248 28.0809 20.1638 28.3585 19.881L31.4722 16.9758C31.7712 16.7112 31.9406 16.3436 31.9406 15.959C31.9406 15.5745 31.7712 15.2068 31.4722 14.9422L28.3585 12.0371C27.7463 11.5452 26.8308 11.5789 26.262 12.1141C25.6932 12.6493 25.6649 13.5037 26.1972 14.0707L26.6551 14.515H18.5594L19.0357 14.0707C19.3347 13.8061 19.5041 13.4384 19.5041 13.0539C19.5041 12.6693 19.3347 12.3017 19.0357 12.0371C18.747 11.7668 18.3548 11.6149 17.9459 11.6149C17.5369 11.6149 17.1447 11.7668 16.8561 12.0371L13.7424 14.9422C13.4433 15.2068 13.2739 15.5745 13.2739 15.959C13.2739 16.3436 13.4433 16.7112 13.7424 16.9758Z"
        fill={color}
      />
    </Svg>
  );
};

export default SurfaceLgIcon;
