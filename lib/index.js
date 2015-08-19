/**
 * Modules
 */

var subjects = require('@weo-edu/subjects')
var standards = require('@weo-edu/standards')
var grades = require('@weo-edu/grades')
var resourceTypes = require('@weo-edu/resource-types')

/**
 * Transform tags
 */

subjects.forEach(addTagType('subject'))
standards.forEach(addTagType('standard'))
grades.forEach(addTagType('grade'))
resourceTypes.forEach(addTagType('resource'))

/**
 * Expose tags
 */

module.exports = merge([
  subjects,
  standards,
  grades,
  resourceTypes
])

function addTagType(tagType) {
  return function(tag) {
    tag.tagType = tagType
    return tag
  }
}

function merge(arr) {
  var merged = []
  return merged.concat.apply(merged, arr)
}
