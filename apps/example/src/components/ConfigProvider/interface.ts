import { ITheme } from '@/utils/setTheme/interface';
import { ZN_CH, EN_US } from '../../locale/constants';

export interface ConfigProviderProps {
  lang?: typeof ZN_CH | typeof EN_US;
  setLang?: (lang: ConfigProviderProps['lang']) => void;
  theme?: ITheme['type'];
  setTheme?: (theme: ITheme['type']) => void;
}
