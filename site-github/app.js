'use strict';
(() => {
  const content = window.ELINAD_CONTENT;
  const slides = content.slides;
  const planStages = content.stages;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const stage = $('#main');
  const state = { mode:'apresentar', index:0, planStage:planStages[0].id, product:0, motion:'smooth' };
  const stageForIndex = index => planStages.find(group => group.slides.includes(slides[index].id));
  const selectedStage = () => planStages.find(group => group.id === state.planStage);
  const activeIndices = () => selectedStage().slides.map(id => slides.findIndex(s => s.id === id));
  const localPosition = index => stageForIndex(index).slides.indexOf(slides[index].id);
  let programmaticScrollUntil = 0;
  let scrollFrame = 0;
  let toastTimer;
  const number = n => String(n).padStart(2, '0');
  const icon = name => {
    const paths = {
      industry:'M3 21V9l6 3V8l6 3V3h5v18H3M6 16h2m3 0h2m3 0h2',
      store:'M3 10V5h18v5M4 10v11h16V10M2 10c0 3 5 3 5 0 0 3 5 3 5 0 0 3 5 3 5 0 0 3 5 3 5 0M8 21v-7h8v7',
      person:'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M4 21v-3a8 8 0 0 1 16 0v3',
      arrow:'M3 12h17m-6-6 6 6-6 6',
      check:'m5 12 4 4L19 6',
      globe:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M3 12h18M12 3a18 18 0 0 1 0 18 18 18 0 0 1 0-18',
      heart:'M12 20 4 12a5 5 0 0 1 8-6 5 5 0 0 1 8 6l-8 8',
      spark:'m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3z',
      people:'M14 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M3 21v-3a7 7 0 0 1 14 0v3M18 4a3 3 0 0 1 0 6M21 21v-3a7 7 0 0 0-3-6',
      balance:'M12 3v17M5 21h14M4 7h16M6 7l-4 8h8L6 7M18 7l-4 8h8l-4-8',
      leaf:'M20 3C8 2 3 7 4 14c2 8 17 5 16-11ZM4 21 16 8'
    };
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]}"/></svg>`;
  };
  const heading = (s, i) => `<header class="section-head reveal"><p class="eyebrow">${escape(s.chapter)}</p><h2 id="heading-${s.id}" tabindex="-1">${escape(s.title)}</h2><p class="section-lead">${escape(s.lead)}</p></header>`;
  const note = (s, i) => `<div class="slide-note reveal"><p>${escape(s.summary)}</p><button type="button" class="detail-button" data-consult="${i}">Consultar detalhes <span aria-hidden="true">↗</span></button></div>`;
  const imageFigure = (product, cls = '') => `<figure class="${cls}"><img src="${product.image}" alt="${escape(product.alt)}" width="1536" height="1024" decoding="async"><figcaption>Imagem conceitual. Embalagem e porção a definir.</figcaption></figure>`;
  const allProducts = () => `<div class="all-products">${content.products.map((p, i) => `<article class="product-reading" aria-labelledby="product-reading-${p.id}">${imageFigure(p)}<div><p class="eyebrow">${number(i+1)} / ${escape(p.category)}</p><h3 id="product-reading-${p.id}">${escape(p.name)}</h3><p>${escape(p.description)}</p><p>${escape(p.detail)}</p><dl class="product-definitions"><div><dt>Fornecimento proposto</dt><dd>${escape(p.supply)}</dd></div><div><dt>Uso pelo parceiro</dt><dd>${escape(p.use)}</dd></div></dl><p class="pending-note">${escape(p.pending)}</p></div></article>`).join('')}</div>`;

  const strategyHeading = s => `<header class="sg-heading reveal"><p class="eyebrow">${escape(s.chapter)}</p><h2 id="heading-${s.id}" tabindex="-1">${escape(s.title)}</h2></header>`;
  const strategyText = s => `<div class="sg-copy">${s.paragraphs.map(p => `<p>${escape(p)}</p>`).join('')}</div>`;
  const strategyQuote = s => `<blockquote class="sg-quote reveal">${escape(s.quote)}</blockquote>`;
  const strategyPhoto = (index, className='') => `<figure class="sg-photo ${className}"><img src="${content.products[index].image}" alt="${escape(content.products[index].alt)}" width="1280" height="853" decoding="async"><figcaption>Imagem conceitual do projeto.</figcaption></figure>`;

  function strategicVisual(s) {
    switch(s.layout) {
      case 'strategy-cover':
        return `<div class="sg-cover"><div class="sg-cover-copy reveal"><p class="sg-brand">GRUPO <strong>ELINAD<span aria-hidden="true">.</span></strong></p><h2 id="heading-${s.id}" tabindex="-1">${escape(s.title)}</h2><p class="sg-tagline">${escape(s.tagline)}</p><span class="sg-cover-rule" aria-hidden="true"></span></div><div class="sg-cover-images reveal">${strategyPhoto(0,'sg-cover-main')}${strategyPhoto(1,'sg-cover-small')}</div></div>`;
      case 'strategy-about':
        return `<div class="sg-about"><div>${strategyHeading(s)}<div class="reveal">${strategyText(s)}</div>${strategyQuote(s)}</div><div class="sg-food-composition reveal">${strategyPhoto(1,'sg-about-main')}${strategyPhoto(2,'sg-about-secondary')}<p class="sg-visual-note">Sabores, histórias e experiências à mesa.</p></div></div>`;
      case 'strategy-products':
        return `${strategyHeading(s)}<div class="sg-products">${strategyPhoto(0,'sg-product-hero reveal')}<div class="reveal">${strategyText(s)}<div class="sg-product-focus"><span>Produto principal</span><h3>Chicha UAI</h3><p>${escape(s.productText)}</p></div></div></div>${strategyQuote(s)}`;
      case 'strategy-essence':
        return `${strategyHeading(s)}<div class="sg-essence"><article class="sg-mission reveal"><h3>Missão</h3><p>${escape(s.mission)}</p></article><article class="sg-vision reveal"><h3>Visão</h3><p>${escape(s.vision)}</p></article></div><div class="sg-values reveal"><h3>Valores</h3><ul>${s.values.map((value,i)=>`<li>${icon(['globe','heart','spark','people','balance','leaf'][i])}<span>${escape(value)}</span></li>`).join('')}</ul></div>`;
      case 'strategy-difference':
        return `${strategyHeading(s)}<div class="sg-difference-intro reveal">${strategyText(s)}</div><div class="sg-pillars">${s.pillars.map(([title,text],i)=>`<article class="reveal"><div class="sg-pillar-icon">${icon(['globe','spark','leaf'][i])}</div><h3>${escape(title)}</h3><p>${escape(text)}</p></article>`).join('')}</div>${strategyQuote(s)}`;
      case 'strategy-objectives':
        return `${strategyHeading(s)}<div class="sg-objectives"><div class="sg-objective-intro reveal">${strategyText(s)}${strategyPhoto(2,'sg-objective-photo')}</div><ol>${s.objectives.map((objective,i)=>`<li class="reveal"><span>${number(i+1)}</span><p>${escape(objective)}</p></li>`).join('')}</ol></div>`;
      case 'strategy-journey':
        return `${strategyHeading(s)}<div class="sg-journey-intro reveal">${strategyText(s)}</div><ol class="sg-timeline">${s.journey.map(([title,text],i)=>`<li class="reveal"><span class="sg-timeline-number">${number(i+1)}</span><h3>${escape(title)}</h3><p>${escape(text)}</p></li>`).join('')}</ol><div class="sg-commitments reveal"><span>Compromissos permanentes</span><ul>${s.commitments.map(c=>`<li>${escape(c)}</li>`).join('')}</ul></div>`;
      case 'strategy-closing':
        return `<div class="sg-closing-copy">${strategyHeading(s)}<div class="sg-closing-columns"><div class="reveal">${strategyText(s)}<blockquote class="sg-closing-quote"><span>Grupo Elinad — </span><strong>Nosso mundo é feito de sabores.</strong></blockquote><button type="button" class="sg-return" data-open-stages>Voltar às etapas ${icon('arrow')}</button></div>${strategyPhoto(0,'sg-closing-photo reveal')}</div></div>`;
      default: return '';
    }
  }

  function visual(s, i) {
    if (s.strategy) return strategicVisual(s);
    const first = content.products[0];
    switch(s.layout) {
      case 'cover':
        return `<div class="cover-layout"><div class="cover-copy reveal"><p class="eyebrow">Plano de negócios / 2026</p><h1 id="heading-${s.id}" tabindex="-1">Grupo<br><span>Elinad</span><span class="title-dot" aria-hidden="true">.</span></h1><p class="cover-lead">${escape(s.lead)}</p><p class="cover-description">${escape(s.summary)}</p><div class="cover-location"><span class="location-mark" aria-hidden="true"></span>Juiz de Fora, Minas Gerais</div><div class="cover-actions"><button type="button" class="primary-button" data-goto="1">Conhecer o projeto ${icon('arrow')}</button><button type="button" class="text-button" data-consult="0">Ler o plano</button></div></div><div class="cover-visual reveal">${imageFigure(first,'hero-figure')}<div class="product-signature"><span>Produto principal</span><strong>Chicha UAI</strong></div></div></div>`;
      case 'business':
        return `${heading(s,i)}<ol class="business-flow"><li class="reveal"><div class="flow-icon">${icon('industry')}</div><span class="step-number">01</span><h3>Nossa indústria</h3><p>Produção em pequenos lotes, padronização e embalagem.</p></li><li class="flow-connector" aria-hidden="true">${icon('arrow')}</li><li class="reveal"><div class="flow-icon">${icon('store')}</div><span class="step-number">02</span><h3>Estabelecimentos</h3><p>Revenda dos produtos ou preparo para atendimento.</p></li><li class="flow-connector" aria-hidden="true">${icon('arrow')}</li><li class="reveal"><div class="flow-icon">${icon('person')}</div><span class="step-number">03</span><h3>Consumidor final</h3><p>Compra no varejo ou consumo no estabelecimento.</p></li></ol>${note(s,i)}`;
      case 'difference':
        return `${heading(s,i)}<div class="difference-layout"><div class="difference-statement reveal"><span class="small-rule"></span><p>Chicha UAI<br><span>como produto principal.</span></p><div class="ingredient-line">Cereais e canela</div></div><ol class="difference-list">${s.points.map(([title,text],j)=>`<li class="reveal"><span>${number(j+1)}</span><div><h3>${escape(title)}</h3><p>${escape(text)}</p></div></li>`).join('')}</ol></div>${note(s,i)}`;
      case 'portfolio':
        return `${heading(s,i)}<div class="portfolio-interactive"><div class="product-tabs reveal" role="tablist" aria-label="Produtos do portfólio" data-keyboard-local>${content.products.map((p,j)=>`<button type="button" role="tab" id="tab-${p.id}" aria-controls="portfolio-panel" aria-selected="${j===0}" tabindex="${j===0?'0':'-1'}" data-product="${j}" aria-label="${escape(p.name)}"><span class="tab-number">${number(j+1)}</span>${['Chicha UAI','Sobremesa','Espiral','Argolinha','Palitos'][j]}</button>`).join('')}</div><div id="portfolio-panel" role="tabpanel" aria-labelledby="tab-chicha" class="product-panel reveal"></div></div><div class="portfolio-read-intro"><p>${escape(s.summary.split(' Selecione')[0])}</p></div>`;
      case 'chicha':
        return `<div class="chicha-layout"><div>${heading(s,i)}<p class="chicha-summary reveal">${escape(s.summary)}</p><dl class="chicha-facts reveal"><div><dt>Base proposta</dt><dd>Cereais e canela</dd></div><div><dt>Perfil da bebida</dt><dd>Cremosa e não alcoólica</dd></div><div><dt>Definições técnicas</dt><dd>Composição, porção e conservação a definir</dd></div></dl><button type="button" class="detail-button" data-consult="${i}">Consultar desenvolvimento <span aria-hidden="true">↗</span></button></div>${imageFigure(first,'chicha-figure reveal')}</div>`;
      case 'audience-business':
        return `${heading(s,i)}<div class="channel-list">${s.channels.map(([title,products,criteria],j)=>`<article class="channel-row reveal"><span class="channel-index">${number(j+1)}</span><h3>${escape(title)}</h3><div><p>${escape(products)}</p><span>${escape(criteria)}</span></div></article>`).join('')}</div>${note(s,i)}`;
      case 'audience-consumer':
        return `${heading(s,i)}<div class="consumer-layout"><div class="consumer-premise reveal"><span class="consumer-label">Hipótese inicial</span><p>Adultos que vivem,<br>trabalham ou estudam<br>em <strong>Juiz de Fora.</strong></p><span class="small-note">Perfil a avaliar na pesquisa.</span></div><dl class="criteria-list">${s.criteria.map(([title,text])=>`<div class="reveal"><dt>${escape(title)}</dt><dd>${escape(text)}</dd></div>`).join('')}</dl></div><div class="slide-note reveal"><p>Idade, renda e hábitos serão analisados em conjunto.</p><button type="button" class="detail-button" data-consult="${i}">Consultar segmentação <span aria-hidden="true">↗</span></button></div>`;
      case 'competition':
        return `${heading(s,i)}<div class="competition-columns"><article class="competition-column reveal"><p class="column-overline">Semelhança de produto e uso</p><h3>Diretas</h3><p>Bebidas cremosas prontas, bebidas com cereais, vitaminas embaladas e bebidas lácteas.</p><div class="brand-reference">Referência no plano: bebida com cereais da Piracanjuba.</div></article><article class="competition-column indirect reveal"><p class="column-overline">Mesma ocasião de consumo</p><h3>Indiretas</h3><p>Sucos, açaí, preparos em pó e outras opções escolhidas para o mesmo lanche.</p><div class="brand-reference">A relevância de cada alternativa será avaliada na pesquisa.</div></article></div><p class="competition-specific reveal">YoPRO, Natural Whey, ProForce e Itambé Pro também entram na comparação, com propostas específicas.</p>${note(s,i)}`;
      case 'comparison':
        return `${heading(s,i)}<div class="table-scroll competition-table reveal"><table><thead><tr><th>Nosso produto</th><th>Concorrentes diretos</th><th>Concorrentes indiretos</th></tr></thead><tbody>${s.competitionRows.map(row=>`<tr>${row.map((cell,k)=>`<${k===0?'th scope="row"':'td'}>${escape(cell)}</${k===0?'th':'td'}>`).join('')}</tr>`).join('')}</tbody></table></div>${note(s,i)}`;
      case 'research':
        return `${heading(s,i)}<div class="research-layout"><div class="research-time reveal"><strong>5<span>min</span></strong><p>Duração estimada</p><div class="research-consent">Participação totalmente<br>anônima e voluntária</div></div><ol class="research-blocks"><li class="reveal"><span>01</span><div><h3>Perfil e hábitos</h3><p>Rotina, categorias, frequência e fatores de escolha.</p></div></li><li class="reveal"><span>02</span><div><h3>Interesse nos cinco produtos</h3><p>Preferências e possibilidades de consumo.</p></div></li><li class="reveal"><span>03</span><div><h3>Preço e locais de venda</h3><p>Respostas para orientar os próximos testes.</p></div></li></ol></div><div class="research-bottom reveal"><p><strong>Resultados da pesquisa</strong><span>A definir</span></p><button type="button" class="detail-button" data-consult="${i}">Consultar pesquisa e formulário <span aria-hidden="true">↗</span></button></div>`;
      case 'research-business':
        return `${heading(s,i)}<div class="interview-layout"><div class="interview-intro reveal">${icon('store')}<p>Condições para<br><strong>testar nosso<br>fornecimento.</strong></p></div><ol class="interview-list">${[['Compra atual','Categorias vendidas, produção própria e fornecedores.'],['Interesse','Produtos que o parceiro consideraria testar.'],['Estrutura','Armazenamento e equipamentos de preparo.'],['Negociação','Preço, margem, volume, prazo e reposição.']].map(([title,text],j)=>`<li class="reveal"><span>${number(j+1)}</span><div><h3>${title}</h3><p>${text}</p></div></li>`).join('')}</ol></div>${note(s,i)}`;
      case 'roadmap':
        return `${heading(s,i)}<ol class="roadmap">${s.steps.map(([title,text],j)=>`<li class="reveal"><span class="roadmap-number">${number(j+1)}</span><h3>${escape(title)}</h3><p>${escape(text)}</p></li>`).join('')}</ol>${note(s,i)}`;
      case 'pending':
        return `${heading(s,i)}<div class="pending-grid">${s.pendingGroups.map(([title,text])=>`<article class="reveal"><h3>${escape(title)}</h3><p>${escape(text)}</p><span class="status-pending">A definir</span></article>`).join('')}</div><div class="closing-line reveal"><p>${escape(s.summary)}</p><button type="button" class="light-button" data-consult="${i}">Consultar fontes e detalhes ${icon('arrow')}</button></div>`;
      default: return heading(s,i);
    }
  }

  function build() {
    stage.innerHTML = slides.map((s,i)=>`<section class="slide slide-${s.layout}${s.layout==='pending'?' theme-dark':''}${s.strategy?' strategy-slide':''}" id="${s.id}" data-slide-index="${i}" data-plan-stage="${stageForIndex(i).id}" aria-labelledby="heading-${s.id}" ${i?'hidden':''}><div class="slide-summary">${visual(s,i)}</div><div class="consult-detail">${s.layout==='portfolio'?allProducts():''}${s.details}</div><div class="read-section-footer"><span>${localPosition(i)+1} / ${stageForIndex(i).slides.length}</span><button type="button" class="detail-button" data-present="${i}">Apresentar este assunto <span aria-hidden="true">▻</span></button></div></section>`).join('');
    $('#stages-list').innerHTML = planStages.map((group,i)=>`<button type="button" data-open-stage="${group.id}"><span class="stage-menu-number">${number(i+1)}</span><span class="stage-menu-copy"><strong>${escape(group.title)}</strong><span>${group.slides.length} ${group.slides.length===1?'slide':'slides'}</span></span>${icon('arrow')}</button>`).join('');
    renderProduct(0);
  }

  function updateTopics() {
    const menu=$('#topics-list');
    if(menu.dataset.planStage===state.planStage)return;
    menu.dataset.planStage=state.planStage;
    menu.innerHTML=activeIndices().map((index,position)=>`<button type="button" data-topic="${index}"><span>${number(position+1)}</span><strong>${escape(slides[index].menuLabel||slides[index].label)}</strong>${icon('arrow')}</button>`).join('');
  }

  function renderProduct(index, focus = false) {
    const p = content.products[index];
    state.product=index;
    $$('[data-product]').forEach((b,j)=>{b.setAttribute('aria-selected',String(index===j));b.tabIndex=index===j?0:-1;});
    const panel=$('#portfolio-panel');
    panel.setAttribute('aria-labelledby','tab-'+p.id);
    panel.innerHTML=`${imageFigure(p,'product-figure')}<div class="product-copy"><p class="eyebrow">${escape(p.category)}</p><h3>${escape(p.name)}</h3><p class="product-description">${escape(p.description)}</p><div class="product-supply"><span>Fornecimento proposto</span><strong>${escape(p.supply)}</strong></div><p class="product-pending">${escape(p.pending)}</p><button type="button" class="detail-button" data-consult="3">Consultar o portfólio completo <span aria-hidden="true">↗</span></button></div>`;
    if(focus) $(`[data-product="${index}"]`).focus();
  }

  function writeHash() {
    const hash='#'+state.mode+'/'+slides[state.index].id;
    try {history.replaceState(null,'',hash);} catch { /* file:// em navegadores com restrição */ }
  }

  function updateControls(announce = false) {
    const current=slides[state.index];
    const group=selectedStage();
    const indices=activeIndices();
    const position=indices.indexOf(state.index);
    const total=indices.length;
    updateTopics();
    $('#slide-count').textContent=`${position+1} / ${total}`;
    $('#slide-name').textContent=current.menuLabel||current.label;
    $('#current-stage-name').textContent=group.title;
    $('#topics-stage-name').textContent=group.title;
    $('#prev-btn').disabled=position===0;
    $('#next-btn').disabled=position===total-1;
    $('#next-btn span').textContent=position===total-1?'Fim':'Próxima';
    $('#prev-btn').setAttribute('aria-label',state.mode==='apresentar'?'Tela anterior':'Assunto anterior');
    $('#next-btn').setAttribute('aria-label',state.mode==='apresentar'?'Próxima tela':'Próximo assunto');
    $('.progress-line').setAttribute('aria-valuemax',String(total));
    $('.progress-line').setAttribute('aria-valuenow',String(position+1));
    $('.progress-line').setAttribute('aria-valuetext',`${position+1} de ${total}: ${current.menuLabel||current.label}`);
    $('#progress-fill').style.width=`${(position+1)/total*100}%`;
    $('#present-btn').setAttribute('aria-pressed',String(state.mode==='apresentar'));
    $('#read-btn').setAttribute('aria-pressed',String(state.mode==='consultar'));
    $$('[data-topic]').forEach(b=>Number(b.dataset.topic)===state.index?b.setAttribute('aria-current','page'):b.removeAttribute('aria-current'));
    $$('[data-open-stage]').forEach(b=>b.dataset.openStage===state.planStage?b.setAttribute('aria-current','step'):b.removeAttribute('aria-current'));
    stage.setAttribute('aria-label',`${group.title}. Plano de negócios do Grupo Elinad.`);
    if(announce) $('#announcement').textContent=`${group.title}. ${state.mode==='apresentar'?'Slide':'Assunto'} ${position+1} de ${total}. ${current.menuLabel||current.label}.`;
    writeHash();
  }

  function focusHeading() {
    $(`#heading-${slides[state.index].id}`).focus({preventScroll:true});
  }

  function scrollToCurrent() {
    programmaticScrollUntil=performance.now()+700;
    const section=$('#'+slides[state.index].id);
    section.scrollIntoView({behavior:'instant',block:'start'});
  }

  function applyMode(focus = false) {
    document.body.dataset.mode=state.mode;
    document.body.dataset.planStage=state.planStage;
    const included=new Set(activeIndices());
    $$('.slide').forEach((section,i)=>{
      section.hidden=!included.has(i)||(state.mode==='apresentar'&&i!==state.index);
      section.classList.toggle('is-current',i===state.index);
    });
    if(state.mode==='apresentar') { stage.scrollTop=0; $('#'+slides[state.index].id).scrollTop=0; }
    else scrollToCurrent();
    updateControls(focus);
    if(focus)focusHeading();
  }

  function goTo(index, focus = true) {
    const target=Math.max(0,Math.min(slides.length-1,index));
    state.index=target;
    state.planStage=stageForIndex(target).id;
    applyMode(focus);
  }

  function step(delta) {
    const indices=activeIndices();
    const next=Math.max(0,Math.min(indices.length-1,indices.indexOf(state.index)+delta));
    goTo(indices[next]);
  }

  function selectPlanStage(id) {
    const group=planStages.find(s=>s.id===id);
    if(group)goTo(slides.findIndex(s=>s.id===group.slides[0]));
  }

  function setMode(mode, index=state.index) {
    if(mode!=='apresentar'&&mode!=='consultar')return;
    state.mode=mode;
    state.index=index;
    state.planStage=stageForIndex(index).id;
    applyMode(true);
  }

  function trackReading(force = false) {
    if(state.mode!=='consultar'||(!force&&performance.now()<programmaticScrollUntil))return;
    const top=stage.getBoundingClientRect().top+90;
    const indices=activeIndices();
    let index=indices[0];
    indices.forEach(i=>{if($('#'+slides[i].id).getBoundingClientRect().top<=top)index=i;});
    if(stage.scrollTop+stage.clientHeight>=stage.scrollHeight-4)index=indices.at(-1);
    if(index!==state.index){state.index=index;$$('.slide').forEach((s,i)=>s.classList.toggle('is-current',i===index));updateControls();}
  }

  function restoreHash() {
    const [mode,id]=location.hash.slice(1).split('/');
    if(mode==='apresentar'||mode==='consultar')state.mode=mode;
    const index=slides.findIndex(s=>s.id===id);
    state.index=index>=0?index:0;
    state.planStage=stageForIndex(state.index).id;
    applyMode();
  }

  function showDialog(id) {
    const dialog=$('#'+id);
    if(dialog.open)return;
    dialog.showModal();
    if(id==='topics-dialog') $('[data-topic="'+state.index+'"]',dialog).focus();
    else if(id==='stages-dialog') $('[data-open-stage="'+state.planStage+'"]',dialog).focus();
    else $('#motion-select').focus();
  }

  function showToast(message) {
    const toast=$('#toast');toast.textContent=message;toast.hidden=false;
    clearTimeout(toastTimer);toastTimer=setTimeout(()=>{toast.hidden=true;},5000);
  }

  async function fullscreen() {
    try {
      if(document.fullscreenElement){await document.exitFullscreen();return;}
      if(document.body.classList.contains('focus-mode')){document.body.classList.remove('focus-mode');updateFullscreen();return;}
      if(document.documentElement.requestFullscreen){await document.documentElement.requestFullscreen();}
      else {document.body.classList.add('focus-mode');updateFullscreen();showToast('Modo ampliado ativado. Este navegador não oferece tela cheia. Use F ou Esc para sair.');}
    } catch {showToast('Não foi possível ativar tela cheia neste navegador. Você pode usar a opção de tela cheia do próprio navegador.');}
  }

  function updateFullscreen() {
    const active=!!document.fullscreenElement||document.body.classList.contains('focus-mode');
    $('#fullscreen-btn').setAttribute('aria-pressed',String(active));
    $('#fullscreen-btn').title=active?'Sair da tela cheia (F)':'Tela cheia (F)';
    $('#fullscreen-btn').setAttribute('aria-label',active?'Sair da tela cheia':'Tela cheia');
    $('#fullscreen-btn span').textContent=active?'Sair da tela cheia':'Tela cheia';
  }

  function setMotion(value, persist = false) {
    if(!['smooth','reduced','off'].includes(value))return;
    state.motion=value;document.body.dataset.motion=value;$('#motion-select').value=value;
    if(persist){try{localStorage.setItem('elinad-motion',value);}catch{}}
  }

  build();
  const systemMotion=window.matchMedia?window.matchMedia('(prefers-reduced-motion: reduce)'):null;
  let storedMotion;
  try{storedMotion=localStorage.getItem('elinad-motion');}catch{}
  setMotion(storedMotion|| (systemMotion?.matches?'reduced':'smooth'));
  if(systemMotion?.addEventListener)systemMotion.addEventListener('change',e=>{let custom;try{custom=localStorage.getItem('elinad-motion');}catch{}if(!custom)setMotion(e.matches?'reduced':'smooth');});
  restoreHash();

  $('#home-btn').addEventListener('click',()=>goTo(0));
  $('#present-btn').addEventListener('click',()=>{trackReading(true);setMode('apresentar',state.index);});
  $('#read-btn').addEventListener('click',()=>setMode('consultar'));
  $('#prev-btn').addEventListener('click',()=>step(-1));
  $('#next-btn').addEventListener('click',()=>step(1));
  $('#stages-btn').addEventListener('click',()=>showDialog('stages-dialog'));
  $('#topics-btn').addEventListener('click',()=>showDialog('topics-dialog'));
  $('#settings-btn').addEventListener('click',()=>showDialog('settings-dialog'));
  $('#fullscreen-btn').addEventListener('click',fullscreen);
  $('#motion-select').addEventListener('change',e=>setMotion(e.target.value,true));
  document.addEventListener('fullscreenchange',updateFullscreen);
  window.addEventListener('hashchange',restoreHash);
  stage.addEventListener('scroll',()=>{cancelAnimationFrame(scrollFrame);scrollFrame=requestAnimationFrame(()=>trackReading());});

  document.addEventListener('click',e=>{
    const target=e.target.closest('button');
    if(!target)return;
    if(target.hasAttribute('data-goto'))goTo(Number(target.dataset.goto));
    if(target.hasAttribute('data-consult'))setMode('consultar',Number(target.dataset.consult));
    if(target.hasAttribute('data-present'))setMode('apresentar',Number(target.dataset.present));
    if(target.hasAttribute('data-product'))renderProduct(Number(target.dataset.product));
    if(target.hasAttribute('data-topic')){$('#topics-dialog').close();goTo(Number(target.dataset.topic));}
    if(target.hasAttribute('data-open-stage')){$('#stages-dialog').close();selectPlanStage(target.dataset.openStage);}
    if(target.hasAttribute('data-open-stages'))showDialog('stages-dialog');
    if(target.hasAttribute('data-close-dialog'))$('#'+target.dataset.closeDialog).close();
  });

  $$('.product-tabs').forEach(tabs=>tabs.addEventListener('keydown',e=>{
    const button=e.target.closest('[data-product]');if(!button)return;
    let i=Number(button.dataset.product);
    if(e.key==='ArrowRight')i=(i+1)%content.products.length;
    else if(e.key==='ArrowLeft')i=(i-1+content.products.length)%content.products.length;
    else if(e.key==='Home')i=0;
    else if(e.key==='End')i=content.products.length-1;
    else return;
    e.preventDefault();renderProduct(i,true);
  }));

  document.addEventListener('keydown',e=>{
    if(e.altKey||e.ctrlKey||e.metaKey||e.target.closest('input,select,textarea,[contenteditable="true"]'))return;
    if($('dialog[open]'))return;
    if(e.target.closest('[data-keyboard-local]'))return;
    if(state.mode==='apresentar') {
      if(['ArrowRight','PageDown'].includes(e.key)){e.preventDefault();step(1);return;}
      if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();step(-1);return;}
      if(e.key==='Home'){e.preventDefault();goTo(activeIndices()[0]);return;}
      if(e.key==='End'){e.preventDefault();goTo(activeIndices().at(-1));return;}
    }
    if(e.key.toLowerCase()==='m'){e.preventDefault();trackReading(true);setMode(state.mode==='apresentar'?'consultar':'apresentar',state.index);}
    if(e.key.toLowerCase()==='g'){e.preventDefault();showDialog('topics-dialog');}
    if(e.key.toLowerCase()==='e'){e.preventDefault();showDialog('stages-dialog');}
    if(e.key.toLowerCase()==='f'){e.preventDefault();fullscreen();}
    if(e.key==='Escape'&&document.body.classList.contains('focus-mode')){document.body.classList.remove('focus-mode');updateFullscreen();}
  });

  $$('dialog').forEach(dialog=>{
    dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dialog.close();});
    dialog.addEventListener('close',()=>$(dialog.id==='topics-dialog'?'#topics-btn':dialog.id==='stages-dialog'?'#stages-btn':'#settings-btn').focus());
  });

  if(document.body.dataset.offline==='true')$$('.offline-download').forEach(a=>a.hidden=true);
})();
