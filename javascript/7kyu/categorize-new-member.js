function openOrSenior(data){
  return data.map(member => {
    return member[0] >= 55 && member[1] > 7
      ? "Senior"
      : "Open"
  })
}