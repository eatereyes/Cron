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
          <td><button onclick="removetask(this)" style="border: 0; color: red; background-color:white">remover</button></td>
          </tr>`
          table.insertAdjacentElement('beforeend', view)
      }

  }

  function removetask(ts){
      
  }

  getinfo('PHP\show.php')