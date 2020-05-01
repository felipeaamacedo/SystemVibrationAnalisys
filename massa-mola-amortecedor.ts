// Definindo os par�metros que ser�o exportadas para a fun��o auxiliar
let Meq: number
let Keq: number
let Ceq: number
let A: number[][]

// Dados para simula��o - Usu�rio pode variar como quiser
// Par�metros do sistema (em unidades SI)
Meq = 75
Ceq=0
Keq=2189452.902

// Condi��es iniciais
let z0:number = 0 
let dz0_dt:number = 0

//Dura��o da simula��o
let t_final=1000;

// Corpo do programa
// Matriz [A]
A=[[0, 1],
[ -Keq/Meq, -Ceq/Meq]];

// Vetor das condi��es iniciais
let vetCondIniciais:number[]=[z0, dz0_dt];

// Vetor tempo
let tspan:number[]=[0, t_final];

// Chamando fun��o para resolu��o num�rica do sistema de equa��es
let vetorTempo:number[]
let matrixW:number[]
[vetorTempo, matrixW] = ode45('equacoes_d', tspan, vetCondIniciais);

// vetor_t = vetor composto pelos instantes de tempo discretos
// matriz_W = matriz, onde a primeira coluna cont�m os valores de z em cada t discreto
// a segunda coluna cont�m os valores de dz_dt em cada t discreto
// Obtendo o numero de elementos, n, do vetor composto pelos instante de tempo discretos
let n=vetorTempo.length 

// Nomeando os resultados (sob a forma de vetor)
let vetor_z = matrizW(1:n,1);
let vetor_dz_dt = matrizW(1:n,2);

