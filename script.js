let assignments = [];

function addAssignment() {

    let title = document.getElementById("title").value;
    let subject = document.getElementById("subject").value;
    let date = document.getElementById("date").value;
    let status = document.getElementById("status").value;

    assignments.push({
        title,
        subject,
        date,
        status
    });

    display();

    document.getElementById("title").value="";
    document.getElementById("subject").value="";
    document.getElementById("date").value="";
}

function display(){

    let data = "";

    assignments.forEach((a,index)=>{

        data += `
        <tr>
            <td>${a.title}</td>
            <td>${a.subject}</td>
            <td>${a.date}</td>
            <td>${a.status}</td>
            <td>
                <button class="delete"
                onclick="remove(${index})">
                Delete
                </button>
            </td>
        </tr>`;
    });

    document.getElementById("tableData").innerHTML = data;

    document.getElementById("total").innerHTML =
    assignments.length;

    document.getElementById("submitted").innerHTML =
    assignments.filter(a=>a.status=="Submitted").length;

    document.getElementById("pending").innerHTML =
    assignments.filter(a=>a.status=="Pending").length;

    document.getElementById("late").innerHTML =
    assignments.filter(a=>a.status=="Late").length;
}

function remove(index){
    assignments.splice(index,1);
    display();
}