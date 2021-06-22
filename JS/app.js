'use strict'
let form= document.getElementById('form')


let gradesArr=[]
function Grades(name,grade,course) {
    this.name=name
    this.grade=grade
    this.course=course
    gradesArr.push(this)
}


let grade=getRndInteger()

function getRndInteger() {
    return Math.floor(Math.random() * (100 - 0) ) + 0;
  }



form.addEventListener('submit',submitter)

function submitter(event) {
    event.preventDefault()
    let nameInput=event.target.name.value
    let courseInput=event.target.course.value
    let addedName;
    let grade=getRndInteger()
    addedName= new Grades ( nameInput,grade,courseInput)

    console.log(addedName)
    let tabel= document.getElementById('tabel')

  

Grades.prototype.renderRow = function(){
 
    let infoRow=document.createElement('tr')
    tabel.appendChild(infoRow)

    let infoName=document.createElement('td')
    infoRow.appendChild(infoName)
    infoName.textContent=this.name

    let infoGrade=document.createElement('td')
    infoRow.appendChild(infoGrade)
    infoGrade.textContent=this.grade

    let infoCourse=document.createElement('td')
    infoRow.appendChild(infoCourse)
    infoCourse.textContent=this.course

}

addedName.renderRow()

updateStorage()
}

checkLS()

function updateStorage() {
let stringArray= JSON.stringify(gradesArr)

localStorage.setItem('Grades',stringArray)

}


function checkLS() {
    if(localStorage.getItem('Grades')) {
        gradesArr=JSON.parse(localStorage.getItem('Grades'))
        reRender()
    }
    
}


function reRender() {
    
    let infoRow=document.createElement('tr')
    tabel.appendChild(infoRow)
    for (let i = 0; i < gradesArr.length; i++) {
        let infoName=document.createElement('td')
    infoRow.appendChild(infoName)
    infoName.textContent=gradesArr[i].name

    let infoGrade=document.createElement('td')
    infoRow.appendChild(infoGrade)
    infoGrade.textContent=gradesArr[i].grade

    let infoCourse=document.createElement('td')
    infoRow.appendChild(infoCourse)
    infoCourse.textContent=gradesArr[i].course
        
    }
    

 }


  