/**
 * Records the source path of each file in a `sourcePath` attribute.
 */
module.exports = () => {
  return (files, metalsmith, done) => {
    Object.keys(files).forEach((path) => {
      const data = files[path];
      data.sourcePath = path;
    });
    done();
  };
};
