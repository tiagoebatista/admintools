<Inserção da Licenç>

# Admin Tools

Este é o código do [complemento Admin Tools para o *Google Planilhas*](https://workspace.google.com/marketplace/app/admin_tools/367901510611). Trata-se de um utilitário que ajuda a criação de planilhas a serem usadas como fonte para criação de usuários do **Google Workspace**.

Entre suas funções estão:
* Geração de endereços de e-mail automática;
* Verificação de e-mails duplicados;
* Verificação se o endereço de e-mail já existe no domínio.

[Este código é distribuído sob a licença GNU 3.](https://www.gnu.org/licenses/gpl-3.0.htmlcd )

## INSTRUÇÕES


**ATENÇÃO:** Antes de começar, verifique se a sua planilha possui a primeira linha como cabeçalhos e se não possui linhas em branco dentro do intervalo. **Caso contrário, a aplicação não funcionará corretamente e você pode perder seus dados.**

Selecione o intervalo com a células que possuem o nome completo da pessoa. Depois vá ao menu da aplicação e escolha a função desejada. A ferramenta vai criar uma nova coluna com os dados. 

#### Exemplo: Nome completo = José Antenor de Souza

Função | Saída
:--------: | :----------:
Primeiro nome | José
Sobrenome | Souza
Resto do nome | Antenor de Souza

#### Função Email 

Quando escolhida essa opção, você deverá inserir o domínio com o @ na caixa de diálogo.

`@example.com >> jose.souza@example.com.`


Você pode ainda usar algumas variações desse modelo, basta escrever a opção de 2-3 depois do domínio separado por vírgulas:

`@example.com,2 >> jose.a.souza@example.com`

`@example,3 >>  josea.souza@example.com`

Todos os e-mails são modificados de modo que não existam caracteres especiais ou espaços em branco, mesmo que eles apareçam no nome da pessoa.

#### Verificação de e-mails

Selecione a lista de e-mails e escolha a opção dentro do menu de verificação

A opção "Duplicado aqui" pinta de amarelo as células repetidas na planilha. Já a função duplicados no domínio pinta de vermelho os endereços que já estão cadastrados no seu Admin Console.



Recomendamos que, para planilhas com mais de 300 linhas, se utilize a opção nativa do planilhas Estatísticas da Coluna para verificar e-mails duplicados, pois a função do complemento pode demorar muito. A função de verificação no domínio funciona bem com grande quantidades de dados, mas pode demorar se o número de usuários já cadastrados no domínio for muito grande.

Mais informações disponíveis em: [https://www.tiagoebatista.com/admin-tools](https://www.tiagoebatista.com/admin-tools)