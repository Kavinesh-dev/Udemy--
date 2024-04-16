const addBtn = document.querySelector("#addBtn");
console.log(addBtn);
const mainDiv = document.querySelector("#main");
console.log(mainDiv);

function addNotes(text, title) {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");
  noteDiv.insertAdjacentHTML(
    "afterbegin",
    `<div class="icons"> 
		<i class="save fas fa-save" style="color:red"> 
		</i> 
		<i class="trash fas fa-trash" style="color:yellow"> 
		</i> 
	</div> 
	<div class="title-div"> 
		<textarea class="title" placeholder="Write the title ..."> ${title}
		</textarea> 
	</div> 
	<textarea class="content" placeholder="Note down your thoughts ..."> ${text}
	</textarea>`
  );
  mainDiv.appendChild(noteDiv);
}
addBtn.addEventListener("click", addNotes);
