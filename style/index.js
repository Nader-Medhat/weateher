var posts = []
var httpreq = new XMLHttpRequest()
httpreq.open("GET", "https://jsonplaceholder.typicode.com/posts")
httpreq.send()
httpreq.addEventListener("readystatechange", function(){
  if(httpreq.readyState == 4 && httpreq.status == 200){
    console.log(JSON.parse(httpreq.response))
    displayposts(JSON.parse(httpreq.response))
    

  }
} )
function displayposts(postsArr){
  var cartoona = ""
  for(var i = 0; i < postsArr.length; i++){
    cartoona +=`
    <div class="col-lg-12">
    <div class=" post shadow p-2 rounded-2 bg-white text-black bg-black">
        <h3>${postsArr[i].title}</h3>
        <p>${postsArr[i].body}</p>
      </div>

      </div>
    
    `
  }
  document.querySelector(".row").innerHTML = cartoona
}