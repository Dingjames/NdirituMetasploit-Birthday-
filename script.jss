<script>
//NdirituMetasploit 
window.onload=()=>{

class Rain{
  constructor(){
    this.hearts = document.createElement("img");
    this.hearts.setAttribute("id","heart")
    this.hearts.style.left = Math.random() * 100 + "vw";
    this.hearts.style.animationDuration = `${Math.random() * 2  + 3 }s`; 
    this.hearts.setAttribute("src", "https://i.ibb.co/kJWh455/1661280816175.jpg=0")
    this.append()
  }
  append(){
    document.body.appendChild(this.hearts)
    setTimeout(()=> {
        this.hearts.remove();
    }, 3500);
  }
}
setInterval(()=>{
  var r= new Rain()
},300)
class Float{
  constructor(){
    this.hearts = document.createElement("img");
    this.hearts.setAttribute("id","b")
    this.hearts.style.left = Math.random() * 100 + "vw";
    this.hearts.style.animationDuration = `${Math.random() * 2  + 3 }s`; 
    this.hearts.style.transform=`rotate(${Math.random()*120+1})`
    this.hearts.setAttribute("src", "https://dl.dropbox.com/s/4i5m8pwyv41pr4w/birthday-balloons-png-thumbnail-1637516606-1.png?dl=0")
    this.append()
  }
  append(){
    document.body.appendChild(this.hearts)
    setTimeout(()=> {
        this.hearts.remove();
    }, 3500);
  }
}
setInterval(()=>{
  var r= new Float()
},2000)

  let el = "Happy Birthday to me its anothere blesiing i have seen another year its by God Grace may he always be with me!"
  let text = document.querySelector("#wish")
  let i = 0
function write() {
  
  if (i<el.length) {
    text.innerHTML += el[i]
    i++
  }
}
setInterval(write, 100)
Swal.fire({
    title:"Happy birthday I Ndiritu metasploit!🥧🍨🎂🍰",
    text:"Happy Birthday ."})
}
window.onclick=()=>{
document.getElementById('HBDmp').play()
}
function mts(f,s) {
  f=f.parentElement
  f.style="filter:opacity(0);";
  s=document.querySelector(s)
  setTimeout(()=>{
    
    f.style="display:none"
    s.style.display="flex"
    s.style.flexDirection="column"
    s.style.visibility="visible"
  },940)
}
</script>
