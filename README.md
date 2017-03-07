# Teste Front-end - R7 - Victor Brosso (vbrosso@gmail.com)

## Tecnologias usadas


### Pré-processador: SASS
Arquivos scss: \public\stylesheets\sass

Foi usado a IDE ScoutApp para converter automaticamente os arquivos *.scss em *.css


## Arquivos para o(s) avaliador(es) analisar(em):
1. **HTML: \public\index.html**
2. **CSS: \public\stylesheets\sass\style.scss**
3. **JS: \public\javascripts\main.js**



## Precisando compilar os arquivos:
Foi usado o npm para instalar as dependências, pelo nodejs.


### Task manager: Grunt
1. /Gruntfile.js
2. /package.json
3. Plugins usados: grunt-contrib-uglify, grunt-contrib-cssmin, grunt-contrib-htmlmin


###Tarefas do Grunt: minifica o arquivos:
1. index.html --> index_prod.html
2. style.css --> style.min.css
3. main.js --> main.min.js 

###Testes:
No caso de usar API REST foi elaborado um teste com FRISBY.JS para a automação de testes.
Necessário instalar as dependências:

	npm install -g frisby
	npm install -g jasmine-node

Rodando o teste com:
	
	jasmine-node frisby_test_spec.js

	

## Observações do Build:
Desconsiderar (não avaliar) os arquivos e diretorios minificados gerados pelos plugins do Grunt:

1. ** index_prod.html**
2. ** style.min.css**
3. ** main.min.js**



#*Obrigado!*#



### Sobre o R7.com
R7.com, é um portal mantido pela Rádio e Televisão Record S/A, com quase
5 anos de vida possui 50 milhões de visitantes únicos, e 1 bilhão e meio
de pageviews mensalmente e conta coma uma equipe de quase 500 pessoas.


### Teste FrontEnd para o R7.com!
Essa prova consiste em testar seus conhecimentos com HTML, CSS,
JavaScript, Linha de Comando entre outras coisas.
Você basicamente irá desenvolver uma pequena aplicação baseada em uma
requisição HTTP, nesse teste será necessário conhecimentos em ordenação
de dados e matemática.



Primeiramente, faça um fork e clone deste projeto, crie uma branch (pode ser com seu nome mesmo), depois instale as
dependências:

    npm install

Após isso, rode a aplicação:

    npm start

Depois do seu setup você precisará seguir as seguintes instruções, para
construir a aplicação:

1. Desenvolver a página, que tem o seu layout em **a-fazenda.psd**.(A
   única fonte usada foi a Montserrat, disponível no Google Fonts,
use-a!)
2. Criar um script em JavaScript que faça uma requisição para **/fazenda.json**
  * Apresentar os dados requisitados pelo layout.
  * Calcular a porcentagem de "positives" e "negatives".
  * Ordernar os items do json a partir da porcentagem calculada.
3.  **NÃO** alterar o arquivo **fazenda.json**. Em hipótese nenhuma!
4. Seguir estritamente o .psd.
5. Suporte para IE8+.
6. Não usar geradores como yeoman, procure se manter na estrutura do nosso projeto.
7. Se for preciso modificar a estrutura e workflow, atualizar o README.
8. Submeta o Pull Request! :D

<br>
**Pontos Extras**:

1. Se possível, escreva o código com BackboneJS, se não, use VanillaJS que nós iremos avaliar do mesmo jeito! ;)
2. Utilizar algum pré-processador CSS. (SASS FTW!)
3. Testes, testes, testes!
4. Automatizar as coisas. (Gulp? Grunt? :D)
5. Template Engines (underscore, mustache, ou outras de sua preferência)



<br><br><sub>Os dados presentes neste teste são totalmente fictícios.</sub>
