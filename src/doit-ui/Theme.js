export const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAMES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

const breakpoints = {
  [BREAKPOINT_NAMES.LARGE]: 1128,
  [BREAKPOINT_NAMES.MEDIUM]: 744,
  [BREAKPOINT_NAMES.SMALL]: 327,
};

const responsive = {
  [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]}px)`,
  [BREAKPOINT_NAMES.SMALL]: `@media (max-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUM] - 1}px)`,
  print: '@media print',
};
export const unit = 4;

export default {
  // 색상
  color: {
    primary: '#2196F3', // 주 색상
    primaryDark: '#1976D2',
    secondary: '#009688', // 부 색상
    secondaryDark: '#00796b',
    white: '#FFFFFF',
    gray: '#9e9e9e',
    grayLight: '#eeeeee',
    grayDark: '#616161',
    border: 'rgba(0, 0, 0, .15)',
    default: '#333333', // 기본 문자 색상
    error: '#e51c23', // 오류 색상
  },
  // 폰트 사이즈
  size: {
    h1: 48,
    h2: 36,
    h3: 28,
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10,
  },
  lineHeight: {
    xg: 1.6,
    lg: 1.6,
    md: 1.5,
    sm: 1.4,
    xs: 1.4,
  },
  fontWeight: {
    bold: 'bold',
    normal: 'normal',
    light: 300,
  },
  depth: {
    level1: {
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14)',
    },
    level2: {
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
    },
    level3: {
      boxShadow: '0 8px 17px 12px rgba(0, 0, 0, 0.14)',
    },
  },
  // 길이 단위
  unit,
  // 반응형 미디어 속성
  responsive,
};
