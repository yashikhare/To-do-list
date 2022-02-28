var addtobtn = document.getElementById("addtobtn");
var inputfield = document.getElementById("inputfield");
var taskList = document.getElementById("tasks");
var list = [];

addtobtn.addEventListener("click", function () {
    list.push(inputfield.value);
    console.log(list);
    inputfield.value = "";
   
    renderList();
})

function renderList() {
    var res = "";
    for (let i = 0; i < list.length; i++) {
        var single = list[i];
        var html = `<div class="itemlist">
     
        
                        <div class="items">
                          <label>
                             <input type="checkbox" style="border-radius: 35px; height:15px; width:15px;">
                             <span>${single}</span>
                          </label>
                        </div>
                        <div class="buttons">
                            <button onclick=handleEdit(${i})><i class="fa fa-pen"></i></button>
                            <button onclick=handleDelete(${i})><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>`
                    
        res += html;
    }
    taskList.innerHTML = res;
}
function handleDelete(index) {
    var newList = [];
    
    for (let i = 0; i < list.length; i++) {
        if (i != index) {
            newList.push(list[i]);
        }
    }
    list = newList;
    renderList();

}
function handleEdit(index) {
    inputfield.value = list[index];
    handleDelete(index);
    renderList();
}
