# FormsAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Curso Formulário orientados por Modelos

Template Drive Forms->

Usa componentes do template
Se quiser fazer as coisas com  formulários orientados por modelo




Reactive Forms->
Usa componentes do template
Criamos um form Model no Typescript.
(o modelo de formulário é uma lista de campos que correspondem ao modelo)
Mais fácil testar a validação do model do formulário
Testes unitários são melhores com formularios reativos.



## Bootstrap

npm install --save bootstrap


## FormsModel -> ngForm

Assim que você importa o FormsModule, esta diretiva se torna ativa por padrão em todas as <form>tags. Você não precisa adicionar um seletor especial.

Em formulários orientados por modelo, todas as <form>tags são marcadas automaticamente como NgForm. Para importar o FormsModulemas pular seu uso em alguns formulários, por exemplo, para usar validação HTML5 nativa, adicione o ngNoForme as <form> tags não criarão uma NgFormdiretiva. Nas formas reativas, o uso ngNoFormé desnecessário porque as <form>tags são inertes. Nesse caso, você se absteria de usar a formGroup diretiva.

Então, #form é a variavel e nós atribuimos a string ngForm á variavel.

<form #form="ngForm">
...
</form>

ngForm-> é Herdado deAbstractControlDirective

abstract control: AbstractControl | null
value: any
(ex: se o formulário é valido ou invalido)
valid: boolean | null
invalid: boolean | null
pending: boolean | null
disabled: boolean | null
enabled: boolean | null
errors: ValidationErrors | null
pristine: boolean | null
dirty: boolean | null
touched: boolean | null
status: string | null
untouched: boolean | null
statusChanges: Observable<any> | null
valueChanges: Observable<any> | null
path: string[] | null
validator: ValidatorFn | null
asyncValidator: AsyncValidatorFn | null

## Copying Form Data(copiando do formulario)

O operador spread permite que você espalhe elementos de um objeto iterável, como um array, um map, ou um conjunto. Por exemplo:

const odd=[1,3,5];

const combined=[2,4,6,...odd];
console.log(combined);

[2,4,6,1,3,5]

Neste exemplo, os três pontos ... localizados na frente do array odd é o operador spread (propagação). O operador spread desempacota os elementos do array odd.


Summary:

NgForm:esta é a diretiva que nos dá acesso a todas as informações do angular sobre formulários.
- a maneira como usamos é que definimos uma variável de referencia de modelo. Então em nossa tag de formulário temos# nome da variável. o #form definimos como a string literal ngForm.
<form #form="ngForm">

NgModel: é uma diretiva que é colocada nos campos dentro de um formulário. Ele cria
o objeto form.value e o atributo name é obrigatório e o nome é um par de valores no nosso objeto.

Podemos usar a interface para criar nosso modelo de dados.

E uma vez que temos o nosso modelo de dados podemos usar o Two way data bindings(usamos vinculação de dados bidirecional) para vincular o modelo ao formulário. 
[(ngModel)]="variable"

Como podemos copiar dados de formulário, e não corromper os dados. 
-obj={..originalObj} usamos o operador spread ele faz uma cópia simples do Original Object e armazenou em objeto.

Lodash é uma biblioteca Javascript que fornece um conjunto de funções para que a pessoa programadora possa trabalhar com mais facilidade em tarefas que envolvam a manipulação de matrizes, strings, objetos, números, etc.Lodash oferece diversas funções para facilitar a codificação com Javascript

# HTML5 FIELD VALIDATION

Em HTML5, a validação é feita pricnicpalemtne com atributos em cada campo.
required: atributo obrigatório marca a entrada conforme necesário. Você receberá um erro senão houver nada inserido nesse campo.
pattern(padrão):permite que você especifique uma expressão reguular para o controle de entrada.

Também temos outros atributos baseados em valor:

minlength (permite controlar o tamanho da string)
maxlenth
min (trabalha com numeros, que seria uma entrada com um tipo de numero)
max

ngNativeValidate-> permitirá que o navegador valide cada controle agora, angular
desativa por que existe muitas diferenças entre os navegadores.

## CSS Classes for validation

 classes em que o angular trabalha:


ng-untouched O campo ainda não foi tocado
ng-touched O campo foi tocado
------------------------------------------------
ng-pristine O campo ainda não foi modificado
ng-dirty O campo foi modificado
------------------------------------------------
ng-validO conteúdo do campo é válido
ng-invalidO conteúdo do campo não é válido
------------------------------------------------
ng-valid-keyUma chave para cada validação. Exemplo: ng-valid-required, útil quando há mais de uma coisa que deve ser validada
ng-invalid-keyExemplo:ng-invalid-required










Estudar expressões regulares
