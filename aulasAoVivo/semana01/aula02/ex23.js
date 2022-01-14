function hour(seconds) {
  setHour = seconds / 3600
  setMinutes = setHour * 60

  if (setHour <= 1 && setHour >= 0) {
    return 0 + ':' + setMinutes + ':' + seconds / 60
  } else {
    return setHour + ':' + setMinutes + ':' + seconds / 60
  }
}

let setHour
let setMinutes
let setSeconds = 33567

let result = hour(setSeconds)

console.log(result)
