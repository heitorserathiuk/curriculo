Vue.component('Section1', {
  created(){
    this.backend.sort()
  },
  data () {
    return {
      backend: [ '.NET', 'Algoritmos', 'Arquitetura MVC', 'C#', 'Entity Framework', 'Estrutura de Dados', 'Java', 'Lógica de Programação', 'Orientação a Objetos', 'Python', 'Visual Basic(VBA)' ]
    }
  },
  template: `
<div>
    <h3>Back End</h3>
    <div class="skills" v-for="b in backend">
      <label>{{b}}</label>
    </div>
</div>
`
})
Vue.component('Section2', {
  created(){
    this.frontend.sort()
  },
  data () {
    return {
      frontend: [ 'Angular', 'CSS', 'HTML', 'jQuery', 'Java Script', 'SVG' ]
    }
  },
  template: `
<div>
    <h3>Front End</h3>
    <div class="skills" v-for="f in frontend">
      <label>{{f}}</label>
    </div>
</div>
`
})
Vue.component('Section3', {
  created(){
    this.database.sort()
  },
  data () {
    return {
      database: [ 'Modelagem relacional', 'Oracle Database', 'Microsoft SQL Server', 'MySQL' ]
    }
  },
  template: `
<div>
    <h3>Banco de Dados</h3>
    <div class="skills" v-for="d in database">
      <label>{{d}}</label>
    </div>
</div>
`
})
Vue.component('Section4', {
  created(){
    this.apis.sort()
  },
  data () {
    return {
      apis: [ 'Fiddler', 'Postman', 'SOAP', 'REST', 'Filas de Mensagens' ]
    }
  },
  template: `
<div>
    <h3>Mensageria e APIs</h3>
    <div class="skills" v-for="a in apis">
      <label>{{a}}</label>
    </div>
</div>
`
})
Vue.component('Section5', {
  created(){
    this.testes.sort()
  },
  data () {
    return {
      testes: [ 'Batch Script', 'Selenium', 'Shell Script', 'Testes unitários', 'Testes via navegador', 'Web Scraping', 'XPath', 'Gulp' ]
    }
  },
  template: `
<div>
    <h3>Testes e Automatização</h3>
    <div class="skills" v-for="t in testes">
      <label>{{t}}</label>
    </div>
</div>
`
})
Vue.component('Section6', {
  created(){
    this.design.sort()
  },
  data () {
    return {
      design: [ 'Design de Interfaces', 'Responsividade', 'Adobe XD', 'Axure RP', 'Adobe Photoshop', 'Adobe Illustrator' ]
    }
  },
  template: `
<div>
    <h3>Web Design</h3>
    <div class="skills" v-for="i in design">
      <label>{{i}}</label>
    </div>
</div>
`
})
Vue.component('Section7', {
  created(){
    this.intelligence.sort()
  },
  data () {
    return {
      intelligence: [ 'Microsoft Excel', 'Google Sheets', 'Google Data Studio', 'Qlik Sense', 'Analysis Services(SSAS)', 'Integration Services(SSIS)', 'Tableau', 'Pentaho', 'Power BI', 'Cubos de dados', 'Datawarehouse', 'ETL', 'Fundamentos de Estatística' ]
    }
  },
  template: `
<div>
    <h3>Business Intelligence</h3>
    <div class="skills" v-for="i in intelligence">
      <label>{{i}}</label>
    </div>
</div>
`
})

Vue.component('Section8', {
  created(){
    this.digital.sort()
  },
  data () {
    return {
      digital: [ 'Web Analytics', 'SEO', 'SEM', 'Performance', 'Remarketing', 'Mídia Programática', 'E-mail Marketing', 'Automação de Marketing' ]
    }
  },
  template: `
<div>
    <h3>Marketing Digital</h3>
    <div class="skills" v-for="d in digital">
      <label>{{d}}</label>
    </div>
</div>
`
})
Vue.component('Marketing', {
  created(){
    this.marketing.sort()
  },
  data () {
    return {
      marketing: [ 'Google Ads', 'SEM Rush', 'Google Search Console', 'Ads Manager', 'Google Ads Editor', 'B2W Ads', 'Yahoo Ads', 'Screaming Frog', 'RD Station', 'Power Editor', 'Google Merchant Center', 'Bing Ads', 'Google Tag Manager', 'Hitwise', 'Bornlogic Ads' ]
    }
  },
  template: `
<div>
    <h3>Ferramentas Marketing</h3>
    <div class="skills" v-for="m in marketing">
      <label>{{m}}</label>
    </div>
</div>
`
}) 

