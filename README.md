# Dev HelpDesk - Sistema de Gerenciamento de Chamados

O Dev HelpDesk é um sistema robusto de gerenciamento de chamados projetado para simplificar o acompanhamento e a resolução eficiente de problemas dos clientes. Com funcionalidades que vão desde o cadastro de clientes até a conclusão de chamados, oferece uma solução completa para equipes de suporte.

## Principais Funcionalidades

- Autenticação Simplificada: Integração de login com o Google para uma autenticação rápida e segura.
- Rotas Privadas: Acesso exclusivo ao painel de dashboard para usuários autenticados, garantindo a segurança das informações.
- Cadastro de Clientes: Formulário de cadastro de clientes com validação de campos, utilizando as tecnologias hook-form e zod para garantir dados consistentes.
- Cadastro de Chamados: Possibilidade de abrir novos chamados, com a condição de que o cliente esteja devidamente cadastrado.
- Modal Detalhado: Visualização detalhada de cada chamado por meio de um modal, proporcionando uma compreensão completa do problema.
- Exclusão de Cliente: Restrição para a exclusão de clientes que não possuem chamados em aberto, evitando a perda de informações importantes.
- Conclusão de Chamado: Ao concluir um chamado, ele é removido do painel, mantendo a interface organizada.
- Abertura de Chamado pelo Cliente: Clientes podem abrir chamados facilmente por meio de um link, simplificando o processo e melhorando a comunicação.

## Tecnologias Utilizadas

- Next.js 14: Framework React que oferece recursos poderosos como renderização do lado do servidor (SSR) e geração estática (SSG).
- NextAuth: Biblioteca para autenticação de usuários utilizando OAuth, garantindo segurança e praticidade.
- React-hook-form com zod: Validação de formulários aprimorada com mensagens personalizadas para uma experiência de usuário mais amigável.
- Tailwind CSS: Framework CSS que agiliza o design com classes pré-estilizadas, mantendo a consistência visual.
- Prisma: ORM (Object-Relational Mapping) para Node.js e TypeScript, facilitando a interação com o banco de dados.
- MongoDB Atlas: Utilização do MongoDB como banco de dados, proporcionando escalabilidade e flexibilidade para armazenar dados de forma eficiente.
