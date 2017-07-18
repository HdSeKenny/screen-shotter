import chromeDriver from 'chromedriver' // eslint-disable-line
import webdriver from 'selenium-webdriver'
import fs from 'fs'
import path from 'path'

const driver = new webdriver.Builder().forBrowser('chrome').build()

export async function takeScreenshot(url) {
  try {
    await driver.get(url)
    return await driver.takeScreenshot()
  } catch (err) {
    throw new Error(err)
  }
}

export function saveImageFile(data) {
  fs.writeFileSync(convertImageName(), data, 'base64')
}

function convertImageName() {
  const dateHour12 = new Date().toLocaleString('en-US', { hour12: false })
  const fileName = `${dateHour12.replace(/[/:, ]/g, '')}.png`
  const target = path.join(__dirname, '..', 'assets', 'images', fileName)

  return target
}
