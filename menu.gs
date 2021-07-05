//CRIAÇÃO DO MENU

function onInstall(e){
  onOpen(e);
}

function onOpen(e) {  
  
     SpreadsheetApp.getUi().createMenu('Admin Tools')
      .addSubMenu(SpreadsheetApp.getUi().createMenu('Montar/Make')
      .addItem('Primeiro nome/firstname', 'criarprinome')
      .addItem('Sobrenome/lastname', 'criarsobnome')
      .addItem('Resto do nome/rest of the name', 'criarrnome')
      .addItem('Endereços de e-mail/e-mail adresses', 'criaremail'))
      .addSubMenu(SpreadsheetApp.getUi().createMenu('Verificação de E-mails/Check e-mails')
      .addItem('Duplicados aqui/duplicates here','verificaremailduplicado')
      .addItem('Duplicados no domínio/Duplicates in the domain','verificardominio'))
      .addToUi();
  
}
