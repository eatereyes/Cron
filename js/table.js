const table = document.getElementById('tbody')

function getinfo(url) {
    fetch(url)
      .then(res => res.json())
      .then(json => showtask(json))
  }

  function showtask(task) {
      for(let tasks of task){
          const view = `<tr>
          <td>${tasks.command}</td>
          <td>${tasks.month}</td>
          <td>${tasks.days}</td>
          <td>${tasks.hours}</td>
          <td>${tasks.weekday}</td>
          <td>${tasks.minutes}</td>
          <td><i class="fas fa-trash-alt" onclick="removetask(this)"></i></td>
          <td><button onclick="editask(this)" style="border: 0; color: red; background-color:white">editar</button></td>
          </tr>`
          table.insertAdjacentHTML('beforeend', view)
      }

  }
  /*function editask{

  }*/

  function removetask(ts){
      console.log("aaaaaaaa")
      
  } 

  getinfo('ja.json')