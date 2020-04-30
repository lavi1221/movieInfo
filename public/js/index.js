search = document.forms[0].querySelector('input');
selection = document.forms[0].querySelector('select');
list_div = document.querySelector('.movie-list');

search.addEventListener("keyup",function(e){
  term = e.target.value.toLowerCase();
  lists = list_div.getElementsByTagName("li");
  Array.from(lists).forEach(function(list){
    title = list.firstElementChild.textContent.toLowerCase();
    if(title.indexOf(term)<0){
      list.style.display='none';
    }else{
      list.style.display='block';
    }
  });
});

selection.addEventListener("change",function(e){
  term = e.target.value.toLowerCase();
  lists = list_div.getElementsByTagName("li");
  Array.from(lists).forEach(function(list){
    title = list.lastElementChild.textContent.toLowerCase();
    if(term == 'all'){
     list.style.display='block';    
    }else{
    if(title.indexOf(term)<0){
      list.style.display='none';
    }else{
      list.style.display='block';
    }
  }
  });
});
