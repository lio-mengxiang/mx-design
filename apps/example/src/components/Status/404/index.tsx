import React, { FC } from 'react';
import { ErrorPage } from '../errorPage';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mx-design/web';
import { useLocale } from '@/locale/useLocal/useLocal';
import { NAME_SPACE_STATUS } from '../locale';
import { Icon404 } from './icon404';
import { homePath, size } from '../constants';

export const Page404: FC = () => {
  const navigate = useNavigate();
  const [local] = useLocale<typeof NAME_SPACE_STATUS>({ namespace: NAME_SPACE_STATUS });
  return (
    <ErrorPage title="404" des={local.DESC_404} img={<Icon404 size={size} fill="none" />}>
      <Button status="default" onClick={() => navigate(0)}>
        {local.TRY_AGAIN}
      </Button>
      <Button onClick={() => navigate(homePath)}>{local.BACK}</Button>
    </ErrorPage>
  );
};
