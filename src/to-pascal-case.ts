export const toPascalCase = (codename: string): string =>
  codename
    .split('___')
    .map((str) => `${str[0].toUpperCase()}${str.slice(1)}`)
    .join('')
    .split('__')
    .map((str) => `${str[0].toUpperCase()}${str.slice(1)}`)
    .join('')
    .split('_')
    .map((str) => `${str[0].toUpperCase()}${str.slice(1)}`)
    .join('')
