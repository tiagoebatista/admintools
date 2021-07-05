//VARIÁVEIS GLOBAIS
ui = SpreadsheetApp.getUi()

//Inserção das colunas com os dados manipulados
function criarprinome (){
  try {
var ss = SpreadsheetApp.getActiveSheet()
var lrow = ss.getActiveRange().getLastRow()
var frow = ss.getActiveRange().getRowIndex()
var range = ss.getActiveRange()
var col = range.getColumn()
  ss.insertColumnAfter(col)
  var x = 'Operação finalizada'

  for (var i = frow; i<= lrow; i++){
    var nome = ss.getRange(i,col).getValue()
    if (nome !=="") {
      var pnome = prinome(nome)
      ss.getRange(i,col+1).setValue(pnome)
    } else {break;ss.getRange(1,col+1).setValue("First Name"); showAlertS(x)}
  }
  }
  
  catch (err) {
    showAlertErr(err)
  } 
  ss.getRange(1,col+1).setValue("First Name");
  showAlertS(x)
}

function criarsobnome (){
var ss = SpreadsheetApp.getActiveSheet()
var lrow = ss.getActiveRange().getLastRow()
var frow = ss.getActiveRange().getRowIndex()
var range = ss.getActiveRange()
var col = range.getColumn()
  ss.insertColumnAfter(col)
  var x = 'Operação finalizada'

  for (var i = frow; i<= lrow; i++){
    var nome = ss.getRange(i,col).getValue()
    if (nome !=="") {
      var snome = sobrenome(nome)
      ss.getRange(i,col+1).setValue(snome)
    }else {break; ss.getRange(1,col+1).setValue("Last Name"); showAlertS(x)}
  }
  ss.getRange(1,col+1).setValue("Last Name")
  showAlertS(x)
}

function criarrnome (){
var ss = SpreadsheetApp.getActiveSheet()
var lrow = ss.getActiveRange().getLastRow()
var frow = ss.getActiveRange().getRowIndex()
var range = ss.getActiveRange()
var col = range.getColumn()
  ss.insertColumnAfter(col)
  var x = 'Operação finalizada'

  for (var i = frow; i <= lrow; i++) {
    var nome = ss.getRange(i, col).getValue();
    if (nome !== "") {
      var renome = restnome(nome);
      ss.getRange(i,col+1).setValue(renome);
    }else {break; ss.getRange(1,col+1).setValue("Last Name"); showAlertS(x)}    
  }
  ss.getRange(1,col+1).setValue("Last Name")
  showAlertS(x)
}
  
 
  
 function criaremail () {
   try{
var ss = SpreadsheetApp.getActiveSheet()
var lrow = ss.getActiveRange().getLastRow()
var frow = ss.getActiveRange().getRowIndex()
var range = ss.getActiveRange()
var col = range.getColumn()
    var x = "Emails criados com sucesso"
  var result =ui.prompt(
      'Seu domínio/Your domain',
    'Entre o domínio a ser usado com @: (você pode usar outros modelos de endereço de e-mail digitando um número de 1 - 3 depois do domínio e separado por vírgula. Exemplo: @example.com,2. Para mais informações, consulte a documentação./Enter the domain to be used with @: (you can use other email address templates by entering a number 1 - 3 after the domain and separated by a comma. Example: @example.com, 2. For more information, see the documentation.',
     ui.ButtonSet.OK_CANCEL);
  // Process the user's response.
  var button = result.getSelectedButton();
  var text = result.getResponseText();
  var dom = text.split(',')[0];
  var op = text.split(',')[1];

  if (button ==ui.Button.OK) {
    ss.getRange(1, col).setValue("Nome Completo")
    ss.insertColumnAfter(col)

    for (i = frow; i <= lrow; i++){
      var nom = ss.getRange(i,col).getValue();
      
      if (nom !=="") {
        if (nom.split(" ")[1]) {
        var end = email(nom, dom, op);
              ss.getRange(i,col+1).setValue(end); 
      }else {throw "Há nomes que não estão completos"}      
      }else {break;  ss.getRange(1,col+1).setValue("Email Adress"); showAlertS(x)}
    } 
    ss.getRange(1,col+1).setValue("Email Adress")
    showAlertS(x)

  } else {return}
     
   } catch (err) {showAlertErr(err + "\n Verifique se todos os nomes estão completos e se não há espaços em branco desnecessários")}

}

