# Dev HelpDesk - Sistema de Gerenciamento de Chamados

O Dev HelpDesk é um sistema robusto de gerenciamento de chamados projetado para simplificar o acompanhamento e a resolução eficiente de problemas dos clientes. Com funcionalidades que vão desde o cadastro de clientes até a conclusão de chamados, oferece uma solução completa para equipes de suporte.

## [Deploy](https://dev-helpdesk.vercel.app/) 🚀

![Captura de Tela (274)](https://github.com/Denis-moreira98/dev-helpdesk/assets/72985107/836a6a0f-bc3b-4974-93bb-748162616074)


## Principais Funcionalidades 👨🏽‍💻🖲️

- Autenticação Simplificada: Integração de login com o Google para uma autenticação rápida e segura.
- Rotas Privadas: Acesso exclusivo ao painel de dashboard para usuários autenticados, garantindo a segurança das informações.
- Cadastro de Clientes: Formulário de cadastro de clientes com validação de campos, utilizando as tecnologias hook-form e zod para garantir dados consistentes.
- Cadastro de Chamados: Possibilidade de abrir novos chamados, com a condição de que o cliente esteja devidamente cadastrado.
- Modal Detalhado: Visualização detalhada de cada chamado por meio de um modal, proporcionando uma compreensão completa do problema.
- Exclusão de Cliente: Restrição para a exclusão de clientes que não possuem chamados em aberto, evitando a perda de informações importantes.
- Conclusão de Chamado: Ao concluir um chamado, ele é removido do painel, mantendo a interface organizada.
- Abertura de Chamado pelo Cliente: Clientes podem abrir chamados facilmente por meio de um link, simplificando o processo e melhorando a comunicação. (https://dev-helpdesk.vercel.app/open)

## Tecnologias Utilizadas 🛠️

- Next.js 14: Framework React que oferece recursos poderosos como renderização do lado do servidor (SSR) e geração estática (SSG).
- NextAuth: Biblioteca para autenticação de usuários utilizando OAuth, garantindo segurança e praticidade.
- React-hook-form com zod: Validação de formulários aprimorada com mensagens personalizadas para uma experiência de usuário mais amigável.
- Tailwind CSS: Framework CSS que agiliza o design com classes pré-estilizadas, mantendo a consistência visual.
- Prisma: ORM (Object-Relational Mapping) para Node.js e TypeScript, facilitando a interação com o banco de dados.
- MongoDB Atlas: Utilização do MongoDB como banco de dados, proporcionando escalabilidade e flexibilidade para armazenar dados de forma eficiente.


## Telas

![Captura de Tela (275)](https://github.com/Denis-moreira98/dev-helpdesk/assets/72985107/5ede2c56-b0a7-42a8-84c1-332efb43ecc5)
![Captura de Tela (276)](https://github.com/Denis-moreira98/dev-helpdesk/assets/72985107/81161224-f311-4cd9-a3f9-f1b78c1e25ef)
![Captura de Tela (277)](https://github.com/Denis-moreira98/dev-helpdesk/assets/72985107/538a7383-da0e-40e3-88b4-64c817d6e41b)
![Captura de Tela (278)](https://github.com/Denis-moreira98/dev-helpdesk/assets/72985107/7cb1f955-7148-44d7-95dc-7b6e0d299e88)
![Captura de Tela (279)](https://github.com/Denis-moreira98/dev-helpdesk/assets/72985107/ad5ef238-523e-4823-ac99-79cd28f9afbe)
![Captura de Tela (280)](https://github.com/Denis-moreira98/dev-helpdesk/assets/72985107/34507a89-4584-4381-bfe5-9b64c3cdb164)





