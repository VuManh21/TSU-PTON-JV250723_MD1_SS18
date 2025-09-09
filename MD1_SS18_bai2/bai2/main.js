let frontend = [
    { title: "HTML", complete: false },
    { title: "CSS", complete: false },
    { title: "Basic of javascript", complete: false },
    { title: "Node package Maneger", complete: false },
    { title: "GIT", complete: false },
];
while (true) {

let input = prompt("moi ban nhap vao C/R/U/D/E").toUpperCase();
  // nhap khoa hoc moi 
if (input === "C") {
   let newtitle = prompt(" hay nhap ten khoa hoc cua ban");
   let newcomplete = prompt(`trang thai khoa hoc ${newtitle} true or false` );
    let newinput = {
        title : newtitle,
        complete : newcomplete,
    };

    frontend.push(newinput);
    alert("khoa hoc da duoc them");
    displayInformation();

   // hien thi khoa hoc
} else if (input === "R") {
   displayInformation();
   // update lai khoa hoc
} else if (input === "U") {
    let titleUpdate = prompt("hay nhap ten khoa hoc ban muon sua");
    let completeUpdate = prompt(` hay nhap lai trang thai ${titleUpdate} true or false`);
     let index = frontend.findIndex(el => el.title.toLowerCase() === titledelete.toLowerCase());
 if (index ===-1) {
        console.log("khong co khoa hoc trong danh sach");
        
    }else{
        frontend[index].complete=completeUpdate;
        displayInformation();
    }
    


} else if (input === "D") {
    let titledelete = prompt("hay nhap ten khoa hoc can xoa");
    let index = frontend.findIndex(el => el.title.toLowerCase() === titledelete.toLowerCase());
    
    if (index ===-1) {
        console.log("khong co khoa hoc trong danh sach");
        
    }else{
        frontend.splice(index,1);
        displayInformation();
    }

} else if (input === "E") {
     console.log("Cam on ban da den voi Rikei Academy");
    break;

} else { 
console.log("khong co trong danh sach khoa hoc");

}

function displayInformation() {
    console.log("Danh sach khoa hoc");
    frontend.forEach((el, index) => {
        console.log(`${index + 1}.${el.title} 
     complete :${el.complete}`);

    });
}
}