// VERIFICAÇÃO DOS EMAILS NA LISTA
function listaemails () {
var ss = SpreadsheetApp.getActiveSheet()
var lrow = ss.getActiveRange().getLastRow()
var frow = ss.getActiveRange().getRowIndex()
var range = ss.getActiveRange()
var col = range.getColumn()
  range = ss.getActiveRange()
  lemails = []
  for (var i = 0; i <=lrow; i++) {
    lemails.push(ss.getRange(i,range.getColumn()).getValue())  
  }
  return lemails
}



function verificaremailduplicado () { 
  var ss = SpreadsheetApp.getActiveSheet()
var lrow = ss.getActiveRange().getLastRow()
var frow = ss.getActiveRange().getRowIndex()
var range = ss.getActiveRange()
var col = range.getColumn()
 var lnomes = []
  var indup = []
  var emails = ss.getActiveRange().getValues()
   for (i=0; i<emails.length;i++){
     lnomes.push(emails[i][0])
   }
  for (i=0; i<lnomes.length; i++){
    n=0
    for (ib=0; ib<lnomes.length; ib++){
      if (lnomes[ib] == lnomes[i] & lnomes[ib] != "") {
        n++
      }      
    }
    if (n>1){indup.push(['R'+(i+frow)+'C'+col])}
  }
if (indup.length <1) {ui.alert('Sucesso', 'Não há e-mails duplicados aqui', ui.ButtonSet.OK)} else {
ss.getRangeList(indup).setBackground('yellow')
SpreadsheetApp.flush;
showAlertD()

}

 }



function listusers() {
  var pageToken;
  var page;
  var lusers = []
  do {
    page = AdminDirectory.Users.list({
      customer: 'my_customer',
      maxResults: 500,
      pageToken: pageToken
    });
    var users = page.users;
          for (var i = 0; i <users.length; i++) {
      lusers.push(users[i].primaryEmail)
      if (users[i].aliases != null){
        for (var ia = 0; ia<=users[i].aliases.length; ia++) {
      lusers.push(users[i].aliases[ia])
    }
    }
    }
    
    pageToken = page.nextPageToken;
  } while (pageToken);
  return lusers
}

function verificardominio () {
var ss = SpreadsheetApp.getActiveSheet()
var lrow = ss.getActiveRange().getLastRow()
var frow = ss.getActiveRange().getRowIndex()
var range = ss.getActiveRange()
var col = range.getColumn()
var liusers = listusers ()

var rangevalues = range.getValues()
var lemails = []
var indupd = []
for (i = 0; i < rangevalues.length; i++){
  lemails.push(rangevalues[i][0])
}

for (i=0; i<lemails.length; i++){
  if (liusers.includes(lemails[i]) & lemails[i] != ""){
    indupd.push(['R'+(i+frow)+'C'+col])
  }
}
  if (indupd.length <1){ui.alert('Sucesso!', "Todos os e-mails serão inéditos no seu domínio!", ui.ButtonSet.OK)} else{
ss.getRangeList(indupd).setBackground('red')
SpreadsheetApp.flush

showAlertDo()
  }
    
    
    
    
}

function showAlertD() {

  var result =ui.alert(
     'Verificação concluída/checking finished ',
     'E-mails duplicados nesta lista estão destacados em AMARELO./Duplicate emails in this list are highlighted in YELLOW.',
     ui.ButtonSet.OK);

  // Process the user's response.
  
}

function showAlertS(mensagem) {

  var result =ui.alert(
     'Sucesso!',
     mensagem,
     ui.ButtonSet.OK);

  // Process the user's response.
  
}

function showAlertErr(err) {

  var result =ui.alert(
     'Ocorreu um erro',
     err,
     ui.ButtonSet.OK);

  // Process the user's response.
  
}

function showAlertDo() {

  var result =ui.alert(
     'Verificação concluída/checking finished',
     'Usuários já cadastrados no Admin Console estão destacados em VERMELHO./Users already registered in the Admin Console are highlighted in RED.',
     ui.ButtonSet.OK);

  // Process the user's response.
  
}

function log () {
var list = ss.getRange(frow, lrow).getValues()

Logger.log(list)
}


