import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme

declare module 'staled-components' {
    export interface defaultTheme extends ThemeType {}
}