Vue.component('Livros', {
  data () {
    return {
      livros: [
        {
          titulo: 'Habilitação tipo B e carro próprio',
          data: '2009-2023'
        },
		{
          titulo: 'Certificado Google Ads - Publicidade de Pesquisa',
          data: '2019-2020'
        },
        {
          titulo: 'Participação do Digital Mission São Paulo',
          data: '2018'
        },
		{
          titulo: 'Certificado Google Analytics Individual Qualification',
          data: '2017-2018'
        },
		{
          titulo: 'Certificado Google Ads - Shopping',
          data: '2017-2018'
        },
        {
          titulo: 'Participação do 19° Encontro Locaweb',
          data: '2017'
        },
        {
          titulo: 'Participação do Meeting Digitalks',
          data: '2017'
        },
		{
          titulo: 'Certificado Google Ads - Publicidade Gráfica',
          data: '2013-2014'
        },
        {
          titulo: 'Kumon',
          data: '2004'
        },
      ]
    }
  },
  template: `
<div>
      <h3>Livros</h3>
       <ul class="tools" v-for="l in livros">
          <li>
            <strong v-html="l.titulo"></strong> 
		  </li>
		  <li>
            <small v-html="l.data"></small>
          </li>
       </ul>
</div>
`
})

Vue.component('Certificacoes', {
  data () {
    return {
      certificacoes: [
		{
          titulo: 'Certificado Google Ads - Publicidade de Pesquisa',
          data: '2019-2020'
        },
		{
          titulo: 'Certificado Google Analytics Individual Qualification',
          data: '2017-2018'
        },
		{
          titulo: 'Certificado Google Ads - Shopping',
          data: '2017-2018'
        },
		{
          titulo: 'Certificado Google Ads - Publicidade Gráfica',
          data: '2013-2014'
        },
      ]
    }
  },
  template: `
<div>
      <h3>Certificações</h3>
       <ul class="tools" v-for="c in certificacoes">
          <li>
            <strong v-html="c.titulo"></strong> 
		  </li>
		  <li>
            <small v-html="c.data"></small>
          </li>
       </ul>
</div>
`
})

Vue.component('Eventos', {
  data () {
    return {
      eventos: [
        {
          titulo: 'Participação do Digital Mission São Paulo',
          data: '2018'
        },
        {
          titulo: 'Participação do 19° Encontro Locaweb',
          data: '2017'
        },
        {
          titulo: 'Participação do Meeting Digitalks',
          data: '2017'
        },
	    {
          titulo: 'Robotec Fair',
          data: '2009'
        },			
      ]
    }
  },
  template: `
<div>
      <h3>Eventos</h3>
       <ul class="tools" v-for="e in eventos">
          <li>
            <strong v-html="e.titulo"></strong> 
		  </li>
		  <li>
            <small v-html="e.data"></small>
          </li>
       </ul>
</div>
`
})

Vue.component('Outros', {
  data () {
    return {
      outros: [
        {
          titulo: 'Habilitação tipo B e carro próprio',
          data: '2009-2023'
        },
      ]
    }
  },
  template: `
<div>
      <h3>Outros</h3>
       <ul class="tools" v-for="o in outros">
          <li>
            <strong v-html="o.titulo"></strong> 
		  </li>
		  <li>
            <small v-html="o.data"></small>
          </li>
       </ul>
</div>
`
})

