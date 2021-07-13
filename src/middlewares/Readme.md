# Middlewares

As funções de middleware são funções que têm acesso ao objeto de solicitação
(req), ao objeto de resposta (res) e à nextfunção no ciclo de
solicitação-resposta do aplicativo. A função next é uma função no roteador
Express que, quando chamada, executa o middleware que sucede o middleware atual.

As funções de middleware podem realizar as seguintes tarefas:

* Execute qualquer código.
* Faça alterações nos objetos de solicitação e resposta.
* Finalize o ciclo de solicitação-resposta.
* Chame o próximo middleware na pilha ( next( ) ).
* Se a função de middleware atual não encerrar o ciclo de solicitação-resposta,
ela deve chamar next() para passar o controle para a próxima função de
middleware. Caso contrário, o pedido ficará pendente. 