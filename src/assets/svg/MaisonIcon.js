import React from 'react';
import Svg, {Path, Circle, G, Rect, Ellipse} from 'react-native-svg';

interface MaisonProps {
  color?: string;
  width?: number;
  height?: number;
}

const MaisonIcon = ({
  color = '#3F3D56',
  width = 40,
  height = 40,
}: MaisonProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 64 64">
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
        <Path
          d="M51.6369 46H13.4097L13.6692 27.9016L24.6079 26.0787H40.0623L51.3774 27.3639L51.6369 46Z"
          fill="url(#paint0_linear)"
        />
      </G>
      <Path
        d="M51.1286 45.5185H13.8662L14.1263 27.8507L24.5962 26.0262H40.2425L50.8554 27.3257L51.1286 45.5185Z"
        fill="#EEEEEE"
      />
      <G opacity="0.7">
        <Rect
          x="25.3706"
          y="19.7199"
          width="2.80119"
          heiGht="5.65303"
          fill="url(#paint1_linear)"
        />
      </G>
      <G opacity="0.7">
        <Path
          d="M25.2405 32.2268V26.6602H13.0716L11 32.2268V32.7968H25.3186V32.2268H25.2405Z"
          fill="url(#paint2_linear)"
        />
      </G>
      <Path
        d="M24.7584 32.3325H11L12.9982 26.5995H24.7584V32.3325Z"
        fill={color}
      />
      <Path
        opacity="0.1"
        d="M24.7584 32.3325H11L12.9982 26.5995H24.7584V32.3325Z"
        fill="#3F3D56"
      />
      <Rect x="11" y="32.3326" width="13.7584" height="0.573302" fill={color} />
      <G opacity="0.7">
        <Path
          d="M51.2912 26.1431H39.1932V32.166H39.1157V32.789H53.3441V32.166L51.2912 26.1431Z"
          fill="url(#paint3_linear)"
        />
      </G>
      <Path
        d="M39.0903 32.3325H52.8487L50.8505 26.5995H39.0903V32.3325Z"
        fill={color}
      />
      <Path
        opacity="0.1"
        d="M39.0903 32.3325H52.8487L50.8505 26.5995H39.0903V32.3325Z"
        fill="#3F3D56"
      />
      <Rect
        x="39.0903"
        y="32.3326"
        width="13.7584"
        heiGht="0.573302"
        fill={color}
      />
      <Rect
        opacity="0.5"
        x="15.0127"
        y="35.1991"
        width="7.45247"
        heiGht="4.58642"
        fill={color}
      />
      <Rect
        opacity="0.1"
        x="14.4395"
        y="39.2122"
        width="8.02574"
        heiGht="1.1466"
        fill="#3F3D56"
      />
      <Rect
        x="14.4395"
        y="39.2122"
        width="8.02574"
        heiGht="1.1466"
        fill="#535461"
      />
      <G opacity="0.1">
        <Rect
          x="15.0537"
          y="35.8182"
          width="7.98493"
          heiGht="1.66258"
          fill="#3F3D56"
        />
      </G>
      <Rect
        opacity="0.5"
        x="41.9565"
        y="35.1991"
        width="7.45247"
        heiGht="4.58642"
        fill={color}
      />
      <Rect
        opacity="0.1"
        x="41.9565"
        y="39.2122"
        width="8.02574"
        heiGht="1.1466"
        fill="#3F3D56"
      />
      <Rect
        x="41.9565"
        y="39.2122"
        width="8.02574"
        heiGht="1.1466"
        fill="#535461"
      />
      <G opacity="0.1">
        <Rect
          x="41.4766"
          y="35.8182"
          width="7.85185"
          heiGht="1.66258"
          fill="#3F3D56"
        />
      </G>
      <G opacity="0.7">
        <Path
          d="M41.1791 26.5737L32.0451 19.4631L23.2168 26.5737L22.5161 25.701L32.0451 18.0384L41.8671 25.6881L41.1791 26.5737Z"
          fill="url(#paint4_linear)"
        />
      </G>
      <Rect
        opacity="0.1"
        x="13.8662"
        y="32.847"
        width="10.3188"
        heiGht="0.117594"
        fill="#3F3D56"
      />
      <Rect
        opacity="0.1"
        x="40.8096"
        y="32.847"
        width="10.3188"
        heiGht="0.117594"
        fill="#3F3D56"
      />
      <Rect
        x="25.3315"
        y="19.7199"
        width="2.86634"
        heiGht="5.15972"
        fill="#535461"
      />
      <G opacity="0.7">
        <Path
          d="M40.7966 45.4661H23.7036V24.6074L32.3157 24.4241L40.7966 24.6074V45.4661Z"
          fill="url(#paint5_linear)"
        />
      </G>
      <Path
        d="M40.2366 45.5184H23.6118V24.5083L31.9307 18.5732L40.2366 24.5083V45.5184Z"
        fill="white"
      />
      <Rect
        x="30.4912"
        y="38.6388"
        width="4.01287"
        heiGht="6.87963"
        fill="#535461"
      />
      <Rect
        opacity="0.1"
        x="28.1982"
        y="32.3326"
        width="8.02574"
        heiGht="1.1466"
        fill="#3F3D56"
      />
      <Rect
        opacity="0.5"
        x="28.771"
        y="28.3195"
        width="7.45247"
        heiGht="4.58642"
        fill={color}
      />
      <Rect
        x="28.1982"
        y="32.3326"
        width="8.02574"
        heiGht="1.1466"
        fill="#535461"
      />
      <G opacity="0.1">
        <Rect
          x="28.2915"
          y="28.3424"
          width="7.85185"
          heiGht="1.66258"
          fill="#3F3D56"
        />
      </G>
      <Path
        d="M41.2635 26.5995L32.0633 19.4354L23.1711 26.5995L22.4653 25.7072L32.0633 18L41.9564 25.7072L41.2635 26.5995Z"
        fill={color}
      />
      <Ellipse
        cx="33.6441"
        cy="42.3653"
        rx="0.286634"
        ry="0.286651"
        fill="#E0E0E0"
      />
    </Svg>
  );
};

export default MaisonIcon;
