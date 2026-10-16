/* Conteúdo editorial. Os IDs preservam o assunto ao alternar entre os modos. */
window.ELINAD_CONTENT = {
  title: 'Grupo Elinad',
  subtitle: 'Plano de negócios',
  location: 'Juiz de Fora, Minas Gerais',
  year: '2026',
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdTooJhAuPJuKlvicovLKzXxrZf17RqXYRF4OUKRtPhMOQURA/viewform',
  products: [
    { id:'chicha', name:'Chicha UAI', category:'Bebida', image:'assets/chicha.webp', alt:'Imagem conceitual da Chicha UAI, com embalagem e bebida cremosa com canela.', description:'Bebida cremosa, não alcoólica, à base de cereais e canela.', supply:'Bebida embalada', use:'Revenda ou serviço para consumo individual.', detail:'Será nosso produto principal. Pretendemos oferecê-la para lanches, café da manhã e outros momentos da rotina. O tamanho da embalagem, a composição final e a conservação serão definidos após os testes de desenvolvimento.', pending:'Composição final, embalagem e conservação: a definir.' },
    { id:'sobremesa', name:'Sobremesa Gelada em Camadas', category:'Sobremesa', image:'assets/sobremesa.webp', alt:'Imagem conceitual de sobremesa de chocolate em camadas, em embalagem individual.', description:'Sobremesa gelada em camadas, inicialmente no sabor chocolate.', supply:'Porções embaladas ou formato para serviço', use:'Revenda e oferta de sobremesa no atendimento.', detail:'Pretendemos fornecê-la em porções individuais ou em formatos adequados aos estabelecimentos parceiros. Sua apresentação deverá permitir que o consumidor visualize e compreenda a proposta de camadas.', pending:'Porção, embalagem e conservação: a definir.' },
    { id:'espiral', name:'Espiral de Rapadura e Queijo', category:'Congelado', image:'assets/espiral.webp', alt:'Imagem conceitual de massa em formato espiral, com rapadura e queijo.', description:'Produto de massa em formato espiral que combina rapadura e queijo.', supply:'Produto congelado', use:'Armazenamento e finalização para venda como lanche.', detail:'Pretendemos oferecê-lo a padarias, cafeterias e outros pontos que comercializam alimentos preparados. A combinação dos ingredientes orientará a apresentação como opção de lanche com contraste de sabores.', pending:'Porção, conservação e instruções de preparo: a definir.' },
    { id:'argolinha', name:'Argolinha de Banana Milho e Queijo', category:'Congelado', image:'assets/argolinha.webp', alt:'Imagem conceitual de argolinhas elaboradas com banana, milho e queijo.', description:'Alimento em formato de argolinha, elaborado com banana, milho e queijo.', supply:'Produto congelado', use:'Preparo e venda em unidades ou porções.', detail:'Será fornecido para preparo pelo estabelecimento parceiro. Poderá integrar o cardápio de lanches ou ser apresentado em porções, conforme os testes de receita. Definiremos os métodos adequados de finalização antes da comercialização.', pending:'Receita final, porção e métodos de preparo: a definir.' },
    { id:'palitos', name:'Palitos de Queijo', category:'Congelado', image:'assets/palitos.webp', alt:'Imagem conceitual de palitos de massa recheada com queijo, com embalagem do Grupo Elinad.', description:'Massa recheada com queijo, apresentada em formato de palito.', supply:'Produto congelado', use:'Preparo e serviço como lanche ou petisco.', detail:'Pretendemos oferecê-lo em unidades ou porções, ampliando as possibilidades de atendimento de lanchonetes, cafeterias, padarias e restaurantes.', pending:'Porção, conservação e instruções de preparo: a definir.' }
  ],
  slides: [
    {
      id:'abertura', label:'Abertura', chapter:'Plano de negócios', layout:'cover',
      title:'Grupo Elinad', lead:'Pequena indústria de transformação de alimentos',
      summary:'Nosso projeto em Juiz de Fora, com a Chicha UAI como produto principal e fornecimento para estabelecimentos parceiros.',
      details:`<h3>Visão geral do projeto</h3><p>Nosso projeto consiste na criação do Grupo Elinad, uma pequena indústria de transformação de alimentos em Juiz de Fora, Minas Gerais. Pretendemos produzir, embalar e fornecer alimentos e bebidas a estabelecimentos que revenderão os produtos ou os servirão ao consumidor final.</p><p>O plano reúne definição do negócio e diferencial, portfólio, público-alvo, concorrência e instrumentos de pesquisa. As definições de público e de prioridade competitiva são hipóteses de trabalho que avaliaremos na pesquisa e nos testes com parceiros.</p><p>O portfólio planejado reúne cinco produtos. A ordem de lançamento, os volumes e as condições comerciais serão definidos conforme a capacidade operacional e os resultados das próximas etapas.</p>`
    },
    {
      id:'negocio', label:'Negócio e modelo B2B', chapter:'01 / Definição do negócio', layout:'business',
      title:'Nosso modelo de negócio', lead:'Produziremos. Embalaremos. Forneceremos.',
      summary:'Nosso cliente direto será o estabelecimento. O consumidor final conhecerá os produtos por meio desses parceiros.',
      details:`<h3>Produção e distribuição</h3><p>Produziremos alimentos e bebidas em pequenos lotes, com receitas padronizadas e embalagens adequadas à comercialização. Pretendemos concentrar a distribuição inicial em Juiz de Fora, organizar as entregas e acompanhar a aceitação antes de ampliar a área de atendimento.</p><p>Nosso modelo será predominantemente de empresa para empresa, conhecido como B2B. Supermercados, minimercados, padarias, cafeterias, lanchonetes e restaurantes poderão revender os produtos embalados ou finalizar os congelados para atendimento ao consumidor.</p><h3>Referências do modelo</h3><p>Usamos a Nestlé e a Leve Sabor do Trigo como referências didáticas para pensar a lógica de fabricação e distribuição de alimentos. Adaptaremos essa referência à escala de uma pequena indústria, com investimentos, estrutura e alcance compatíveis com a implantação do nosso negócio.</p><h3>Critérios de início da operação</h3><p>Pretendemos iniciar com lotes compatíveis com a demanda dos primeiros parceiros e ampliar a produção conforme a recompra. Os pedidos deverão considerar custo de entrega, armazenamento e giro. Os prazos de fornecimento serão definidos segundo nossa capacidade e a demanda observada.</p>`
    },
    {
      id:'diferenciais', label:'Diferenciais propostos', chapter:'02 / Proposta de valor', layout:'difference',
      title:'Nossos diferenciais propostos', lead:'Identidade do produto e proximidade com o parceiro',
      summary:'Pretendemos combinar a Chicha UAI com produtos complementares, receitas padronizadas e reposição local organizada.',
      points:[['Identidade própria','Chicha UAI à base de cereais e canela.'],['Variedade complementar','Bebida, sobremesa e três alimentos congelados.'],['Padronização','Receitas e porções com características regulares.'],['Fornecimento local','Reposição de acordo com a demanda e a capacidade.']],
      details:`<h3>Uma proposta a validar</h3><p>Nosso principal diferencial será a combinação da Chicha UAI com produtos complementares de ingredientes e formatos variados. O nome UAI compõe a identidade da marca no mercado mineiro, e a produção local permitirá contato próximo com os compradores.</p><p>Nosso portfólio reunirá rapadura, queijo, banana, milho, cereais e chocolate em diferentes apresentações. Pretendemos oferecer alternativas para lanches, sobremesas e consumo compartilhado, com descrições claras que ajudem o público a compreender os produtos.</p><p>A diferenciação dependerá da aceitação de sabor, textura, apresentação e preço. Avaliaremos esses aspectos na pesquisa e nos testes. O fornecimento local também dependerá de prazos viáveis, condições de conservação e acompanhamento das vendas.</p>`
    },
    {
      id:'portfolio', label:'Portfólio de cinco produtos', chapter:'03 / Portfólio', layout:'portfolio',
      title:'Nosso portfólio inicial', lead:'Cinco produtos planejados',
      summary:'Uma bebida, uma sobremesa gelada e três alimentos congelados. Selecione um produto para conhecer a proposta.',
      details:`<h3>Variedade e capacidade de produção</h3><p>Os cinco produtos compõem o portfólio planejado. A ordem de lançamento e os volumes de produção serão definidos conforme equipamentos, fornecedores, embalagem, conservação, tempo de produção e resultados da pesquisa.</p><p>Pretendemos oferecer ao estabelecimento a possibilidade de testar os produtos de maior aderência ao seu público, acompanhar o giro e ajustar os pedidos seguintes. O fornecimento conjunto respeitará as condições de transporte e conservação de cada categoria.</p><h3>Apresentação ao mercado</h3><p>Manteremos os nomes em português nos materiais comerciais e na pesquisa. A Chicha UAI conservará seu nome de marca, acompanhado da descrição “bebida cremosa à base de cereais e canela”. Avaliaremos preferências por porção individual ou compartilhada, armazenamento, forma de servir e clareza das informações antes de definir as embalagens finais.</p>`
    },
    {
      id:'chicha-uai', label:'Chicha UAI', chapter:'04 / Produto principal', layout:'chicha',
      title:'Chicha UAI', lead:'Bebida cremosa de cereais e canela',
      summary:'Será o produto de destaque do Grupo Elinad. Pretendemos oferecê-la como bebida não alcoólica para lanches e outros momentos da rotina.',
      details:`<h3>Desenvolvimento do produto principal</h3><p>A Chicha UAI será uma bebida cremosa, não alcoólica, elaborada à base de cereais e canela. Poderá ser comercializada em embalagem individual. Definiremos o tamanho da embalagem, a composição final e a conservação após os testes de desenvolvimento.</p><p>A formulação, a vida útil e as instruções de uso serão definidas tecnicamente. Nossa comunicação comercial utilizará características comprovadas. Informações nutricionais e alegações específicas dependerão da composição final e de sua validação.</p><p>As imagens desta apresentação são conceituais. Elas apresentam uma possibilidade visual para o projeto. A embalagem comercial, a porção e as especificações do produto estão a definir.</p>`
    },
    {
      id:'publico-b2b', label:'Clientes empresariais', chapter:'05 / Público-alvo', layout:'audience-business',
      title:'Os estabelecimentos parceiros', lead:'Nosso público empresarial em Juiz de Fora',
      summary:'Pretendemos prospectar inicialmente padarias, cafeterias e lanchonetes. A expansão para outros canais dependerá dos primeiros fornecimentos.',
      channels:[['Padarias e cafeterias','Bebida, sobremesa, espiral e palitos.','Qualidade, facilidade de servir e integração ao cardápio.'],['Lanchonetes e restaurantes','Bebida, sobremesa, argolinhas e palitos.','Preparo, rendimento, conservação e demanda.'],['Minimercados e supermercados','Bebida e sobremesa embaladas. Congelados conforme estrutura.','Giro, apresentação, validade e regularidade de entrega.']],
      details:`<h3>Critérios para selecionar parceiros</h3><p>Nosso foco inicial será formado por estabelecimentos que comercializem bebidas, sobremesas ou lanches e tenham armazenamento e preparo compatíveis com os itens adquiridos. Consideraremos localização e viabilidade das entregas, perfil do consumidor, integração ao cardápio, espaço disponível e possibilidade de reposição.</p><p>A avaliação também incluirá refrigeração, congelamento e equipamentos de preparo conforme o produto, preço aceito pelo comprador, margem pretendida, frequência de reposição e interesse em testar novidades e acompanhar a recompra.</p><h3>Outros canais previstos</h3><p>Cantinas e pontos de conveniência poderão receber bebidas e lanches em porções adequadas ao atendimento. Nesses canais, avaliaremos praticidade, espaço de armazenamento e consumo individual.</p><p>A aderência dos produtos a cada segmento é uma proposta preliminar. A pesquisa com quem decide as compras orientará a seleção dos primeiros parceiros.</p>`
    },
    {
      id:'consumidor', label:'Consumidor final', chapter:'06 / Público-alvo', layout:'audience-consumer',
      title:'Quem poderá consumir nossos produtos', lead:'Rotina, hábitos e preferências orientam a segmentação',
      summary:'Nossa hipótese inicial considera adultos que residem, trabalham ou estudam em Juiz de Fora e frequentam os canais previstos.',
      criteria:[['Localização','Onde mora, circula e compra.'],['Hábitos','Categorias consumidas e frequência.'],['Ocasião','Café da manhã, lanche, sobremesa e lazer.'],['Poder de compra','Renda opcional e gasto habitual.'],['Preferências','Sabor, textura, porção e apresentação.'],['Escolha','Preço, praticidade, ingredientes e disponibilidade.']],
      details:`<h3>Critérios em conjunto</h3><p>Nosso público potencial inclui pessoas que compram bebidas cremosas, sobremesas e lanches para a rotina, o trabalho, os estudos ou o lazer. Analisaremos idade, hábitos, localização e capacidade de compra em conjunto, alcançando consumidores com diferentes rotinas.</p><p>A pesquisa deverá conhecer também ingredientes evitados e informações necessárias à decisão. A participação será voluntária, e os resultados representarão o grupo pesquisado.</p><h3>Produtos e ocasiões a investigar</h3><div class="table-scroll"><table><thead><tr><th>Produto</th><th>Público e ocasião a investigar</th></tr></thead><tbody><tr><td>Chicha UAI</td><td>Consumidores de bebidas cremosas e vitaminas, café da manhã e lanches.</td></tr><tr><td>Sobremesa Gelada em Camadas</td><td>Sobremesas individuais após refeições e em lanches.</td></tr><tr><td>Espiral de Rapadura e Queijo</td><td>Lanches doces com queijo em padarias e cafeterias.</td></tr><tr><td>Argolinha de Banana Milho e Queijo</td><td>Lanches e porções, com abertura a combinações de ingredientes.</td></tr><tr><td>Palitos de Queijo</td><td>Salgados e petiscos com queijo, para lanche e consumo compartilhado.</td></tr></tbody></table></div>`
    },
    {
      id:'concorrencia-chicha', label:'Concorrência da Chicha UAI', chapter:'07 / Concorrência', layout:'competition',
      title:'Alternativas à Chicha UAI', lead:'Compararemos o produto e a ocasião de consumo',
      summary:'O mapeamento é preliminar. Preços, presença em Juiz de Fora e condições de fornecimento: a definir.',
      details:`<h3>Critérios da análise</h3><p>Consideramos diretos os produtos semelhantes na apresentação ou no uso, vendidos pelos mesmos canais. Os indiretos oferecem alternativas diferentes para a mesma ocasião de consumo ou orçamento de compra. As marcas são indicações do plano para orientar o levantamento.</p><h3>Alternativas mais próximas</h3><p>Bebidas cremosas prontas, bebidas com cereais, vitaminas embaladas e bebidas lácteas de consumo individual serão comparadas por textura, sabor, volume, preço por porção e praticidade. O plano cita a bebida com cereais da Piracanjuba e indica Porto Silvestre, Coalhadas, Cotochés, Ibituruna e Trevinho para confirmação de produtos e pontos de venda.</p><p>YoPRO, Natural Whey, Piracanjuba ProForce e Itambé Pro são referências de conveniência com propostas específicas. Compararemos apresentação, porção e ingredientes valorizados pelo público. A composição nutricional da Chicha UAI está a definir.</p><h3>Alternativas indiretas</h3><p>O levantamento também poderá incluir sucos, vitaminas, açaí e preparos no ponto de venda, suplementos em pó de Growth Supplements e Max Titanium, Ultracoffee e AievA Oatmeal. Red Bull, Monster, Baly e Baly Muscle Protein foram indicados para situações específicas de escolha de bebida. O plano cita Açaí do Fábio e Mundo Verde para o mapeamento local.</p><h3>Prioridade preliminar de observação</h3><p>A classificação de A a E considera semelhança do produto, ocasião e canal. Ela será ajustada após o levantamento e a pesquisa por produto.</p><div class="table-scroll"><table><thead><tr><th>Classe</th><th>Alternativas indicadas</th><th>Critério</th></tr></thead><tbody><tr><td>A</td><td>Bebidas cremosas e com cereais prontas, sobremesas e congelados semelhantes.</td><td>Maior proximidade de apresentação e uso.</td></tr><tr><td>B</td><td>YoPRO, Natural Whey, ProForce, Itambé Pro e alimentos semelhantes com proposta específica.</td><td>Mesmos canais, com diferenças de composição ou posicionamento.</td></tr><tr><td>C</td><td>Sucos, vitaminas, açaí, lanches, sobremesas no ponto de venda e produção própria do parceiro.</td><td>Mesma ocasião e orçamento, com oferta distinta.</td></tr><tr><td>D</td><td>AievA Oatmeal, whey em pó e Ultracoffee.</td><td>Substituição condicionada ao preparo e aos hábitos.</td></tr><tr><td>E</td><td>Energéticos tradicionais e proteicos, como Baly Muscle Protein.</td><td>Proposta mais distante e situações específicas.</td></tr></tbody></table></div>`
    },
    {
      id:'concorrencia-portfolio', label:'Concorrência do portfólio', chapter:'08 / Concorrência', layout:'comparison',
      title:'Concorrência dos demais produtos', lead:'A análise será feita para cada item do portfólio',
      summary:'Disputaremos a escolha do consumidor e o espaço dos fornecedores já utilizados pelo estabelecimento.',
      competitionRows:[['Sobremesa Gelada em Camadas','Pavês, mousses e sobremesas geladas em potes.','Sorvetes, açaí, bolos e chocolates.'],['Espiral de Rapadura e Queijo','Pães e massas doces com queijo ou recheio semelhante.','Pão de queijo, bolos e biscoitos.'],['Argolinha de Banana Milho e Queijo','Porções, bolinhos e preparos com ingredientes semelhantes.','Salgados, pão de queijo e outros petiscos.'],['Palitos de Queijo','Palitos, massas recheadas e congelados equivalentes.','Coxinhas, pastéis e outros salgados.']],
      details:`<h3>A compra do estabelecimento</h3><p>Os fornecedores de bebidas, sobremesas e congelados já utilizados pelo parceiro disputarão espaço com o Grupo Elinad. A decisão poderá considerar margem de revenda, rendimento, pedido mínimo, frequência de entrega, prazo de pagamento, conservação e facilidade de preparo.</p><p>A produção própria do estabelecimento também poderá substituir nosso fornecimento. Uma padaria que prepara sua sobremesa ou seu salgado comparará preço de compra com custo, tempo e resultado da produção interna.</p><h3>Levantamento local previsto</h3><p>Bahamas, Bretas e Pais e Filhos foram indicados pelo grupo como possíveis locais de observação. O levantamento também deverá incluir minimercados, padarias, cafeterias e lanchonetes de diferentes regiões.</p><p>Registraremos ponto de venda, data, marca, categoria, volume ou peso, preço e conservação. Compararemos embalagens diferentes por 100 ml ou 100 g e manteremos o preço da porção. A disponibilidade, os preços e as condições comerciais ainda estão a definir no levantamento.</p>`
    },
    {
      id:'pesquisa-consumidores', label:'Pesquisa com consumidores', chapter:'09 / Pesquisa de mercado', layout:'research',
      title:'Pesquisa com consumidores', lead:'Hábitos, interesse e fatores de compra',
      summary:'Pretendemos conhecer a opinião sobre os cinco produtos e usar as respostas para ajustar nossa proposta.',
      details:`<h3>Instrumento do consumidor</h3><p>A participação será totalmente anônima e voluntária, com duração estimada de 5 minutos. O formulário apresenta os produtos em desenvolvimento e reúne perfil, hábitos, fatores de escolha, interesse, perguntas sobre preço e locais de venda.</p><p>A pesquisa observará interesse por cada produto, preferência inicial, intenção de frequência de compra e formato de consumo. As perguntas de preço serão interpretadas de acordo com a porção e a referência apresentadas no instrumento.</p><h3>Aplicação e interpretação</h3><p>Pretendemos alcançar adultos que residem, trabalham ou estudam em Juiz de Fora, de diferentes regiões e hábitos, incluindo pessoas além do círculo de amigos do grupo. Manteremos as mesmas descrições e imagens para os participantes.</p><p>A intenção declarada de compra é uma percepção inicial. Registraremos separadamente avaliações sem degustação e após degustação. Analisaremos interesse em experimentar e intenção de comprar com frequência como medidas distintas.</p><p>Número de respostas, resultados consolidados e preferências identificadas: <strong>a definir</strong>.</p><p><a class="text-link" href="https://docs.google.com/forms/d/e/1FAIpQLSdTooJhAuPJuKlvicovLKzXxrZf17RqXYRF4OUKRtPhMOQURA/viewform" target="_blank" rel="noopener noreferrer">Abrir o formulário informado no projeto <span aria-hidden="true">↗</span></a></p><p class="small-note">O Google Forms precisa de internet. Esta apresentação não sincroniza nem exibe respostas. O conteúdo atual do formulário deve ser conferido antes de uma nova aplicação.</p>`
    },
    {
      id:'pesquisa-estabelecimentos', label:'Pesquisa com estabelecimentos', chapter:'10 / Pesquisa de mercado', layout:'research-business',
      title:'Pesquisa com estabelecimentos', lead:'Aceitação do portfólio e condições de fornecimento',
      summary:'Ouviremos quem decide ou participa das compras para compreender as condições necessárias a um teste.',
      details:`<h3>Roteiro empresarial</h3><p>O instrumento reúne tipo e localização do estabelecimento, participação na decisão de compra, categorias vendidas e origem dos produtos, fornecedores atuais, interesse pelos cinco itens e estrutura de armazenamento e preparo.</p><p>Também investigaremos os fatores de escolha do fornecedor, volume inicial e frequência de entrega, informações necessárias para avaliar uma compra e interesse em degustação ou teste de venda. O contato comercial será opcional, caso o estabelecimento deseje retorno.</p><h3>Condições a investigar</h3><p>Preço de compra, margem pretendida, rendimento por porção, prazo de pagamento, pedido mínimo, regularidade, validade e facilidade de preparo orientarão a avaliação. Aceitaremos que estimativas de volume e condições dependam do preço, da apresentação final e da degustação.</p><p>A pesquisa não representa pedido nem compromisso de compra. Analisaremos suas respostas separadamente das opiniões dos consumidores finais.</p><p>Estabelecimentos pesquisados, volumes, condições comerciais e resultados consolidados: <strong>a definir</strong>.</p>`
    },
    {
      id:'proximas-etapas', label:'Próximas etapas', chapter:'11 / Continuidade', layout:'roadmap',
      title:'Próximas etapas do projeto', lead:'Pesquisa, desenvolvimento e viabilidade',
      summary:'Confrontaremos nossas hipóteses com o mercado antes de definir a implantação.',
      steps:[['Revisar e testar','Formulários claros e adequados aos dois públicos.'],['Pesquisar e observar','Hábitos, interesse, preços e oferta local.'],['Consolidar respostas','Preferências e canais prioritários.'],['Desenvolver produtos','Receitas, porções, conservação e preparo.'],['Degustar e testar','Aceitação e comportamento de compra.'],['Estudar a viabilidade','Equipamentos, capacidade, investimento e custos.'],['Definir a implantação','Ordem de lançamento, parceiros, lotes e entregas.']],
      details:`<h3>Como utilizaremos as evidências</h3><p>Combinaremos respostas dos consumidores, condições informadas pelos estabelecimentos e observação dos concorrentes. Para o consumidor, compararemos interesse pelos produtos, hábitos e critérios de escolha. Para os estabelecimentos, verificaremos adequação do portfólio, armazenamento e condições para testar o fornecimento.</p><p>A renda e a faixa etária serão analisadas junto com hábitos e gasto. Como a participação será voluntária, os resultados representarão o grupo pesquisado. A decisão de lançamento também dependerá de testes de produto e da viabilidade de preço e produção.</p><h3>Decisões para implantação</h3><p>O estudo operacional e financeiro deverá definir equipamentos, capacidade, investimento, custos, preço, margem e necessidade de recursos. A implantação dependerá da ordem de lançamento, dos primeiros parceiros e do planejamento de produção e entregas.</p>`
    },
    {
      id:'definicoes-pendentes', label:'Definições pendentes e fontes', chapter:'12 / Situação do plano', layout:'pending',
      title:'O que ainda precisamos definir', lead:'As próximas evidências orientarão as decisões',
      summary:'Nosso projeto já tem modelo de atuação e portfólio planejados. Pesquisa, testes e estudo financeiro orientarão a implantação.',
      pendingGroups:[['Pesquisa e mercado','Resultados, preferências, oferta e preços locais.'],['Produto e embalagem','Receita final, porção, conservação, validade e preparo.'],['Operação e finanças','Capacidade, custos, investimento, preços e margens.'],['Implantação','Ordem de lançamento, parceiros, lotes e entregas.']],
      details:`<h3>Materiais utilizados</h3><ul class="source-list"><li><strong>Grupo_Elinad_Plano_de_Negocios_Final.docx</strong> — plano consolidado, versão disponível atualizada em 29 de setembro de 2026. Base do conteúdo e dos cinco produtos.</li><li><strong>Apresentacao_Grupo_Elinad_Final.pptx</strong> — referência visual atualizada em 15 de setembro de 2026. Utilizada para cores e identidade visual.</li><li><strong>Imagens dos cinco produtos do Grupo Elinad</strong> — material conceitual do projeto de 2 de outubro de 2026.</li><li><strong>Ajustes da pesquisa de consumidores</strong> — orientações do projeto de 1 e 2 de outubro de 2026: participação anônima e voluntária e duração estimada de 5 minutos.</li></ul><h3>Referências de apoio indicadas no plano</h3><p>O levantamento preliminar de concorrentes do documento utiliza páginas oficiais como apoio. Os links abaixo precisam de internet. O mapeamento local permanece pendente.</p><ul class="source-links"><li><a href="https://www.piracanjuba.com.br/produtos/bebida-lactea-achocolatado/bebida-com-cereais" target="_blank" rel="noopener noreferrer">Piracanjuba — Bebida com Cereais</a></li><li><a href="https://www.yopro.com.br/produtos/" target="_blank" rel="noopener noreferrer">Danone — YoPRO</a></li><li><a href="https://www.verdecampo.com.br/bra/pt" target="_blank" rel="noopener noreferrer">Verde Campo</a></li><li><a href="https://www.piracanjuba.com.br/produtos/piracanjuba-proforce" target="_blank" rel="noopener noreferrer">Piracanjuba — ProForce</a></li><li><a href="https://www.itambe.com.br/marca/pro" target="_blank" rel="noopener noreferrer">Itambé — Pro</a></li><li><a href="https://aievaoatmeal.com.br/" target="_blank" rel="noopener noreferrer">AievA Oatmeal</a></li><li><a href="https://www.mercafe.com.br/cafes/ultracoffee" target="_blank" rel="noopener noreferrer">Três Corações — Ultracoffee</a></li><li><a href="https://balybrasil.com.br/marcas/baly-energy-drink" target="_blank" rel="noopener noreferrer">Baly Brasil</a></li></ul><h3>Uso da apresentação</h3><p>O arquivo HTML reúne localmente conteúdo, imagens, estilos e navegação. A leitura e a apresentação funcionam sem internet. O site hospedado, o formulário do Google Forms e os links externos precisam de conexão.</p>`
    }
  ]
};

