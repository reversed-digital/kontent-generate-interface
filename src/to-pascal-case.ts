export const toPascalCase = (codename: string): string => {
  const transformed = codename
    .split('___')
    .map((str) => `${str[0].toUpperCase()}${str.slice(1)}`)
    .join('')
    .split('__')
    .map((str) => `${str[0].toUpperCase()}${str.slice(1)}`)
    .join('')
    .split('_')
    .map((str) => `${str[0].toUpperCase()}${str.slice(1)}`)
    .join('')

  return `${transformed[0]}${transformed.slice(1)}`
}
