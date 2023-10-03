O JavaScript é case-sensitive, ou seja, diferencia maiúsculas e minúsculas. Isso significa que tudo o que escrevemos, sejam instruções próprias da linguagem (como console.log) ou quando damos nome a uma variável, tem que ser feito em um mesmo padrão, o que inclui a questão de maiúsculas e minúsculas.

Existem várias convenções para nomes e cada linguagem de programação tem o seu. Seguem alguns deles:

- camelCase: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.

- snake_case: Os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario.

- kebab-case: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no JavaScript para variáveis e funções.

- PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.

*Importante: Nunca utilize espaço nem caracteres especiais, nem inicie os nomes das variáveis com números.*

No caso de números, é possível salvar em uma variável não somente o número em si, como em *const num = 5;*, mas também o resultado de uma operação (ou mais):

> const soma = 10 + 10;
>
> const multiplicacao = 10 * 10;
>
> const operacao = (soma + multiplicacao) + 10;