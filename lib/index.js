/**
 * Modules
 */

var subjects = require('@weo-edu/subjects')
var standards = require('@weo-edu/standards')
var grades = require('@weo-edu/grades')

/**
 * Transform tags
 */

subjects.forEach(addTagType('subject'))
standards.forEach(addTagType('standard'))
grades.forEach(addTagType('grade'))

/**
 * Expose tags
 */

module.exports = merge([
  subjects,
  standards,
  grades
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
