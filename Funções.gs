function prinome(nome) {
  var nomer = nome.replace(new RegExp(' {2,}','gi'),' ');
  var nomer = nomer.replace(new RegExp(' *$','gi'),'');
  return nomer.split(' ')[0]
}

function sobrenome(nome) {
  var nomer = nome.replace(new RegExp(' {2,}','gi'),' ');
  var nomer = nomer.replace(new RegExp(' *$','gi'),'');

  var last = nomer.split(' ').length
  return nomer.split(' ')[last-1]
}
function segnome(nome) {
  var nomer = nome.replace(new RegExp(' {2,}','gi'),' '); 
  var nomer = nomer.replace(new RegExp(' *$','gi'),'');

  return nomer.split(' ')[1]
}

function pl (nome) {
 var nomer = segnome(nome)
 var nomer = nomer.split('')[0]
  return nomer
}

function email (nome,dom,op){
  if(op==1) {
    var end = prinome(nome)+"."+segnome(nome)+dom
  }else if (op==2){
      var end = prinome(nome)+"."+pl(nome)+"."+sobrenome(nome)+dom
  }else if (op==3){
      var end = prinome(nome)+pl(nome)+"."+sobrenome(nome)+dom
  } else {
      var end = prinome(nome)+"."+sobrenome(nome)+dom
  }
  var end = end.toLowerCase()
  return remove(end)
}

function restnome (nome){
  var nomer = nome.replace(new RegExp(' {2,}','gi'),' ');
  var nomer = nomer.replace(new RegExp(' *$','gi'),'');

  var nomer = nomer.split(' ')
  delete nomer[0]
  var rest = ""
  for (i in nomer){
   rest = rest + nomer[i]
   rest = rest +" "
  }
  rest = rest.replace(new RegExp(' *$','gi'),'');

  return rest
  
}

function remove (text){       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
        text = text.replace(new RegExp('[Ñ]','gi'), 'n');

    return text;                 
}
