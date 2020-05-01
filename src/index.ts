#!/usr/bin/env node
import { DeliveryClient } from '@kentico/kontent-delivery'

import * as fs from 'fs'
import { generateInterface } from './generate-interface'
import { writeElements } from './write-elements'
import { toPascalCase } from './to-pascal-case'
import chalk from 'chalk'

async function start() {
  if (!process.env.PROJECT_ID) {
    throw new Error(`process.env.PROJECT_ID not found`)
  }

  const client = new DeliveryClient({
    projectId: process.env.PROJECT_ID,
  })

  try {
    if (process.env.NODE_ENV === 'development') {
      if (!fs.existsSync('__temp__')) {
        fs.mkdirSync('__temp__')
      }
    }

    const dir = process.env.NODE_ENV === 'development' ? '__temp__/' : ''
    writeElements(dir)

    const { types } = await client.types().toPromise()
    for (const type of types) {
      const name = toPascalCase(type.system.codename)
      const content = await generateInterface(type, name)
      fs.writeFileSync(`${dir}${name}.ts`, content, 'utf-8')
    }

    console.log(chalk.green(`Saved ${types.length} interfaces`))
  } catch (error) {
    throw error
  }
}

start()
