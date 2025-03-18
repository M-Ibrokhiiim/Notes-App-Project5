let noteSection=document.getElementById('notes-sectionId')
let UI=''

function addNoteArea(){
   let noteContainer=document.createElement('div')
   let notePlace=document.createElement('p')
   notePlace.setAttribute('contenteditable','true')
   notePlace.classList.add('inputText')
   
   let img=document.createElement('img')
   img.src='src/NoteIcon2.jpg'
   img.classList.add('deleteBtn')
   notePlace.appendChild(img)

   noteContainer.appendChild(notePlace)
   noteSection.appendChild(noteContainer)
}
 

noteSection.addEventListener('click',function(e){
   if(e.target.tagName==='IMG'){
      e.target.parentElement.remove()
   }
}
)

 