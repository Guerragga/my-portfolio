# Gabriel Guerra — Portfolio

Portfólio profissional de Gabriel Guerra, desenvolvido como uma aplicação web estática com foco em apresentação para recrutadores, clareza técnica, acessibilidade e performance.

## Posicionamento

O conteúdo atual apresenta atuação como **Full Stack Developer**, com foco principal em:

- Python;
- PHP;
- backend e APIs REST;
- automações e integrações;
- JavaScript / TypeScript;
- bancos de dados;
- frontend responsivo e acessível.

O portfólio prioriza projetos e competências verificáveis em vez de cards fictícios ou seções incompletas.

## Tecnologias do portfólio

- HTML5 semântico;
- CSS3;
- JavaScript nativo.

Não há framework, bundler ou dependências JavaScript externas. O projeto também não depende mais de Typed.js ou Font Awesome.

## Principais melhorias

- reposicionamento profissional para Full Stack / Backend / APIs / automação;
- hero com proposta de valor clara;
- menu mobile acessível;
- navegação com estado ativo;
- seção de stack organizada por área;
- projetos públicos reais do GitHub;
- contato funcional;
- remoção de placeholders e links vazios;
- remoção de seção "Work in Progress";
- design system centralizado em custom properties;
- layout responsivo para desktop, tablet e mobile;
- foco visível e skip link;
- respeito a `prefers-reduced-motion`;
- animações progressivas com `IntersectionObserver`;
- semântica e hierarquia de títulos revisadas;
- documentação atualizada.

## Projetos apresentados

### Nice Dice

Bot de Discord em Python para RPG com comandos slash, múltiplos idiomas, rolagens secretas, vantagem/desvantagem, dados explosivos, histórico e acessibilidade com TTS.

### CRUD de profissionais

Projeto em Angular 17 e TypeScript para gerenciamento de profissionais de saúde, utilizando Angular Material e estrutura com suporte a SSR/Express.

### NieR Parallax Experience

Estudo visual em HTML, CSS e JavaScript com efeito parallax inspirado em NieR: Automata.

### TodoList PySimpleGUI

Aplicação desktop em Python para estudo de gerenciamento de estado e operações de tarefas através de interface gráfica.

## Estrutura

```text
.
├── img/
├── index.html
├── styles.css
├── script.js
├── LICENSE
└── README.md
```

## Executando localmente

O projeto é estático e pode ser aberto diretamente pelo `index.html`. Para executar em um servidor local:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Acessibilidade

Foram considerados:

- HTML semântico;
- navegação por teclado;
- skip link;
- foco visível;
- menu mobile com `aria-expanded`;
- hierarquia correta de headings;
- links com nomes acessíveis;
- contraste elevado;
- suporte a redução de movimento;
- áreas de toque adequadas.

## Performance

O projeto evita bibliotecas externas de JavaScript e bibliotecas de ícones. As interações são implementadas com APIs nativas do navegador.

Alguns assets antigos e pesados permanecem no diretório `img/`, mas deixaram de ser carregados pela página. Uma limpeza física desses arquivos pode ser feita posteriormente caso não sejam mais necessários no histórico do projeto.

## Contato

- GitHub: https://github.com/Guerragga
- LinkedIn: https://www.linkedin.com/in/gabriel-guerra-b93238219/
- E-mail: guerra.gabrieldev@gmail.com
