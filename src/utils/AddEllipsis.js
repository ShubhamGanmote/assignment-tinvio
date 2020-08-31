export function AddEllipsis(str, length) {
  if (!str) {
    return '';
  }

  if (str.length > length) {
    return str.substr(0, length) + '...';
  } else {
    return str;
  }
}
