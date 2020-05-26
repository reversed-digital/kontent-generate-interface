import prettier from 'prettier'
import * as fs from 'fs'

const elements = `
export enum ElementType {
  Text = "text",
  Number = "number",
  ModularContent = "modular_content",
  Asset = "asset",
  DateTime = "date_time",
  RichText = "rich_text",
  MultipleChoice = "multiple_choice",
  UrlSlug = "url_slug",
  Taxonomy = "taxonomy",
  Custom = "custom",
  Unknown = "unknown",
}

interface ElementContract {
  name: string;
  type: string;
  value: any;
  taxonomy_group?: string;
}

interface Asset {
  name: string;
  type: string;
  size: number;
  description?: string | null;
  url: string;
  width?: number;
  height?: number;
}

interface RichTextImage {
  imageId: string;
  url: string;
  description?: string;
  width?: number;
  height?: number;
}

interface Link {
  linkId: string;
  codename: string;
  type: string;
  urlSlug: string;
}

interface TaxonomyTerm {
  name: string;
  codename: string;
}

interface MultipleChoiceOption {
  name: string;
  codename: string;
}

interface SystemAttributes {
  id: string;
  name: string;
  codename: string;
  type: string;
  lastModified: Date;
  language: string;
  sitemapLocations: string[];
}

interface ContentItem {
  [key: string]: any;
  system: SystemAttributes;
}

interface BaseElement {
  name: string;
  type: ElementType;
}

export interface TextElement extends BaseElement {
  value: string;
}

export interface LinkedItemsElement extends BaseElement {
  value: string[];
}

export interface MultipleChoiceElement extends BaseElement {
  value: MultipleChoiceOption[];
}
export interface DateTimeElement extends BaseElement {
  value: Date | null;
}
export interface RichTextElement extends BaseElement {
  value: string;
  type: ElementType;
  links: Link[];
  images: RichTextImage[];
  modular_content: string[];
}
export interface TaxonomyElement extends BaseElement {
  value: TaxonomyTerm[];
  taxonomyGroup: string;
}
export interface NumberElement extends BaseElement {
  value: number | null;
}
export interface AssetsElement extends BaseElement {
  value: Asset[];
}
export interface UrlSlugElement extends BaseElement {
  value: string;
}
export interface UnknownElement extends BaseElement {
  value: any;
}
export interface DefaultCustomElement extends BaseElement {
  value: string | null;
}
`

export const writeElements = (dir: string) =>
  fs.writeFileSync(
    `${dir}Elements.ts`,
    prettier.format(elements, { semi: false, parser: 'typescript' }),
    'utf-8'
  )
