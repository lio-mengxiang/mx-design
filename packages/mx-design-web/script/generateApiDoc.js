/* eslint-disable import/no-extraneous-dependencies */
const { Project } = require('ts-morph');
const { writeFile, mkdir } = require('fs/promises');
const { json } = require('stream/consumers');

const project = new Project({
  tsConfigFilePath: '../tsconfig.json',
});

const fileNames = ['Affix'];

// fileNames.forEach((name) => {
//   mkdir(`../../../apps/example/src/interfaceDocs/${name}`)
// })

fileNames.map((name) => getDefinedData(name));
function getDefinedData(name) {
  const sourceFile = project.getSourceFile(`../src/${name}/interface.tsx`);
  getAlias(sourceFile, name);
  getInterfaces(sourceFile, name);
}

function getAlias(sourceFile, name) {
  const alias = sourceFile?.getTypeAliases();
  if (!alias) return;

  const result = [];

  alias.forEach((aliasItem) => {
    result.push(aliasItem.getStructure());
  });

  writeFile(`../../../apps/example/src/interfaceDocs/${name}/alias.json`, JSON.stringify(result, null, 2));
}

function getInterfaces(sourceFile, name) {
  const interfaces = sourceFile?.getInterfaces();
  if (!interfaces) return;

  const result = [];

  interfaces.forEach((interfaceItem) => {
    result.push({
      name: '',
      data: [],
    });

    const index = result.length - 1;
    result[index].name = interfaceItem.getName();

    interfaceItem.getProperties().forEach((v) => {
      result[index].data.push({
        name: v.getName(),
        type: v.getTypeNode()?.getText(),
        isOptional: v.getQuestionTokenNode()?.getText(),
        jsdoc: v.getJsDocs().map((jsDoc) => {
          return jsDoc.getStructure();
        })[0],
      });
    });
  });

  writeFile(`../../../apps/example/src/interfaceDocs/${name}/interface.json`, JSON.stringify(result, null, 2));
}
