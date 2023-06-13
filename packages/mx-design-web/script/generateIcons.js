// eslint-disable-next-line import/no-extraneous-dependencies
const jsdom = require('jsdom');
const fs = require('fs');
const path = require('path');

const { JSDOM } = jsdom;
const domStr = require('./domStr');

const iconFolderPath = '../src/icon/react-icon';
/**
 * @en Icon template
 * @zh Icon模板
 */
const setTemp = ({ name, paths }) => `import React from 'react';
import { createIcon } from '../createIcon';

export const ${name} = createIcon({
  paths: <>${paths}</>
});

${name}.displayName = '${name}';
`;

/**
 * @en bar to hump
 * @zh 横杠转驼峰
 */
function toCamelCase(str) {
  return str.replace(/-(\w)/g, (_, p1) => p1.toUpperCase());
}

/**
 * @en capitalized
 * @zh 首字母大写
 */
function capitalize(str) {
  return str.replace(/\b[a-z]/g, (match) => match.toUpperCase());
}

/**
 * @en If the path doesn't exist, the folder is created
 * @zh 如果路径不存在就创建文件夹
 */
function createFolderIfNotExist(folderPath) {
  if (!fs.existsSync(folderPath)) {
    // If the path doesn't exist
    const parentFolder = path.dirname(folderPath);
    if (!fs.existsSync(parentFolder)) {
      // create parent folder recursively if parent folder doesn't exist either
      createFolderIfNotExist(parentFolder);
    }
    fs.mkdirSync(folderPath); // 创建当前文件夹
  }
}

function generateIcons(IconFontJs) {
  createFolderIfNotExist(iconFolderPath);

  const dom = new JSDOM(IconFontJs);
  const symbolLists = dom.window.document.querySelectorAll('symbol');
  const result = [];
  symbolLists.forEach((node) => {
    const name = capitalize(toCamelCase(node.id));
    const paths = node.innerHTML;
    result.push(name);
    fs.writeFile(`${iconFolderPath}/${name}.tsx`, setTemp({ name, paths }), (err) => {
      if (err) console.log(err);
    });
  });
  fs.writeFile(
    `${iconFolderPath}/index.tsx`,
    result
      .map((name) => `export { ${name} } from './${name}';`)
      .join('\n'),
    { flag: 'a' },
    (err) => {
      if (err) console.log(err);
    }
  );
}

generateIcons(domStr);
