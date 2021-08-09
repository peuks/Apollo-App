import React from 'react';
import SvG, {Path, Circle, Rect, G} from 'react-native-svg';

interface ResidenceEtudiantProps {
  color?: string;
  width?: number;
  height?: number;
}

const ResidenceEtudiantIcon = ({
  color = '#3F3D56',
  width = 40,
  height = 40,
}: ResidenceEtudiantProps) => {
  return (
    <SvG width={width} height={height} viewBox="0 0 64 64">
      <G filter="url(#filter0_d)">
        <Circle
          cx="32"
          cy="32"
          r="28"
          fill="white"
          stroke="#CCCCCC"
          stroke-width="1.2"
        />
      </G>
      <G opacity="0.7">
        <Rect
          x="19"
          y="24.9195"
          width="26.63"
          height="23.0683"
          fill="url(#paint0_linear)"
        />
      </G>
      <Rect
        x="19.4849"
        y="25.2122"
        width="25.697"
        height="22.7879"
        fill="#EEEEEE"
      />
      <G opacity="0.7">
        <Rect
          x="24.417"
          y="17.9946"
          width="3.14838"
          height="6.12773"
          fill="url(#paint1_linear)"
        />
      </G>
      <Rect
        x="24.3335"
        y="17.9395"
        width="2.90909"
        height="6.30303"
        fill="#535461"
      />
      <G opacity="0.7">
        <Path
          d="M42.1393 47.9307H22.5781V24.1446L32.4437 23.9266L42.1393 24.1446V47.9307Z"
          fill="url(#paint2_linear)"
        />
      </G>
      <Path
        d="M41.788 47.5152H22.8789V23.7053L32.3335 16.9697L41.788 23.7053V47.5152Z"
        fill="white"
      />
      <Rect
        x="30.1514"
        y="39.7576"
        width="4.84848"
        height="7.75758"
        fill="#535461"
      />
      <Rect
        opacity="0.5"
        x="28.2119"
        y="27.6364"
        width="8.72727"
        height="5.33333"
        fill="#0B3D91"
      />
      <Rect
        x="27.7275"
        y="32.4849"
        width="9.69697"
        height="0.969697"
        fill="#535461"
      />
      <G opacity="0.1">
        <Rect
          x="28.2754"
          y="27.7111"
          width="8.53686"
          height="2.15152"
          fill="#3F3D56"
        />
      </G>
      <G opacity="0.7">
        <Path
          d="M43.3028 26.1361L32.6088 17.6894L22.2586 26.1299L21.4468 25.0909L32.5966 16L44.0983 25.0847L43.3028 26.1361Z"
          fill="url(#paint3_linear)"
        />
      </G>
      <Path
        d="M43.4119 26.1818L32.6535 17.697L22.241 26.1756L21.4243 25.134L32.6412 16L44.2122 25.1277L43.4119 26.1818Z"
        fill="#0B3D91"
      />
      <Circle cx="34.2727" cy="43.8788" r="0.242424" fill="#E0E0E0" />
      
    </SvG>
  );
};

export default ResidenceEtudiantIcon;
