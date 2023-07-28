import React, { useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { cs } from '@mx-design/web-utils';
import { javascript } from '@codemirror/lang-javascript';
import { IconCode } from '@mx-design/web';
import { motion, AnimatePresence } from 'framer-motion';
import { materialDark, materialLight } from '@uiw/codemirror-theme-material';
import { ErrorMessage } from './errorMessage';
import { useCodePreview } from './hooks';
import { ConfigContext } from '../ConfigProvider';
import { DARK, LIGHT } from '@/utils/setTheme/constants';
import './index.less';
//type
import type { CodePreviewProps } from './interface';

const prefixCls = 'mx-code-preview';
const getTheme = (theme) => {
  if (theme === LIGHT) {
    return materialLight;
  }
  if (theme === DARK) {
    return materialDark;
  }
};
export const variants = {
  open: { height: 'auto', opacity: 1 },
  collapsed: { height: 0, opacity: 0 },
};

const style = { maxHeight: '500px', overflow: 'auto' };

function CodePreview(props: CodePreviewProps) {
  const { code: _Code = '', dependencies = {} } = props;
  const { theme } = useContext(ConfigContext);

  const { state, showEdit, setShowEdit, onChange } = useCodePreview({ code: _Code, dependencies, ...props });
  const Element = state.element;

  return (
    <>
      <div
        className={cs(`${prefixCls}-demo`, {
          [`${prefixCls}-demo-error`]: !!state.error,
        })}
      >
        <div>
          <ErrorMessage message={state.error} />
          <div
            className={cs(`${prefixCls}-demo-source`, {
              error: !!state.error,
            })}
          >
            <div>{Element ? <Element /> : null}</div>
          </div>
        </div>
      </div>
      <div className={`${prefixCls}-operations`}>
        <button
          onClick={() => setShowEdit(!showEdit)}
          className={cs(`${prefixCls}-edit-icon`, {
            open: showEdit,
          })}
        >
          <IconCode size="14px" />
        </button>
      </div>
      <AnimatePresence initial={false}>
        <motion.div
          className={`${prefixCls}-code-container`}
          initial={showEdit ? 'collapsed' : 'open'}
          animate={showEdit ? 'open' : 'collapsed'}
          variants={variants}
        >
          <CodeMirror
            value={_Code.trim()}
            theme={getTheme(theme)}
            extensions={[javascript({ jsx: true })]}
            style={style}
            onChange={onChange}
            basicSetup={{
              foldGutter: false,
              autocompletion: false,
              highlightActiveLine: false,
              highlightActiveLineGutter: false,
              drawSelection: false,
            }}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

CodePreview.displayName = 'CodePreview';

export default CodePreview;
