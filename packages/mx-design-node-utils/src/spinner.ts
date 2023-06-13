import { log } from '@mx-design/web-utils';
import ora from 'ora';

/**
 * Because ora currently only supports the es module, this function cannot be used under the commonjs module
 */
export function withOra(
  promiseFn: () => Promise<any>,
  { text, successText, failText, startText }: { text: string; successText: string; failText: string; startText?: string }
) {
  return new Promise((resolve, reject) => {
    const spinner = ora(text).start();

    if (startText) log.info(startText);

    promiseFn()
      .then((result) => {
        spinner.succeed(`✅ ${successText}`);
        resolve(result);
      })
      .catch((err) => {
        spinner.fail(`❎ ${failText}`);
        reject(err);
      });
  });
}
