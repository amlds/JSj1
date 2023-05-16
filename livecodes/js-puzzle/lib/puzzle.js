const btn = document.querySelector('#show-hint');
const hint = document.querySelector('.hint')
const tds = document.querySelectorAll('td');

btn.addEventListener('click', () => {
  hint.classList.toggle('active');
})

const checkBeside = (td, emptyTd) => {
  const tdColId = td.cellIndex
  const tdRowId = td.parentElement.rowIndex

  const emptyColId = emptyTd.cellIndex
  const emptyRowId = emptyTd.parentElement.rowIndex

  if (Math.abs(tdColId - emptyColId) === 1 && tdRowId === emptyRowId) {
    return true
  } else if (Math.abs(tdRowId - emptyRowId) === 1 && tdColId === emptyColId){
    return true
  }

  return false
}

const switchTd = (td, emptyTd) => {
  emptyTd.classList.remove('empty')
  td.classList.add('empty')

  emptyTd.innerText = td.innerText
  td.innerText = ""
}

const checkWin = () => {
  const succes = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15', '']
  const result = []

  tds.forEach((td) => {
    result.push(td.textContent)
  })

  if (JSON.stringify(succes) === JSON.stringify(result)) {
    console.log('win')
  }
}

tds.forEach((td) => {
  td.addEventListener('click', () => {
    const emptyTd = document.querySelector('.empty')
    if (checkBeside(td, emptyTd) === true) {
      switchTd(td, emptyTd);
      checkWin()
    }
  })
})
