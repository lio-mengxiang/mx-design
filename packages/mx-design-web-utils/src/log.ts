/**
 * 更改颜色
 * example chalk.green('成功') 文字显示绿色
 */
import chalk from 'chalk';

type ILevel = 'info' | 'warn' | 'success' | 'error';

function print(color: string, ...args: string[]) {
  if (args.length > 1) {
    log(chalk[`bg${color.replace(/^\w/, (w) => w.toUpperCase())}`](` ${args[0]} `), chalk[color](args.slice(1)));
  } else {
    log(chalk[color](...args));
  }
}

export function log(...args) {
  console.log(...args);
}

log.info = print.bind(null, 'gray');
log.warn = print.bind(null, 'yellow');
log.error = print.bind(null, 'red');
log.success = print.bind(null, 'green');
log.chalk = chalk;

/**
 * Print divider
 * @param {'info' | 'warn' | 'success' | 'error'} level
 */
log.divider = (level: ILevel = 'info') => {
  const logger = log[level] || log.info;
  logger('---------------------------------------------------------------------------------------');
};
