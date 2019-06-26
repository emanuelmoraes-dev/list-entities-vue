function prepareJson(ob) {
  let keys = Object.keys(ob)
  for (let key of keys)
    if (typeof(ob[key]) == 'function')
      delete ob[key]
  ob = JSON.parse(JSON.stringify(ob))
  for (let key in ob) {
    if (key.startsWith("__") && key !== '__v') {
      delete ob[key]
    }
  }
  return ob
}

function scape (str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function copyAll (ob, create = p => p) {
  let copy = {}
  for (let key in ob) {
    copy[key] = create(ob[key])
  }
  return copy
}

function getAttr (pathAttr, obj, searchArray = false) {
  if (!obj) {
    return obj
  }

  if (!pathAttr) {
    return null
  }

  if (searchArray && obj instanceof Array) {
    let rt = []

    for (let v of obj) {
      rt.push(getAttr(pathAttr, v, searchArray))
    }

    return rt
  }

  if (pathAttr.match(/\./)) {
    let pathAttrArray = pathAttr.split('.')
    let pathRemaning = pathAttrArray.slice(1).join('.')
    let attr = pathAttrArray[0]
    let value = obj[attr]

    if (searchArray && value instanceof Array) {
      let rt = []
      for (let v of value) {
        rt.push(getAttr(pathRemaning, v, searchArray))
      }
      return rt
    } else {
      return getAttr(pathRemaning, value, searchArray)
    }
  } else {
    let value = obj[pathAttr]

    if (searchArray && value instanceof Array) {
      let rt = []
      for (let v of value) {
        rt.push(v)
      }
      return rt
    } else {
      return value
    }
  }
}

function extractValuesByArray (array, ignoreNull = false) {
  if (array instanceof Array) {
    return array.reduce((p, n, i) => {
      if (n instanceof Array) {
        return [...p, ...extractValuesByArray(n)]
      } else if (!ignoreNull || (n !== null && n !== undefined)) {
        return [...p, n]
      } else {
        return p
      }
    }, [])
  } else {
    return [array]
  }
}

function hex2rgb (hex, opacity) {
  hex = (hex + '').trim()

  let rgb = null
  let match = hex.match(/^#?(([0-9a-zA-Z]{3}){1,3})$/)

  if (!match) {
    return null
  }

  rgb = {}

  hex = match[1]

  if (hex.length === 6) {
    rgb.r = parseInt(hex.substring(0, 2), 16)
    rgb.g = parseInt(hex.substring(2, 4), 16)
    rgb.b = parseInt(hex.substring(4, 6), 16)
  } else if (hex.length === 3) {
    rgb.r = parseInt(hex.substring(0, 1) + hex.substring(0, 1), 16)
    rgb.g = parseInt(hex.substring(1, 2) + hex.substring(1, 2), 16)
    rgb.b = parseInt(hex.substring(2, 3) + hex.substring(2, 3), 16)
  }

  rgb.css = 'rgb' + (opacity ? 'a' : '') + '('
  rgb.css += rgb.r + ',' + rgb.g + ',' + rgb.b
  rgb.css += (opacity ? ',' + opacity : '') + ')'

  return rgb
}

export default {
  prepareJson,
  scape,
  copyAll,
  getAttr,
  extractValuesByArray,
  hex2rgb
}