/* Etapas reais do plano. O catálogo anterior permanece integral e com IDs estáveis. */
window.ELINAD_CONTENT.stages = [
  { id:'negocio-diferencial', title:'Definição do negócio e diferencial', slides:['abertura','negocio','diferenciais'] },
  { id:'portfolio', title:'Portfólio', slides:['portfolio','chicha-uai'] },
  { id:'publico-alvo', title:'Público-alvo', slides:['publico-b2b','consumidor'] },
  { id:'concorrencia', title:'Concorrência', slides:['concorrencia-chicha','concorrencia-portfolio'] },
  { id:'pesquisa-mercado', title:'Pesquisa de mercado', slides:['pesquisa-consumidores','pesquisa-estabelecimentos'] },
  { id:'continuidade', title:'Continuidade do projeto', slides:['proximas-etapas','definicoes-pendentes'] },
  { id:'diretrizes-estrategicas', title:'Diretrizes Estratégicas', slides:['diretrizes-capa','diretrizes-quem-somos','diretrizes-produtos','diretrizes-essencia','diretrizes-diferencial','diretrizes-objetivos','diretrizes-trajetoria','diretrizes-encerramento'] }
];

window.ELINAD_CONTENT.slides.push(
  {
    id:'diretrizes-capa', label:'Diretrizes: Capa', menuLabel:'Capa', chapter:'Grupo Elinad', layout:'strategy-cover', strategy:true,
    title:'Diretrizes Estratégicas', tagline:'Sabores que aproximam culturas.', details:''
  },
  {
    id:'diretrizes-quem-somos', label:'Diretrizes: Quem somos', menuLabel:'Quem somos', chapter:'Quem somos', layout:'strategy-about', strategy:true,
    title:'Sabores que não conhecem fronteiras',
    paragraphs:[
      'Acreditamos que os sabores não conhecem fronteiras. No Grupo Elinad, buscamos conectar diferentes culturas por meio da alimentação, trazendo novas experiências para o dia a dia dos brasileiros.',
      'Não queremos substituir os produtos tradicionais, mas ampliar as possibilidades de escolha, mostrando que diferentes sabores, histórias e tradições podem compartilhar o mesmo espaço à mesa.'
    ],
    quote:'Aproximar culturas, descobrir sabores e criar novas experiências.', details:''
  },
  {
    id:'diretrizes-produtos', label:'Diretrizes: Produtos e experiências', menuLabel:'Produtos e experiências', chapter:'Produtos e experiências', layout:'strategy-products', strategy:true,
    title:'Há espaço para todos os sabores',
    paragraphs:[
      'Acreditamos que a diversidade torna a alimentação mais interessante. Cada produto carrega características, histórias e experiências que podem despertar diferentes preferências.',
      'Queremos desenvolver produtos que combinem novas descobertas com a familiaridade do cotidiano brasileiro.'
    ],
    productText:'A Chicha UAI será o produto principal do Grupo Elinad e o primeiro passo dessa proposta intercultural.',
    quote:'Descobrir algo novo não significa deixar de valorizar aquilo que já amamos.', details:''
  },
  {
    id:'diretrizes-essencia', label:'Diretrizes: Missão, visão e valores', menuLabel:'Missão, visão e valores', chapter:'Missão, visão e valores', layout:'strategy-essence', strategy:true,
    title:'Nossa essência',
    mission:'Aproximar culturas por meio da alimentação, oferecendo produtos que combinam diversidade de sabores, qualidade e inovação, proporcionando novas experiências e momentos de descoberta aos consumidores brasileiros.',
    vision:'Ser reconhecido como um grupo alimentício de referência em diversidade cultural e inovação, conquistando espaço nos lares brasileiros e levando nossos sabores a diferentes partes do mundo.',
    values:['Diversidade cultural.','Qualidade e cuidado.','Criatividade e inovação.','Respeito às pessoas.','Ética e transparência.','Valorização da identidade brasileira.'], details:''
  },
  {
    id:'diretrizes-diferencial', label:'Diretrizes: Nosso diferencial', menuLabel:'Nosso diferencial', chapter:'Nosso diferencial', layout:'strategy-difference', strategy:true,
    title:'Diferentes culturas, uma identidade própria',
    paragraphs:[
      'Nossa principal inspiração está na riqueza gastronômica existente ao redor do mundo.',
      'Buscamos conhecer diferentes tradições e transformá-las em produtos que dialoguem com o paladar brasileiro, respeitando suas origens e valorizando nossas referências culturais.'
    ],
    pillars:[['Interculturalidade','Sabores e inspirações de diferentes culturas.'],['Criatividade','Novas combinações e experiências de consumo.'],['Identidade brasileira','Produtos desenvolvidos para dialogar com as preferências do nosso público.']],
    quote:'Queremos ser reconhecidos pela experiência que proporcionamos, e não apenas por sermos diferentes.', details:''
  },
  {
    id:'diretrizes-objetivos', label:'Diretrizes: Onde queremos chegar', menuLabel:'Onde queremos chegar', chapter:'Onde queremos chegar', layout:'strategy-objectives', strategy:true,
    title:'Grandes sonhos, novos caminhos',
    paragraphs:['Queremos construir uma marca presente na vida de cada vez mais brasileiros, conquistando espaço por meio da qualidade, da criatividade e da diversidade de nossos produtos.'],
    objectives:['Conquistar a confiança dos consumidores.','Tornar a Chicha UAI conhecida.','Ampliar nosso portfólio de produtos.','Estar cada vez mais perto das pessoas.','Construir uma marca forte, relevante e duradoura.'], details:''
  },
  {
    id:'diretrizes-trajetoria', label:'Diretrizes: Nossa trajetória', menuLabel:'Nossa trajetória', chapter:'Nossa trajetória', layout:'strategy-journey', strategy:true,
    title:'De Minas Gerais para o mundo',
    paragraphs:[
      'Nossa história começará em Juiz de Fora, onde pretendemos construir nossas primeiras relações com o mercado.',
      'Queremos crescer gradualmente, alcançando outras cidades mineiras, expandindo nossa presença pelo Brasil e, futuramente, levando nossos sabores para outros países.'
    ],
    journey:[['Juiz de Fora','O começo da nossa história.'],['Brasil','Novos mercados, novas conexões.'],['Mundo','Nossos sabores ultrapassando fronteiras.']],
    commitments:['Qualidade','Responsabilidade','Respeito às pessoas'], details:''
  },
  {
    id:'diretrizes-encerramento', label:'Diretrizes: Encerramento', menuLabel:'Encerramento', chapter:'Grupo Elinad', layout:'strategy-closing', strategy:true,
    title:'Nossa história está apenas começando',
    paragraphs:[
      'O Grupo Elinad nasce da ideia de que diferentes culturas podem se encontrar à mesa e transformar momentos comuns em novas experiências.',
      'Nossa trajetória começará com a Chicha UAI, mas queremos que ela seja apenas o primeiro capítulo de uma história construída com novos sabores, descobertas e conexões.'
    ],
    quote:'Grupo Elinad — Nosso mundo é feito de sabores.', details:''
  }
);
