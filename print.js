
document.getElementById("printer").onclick = function() {Print()};

function Print() {
    w  = window.open('../assets/resume/Laura Gilles Resume 2022.pdf');
    w.Print();
}