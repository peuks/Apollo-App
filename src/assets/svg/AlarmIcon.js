import React from 'react';
import Svg, {Path, Circle, Ellipse} from 'react-native-svg';

interface AlarmProps {
  color?: string;
  width?: number;
  height?: number;
}

const AlarmIcon = ({
  color = '#3F3D56',
  width = 25,
  height = 25,
}: AlarmProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 23">
      <Path
        d="M17.6358 15.4478C17.355 15.1511 17.0742 14.8274 16.8215 14.5038L15.1647 12.2921C14.8839 11.9145 14.7154 11.4829 14.6031 11.0244L14.2381 9.05541C13.9292 7.35616 12.9183 5.87269 11.4581 4.9017C10.5595 4.30831 9.52049 3.9307 8.45343 3.79584L8.31302 3.09456C8.17262 2.36632 7.4706 1.90779 6.71242 2.01568L5.44879 2.23146C4.69061 2.36632 4.21324 3.04062 4.32556 3.76887L4.46597 4.47014C3.51123 4.95564 2.69688 5.62994 2.07911 6.52003C1.04012 7.94955 0.646994 9.67577 0.983962 11.375L1.34901 13.344C1.43325 13.7755 1.40517 14.261 1.29285 14.7196L0.50659 17.3359C0.394268 17.7404 0.225783 18.145 0.0853799 18.4957C0.00113779 18.7654 -0.0269429 19.0351 0.0292185 19.3048C0.225783 20.3837 1.5175 20.9771 3.28658 21.2198C3.23042 21.0041 3.23042 20.7883 3.23042 20.5725C3.23042 20.2488 3.28658 19.8982 3.34274 19.6015C2.33184 19.4397 1.74214 19.1969 1.68598 19.0351C1.71406 18.6305 3.2585 17.4707 6.6001 16.6076V18.3068C5.64536 18.6305 4.91526 19.5206 4.91526 20.5995C4.91526 21.9211 6.03849 23 7.41444 23C8.7904 23 9.91362 21.9211 9.91362 20.5995C9.91362 19.5476 9.21161 18.6575 8.22878 18.3068V16.23C8.36919 16.203 8.50959 16.176 8.64999 16.1491C10.2225 15.8794 11.5704 15.7715 12.6655 15.7715C14.8839 15.7715 16.1195 16.203 16.2599 16.4727C16.2037 16.8773 14.6312 18.0641 11.2053 18.9272C11.43 19.4127 11.5423 19.9521 11.5704 20.4916C13.0306 20.141 14.3223 19.6824 15.3894 19.143C17.7762 18.0102 18.1132 16.9043 17.9728 16.176C17.9447 15.9063 17.8043 15.6636 17.6358 15.4478Z"
        fill={color}
      />
      <Ellipse
        cx="13.5"
        cy="4.62502"
        rx="2.38235"
        ry="2.1"
        stroke={color}
        stroke-width="4"
      />
    </Svg>
  );
};

export default AlarmIcon;