Vue.component('Comportamento', {
  data () {
    return {
      perfis: [
        {
          perfil: 'Estabildade',
          ferramenta: 'DISC'
        },
        {
          perfil: 'INFJ',
          ferramenta: 'MBTI'
        },
        {
          perfil: 'Planejador/Analista',
          ferramenta: 'Sólides'
        },	
        {
          perfil: 'Analista',
          ferramenta: 'Coaching Assessment'
        },		
      ]
    }
  },
  template: `
<div>
      <h3>Perfil Comportamental</h3>
	  <article class="item">
       <ul class="tools" v-for="p in perfis">
          <li>
            <h4 v-html="p.perfil"></h4> 
		  </li>
		  <li>
            <small v-html="p.ferramenta"></small>
          </li>
       </ul>
	   </article>
</div>
`
})

Vue.component('Educacao', {
  data () {
    return {
      universidade: [
        {
          titulo: 'Especialização em Desenvolvimento Web Full Stack ',
          universidade:'Pontifícia Universidade Católica de Minas Gerais',
          local: 'Curitiba, PR',
          timeline: 'Abr 2021 &mdash; Dez 2022',
          descricao: `Padrões Web - HTML e CSS, Padrões Web - Java Script, Frameworks de Front End - React, Design de Experiência do Usuário, Gerenciamento Ágil de Projeto, Qualidade de Software para Web, Engenharia de Requisitos e Projetos de Aplicações, Programação Web com Node.JS, APIs e Web Services, Banco de Dados Relacionais e Não Relacionais, Plataformas de Back End - Python, Culturas e Práticas DevOps, Arquitetura de Back End, Servidores Web e Computação em Nuvem, Estratégia Digital e Web Analytics.`
        },
        {
          titulo: 'Sistemas de Informação',
          universidade:'Universidade Positivo',
          local: 'Curitiba, PR',
          timeline: 'Jan 2018 &mdash; Jun 2020',
          descricao: `Aplicativos Móveis, Sistemas de Informação, Orientação a Objetos, Infraestrutura Tecnológica, Novo Ambiente Organizacional, Gestão de Projetos de Software, Sistemas Convergentes, Sistemas Corporativos, Sistemas Embarcados, Gestão de Sistemas Operacionais, Arquitetura de Referência para os Negócios, Desenvolvimento Web, Business Analytics, Governança de TI, Cultura Startup, Desenvolvimento Pessoal, Business English, Trabalho de Conclusão de Curso.`
        },
        {
          titulo:'Engenharia da Computação',
          universidade:'Universidade Positivo',
          local: 'Curitiba, PR',
          timeline: 'Jan 2013 &mdash; Dez 2017',
          descricao: `Cálculo Diferencial e Integral, Geometria Anlítica e Algebra Linear, Química, Técnicas de Programação, Desenho Técnico, Lógica de Matemática, Eletricidade, Sistemas Digitais, Técnicas Avançadas de Programação, Sinais e Sistemas, Projetos de Engenharia, Banco de Dados, Arquitetura de Computadores, Processamento Digital de Sinais, Linguagens Formais e Copiladores, Cálculo Numérico, Pesquisa Operacional, Engenharia de Software, Comunicação e Expressão, Fundamentos de Admnistração.`
        },
      ]
    }
  },
  template: `
<div>
      <h3>Formação Acadêmica</h3>
      <article class="item" v-for="u in universidade">
          <div class="flex">
            <div class="align-left">
              <h4 v-html="u.titulo"></h4>
              <h5 v-html="u.universidade"></h5>
            </div>

            <div class="align-right"> 
              <small v-html="u.timeline"></small>
              <address v-html="u.local"></address>
            </div>
          </div>
          <p>
            {{u.descricao}}
          </p>
        </article>
</div>
`
});
Vue.component('Experiencia', {
  data () {
    return {
      empregos: [
        {
          titulo: 'Analista de SEO e BI',
          empresa:'Benova Digital Experience',
          local: 'Curitiba, PR',
          timeline: 'Nov 2019 &mdash; Abr 2020',
          descricao: `Trabalho com clientes com a plataforma de e-commerce Tray Corp; Acesso ao ERP Bling para extrair informações dos inventários de produtos; Contato frequente com o suporte da Tray Corp para esclarecimento e resolução de erros; Alterações nos e-commerces relacionadas a permissões, banners, conteúdos, menus, filtros, e outros; Implementações em lojas principalmente com foco em SEO, criação de Scripts; Campanhas de e-mail marketing pela ferramenta MailClick; Cruzamento de informações de cores para correção de produtos com erros no Marketplace Centauro; Análise de Beckmarking para utilização em proposta de E-commerce; Consultoria para Horizons Data Center com foco em tagueamento e o GA4; Análise de Mídia de Horizons Servidor Virtual; Realização de testes de carga utilizando Visual Studio, e robô com cadastros em massa de página de formulário; Análise diária de coberturas e erros do Search Console; Configuração do Search Console pelo provedor DNS, ou utilizando meta tag; Planejamento de SEO com cronograma anual; Alteração de Titles, descriptions, keywords em massa; Criação de Modelos de Title e Description, inclusão de tag line em páginas institucionais; Criação do subdomínio via Locaweb e Namecheap para apontamento do blog pela plataforma Ghost; Atividades em Blogs pela plataforma Ghost como tagueamento, inclusão de links, aplicação de páginas AMP, alterações via scripts; Backup de SEO no processo de migração de lojas para Tray Corp, análise de SEO em ecommerces anterior e posterior a implantações; Criação dos Redirecionamentos DePara nos processos de migrações de lojas seja por alteração de domínio, de layout ou de produtos; Redirecionamentos 301 ou 302 de páginas 404, produtos que pararam de ser vendidos, e páginas com foco em campanhas sassonais; Criação de Categorias, Categorização dos Produtos, Urls amigáveis; Atividades relacionadas ao Robots.txt, Meta Open Graph, Meta Robots, Twitter Card, Meta Viewport, Link Rel Canonical, Dados Estruturados, Rich Snippet Breadcrumb, marcações Heading Tags, linkagem interna e outros; Análise de Requisições de imagens, arquivos Java Script, estilos CSS e outros arquivos; Análise diária pelo Google Analytics das principais métricas dos clientes e utilização de alertas personalizados; Tagueamento para RD Station, Facebook, Google Ads, Hotjar, e outras mídias; Tagueamento de banners, links, timing, erros JS e páginas 404; Tagueamento com foco em Ecommerce, campanhas sassonais e na nova versão do GA4; Alterações relacionadas ao funil de conversão, configurações de metas, públicos personalizados, atributos personalizados, e outros; Consumo da Fbits API com informações dos e-commerces, e cruzamento com informações da API do Google Analytics; Criação e alteração de XMLs seguindo as referências do Google, Facebook; Alteração de categorias padrões do Google, Permissões do pixel do Facebook; Criação de Loja no Instagram para cliente; Acompanhamento de Reprovações, alteração de Regras de Feed, inclusão de rótulos personalizados para Google Shopping; Relatórios de Mídia pelo Dashgoo, relatórios utilizando Data Studio; Formulário de Reclamação de Marca Registrada com o Google; Alterações no Wordpress da agência; Projeto para download de imagens em escala programaticamente; Projeto em ASP.NET, C# para acelerar processo de alteração de e-mail marketing utilizando template; Criação de projetos de testes Desktop, e Mobile utilizando Selenium, Appium e o emulador do Android Simulator; Automação de capturas de telas de página dos ecommerces para capturar erros.`
        },
        {
          titulo: 'Desenvolvedor Front-End/ Consultor de Business Intelligence',
          empresa:'Qexpert Consultoria',
          local: 'Curitiba, PR',
          timeline: 'Ago 2020 &mdash; Dez 2020',
          descricao: `Consultoria de Business Intelligence para Boticário CSC, desenvolvimento de um Painel de Indicadores utilizando o Qlik Sense Mashup, HTML, CSS e jQuery; Apoio a equipe de consultores da Boticário de São José dos Pinhais, em dois projetos de BI que utilizavam Visão Computacional e utilizavam as tecnlogias Grails, Groovy, Java, Jquery, Java Script, Bootstrap, SVG, HTML e CSS; Design e criação de páginas web com foco no evento Smart City Expo Curitiba; Demandas internas da empresa como análise de Sites, designs de páginas utilizando a ferramenta Adobe XD, e desenvolvimento de designs em páginas web.`
        },
        /*{
          titulo: 'Desenvolvedor Web Full-Stack Junior C# e Angular',
          empresa:'Editora Positivo',
          local: 'Curitiba, PR',
          timeline: 'Jul 2019 &mdash; Out 2019',
          descricao: `Trabalho com o Sistema de Ensino Positivo chamado de PositivoOn; Desenvolvimento e correção de erros tanto de back end quanto de front end. Criação de scripts SQL para compreensão do sistema e para correções; Back End utilizando SQL Server e WebAPI C#/.NET (Core e 4.7.2); Front End utilizando AngularJS, HTML, CSS; Utilização do Fiddler e do Postman para depuração do sistema; Controle de versão usando GIT e SourceTree. Criação de branches para codificação, releases de novas versões do projeto, pull requests, publicação de projetos, e equalizações de códigos; Utilização do DevOps/TFS (CMMI e Agile) para gerenciamento de atividades e projetos; Metodologia Scrum ágil adaptada à realidade da empresa.`
        },
        {
          titulo: 'Analista de Mídia Online',
          empresa:'Tagg One',
          local: 'Curitiba, PR',
          timeline: 'Mar 2019 &mdash; Jul 2019',
          descricao: `Trabalho com estratégias digitais com foco em Performance e Branding com clientes como Chaves na Mão, Vou Comprar, Chic Best, Clube da Borracha; Plataformas de Ecommerce como Tray, Magento, VTEX; Utilização de Scripts Google Ads e APIs para alertar, gerar Análises e Relatórios, gerenciar Campanhas e Lances, verificar Páginas de Destino, acompanhar Status dos Produtos no Google Shopping; Utilização das ferramentas Dashgoo e do Google Sheets para criação de relatórios; Criação e Gerenciamento de campanhas na plataforma RD Station utilizando Landing Pages e E-mail Marketing; Tagueamento  utilizando o GTM para Ecommerce e para acompanhamento de conversões de mídias como Criteo, Facebook, Google, Bing; Análise dos sites dos clientes e dos inventários de produtos para fundamentação do processo de criação de campanhas utilizando também de técnicas de Web Scraping e Bots; Criação de campanhas, grupos de anúncios, segmentações, anúncios em massa utilizando o Google Ads Editor e Planilhas; Campanhas de anúncios no B2W Marketplace utilizando o B2WAds;  Campanhas de Programática utilizando Criteo; Utilização de Regras de Upload de feed e de rótulos customizados utilizando o Google Merchant Center, para correção de informações dos Produtos e melhor organização de campanhas de Shopping; Criação de campanhas de Shopping, Remarketing, Anúncios Dinâmicos, Pesquisa, Display, Branding; Utilização do Google Analytics para cruzamento de dados e criação de Públicos para campanhas; Utilização das ferramentas da Adobe para edição de Banners; Gerenciamento dos pontos físicos utilizando o Google Meu Negócio.`
        },*/
        {
          titulo:'Estágio como Analista de SEO',
          empresa:'FH Consultoria',
          local: 'Curitiba, PR',
          timeline: 'Mar 2018 &mdash; Set 2018',
          descricao: `Acompanhamento das páginas do ecommerce da Hering, análise de informações como: URL, Breadcrumbs, Canonical Tag, Heading Tags, Meta Tags, Status Http, Sitelinks e outras informações; Utilização do plugin SEO Tools para Excel, das ferramentas SEM Rush e Screaming Frog; Criação de Titles e Metadescriptions relevantes para cada página; Alterações via planilhas e consultas flexible search ao BD; Alterações em ferramenta CMS da SAP; Criação de mais de 20 tarefas de correções e melhorias para o Ecommerce; Alterações do Sitemap e do Robots.txt; Estudo da implementação dos Rich snippets, e estudos de SEO; Criação de relatórios utilizando o Google Data Studio, e dados cruzados entre o Google Analytics e dados das vendas do Ecommerce; Estudos e treinamentos da ferramenta Hybris Marketing Cloud, Hybris Commerce Cloud e Java Web; Testes utilizando Selenium pelo navegador e via código C# ao Ecommerce da Etna, Estudos de Web Scraping utilizando C#.`
        },
        /*{
          titulo:'Analista de Mídia Online',
          empresa:'Agência Green Digital',
          local: 'Curitiba, PR',
          timeline: 'Abr 2017 &mdash; Ago 2017',
          descricao: `Estudos de diversos clientes, seus respectivos produtos e concorrentes dos mais variados ramos de atuação; Confecção de Planos de Mídia; Geração e controle de APs e PIs; Escolha de palavras chaves; Escrita de anúncios; Análise de Shopping Basket aplicado a combinação de palavras utilizando SQL; Compra de Mídia Programática como Publya, Fitmedia, Criteo; Solicitação do Mídia Kit e compra de espaços em portais; Tags de Remarketing; Criação e acompanhamento de anúncios no Linkedin, Bing, Yahoo, Google, Facebook, Instagram e outros; Relatórios de controle diário para acompanhamento de mídia e relatórios de resultados; Reuniões com Facebook e outros veículos, participação de eventos da área.`
        },*/
        {
          titulo:'Estágio como Desenvolvedor de Business Intelligence',
          empresa:'Agência Chleba',
          local: 'Curitiba, PR',
          timeline: 'Ago 2016 &mdash; Abr 2017',
          descricao: `Trabalho com a Plataforma de E-commerce Analytics da empresa chamado Add Intelligence com clientes como Electrolux, LFG, China in Box, entre outros; Criação e manutenção de cubos de dados utilizando as ferramentas Analysis Services(SSAS) e Integration Services(SSIS); Processos de ETL; Extração de dados via XML de fontes externas usando C# e VB; Automatização de relatórios utilizando Scripts, Excel e cubos de dados; Manutenção de Data Warehouses no SQL Server de diversos clientes; Validação e extração de dados de ferramentas de anúncios; Atividades de Programação C#, VB e ASP.NET; Manutenção de Relatórios do Tableau; Coleta de dados da API do Google Adwords e API do Bing.`
        },
        /*{
          titulo:'Estágio como Desenvolvedor Web C#/ Testes',
          empresa:'Bornlogic',
          local: 'Curitiba, PR',
          timeline: 'Fev 2015 &mdash; Out 2015',
          descricao: `Trabalho com a Plataforma de Facebook Marketing da empresa chamado Bornlogic Ads; Participação de Treinamento de Facebook Marketing; Manutenção de Aplicação Web ASP.NET e gráficos Highcharts; Criação de Vitrine utilizando ASP.NET e tagueamento utilizando Google Analytics e GTM; Metodologia Scrum; Testes e Investigação de Erros; Leitura de métricas/KPI’s; Realização de Treinamento para equipe com foco em Google Analytics.`
        },        
        {
          titulo:'Estágio como Desenvolvedor Web Java',
          empresa:'Global Village Telecom - GVT',
          local: 'Curitiba, PR',
          timeline: 'Abr 2014 &mdash; Dez 2014',
          descricao: `Participação de Treinamentos de Telecom; Manutenção de Aplicação Web de Gestão de Projetos da área; Atividades de Programação de Banco de Dados PL/SQL e Linguagens Java Web; Automatizações de relatórios utilizando Excel e VBA; Participação de Treinamentos Plano de Desenvolvimento Individual, Gestão do Tempo e da Rotina.`
        },*/
		    {
          titulo:'Estágio como Analista de Business Intelligence',
          empresa:'i-Cherry',
          local: 'Curitiba, PR',
          timeline: 'Jul 2013 &mdash; Abr 2014',
          descricao: `Participação de Treinamentos  e estudo da área de Marketing Digital; Testes e Investigação de Erros; Validação de Dados; Confecção de Apresentações Gerenciais para cliente Live TIM; Automatizações de relatórios utilizando Excel e VBA; Coleta de dados utilizando API do Google Analytics; Leitura de KPI’s no Google Analytics e Adwords; Análise de dados Mobile; Análise de Plano de Mídia.`
        }
        /*{
          titulo:'Estágio como Desenvolvedor de Software Java',
          empresa:'CINQ Technologies',
          local: 'Curitiba, PR',
          timeline: 'Mai 2012 &mdash; Abr 2013',
          descricao: 'Outsourcing TI para empresa SITA que tem foco na Indústria da Aviação; Manutenção de Software em Java; Leitura de Documentação em Inglês para Compreensão das Regras de Negócio e Funcionalidades do Software; Testes e Investigação de Erros; Confecção de Checklists; Atividades de Programação utiizando linguagem Java, Java Script, e Objective-C; Desenvolvimento de aplicativos em um projeto para GVT; Desenvolvimento de aplicações mobile para iOS e Android.'
        },*/
      ]
    }
  },
  template: `
<div>
      <h3>Experiência</h3>
      <article class="item" v-for="e in empregos">
          <div class="flex">
            <div class="align-left">
              <h4 v-html="e.titulo"></h4>
              <h5 v-html="e.empresa"></h5>
            </div>

            <div class="align-right"> 
              <small v-html="e.timeline"></small>
              <address v-html="e.local"></address>
            </div>
          </div>
          <p>
            {{e.descricao}}
          </p>
        </article>
</div>
`
});
Vue.component('Cursos', {
  data () {
    return {
      cursos: [
        {
          title: 'Curso de Search Engine Optimization',
          company:'Aldeia Coworking',
          location: 'Curitiba, PR',
          timeline: '2016',
          description: ``
        },
      ]
    }
  },
  template: `
<div>
      <h3>Cursos</h3>
      <article class="item" v-for="c in cursos">
          <div class="flex">
            <div class="align-left">
              <h4 v-html="c.title"></h4>
              <h5 v-html="c.company"></h5>
            </div>

            <div class="align-right"> 
              <small v-html="c.timeline"></small>
              <address v-html="c.location"></address>
            </div>
          </div>
          <p>
            {{c.description}}
          </p>
        </article>
</div>
`
});

