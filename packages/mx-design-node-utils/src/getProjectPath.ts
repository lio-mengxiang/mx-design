import path from 'path';

/**
 * 获取项目文件,以命令输入的目录为根目录
 */
export function getProjectPath(dir = './'): string {
  return path.join(process.cwd(), dir);
}
