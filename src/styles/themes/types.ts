import { LinearGradientObject } from 'echarts';

export interface ITheme {
  primary: string;
  primary1: string;
  primaryGradient: string;
  light: string;
  secondary: string;
  error: string;
  warning: string;
  success: string;
  angularGradient: string;
  background: string;
  secondaryBackground: string;
  secondaryBackgroundSelected: string;
  spinnerBase: string;
  border: string;
  textMain: string;
  textLight: string;
  textSuperLight: string;
  textSecondary: string;
  textDark: string;
  shadow: string;
  boxShadow: string;
  boxShadowHover: string;
  dashboardMapBackground: string;
  dashboardMapDots: string;
  dashboardMapDotsHover: string;
  dashboardMapMarkerBorder: string;
  dashboardMapControl: string;
  dashboardMapControlBackground: string;
  dashboardMapControlDisabledBackground: string;
  notificationSuccess: string;
  notificationPrimary: string;
  notificationWarning: string;
  notificationError: string;
  chartTooltipLabel: string;
  chartColor1: string;
  chartColor1Tint: string;
  chartColor2: string;
  chartColor2Tint: string;
  chartColor3: string;
  chartColor3Tint: string;
  chartColor4: string;
  chartColor4Tint: string;
  chartColor5: string;
  chartColor5Tint: string;
  chartPrimaryGradient: LinearGradientObject;
  chartSecondaryGradient: LinearGradientObject;
  chartAdditionalGradient: LinearGradientObject;
  heading: string;
  borderBase: string;
  disable: string;
  disabledBg: string;
  layoutBodyBg: string;
  layoutHeaderBg: string;
  layoutSiderBg: string;
  inputPlaceholder: string;
  itemHoverBg: string;
  backgroundColorBase: string;
  avatarBg: string;
  alertTextColor: string;
  breadcrumb: string;
  icon: string;
  iconHover: string;
}