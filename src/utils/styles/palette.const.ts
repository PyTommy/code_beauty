import { Color } from './color.const'

export const Palette = {
  text: {
    primary: Color.textPrimary,
    secondary: Color.textSecondary,
    disabled: Color.textDisabled,
  },
  primary: {
    main: Color.primary,
    light: Color.primaryLight,
    dark: Color.primaryDark,
  },
  secondary: {
    main: Color.secondary,
    light: Color.secondaryLight,
    dark: Color.secondaryDark,
  },
  error: {
    main: Color.error,
    light: Color.errorLight,
    dark: Color.errorDark,
  },
  info: {
    main: Color.info,
    light: Color.infoLight,
    dark: Color.infoDark,
  },
  success: {
    main: Color.success,
    light: Color.successLight,
    dark: Color.successDark,
  },
  divider: Color.divider,
} as const
