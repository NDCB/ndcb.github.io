const sep = require("path").sep;

/**
 * Modifies the output path of files in a default locale.
 * @param {string} options.default The default locale, which matches the leading
 * directory to shift.
 */
module.exports = (options = {}) => {
  return (files, metalsmith, done) => {
    Object.keys(files).forEach((path) => {
      if (path.startsWith(options.default)) {
        const pathFragments = path.split(sep);
        pathFragments.shift();
        const transferedPath = pathFragments.join(sep);
        const data = files[path];
        delete files[path];
        files[transferedPath] = data;
      }
    });
    done();
  };
};
