import { ContentType } from '@kentico/kontent-delivery'
import prettier from 'prettier'
import * as fs from 'fs'

export function generateInterface(contentType: ContentType, name: string): string {
  let content = `
    import * as Elements from './Elements'
    
    export interface ${name} {
  `

  for (const element of contentType.elements) {
    // console.log(element);
    if (element.type === 'text') {
      content += `  ${element.codename}: Elements.TextElement
      `
    }
    if (element.type === 'number') {
      content += `  ${element.codename}: Elements.NumberElement
        `
    }
    if (element.type === 'modular_content') {
      content += `  ${element.codename}: Elements.LinkedItemsElement
        `
    }
    if (element.type === 'asset') {
      content += `  ${element.codename}: Elements.AssetsElement
        `
    }
    if (element.type === 'date_time') {
      content += `  ${element.codename}: Elements.DateTimeElement
        `
    }
    if (element.type === 'rich_text') {
      content += `  ${element.codename}: Elements.RichTextElement
        `
    }
    if (element.type === 'multiple_choice') {
      content += `  ${element.codename}: Elements.MultipleChoiceElement
        `
    }
    if (element.type === 'url_slug') {
      content += `  ${element.codename}: Elements.UrlSlugElement
        `
    }
    if (element.type === 'taxonomy') {
      content += `  ${element.codename}: Elements.TaxonomyElement
        `
    }
    if (element.type === 'custom') {
      content += `  ${element.codename}: Elements.CustomElement
        `
    }
    if (element.type === 'unknown') {
      content += `  ${element.codename}: Elements.UnknownElement
        `
    }
  }

  content += '}'

  return prettier.format(content, { semi: false, parser: 'typescript' })
}
