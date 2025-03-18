let noteSection=document.getElementById('notes-sectionId')

// Function for create note on UI

function addNoteArea(){
   let noteContainer=document.createElement('div')
   noteContainer.style.display='inline'
   noteContainer.style.display='inline'

   let notePlace=document.createElement('p')
   notePlace.textContent="Message:"
   notePlace.setAttribute('contenteditable','true')
   notePlace.classList.add('inputText')

   let img=document.createElement('img')
   img.src="src/pics/deleteIcon.jpg"
   img.classList.add('deleteBtn')
   notePlace.appendChild(img)

   noteContainer.appendChild(notePlace)
   noteSection.appendChild(noteContainer)
}
 


// Function for delete note from UI
noteSection.addEventListener('click',function(e){
   if(e.target.tagName==='IMG'){
      e.target.parentElement.remove()
   }
}
)

// Function for add ENTER in note
document.addEventListener('keypress',event=>{
   if(event.key==="Enter"){
      document.execCommand("insertLineBreak")
      event.preventDefault()
   }
})