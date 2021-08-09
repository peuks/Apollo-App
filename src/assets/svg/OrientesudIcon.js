import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

interface OrientesudProps {
  color?: string;
  width?: number;
  height?: number;
}

const OrientesudIcon = ({
  color = '#3F3D56',
  width = 20,
  height = 20,
}: OrientesudProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 56 56">
      <Circle cx="28" cy="28" r="27.5" stroke={color} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.8049 27.9999C25.8049 26.7888 26.7899 25.8038 28.001 25.8038C29.2121 25.8038 30.1971 26.7888 30.1971 27.9999C30.1971 29.211 29.2121 30.196 28.001 30.196C26.7899 30.196 25.8049 29.211 25.8049 27.9999ZM26.9027 27.9999C26.9027 28.6054 27.3952 29.0979 28.0007 29.0979C28.6063 29.0979 29.0988 28.6054 29.0988 27.9999C29.0988 27.3943 28.6063 26.9018 28.0007 26.9018C27.3952 26.9018 26.9027 27.3943 26.9027 27.9999Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.5835 23.6259C27.8601 23.6023 28.1427 23.6023 28.4171 23.6259C29.8038 23.7439 31.0155 24.4823 31.7426 25.6501C32.4587 26.8019 32.5904 28.1788 32.1031 29.4273C32.0965 29.4449 32.0888 29.4619 32.0801 29.4783L28.4895 36.486C28.3957 36.6693 28.2069 36.7846 28.0012 36.7846C27.7954 36.7846 27.6066 36.6693 27.5122 36.4865L23.9217 29.4789C23.9129 29.4619 23.9052 29.4454 23.8987 29.4278C23.4114 28.1788 23.5425 26.8025 24.2592 25.6506C24.9863 24.4823 26.1979 23.7439 27.5835 23.6259ZM28.0017 35.0321L31.0907 29.0034C31.4397 28.0871 31.3381 27.0775 30.8119 26.2314C30.2692 25.3596 29.3632 24.8084 28.326 24.72C28.1137 24.703 27.8914 24.703 27.6768 24.72C26.6408 24.8084 25.7348 25.3596 25.1921 26.2314C24.6653 27.078 24.5638 28.0877 24.9128 29.004L28.0017 35.0321Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.0006 10.9805C37.385 10.9805 45.0202 18.6151 45.0202 28.0001C45.0202 30.4449 44.509 32.7963 43.5115 35.0006C44.4475 36.0646 45.0202 37.4553 45.0202 38.9805C45.0202 42.3103 42.3108 45.0197 38.981 45.0197C37.4558 45.0197 36.0651 44.4471 35.0011 43.511C32.7968 44.5085 30.4443 45.0197 28.0006 45.0197C18.6162 45.0197 10.981 37.385 10.981 28.0001C10.981 18.6151 18.6162 10.9805 28.0006 10.9805ZM28.0002 12.0786C19.2208 12.0786 12.0786 19.2213 12.0786 28.0002C12.0786 36.779 19.2208 43.9217 28.0002 43.9217C30.16 43.9217 32.243 43.4962 34.2046 42.6639C33.7572 42.0847 33.4102 41.4248 33.1955 40.7067C31.5479 41.382 29.8043 41.7257 28.0002 41.7257C20.4319 41.7257 14.2747 35.5684 14.2747 28.0002C14.2747 20.4319 20.4319 14.2747 28.0002 14.2747C35.5684 14.2747 41.7257 20.4319 41.7257 28.0002C41.7257 29.8042 41.382 31.5485 40.7061 33.1955C41.4248 33.4102 42.0847 33.7572 42.6639 34.2052C43.4963 32.2435 43.9217 30.1606 43.9217 28.0002C43.9217 19.2213 36.7795 12.0786 28.0002 12.0786ZM32.9418 38.9805C32.9418 39.1913 32.9533 39.3999 32.9742 39.6053C31.5692 40.2092 30.0852 40.5479 28.5496 40.6127V38.9805H27.4516V40.6138C20.9248 40.3327 15.668 35.0759 15.3869 28.5491H17.5692V27.4511H15.3869C15.668 20.9243 20.9248 15.6675 27.4516 15.3864V17.5687H28.5496V15.3864C35.0764 15.6675 40.3332 20.9243 40.6143 27.4511H38.432V28.5491H40.6132C40.5484 30.0847 40.2097 31.5687 39.6058 32.9737C39.4004 32.9528 39.1918 32.9413 38.981 32.9413C35.6512 32.9413 32.9418 35.6507 32.9418 38.9805ZM34.0386 38.9803C34.0386 41.705 36.2555 43.9214 38.9798 43.9214C41.704 43.9214 43.921 41.705 43.921 38.9803C43.921 36.2555 41.704 34.0391 38.9798 34.0391C36.2555 34.0391 34.0386 36.2555 34.0386 38.9803Z"
        fill={color}
      />
      <Path
        d="M38.98 36.2352C39.5856 36.2352 40.0781 36.7277 40.0781 37.3333H41.1761C41.1761 36.1221 40.1912 35.1372 38.98 35.1372C37.7689 35.1372 36.7839 36.1221 36.7839 37.3333C36.7839 38.5444 37.7689 39.5294 38.98 39.5294C39.5856 39.5294 40.0781 40.0218 40.0781 40.6274C40.0781 41.233 39.5856 41.7254 38.98 41.7254C38.3744 41.7254 37.882 41.233 37.882 40.6274H36.7839C36.7839 41.8385 37.7689 42.8235 38.98 42.8235C40.1912 42.8235 41.1761 41.8385 41.1761 40.6274C41.1761 39.4163 40.1912 38.4313 38.98 38.4313C38.3744 38.4313 37.882 37.9389 37.882 37.3333C37.882 36.7277 38.3744 36.2352 38.98 36.2352Z"
        fill={color}
      />
    </Svg>
  );
};

export default OrientesudIcon;