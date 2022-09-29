const fs = require('fs/promises');

const Twig = require('twig');

/**
 * Render File Async
 * 
 * @param {string} path Path
 * @param {Twig.RenderOptions} options Options
 * @return {Promise<string>} Result
 * @throws Failed To Render
 */
const renderFileAsync = (path = '', options = {}) => new Promise((resolve, reject) => {
  Twig.renderFile(path, options, (error, result) => {
    if(error) return reject(error);
    resolve(result);
  });
});

(async () => {
  const result = await renderFileAsync('./src/index.twig');
  await fs.mkdir('./dist', { recursive: true });
  await fs.writeFile('./dist/index.html', result, 'utf-8');
})();
