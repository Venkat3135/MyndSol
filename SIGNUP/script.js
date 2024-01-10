const doc1Ve =document.getElementById('doc2')
const ven1 =document.getElementById('ven')

function v1(){
if (doc1Ve.value !="") {
    ven1.innerHTML=`<h3>Verified</h3>`

}else {
    ven1.innerHTML=`<h3>Rejected</h3>`
}
}