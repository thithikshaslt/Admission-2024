$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
const countEl = document.getElementById('counter');

function updateVisitCount() {
    fetch('https://api.countapi.xyz/hit/psg-amcs-admission-2023?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        })
}
function getVisitCount() {
    fetch('https://api.countapi.xyz/get/psg-amcs-admission-2023')
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

// for future reference
// https://api.countapi.xyz/create?key=psg-amcs-admission-2023?namespace=psgtech.com&value=0
// https://api.countapi.xyz/info/psg-amcs-admission-2023