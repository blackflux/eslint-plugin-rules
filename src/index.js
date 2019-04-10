const path = require('path');
const sfs = require('smart-fs');

module.exports = {
  rules: sfs
    .walkDir(path.join(__dirname, 'rules'))
    .reduce((p, f) => Object.assign(p, {
      [f.slice(0, -3)]: sfs.smartRead(path.join(__dirname, 'rules', f))
    }), {})
};
