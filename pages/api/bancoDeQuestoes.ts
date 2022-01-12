import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [

    new QuestaoModel(306, 'Qual inseto transmite a Doença de Chagas', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),


    ]),

    new QuestaoModel(202, 'Qual o fruto é conhecido no Norte como "jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ]),

    new QuestaoModel(203, 'Qual é o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ]),
  
]

export default questoes





// usar o static para ficar mais legivel para dando um novo retorno no RepostaModel no resposta.ts metodos staticos
// static certa(valor: string){return new RespostaModel(valor,true)}
// usar o static para ficar mais legivel para dando um novo retorno no RepostaModel no resposta.ts 
// static errada(valor: string){return new RespostaModel(valor,false)}
        // new RespostaModel('Abelha', false),
        // new RespostaModel('Barata', false),
        // new RespostaModel('Pulga', false),
        // new RespostaModel('barbeiro', true),