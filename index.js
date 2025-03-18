let noteSection=document.getElementById('notes-sectionId')
 

function addNoteArea(){
   let noteContainer=document.createElement('div')
   noteContainer.classList.add()
   let notePlace=document.createElement('p')
   noteContainer.style.display='inline'
   notePlace.setAttribute('contenteditable','true')
   notePlace.classList.add('inputText')
   
   let img=document.createElement('img')
   img.src="src/pics/deleteIcon.jpg"
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

 