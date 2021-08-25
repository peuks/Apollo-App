import React from 'react';
import Svg, {
  G,
  Path,
  Circle,
  Rect,
  Filter,
  Defs,
  Polygon,
} from 'react-native-svg';

interface AppartementProps {
  color?: string;
  width?: number;
  height?: number;
}

const AppartementIcon = ({
  color = '#3F3D56',
  width = 40,
  height = 40,
}: AppartementProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 64 64">
      <G filter="url(#filter0_d)">
        <Circle
          cx="32"
          cy="32"
          r="28"
          fill="#FFF"
          stroke="#CCCCCC"
          stroke-width="1.2"
        />
      </G>
      <G opacity="0.8">
        <Path
          d="M20.0517 22.1037L19 21.259L24.8978 16H39.8485V20.6306L30.1615 27.1515L20.0517 22.1037Z"
          fill={color}
        />
        <Path
          d="M42.4007 18.9146V16.1068H40.4355V16.7935L39.7075 16L34.9218 21.1935L33.0533 22.4448L30.1514 43.6255L34.5247 48H44.6968V21.402L42.4007 18.9146Z"
          fill="#CCCCCC"
        />
        <Rect x="19" y="21.3333" width="16" height="26.6667" fill="#F2F2F2" />
        <Rect
          x="25.3032"
          y="41.697"
          width="2.90909"
          height="6.30303"
          fill="#CCCCCC"
        />
        <Path
          d="M21.9091 43.1515V42.1818H20.4546V43.1515H21.7904H21.9091Z"
          fill={color}
        />
        <Path
          d="M21.7904 44.1212H20.4546V45.0909H21.9091V44.1212H21.7904Z"
          fill={color}
        />
        <Rect
          x="22.8789"
          y="42.1818"
          width="1.45455"
          height="0.969697"
          fill={color}
        />
        <Rect
          x="22.8789"
          y="44.1212"
          width="1.45455"
          height="0.969697"
          fill={color}
        />
        <Path
          d="M30.6362 43.1515V42.1818H29.1816V43.1515H30.5115H30.6362Z"
          fill={color}
        />
        <Path
          d="M30.5115 44.1212H29.1816V45.0909H30.6362V44.1212H30.5115Z"
          fill={color}
        />
        <Rect
          x="31.1211"
          y="42.1818"
          width="1.45455"
          height="0.969697"
          fill={color}
        />
        <Rect
          x="31.1211"
          y="44.1212"
          width="1.45455"
          height="0.969697"
          fill={color}
        />
        <Path
          d="M39.3637 22.303V21.3333H37.9092V22.303H39.2396H39.3637Z"
          fill={color}
        />
        <Path
          d="M39.2396 23.2727H37.9092V24.2424H39.3637V23.2727H39.2396Z"
          fill={color}
        />
        <Rect
          x="40.3335"
          y="21.3333"
          width="1.45455"
          height="0.969697"
          fill={color}
        />
        <Rect
          x="40.3335"
          y="23.2727"
          width="1.45455"
          height="0.969697"
          fill={color}
        />
        <Path
          d="M39.3637 28.1212V27.1515H37.9092V28.1212H39.2396H39.3637Z"
          fill={color}
        />
        <Path
          d="M39.2396 29.0909H37.9092V30.0606H39.3637V29.0909H39.2396Z"
          fill={color}
        />
        <Rect
          x="40.3335"
          y="27.1515"
          width="1.45455"
          height="0.969697"
          fill={color}
        />
        <Rect
          x="40.3335"
          y="29.0909"
          width="1.45455"
          height="0.969697"
          fill={color}
        />
        <Path
          d="M39.3637 33.9394V32.9697H37.9092V33.9394H39.2396H39.3637Z"
          fill={color}
        />
        <Path
          d="M39.2396 34.9091H37.9092V35.8788H39.3637V34.9091H39.2396Z"
          fill={color}
        />
        <Rect
          x="40.3335"
          y="32.9697"
          width="1.45455"
          height="0.969697"
          fill={color}
        />
        <Rect
          x="40.3335"
          y="34.9091"
          width="1.45455"
          height="0.969697"
          fill={color}
        />
        <Path
          d="M39.3637 39.7576V38.7879H37.9092V39.7576H39.2396H39.3637Z"
          fill={color}
        />
        <Path
          d="M39.2396 40.7272H37.9092V41.6969H39.3637V40.7272H39.2396Z"
          fill={color}
        />
        <Rect
          x="40.3335"
          y="38.7879"
          width="1.45455"
          height="0.969697"
          fill={color}
        />
        <Rect
          x="40.3335"
          y="40.7272"
          width="1.45455"
          height="0.969697"
          fill={color}
        />
        <Rect
          x="20.9395"
          y="22.7879"
          width="12.1212"
          height="2.42424"
          fill={color}
        />
        <Rect
          x="20.9395"
          y="27.6364"
          width="12.1212"
          height="2.42424"
          fill={color}
        />
        <Rect
          x="20.9395"
          y="32.4849"
          width="12.1212"
          height="2.42424"
          fill={color}
        />
        <Rect
          x="20.9395"
          y="37.3334"
          width="12.1212"
          height="2.42424"
          fill={color}
        />
      </G>
    </Svg>
  );
};

export default AppartementIcon;
