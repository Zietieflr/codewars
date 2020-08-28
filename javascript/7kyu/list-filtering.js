function filter_list(list) {
  return list.filter(listItem => Number.isInteger(listItem))
}