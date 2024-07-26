/**
 * @param {import('jscodeshift').FileInfo} file
 */
export default function transformer(file) {
  return file.source
    .replace(/@material-ui\/unstyled/gm, '@temp-mui/base')
    .replace(/@material-ui\/core/gm, '@temp-mui/material')
    .replace(/@material-ui\/icons/gm, '@temp-mui/icons-material')
    .replace(/@material-ui\/(?!(pickers|data-grid|x-grid))/gm, '@temp-mui/');
}
