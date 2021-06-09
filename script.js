let age = 0

document.getElementById('calculate').addEventListener('click', checkAgeRating)

function checkAgeRating () {
  age = document.getElementById('age').value
  document.getElementById('result').style.display = 'block'
  if (age >= 17) {
    document.getElementById('movie').innerHTML = 'R and everything else'
  } else if (age >= 13) {
    document.getElementById('movie').innerHTML = 'PG-13'
  } else if (age >= 5) {
    document.getElementById('movie').innerHTML = 'G or PG'
  } else {
    document.getElementById('movie').innerHTML = 'nothing :('
  }
}
