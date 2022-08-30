const docInit = {
  body : document.body,
  root : document.getElementById('root'),
  itemContainer : document.createElement('div'),
  hiddenContainer : document.createElement('div'),//
  leftbutton : document.createElement('button'),
  rightbutton : document.createElement('button'),
  }
  // docInit.root.appendChild(hiddenContainer);
  docInit.root.appendChild(docInit.rightbutton);
  docInit.rightbutton.textContent = `<`
  docInit.root.appendChild(docInit.itemContainer);
  docInit.root.appendChild(docInit.leftbutton);
  docInit.leftbutton.textContent = `>`
function widthAndheight(element,width,height){
  element.style.width = width;
  element.style.height = height;
}
//root
widthAndheight(docInit.root,'100vw','100vh');
docInit.root.style.display = 'flex';
docInit.root.style.alignItems = 'center'
docInit.root.style.justifyContent = 'center'


//container
widthAndheight(docInit.itemContainer,'600px','500px');
docInit.itemContainer.style.display = 'flex';
docInit.itemContainer.style.alignItems = 'center'
docInit.itemContainer.style.overflow = 'hidden'

const _BASIC_URL = `https://pokeapi.co/api/v2/pokemon/?limit=10`;

const request = new XMLHttpRequest();
  request.open("GET", _BASIC_URL);
  request.responseType = "json";
  request.send();
  request.addEventListener('load', () => {
    const _POKEMON_API = request.response;
    console.log(_POKEMON_API);

    const {results:[{name}]} = _POKEMON_API;
    const {results} = _POKEMON_API;
    console.log(name)
    console.log(results)


    results.forEach((element,index) => {
      let item = document.createElement('div')
      docInit.itemContainer.appendChild(item);
      widthAndheight(item,'200px','300px')
      item.innerHTML = `<img style="width : 200px; height : 200px;" src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index+1}.png><span>${index+1}. ${element.name}</span>`
      
      
    });
    
    let count = 0;
    docInit.rightbutton.addEventListener('click',function(){
      docInit.itemContainer.style.transform = `translateX(-410px)`
      count++;
      
    });
    
    

    

  });