Vue.config.productionTip = false;

/*var example = new Vue({
   el: '#curriculum',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})*/

new Vue({
  el: '#curriculo',
  methods: {
 download() {
  const doc = new jsPDF();
  const contentHtml = this.$refs.content.innerHTML;
  doc.fromHTML(contentHtml, 15, 15, {
    width: 170
  });
  doc.save("sample.pdf");
 },

 downloadWithCSS() {
   /*const doc = new jsPDF();
   /** WITH CSS */
   
   /*var canvas = document.body;
   var img = canvas.toDataURL("image/png");	
   doc.addImage(img,'JPEG',-89,-70);
   doc.save("sample.pdf");
   var canvasElement = document.createElement('canvas');
   html2canvas(document.body, {
		taintTest: true,
	  	onrendered: function(canvas) {
			canvasElement.src = canvas.toDataURL();
			const img = canvas.toDataURL("image/jpeg", 1);
			doc.addImage(img,'JPEG',-89,-70);
			doc.save("sample.pdf");
	  	}			
	});*/
	
	/*var canvasElement = document.getElementById("#curriculum");
    var MIME_TYPE = "image/png";
    var imgURL = canvasElement.toDataURL(MIME_TYPE);
    var dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);*/
	
	 /*var printContents = document.getElementById("curriculum").innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;*/
	 
	var w = window.open("https://heitorserathiuk.github.io/curriculum/","_self");
    window.focus();
	window.print();
 },

}
})