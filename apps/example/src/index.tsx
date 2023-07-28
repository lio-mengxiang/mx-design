import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { MxConfigProvider } from '@mx-design/web';
import { ConfigProvider } from './components/ConfigProvider';
import { router } from './routes/router';
import { themeMap, useLang, useTheme } from './hooks';

import './styles/common.less';
import './styles/normalize.css';

function App() {
  const [lang, setLang] = useLang();
  const [theme, setTheme] = useTheme();

  return (
    <ConfigProvider lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}>
      <MxConfigProvider lang={lang} globalCssVariables={themeMap[theme]}>
        <RouterProvider router={router} />
      </MxConfigProvider>
    </ConfigProvider>
  );
}

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(<App />);
