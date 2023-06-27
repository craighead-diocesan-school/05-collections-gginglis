// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
  'maths',
  'graphics',
]

function showSubjects() {
  alert(subjects)
}

function addSubject() {
  let newSubject = prompt('tell me a school subject')

  // add a new item to the end of the subjects array
  subjects.push(newSubject)
}

function removeSubject() {
  let index = 0

  // remove 1 item at the index position of the subjects array
  subjects.splice(index, 1)
}
