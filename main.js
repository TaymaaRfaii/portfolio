var content = document.getElementsByClassName("contents")
var tablinks = document.getElementsByClassName("tab-links")
var sideMenu = document.getElementById("sideMenu")

function openTab(tabName){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabContent of content){
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabName).classList.add("active-tab")
   
}
function closeMenu(){
    sideMenu.style.right = "-200px"
}
function openMenu(){
    sideMenu.style.right = "0"

}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzmo62YuCTva0AwVUq_98sShNjrI5FuO332EHK4Vm4fxrLx3t-LLxlbrKeAHHD9jkWxjA/exec'
  const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        msg.style.display = "block"
        setTimeout(function(){
            msg.style.display = "none"

        }, 5000)
        form.reset()
        
      })
      .catch(error => console.error('Error!', error.message))
  })