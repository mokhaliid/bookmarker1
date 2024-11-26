



var bookmarkNameInput = document.getElementById('bookmarkName')
var siteUrlInput = document.getElementById('siteUrl')

var editBtn = document.getElementById('editBtn')
var submitBtn = document.getElementById('submitBtn')
var row = []

function submitfn(i) {


    var bookmarkNameInput = document.getElementById('bookmarkName').value
    var siteUrlInput = document.getElementById('siteUrl').value


    detail = {
        index: row.indexOf[row],
        name: bookmarkNameInput,
        url: siteUrlInput,

    }
    row.push(detail)

    console.log(row);
    clearfn()
    display()
    localStorage.setItem("row", JSON.stringify(row))
}


function clearfn() {
    bookmarkNameInput.value = ''
    siteUrlInput.value = ''

}






function display(i) {
    var cartona = ''
    for (var i = 0; i < row.length; i++) {


        cartona = cartona + `
          <tr>
                <td>${row[i].index}</td>
                <td>${row[i].name}</td>
                <td><a class="visit" target="_blank"href="${row[i].url}"><button class="trio">Visit</button></a></td>
                <td><button  class="delete trio" onclick='deletefn(${i})'>Delete</button></td>
                <td><button class="update trio "onclick="updatefn(${i})">Update</button></td>

            </tr>
           
`
    }

    document.getElementById('tableContent').innerHTML = cartona

}

function deletefn(i) {
    row.splice(i, 1)
    display()


}


var editIndex;

function updatefn(i) {

    bookmarkNameInput.value = row[i].name
    editBtn.classList.replace('d-none', 'd-block')
    submitBtn.classList.replace('d-block', 'd-none')

    row[i].name = bookmarkNameInput.value

    editIndex = i


}



function applyEdit() {

    var newDetail = {
        name: bookmarkNameInput.value,
        url: siteUrlInput.value,

    }
    row.splice(editIndex, 1, newDetail)
    display()

    clearfn()

    editBtn.classList.replace('d-block', 'd-none')
    submitBtn.classList.replace('d-none', 'd-block')

}



//  Edit onclick  (DONE)
// 1/ input changes ---> name of the task
// 2/ button changes --->  update button
// 3 / change task name
// 4/ clear
// 5/ change button to submit