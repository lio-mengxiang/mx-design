import { useContext, useMemo } from 'react';
import { useLocale } from '@/locale/useLocal/useLocal';
import { NAME_SPACE_NAV_BAR } from '../locale';
import { CliIcon, ComponentsIcon } from '../Icon';
import { ZH_CN, EN_US } from '@/locale/constants';
import { ConfigContext } from '@/components/ConfigProvider';

export function useStore() {
  const [local] = useLocale<typeof NAME_SPACE_NAV_BAR>({ namespace: NAME_SPACE_NAV_BAR });
  const { lang } = useContext(ConfigContext);

  const jumpCliGitHub = () => {
    if (lang === ZH_CN) {
      return window.open('https://github.com/lio-mengxiang/mx-design-cli/issues/16', '_blank');
    }

    if (lang === EN_US) {
      return window.open('https://github.com/lio-mengxiang/mx-design-cli/issues/19', '_blank');
    }
  };

  const jumpUIGitHub = () => {
    if (lang === ZH_CN) {
      return window.open('https://github.com/lio-mengxiang/mx-design/issues/15', '_blank');
    }

    if (lang === EN_US) {
      return window.open('https://github.com/lio-mengxiang/mx-design/issues/16', '_blank');
    }
  };

  const lists = useMemo(
    () => [
      {
        Icon: CliIcon,
        title: local.cliTitle,
        text: local.cliText,
        onClick: jumpCliGitHub,
      },
      {
        Icon: ComponentsIcon,
        title: local.componentTitle,
        text: local.componentText,
        onClick: jumpUIGitHub,
      },
    ],
    [lang]
  );

  return {
    lists,
  };
}
