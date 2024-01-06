import { ITheme } from '@/utils/setTheme/interface';
import { ZH_CN, EN_US } from '../../locale/constants';

export interface ConfigProviderProps {
  lang?: typeof ZH_CN | typeof EN_US;
  setLang?: (lang: ConfigProviderProps['lang']) => void;
  theme?: ITheme['type'];
  setTheme?: (theme: ITheme['type']) => void;
}
