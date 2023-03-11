$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
const countEl = document.getElementById('counter');

function updateVisitCount() {
    fetch('https://api.countapi.xyz/hit/PSG-tech-admission-2023?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        })
}
function getVisitCount() {
    fetch('https://api.countapi.xyz/get/PSG-tech-admission-2023')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        }
        )
}
if (!sessionStorage.getItem("visited")) {
    sessionStorage.setItem("visited", 1);
    updateVisitCount();
} else {
    getVisitCount();
}