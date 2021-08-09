import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

interface CuisineEquipeeProps {
  color?: string;
  width?: number;
  height?: number;
}

const CuisineEquipeeIcon = ({
  color = '#3F3D56',
  width = 30,
  height = 30,
}: CuisineEquipeeProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 56 56">
      <Circle cx="28" cy="28" r="27.4" stroke={color} stroke-width="1.2" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.3242 41.4813C20.4344 41.4822 20.5404 41.4363 20.6186 41.354C20.6968 41.2716 20.7408 41.1595 20.7408 41.0426V13.7161C20.7408 13.472 20.5543 13.2742 20.3242 13.2742H8.72215C8.61008 13.2716 8.50174 13.317 8.42163 13.4001C8.34151 13.4833 8.29636 13.5972 8.29639 13.7161V41.0426C8.29638 41.1595 8.34038 41.2716 8.4186 41.354C8.49682 41.4363 8.60281 41.4822 8.71303 41.4813H20.3242ZM9.13565 40.6006V23.0066H19.9105V40.6006H9.13565ZM19.9105 22.1261V14.1485L9.13565 14.1549V22.1261H19.9105Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.3289 24.8304H46.8508C47.0915 24.8304 47.2871 25.0254 47.2888 25.2672V41.0445C47.2871 41.2862 47.0915 41.4813 46.8508 41.4813H22.0051C21.765 41.4813 21.5703 41.2857 21.5703 41.0445V25.2736C21.5703 25.0324 21.765 24.8368 22.0051 24.8368H35.8939V24.0498H35.3088C35.1794 24.0509 35.0563 23.9941 34.9728 23.8947C34.8894 23.7954 34.8543 23.6639 34.8772 23.5359L35.1585 21.9299C35.1971 21.7211 35.3787 21.5697 35.5902 21.5702H45.6966C45.9081 21.5697 46.0897 21.7211 46.1282 21.9299L46.3968 23.4588C46.4133 23.5064 46.4219 23.5563 46.4224 23.6066C46.4206 23.8484 46.225 24.0434 45.9844 24.0434H45.3289V24.8304ZM45.3322 22.4473H35.9579L35.83 23.1668H45.4569L45.3322 22.4473ZM36.7698 24.0531H44.4432V24.84H36.7698V24.0531ZM22.4336 40.6078H46.4128V25.6945H22.4336V40.6078Z"
        fill={color}
      />
      <Path
        d="M18.6683 20.7406C18.7784 20.7406 18.884 20.6949 18.9616 20.6135C19.0392 20.5322 19.0824 20.422 19.0816 20.3074V17.8184C19.0631 17.5943 18.8829 17.4221 18.6668 17.4221C18.4506 17.4221 18.2704 17.5943 18.252 17.8184V20.3074C18.2511 20.4225 18.2947 20.5332 18.373 20.6147C18.4513 20.6961 18.5576 20.7415 18.6683 20.7406Z"
        fill={color}
      />
      <Path
        d="M18.6683 29.0369C18.5581 29.036 18.4522 29.0854 18.3741 29.1743C18.2959 29.2631 18.252 29.3841 18.252 29.5102V33.5786C18.2704 33.8252 18.4506 34.0146 18.6668 34.0146C18.8829 34.0146 19.0631 33.8252 19.0816 33.5786V29.5102C19.0816 29.2488 18.8965 29.0369 18.6683 29.0369Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.1007 27.3777H24.4904C24.3752 27.3768 24.2645 27.4237 24.1834 27.5077C24.1022 27.5918 24.0574 27.7059 24.0591 27.8243V39.3787C24.0591 39.6223 24.2503 39.8203 24.4872 39.8221H31.0975C31.3345 39.8203 31.5256 39.6223 31.5256 39.3787V27.8243C31.5273 27.707 31.4834 27.5939 31.4036 27.51C31.3238 27.4262 31.2148 27.3785 31.1007 27.3777ZM30.6696 28.2613V31.3651H24.9186V28.2613H30.6696ZM24.9186 32.2486V38.9417L30.6696 38.932V32.2486H24.9186Z"
        fill={color}
      />
      <Path
        d="M26.1688 29.865H27.7576C27.9137 29.8783 28.0639 29.8026 28.146 29.6692C28.2282 29.5358 28.2282 29.3675 28.146 29.2341C28.0639 29.1007 27.9137 29.025 27.7576 29.0384H26.1688C26.0127 29.025 25.8625 29.1007 25.7803 29.2341C25.6982 29.3675 25.6982 29.5358 25.7803 29.6692C25.8625 29.8026 26.0127 29.8783 26.1688 29.865Z"
        fill={color}
      />
      <Path
        d="M25.3035 34.0146C25.1935 34.0146 25.088 34.0596 25.0102 34.1396C24.9324 34.2197 24.8887 34.3282 24.8887 34.4414V36.0768C24.8887 36.3125 25.0744 36.5035 25.3035 36.5035C25.5326 36.5035 25.7183 36.3125 25.7183 36.0768V34.4414C25.7183 34.2057 25.5326 34.0146 25.3035 34.0146Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.3555 30.2922C32.3572 30.0566 32.5492 29.8666 32.7855 29.8666H45.2027C45.3159 29.8666 45.4245 29.9114 45.5045 29.9912C45.5846 30.0711 45.6295 30.1793 45.6295 30.2922V38.5637C45.6295 38.7993 45.4389 38.9908 45.2027 38.9925H32.7855C32.5487 38.9908 32.3572 38.7998 32.3555 38.5637V30.2922ZM33.2156 38.1349H44.7727V30.7209H33.2156V38.1349Z"
        fill={color}
      />
      <Path
        d="M44.3439 29.0384H32.8115C32.6534 29.025 32.5011 29.1007 32.4179 29.2341C32.3347 29.3675 32.3347 29.5358 32.4179 29.6692C32.5011 29.8026 32.6534 29.8783 32.8115 29.865H44.3439C44.502 29.8783 44.6543 29.8026 44.7375 29.6692C44.8207 29.5358 44.8207 29.3675 44.7375 29.2341C44.6543 29.1007 44.502 29.025 44.3439 29.0384Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.5035 27.7835C36.5084 28.4691 35.9579 29.0294 35.2724 29.0368C34.9401 29.0403 34.6201 28.9108 34.3838 28.677C34.1476 28.4433 34.0146 28.1247 34.0146 27.7923C34.0147 27.1068 34.5692 26.5504 35.2547 26.548C35.9402 26.5456 36.4986 27.098 36.5035 27.7835ZM35.6058 27.7923C35.6058 27.608 35.4565 27.4587 35.2722 27.4587C35.088 27.4587 34.9386 27.608 34.9386 27.7923C34.9386 27.9766 35.088 28.1259 35.2722 28.1259C35.4565 28.1259 35.6058 27.9766 35.6058 27.7923Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.652 27.7924C40.652 28.4797 40.0948 29.0369 39.4075 29.0369C38.721 29.035 38.1649 28.4789 38.1631 27.7924C38.1631 27.1051 38.7202 26.548 39.4075 26.548C40.0948 26.548 40.652 27.1051 40.652 27.7924ZM39.7409 27.7923C39.7409 27.608 39.5915 27.4587 39.4072 27.4587C39.223 27.4587 39.0736 27.608 39.0736 27.7923C39.0736 27.9766 39.223 28.1259 39.4072 28.1259C39.5915 28.1259 39.7409 27.9766 39.7409 27.7923Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.9703 27.7924C43.9703 28.4797 43.4132 29.0369 42.7259 29.0369C42.0394 29.035 41.4833 28.4789 41.4814 27.7924C41.4814 27.1051 42.0386 26.548 42.7259 26.548C43.4132 26.548 43.9703 27.1051 43.9703 27.7924ZM43.0594 27.7923C43.0594 27.608 42.91 27.4587 42.7258 27.4587C42.5415 27.4587 42.3921 27.608 42.3921 27.7923C42.3921 27.9766 42.5415 28.1259 42.7258 28.1259C42.91 28.1259 43.0594 27.9766 43.0594 27.7923Z"
        fill={color}
      />
      <Path
        d="M34.4728 35.6738C34.602 35.6773 34.7268 35.6274 34.818 35.5359L37.196 33.1607C37.3789 32.9766 37.3789 32.6795 37.196 32.4954C37.1083 32.4059 36.9882 32.3555 36.8629 32.3555C36.7376 32.3555 36.6175 32.4059 36.5298 32.4954L34.1519 34.8706C33.9689 35.0547 33.9689 35.3518 34.1519 35.5359C34.2367 35.622 34.3519 35.6715 34.4728 35.6738Z"
        fill={color}
      />
      <Path
        d="M34.9645 36.3725C35.0505 36.4592 35.1685 36.5065 35.2904 36.5033C35.4127 36.5081 35.5313 36.4606 35.6164 36.3725L38.8763 33.1043C39.0363 32.9278 39.0302 32.6565 38.8624 32.4874C38.6946 32.3183 38.4241 32.3108 38.2472 32.4703L34.9873 35.7385C34.9002 35.8194 34.8488 35.9318 34.8445 36.0508C34.8402 36.1698 34.8834 36.2855 34.9645 36.3725Z"
        fill={color}
      />
    </Svg>
  );
};

export default CuisineEquipeeIcon;
