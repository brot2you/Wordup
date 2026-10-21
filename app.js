/* WORDUP ARCADE V3 — 2025 programme + 2026 livret, expanded teacher-curated lexicon. */
'use strict';
const STORAGE_KEY='brot2you-wordup-arcade-v1';
const $=(s,base=document)=>base.querySelector(s);
const esc=value=>String(value??'').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normal=value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,"'").replace(/[^a-z0-9' ]/g,'').replace(/\s+/g,' ').trim();
const shuffle=list=>[...list].sort(()=>Math.random()-.5);
const sample=(list,n)=>shuffle(list).slice(0,n);
const asWords=(lines)=>lines.map(([en,fr,emoji,example])=>({en,fr,emoji,example}));
const LEGACY_PACKS=[
 {id:'school',title:'School Life',emoji:'🎒',level:'A1–A2',words:asWords([
 ['timetable','emploi du temps','📅','My timetable is full on Monday.'],['homework','devoirs','📚','I do my homework after school.'],['subject','matière scolaire','📘','English is my favourite subject.'],['break','récréation','⏰','We play outside during the break.'],['classmate','camarade de classe','🧑‍🤝‍🧑','My classmate helps me with the project.'],['library','bibliothèque','📖','I read in the library.'],['notebook','cahier','📓','I write new words in my notebook.'],['teacher','professeur','👩‍🏫','Our teacher speaks English.'],['lesson','cours','📝','The lesson starts at nine.'],['eraser','gomme','✏️','Can I borrow your eraser?'],['schoolbag','cartable','🎒','My schoolbag is under the desk.'],['worksheet','fiche d’exercice','📃','Complete the worksheet in pairs.']])},
 {id:'food',title:'Food & Drinks',emoji:'🍓',level:'A1–A2',words:asWords([
 ['breakfast','petit-déjeuner','🥣','I have breakfast at seven.'],['vegetables','légumes','🥦','We eat vegetables every day.'],['strawberry','fraise','🍓','This strawberry is sweet.'],['sandwich','sandwich','🥪','I take a sandwich for lunch.'],['thirsty','assoiffé','🥤','I am thirsty after running.'],['delicious','délicieux','😋','This soup is delicious.'],['recipe','recette','🧑‍🍳','I follow a recipe to make pancakes.'],['ingredients','ingrédients','🥚','Check the ingredients before cooking.'],['hungry','affamé','🍽️','I am hungry after school.'],['bakery','boulangerie','🥖','We buy bread at the bakery.'],['healthy','bon pour la santé','🥗','A balanced meal can be healthy.'],['snack','en-cas','🍎','I eat a snack after the match.']])},
 {id:'city',title:'City Explorer',emoji:'🏙️',level:'A1–A2',words:asWords([
 ['crossroads','carrefour','🚦','Turn left at the crossroads.'],['museum','musée','🏛️','The museum is next to the park.'],['bridge','pont','🌉','Walk across the bridge.'],['traffic lights','feux de circulation','🚥','Stop at the traffic lights.'],['square','place','⛲','Meet me in the town square.'],['station','gare','🚉','The train leaves from the station.'],['opposite','en face de','↔️','The café is opposite the school.'],['straight ahead','tout droit','⬆️','Go straight ahead to the supermarket.'],['corner','coin de rue','🏘️','The shop is on the corner.'],['pavement','trottoir','🚶','Walk on the pavement.'],['neighbourhood','quartier','🏡','I live in a quiet neighbourhood.'],['pharmacy','pharmacie','💊','The pharmacy is near the hospital.']])},
 {id:'travel',title:'Travel Time',emoji:'🧳',level:'A2',words:asWords([
 ['suitcase','valise','🧳','My suitcase is very heavy.'],['journey','trajet','🚆','The journey takes two hours.'],['passport','passeport','🛂','Do not forget your passport.'],['ticket','billet','🎟️','I bought a train ticket.'],['departure','départ','🛫','Check your departure time.'],['destination','destination','📍','London is our destination.'],['landmark','monument emblématique','🗽','The tower is a famous landmark.'],['accommodation','hébergement','🏠','We booked accommodation near the beach.'],['sightseeing','visite touristique','📸','We went sightseeing in the city.'],['abroad','à l’étranger','🌍','My aunt works abroad.'],['luggage','bagages','🧳','Keep your luggage close.'],['adventure','aventure','🗺️','Our adventure begins tomorrow.']])},
 {id:'nature',title:'Planet Earth',emoji:'🌿',level:'A2–B1',words:asWords([
 ['wildlife','faune sauvage','🦊','We must protect wildlife.'],['pollution','pollution','🏭','Air pollution is a serious problem.'],['recycle','recycler','♻️','We recycle paper and plastic.'],['forest','forêt','🌲','The forest is home to many animals.'],['endangered','menacé de disparition','🐢','The turtle is endangered.'],['drought','sécheresse','☀️','The drought damaged the crops.'],['renewable','renouvelable','🔋','Solar power is renewable energy.'],['habitat','habitat naturel','🏞️','This habitat needs protection.'],['coast','côte','🏖️','We cleaned rubbish from the coast.'],['climate','climat','🌦️','The climate is changing.'],['waste','déchets','🗑️','We should reduce food waste.'],['protect','protéger','🛡️','We can protect the environment together.']])},
 {id:'feelings',title:'Feelings & Friends',emoji:'💛',level:'A1–B1',words:asWords([
 ['proud','fier','🏆','I am proud of my team.'],['worried','inquiet','😟','She is worried about the test.'],['excited','enthousiaste','🤩','They are excited about the trip.'],['confident','confiant','😎','I feel confident before the show.'],['shy','timide','🙈','My brother is shy with strangers.'],['kind','gentil','💛','It is kind to help others.'],['trust','faire confiance','🤝','I trust my best friend.'],['cheerful','joyeux','😊','He is always cheerful in the morning.'],['disappointed','déçu','😞','We were disappointed by the result.'],['brave','courageux','🦁','She was brave during the challenge.'],['support','soutenir','🙌','We support each other.'],['grateful','reconnaissant','💌','I am grateful for your help.']])},
 {id:'digital',title:'Digital World',emoji:'💻',level:'A2–B1',words:asWords([
 ['password','mot de passe','🔐','Never share your password.'],['website','site web','🌐','We created a website in class.'],['privacy','vie privée','🔒','Online privacy is important.'],['download','télécharger','⬇️','Download the file for the lesson.'],['upload','mettre en ligne','⬆️','Upload your project to the platform.'],['message','message','💬','I sent a message to my classmate.'],['screen','écran','🖥️','The screen is too bright.'],['device','appareil numérique','📱','Put your device away during dinner.'],['username','nom d’utilisateur','👤','Choose a safe username.'],['search engine','moteur de recherche','🔎','Use a search engine to find information.'],['reliable','fiable','✅','Is this source reliable?'],['fake news','fausses informations','📰','Check a story before sharing fake news.']])},
 {id:'mystery',title:'Mystery Quest',emoji:'🔎',level:'A2–B1',words:asWords([
 ['clue','indice','🔎','The detective found a clue.'],['suspect','suspect','🕵️','The suspect was near the museum.'],['evidence','preuve','🧩','We need evidence to solve the case.'],['witness','témoin','👁️','A witness saw the red bicycle.'],['disappear','disparaître','🌫️','The keys disappear every night.'],['secret','secret','🔐','The letter contains a secret.'],['mysterious','mystérieux','🌙','A mysterious sound came from the room.'],['investigate','enquêter','🧐','They investigate the strange event.'],['footprints','empreintes de pas','👣','There are footprints near the door.'],['solve','résoudre','🧠','Can you solve this puzzle?'],['hidden','caché','🗝️','The hidden door is behind the painting.'],['discover','découvrir','✨','We discover a new clue in the garden.']])}
];
const PACKS=[...CURRICULUM_PACKS,...EXTENDED_PACKS,...LEGACY_PACKS.map(p=>({...p,grade:'extra',axis:0}))];
const STORIES=[
 {id:'treasure',name:'The Lost Treasure',emoji:'🗺️',subtitle:'An island adventure',steps:[
 {text:'You find an old map on a beach. Your friend asks what you want to do.',question:'What is the best reply?',options:['Let’s follow the map!','I am a map.','The beach is yesterday.'],correct:0,note:'“Let’s” is a friendly way to make a suggestion.'},
 {text:'A wooden bridge crosses a river. A sign says “BE CAREFUL”.',question:'What does “be careful” mean?',options:['Sois prudent !','Cours plus vite !','Va te coucher !'],correct:0,note:'“Be careful!” is a warning.'},
 {text:'You see a cave. Your friend says: “It might be dangerous.”',question:'What does “might” express?',options:['Une obligation','Une possibilité','Une habitude'],correct:1,note:'“Might” expresses a possibility.'},
 {text:'You discover a small chest with a beautiful compass. The adventure ends!',question:'Choose the correct sentence.',options:['We have found the treasure!','We has found the treasure!','We finding the treasure!'],correct:0,note:'With “we”, use “have” in the present perfect.'}]},
 {id:'manor',name:'Mystery at the Manor',emoji:'🏰',subtitle:'Solve a curious case',steps:[
 {text:'A necklace has disappeared. The detective enters the manor.',question:'What is a “clue”?',options:['Un indice','Un repas','Une fenêtre'],correct:0,note:'A clue helps a detective solve a mystery.'},
 {text:'A guest says: “I was reading when the lights went out.”',question:'Which action was in progress?',options:['The lights went out.','I was reading.','The detective enters.'],correct:1,note:'Past continuous describes an action in progress.'},
 {text:'You see muddy footprints near the garden door.',question:'What do “footprints” mean?',options:['Des lampes','Des empreintes de pas','Des traces de peinture'],correct:1,note:'Footprints can be an important clue.'},
 {text:'You find the necklace inside a hatbox. Great detective work!',question:'Complete: “The necklace was ___ in the box.”',options:['hide','hidden','hidingly'],correct:1,note:'“Hidden” is the past participle of “hide”.'}]},
 {id:'space',name:'The Space Mission',emoji:'🚀',subtitle:'A mission to a new planet',steps:[
 {text:'Your spaceship arrives near a strange blue planet.',question:'Choose the correct future sentence.',options:['We are going to land.','We going land.','We landed tomorrow.'],correct:0,note:'“Be going to” expresses a plan.'},
 {text:'A robot says: “There is not enough water for everyone.”',question:'What does “enough” mean?',options:['Assez de','Beaucoup trop de','Jamais de'],correct:0,note:'“Enough” means as much as is needed.'},
 {text:'Your team wants to protect the new planet.',question:'What is an environmentally friendly action?',options:['Recycle waste.','Leave rubbish outside.','Waste water.'],correct:0,note:'Recycling helps reduce waste.'},
 {text:'The crew safely returns to Earth after their mission.',question:'Choose the correct past sentence.',options:['We return yesterday.','We returned yesterday.','We returning yesterday.'],correct:1,note:'Use the past simple with “yesterday”.'}]}
];
const AVATARS=['🧑‍🚀','🦸','🧙','👩‍🚀','🧑‍🎨','👩‍🎤'];
const PETS=[['🐶','Arcade Pup',0],['🐱','Pixel Cat',50],['🦊','Neon Fox',150],['🐲','Mini Dragon',350],['🤖','Byte Bot',600],['🦉','Wise Owl',900]];
const BADGES=[['🌟','First Steps',s=>s.correct>=1,'Get one answer right'],['⚡','Quick Learner',s=>s.correct>=15,'15 correct answers'],['🔥','Vocabulary Hero',s=>s.correct>=50,'50 correct answers'],['🗺️','World Explorer',s=>Object.keys(s.quests).length>=3,'Finish 3 quests'],['📚','Story Keeper',s=>Object.keys(s.stories).length>=1,'Finish a story'],['🏆','Challenge Master',s=>s.challengeWins>=1,'Finish a timed challenge'],['🎯','Word Wizard',s=>s.correct>=100,'100 correct answers'],['💎','Wordup Legend',s=>s.xp>=1200,'Earn 1,200 XP'],['🧠','Memory Star',s=>Object.keys(s.known).length>=10,'Mark 10 words as known']];
const defaultState=()=>({xp:0,correct:0,attempts:0,avatar:AVATARS[0],pet:'🐶',sound:true,pack:'curr-6-1',quests:{},stories:{},challengeWins:0,known:{},custom:[]});
let state=defaultState();
try {const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');if(saved&&typeof saved==='object'){state={...state,...saved};}}
catch(e){console.warn('Saved progress unavailable');}
let view='home',practiceTab='flash',flipped=false,practiceIndex=0,practiceFeedback='',practiceAnswered=false;
let session=null,storySession=null,matchGame=null,challengeTimer=null,toastTimer=null;
let gradeFilter=(PACKS.find(p=>p.id===state.pack)?.grade||'6e'),deckSearch='',libraryLimit=35;
const getPacks=()=>[...PACKS,...(Array.isArray(state.custom)?state.custom:[])];
const getPack=id=>getPacks().find(p=>p.id===id)||getPacks()[0];
const activePack=()=>getPack(state.pack);
const level=()=>Math.floor(Math.max(0,state.xp)/150)+1;
const levelPart=()=>Math.max(0,state.xp)%150/150*100;
const earnedBadges=()=>BADGES.filter(([, ,f])=>f(state));
function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(e){console.warn('Storage unavailable');}updateHeader();}
function updateHeader(){const levelEl=$('#level-head');if(!levelEl)return;levelEl.textContent='LV '+level();$('#level-meter').style.width=levelPart()+'%';$('#xp-head').textContent=state.xp+' XP';$('#badge-head').textContent=earnedBadges().length;$('#avatar-head').textContent=state.avatar;$('#sound-btn').textContent=state.sound?'🔊':'🔇';}
let audioContext;
function tone(type='click'){if(!state.sound)return;try{audioContext??=new (window.AudioContext||window.webkitAudioContext)();const t=audioContext.currentTime;let notes=type==='win'?[523,659,784]:type==='wrong'?[252,180]:type==='correct'?[587,784]:[470];notes.forEach((hz,i)=>{const oscillator=audioContext.createOscillator(),gain=audioContext.createGain();oscillator.type='sine';oscillator.frequency.setValueAtTime(hz,t+i*.09);gain.gain.setValueAtTime(.0001,t+i*.09);gain.gain.exponentialRampToValueAtTime(.065,t+i*.09+.01);gain.gain.exponentialRampToValueAtTime(.0001,t+i*.09+.12);oscillator.connect(gain).connect(audioContext.destination);oscillator.start(t+i*.09);oscillator.stop(t+i*.09+.13);});}catch(e){}}
function confetti(){for(let i=0;i<32;i++){const d=document.createElement('i');d.className='spark';d.style.left=(30+Math.random()*40)+'vw';d.style.top='32vh';d.style.background=['#28e0ff','#ffda43','#ff54cf','#89ffbc'][i%4];d.style.setProperty('--dx',(-360+Math.random()*720)+'px');d.style.setProperty('--dy',(70+Math.random()*390)+'px');document.body.appendChild(d);setTimeout(()=>d.remove(),1050);}}
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2400);}
function award(points){const oldBadges=earnedBadges().length,oldLevel=level();state.xp+=points;save();if(level()>oldLevel){tone('win');toast('LEVEL UP! You reached level '+level()+'! ✨');confetti();}else if(earnedBadges().length>oldBadges){toast('New badge unlocked! 🏅');}}
function recordAnswer(ok,points=10){state.attempts++;if(ok){state.correct++;award(points);}else save();tone(ok?'correct':'wrong');}
function go(screen){clearChallengeTimer();view=screen;render();window.scrollTo({top:0,behavior:'smooth'});}
const modes=[['quest','Arcade Quests','🎮','quest'],['crossword','Crossword Lab','🧩','practice'],['booster','Booster Station','🎁','rewards'],['scramble','Letter Lab','🔠','challenge'],['memory','Flip Memory','🃏','practice'],['challenge','Challenge Mode','🏆','challenge'],['practice','Practice Zone','⚡','practice'],['story','Story Mode','📖','story'],['duel','2-Player Battle','👥','duel']];
const modeCards=()=>modes.map(([id,name,icon,img])=>`<button class="mode-card mode-${id}" data-action="mode" data-id="${id}" aria-label="Play ${esc(name)}"><span class="mode-icon">${icon}</span><h3>${esc(name)}</h3><span class="mode-visual"><img src="assets/${img}.webp" alt="" loading="lazy"></span><span class="play-tag">▶ PLAY</span></button>`).join('');
const totalEntries=()=>getPacks().reduce((n,p)=>n+p.words.length,0);
const uniqueWords=()=>new Set(getPacks().flatMap(p=>p.words.map(w=>normal(w.en)))).size;
const grades=[['6e','6e'],['5e','5e'],['4e','4e'],['3e','3e'],['extra','BONUS'],['all','ALL']];
const filteredPacks=()=>getPacks().filter(p=>(gradeFilter==='all'||p.grade===gradeFilter)&&(!deckSearch||[p.title,p.level,p.grade,p.focus||'',...p.words.flatMap(w=>[w.en,w.fr,w.example])].some(x=>normal(x).includes(normal(deckSearch)))));
const filterControls=()=>`<div class="grade-controls" role="group" aria-label="Choose your class level">${grades.map(([id,name])=>`<button type="button" class="grade-chip ${gradeFilter===id?'active':''}" aria-pressed="${gradeFilter===id}" data-action="grade" data-id="${id}">${name}</button>`).join('')}</div><label class="search-wrap">🔎 <input id="pack-search" aria-label="Search vocabulary in English or French" placeholder="Search a word, translation or theme..." value="${esc(deckSearch)}" autocomplete="off"></label>`;
const deckGrid=(selected=state.pack)=>`<div class="pack-explorer">${filterControls()}<div class="search-results">${filteredPacks().length} word worlds · ${filteredPacks().reduce((n,p)=>n+p.words.length,0)} entries shown</div><div class="deck-grid">${filteredPacks().map(p=>`<button class="deck-btn ${p.id===selected?'active':''}" data-action="pack" data-id="${esc(p.id)}" aria-pressed="${p.id===selected}"><span>${esc(p.emoji)}</span>${esc(p.title)}<small>${p.grade==='extra'?'BONUS':'YEAR '+p.grade+' · AXIS '+(p.axis===7?'FOCUS':p.axis)} · ${esc(p.level)}<br>${p.words.length} words</small></button>`).join('')||'<p class="muted">No matching words. Try another year or search.</p>'}</div></div>`;
const gameHead=(icon,title,subtitle,back='home')=>`<div class="game-head"><button class="soft-btn" data-action="back" data-id="${back}">← Back</button><span style="font-size:36px">${icon}</span><div><h1>${esc(title)}</h1><p>${esc(subtitle)}</p></div></div>`;
const sideArt=(name,title,desc)=>`<aside class="side-art ${name}-art"><div class="side-overlay"><b>${esc(title)}</b><p>${esc(desc)}</p></div></aside>`;
const nextActions=(action,label='CONTINUE →')=>`<div class="board-actions"><button class="action-btn" data-action="${action}">${label}</button></div>`;
function home(){const pack=activePack();return `<div class="screen"><section class="hero"><div class="hero-content"><span class="hero-kicker">✦ YOUR ENGLISH ADVENTURE ✦</span><h1>Play. Learn.<br><em>Level up!</em></h1><p>Explore 6e–3e vocabulary from the English curriculum. Solve crosswords, open boosters, play memory games and learn English!</p><button class="action-btn" data-action="mode" data-id="quest">▶ START PLAYING</button></div></section><div class="section-title"><h2>✦ CHOOSE YOUR GAME MODE ✦</h2></div><section class="mode-grid" aria-label="Game modes">${modeCards()}</section><section class="bottom-grid"><div class="panel"><div class="split"><div><h3>🌍 Choose your word world</h3><p>6e, 5e, 4e or 3e: pick a grade, theme or a word.</p></div><span class="tag">${getPacks().length} WORLDS · ${totalEntries()} ENTRIES</span></div>${deckGrid()}</div><div class="panel"><h3>✨ Your next mission</h3><div class="featured"><span class="featured-icon">${pack.emoji}</span><div><strong>${esc(pack.title)}</strong><p>${pack.words.length} words · ${esc(pack.level)} · 8-question quest</p><button class="action-btn" data-action="start-quest" data-id="${esc(pack.id)}">GO TO QUEST →</button></div></div><div class="spacer"></div><h3>🏅 Your adventure</h3><p>${Object.keys(state.quests).length} worlds completed · ${state.correct} answers mastered · ${earnedBadges().length} badges</p><div class="progress-mini"><i style="width:${Math.min(100,Object.keys(state.quests).length/getPacks().length*100)}%"></i></div><div class="board-actions"><button class="soft-btn" data-action="mode" data-id="booster">🎁 OPEN BOOSTERS (${boosterTickets()})</button><button class="soft-btn" data-action="mode" data-id="rewards">🏅 Rewards</button><button class="action-btn" data-action="mode" data-id="library">📚 WORD LIBRARY</button></div></div></section></div>`;}
function questMap(){return `<div class="screen">${gameHead('🎮','Arcade Quests','Explore curriculum-based word worlds from 6e to 3e.')}<div class="panel">${filterControls()}<p class="search-results">${filteredPacks().length} worlds available for this selection</p></div><div class="quest-grid">${filteredPacks().map((p,i)=>`<button class="quest-node" data-action="start-quest" data-id="${esc(p.id)}"><span class="node-stars">${state.quests[p.id]?'⭐⭐⭐':'☆☆☆'}</span><div class="emoji">${p.emoji}</div><h3>${esc(p.title)}</h3><p>${p.grade==='extra'?'BONUS':p.grade+' · AXIS '+(p.axis===7?'FOCUS':p.axis)} · ${esc(p.level)} · ${p.words.length} words</p><span class="tag" style="display:inline-block;margin-top:12px">${state.quests[p.id]?'REPLAY':'▶ PLAY QUEST'}</span></button>`).join('')||'<div class="panel"><p>No matching worlds. Clear your search or pick a different year.</p></div>'}</div><div class="panel" style="margin-top:17px"><b>💡 How to play</b><p>Answer eight vocabulary questions in English. Each world contains contextualised sentences. Revisit the words in Practice Zone and Word Library.</p></div></div>`;}
function generateQuestion(pack,forcedKind,forcedWord){const words=pack.words;const word=forcedWord||sample(words,1)[0];const kind=forcedKind||sample(['en-fr','fr-en','gap'],1)[0];let title,tip,answer,options;
 if(kind==='en-fr'){title=`What does “${word.en}” mean?`;tip='Choose the French translation.';answer=word.fr;options=sample(words.filter(w=>w.fr!==answer).map(w=>w.fr),3).concat(answer);}
 else if(kind==='fr-en'){title=`How do you say “${word.fr}” in English?`;tip='Pick the English word or expression.';answer=word.en;options=sample(words.filter(w=>w.en!==answer).map(w=>w.en),3).concat(answer);}
 else{const reg=new RegExp(word.en.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'i');if(!reg.test(word.example))return generateQuestion(pack,'en-fr',word);title=word.example.replace(reg,'_____');tip='Complete the sentence.';answer=word.en;options=sample(words.filter(w=>w.en!==answer).map(w=>w.en),3).concat(answer);}
 return {word,kind,title,tip,answer,options:shuffle(options)};}
function startQuest(packId){state.pack=getPack(packId).id;save();startQuiz('quest');}
function startQuiz(type){clearChallengeTimer();const pack=activePack();session={type,pack:pack.id,round:0,total:type==='duel'?10:type==='quest'?8:12,score:0,scores:[0,0],asked:[],answered:false,answer:null,done:false,seconds:type==='challenge'?60:null};session.question=nextSessionQuestion(pack);go('quiz');if(type==='challenge')startChallengeTimer();}
function nextSessionQuestion(pack){const remaining=pack.words.filter(w=>!session.asked.includes(w.en));if(remaining.length===0)session.asked=[];const word=sample(pack.words.filter(w=>!session.asked.includes(w.en)),1)[0];session.asked.push(word.en);return generateQuestion(pack,undefined,word);}
function startChallengeTimer(){clearChallengeTimer();challengeTimer=setInterval(()=>{if(!session||session.type!=='challenge'||view!=='quiz'){clearChallengeTimer();return;}session.seconds--;const timer=$('#timer');if(timer){timer.textContent=`⏱ ${session.seconds}s`;if(session.seconds<11)timer.style.color='var(--red)';}if(session.seconds<=0)endSession();},1000);}
function clearChallengeTimer(){if(challengeTimer){clearInterval(challengeTimer);challengeTimer=null;}}
function answerQuiz(value){if(!session||session.answered||session.done)return;const correct=value===session.question.answer;session.answered=true;session.answer=value;if(correct){session.score++;if(session.type==='duel')session.scores[session.round%2]++;else recordAnswer(true);}else if(session.type!=='duel')recordAnswer(false);else tone('wrong');render();}
function nextQuiz(){if(!session||!session.answered)return;session.round++;if(session.round>=session.total){endSession();return;}session.answered=false;session.answer=null;session.question=nextSessionQuestion(getPack(session.pack));render();}
function endSession(){if(!session||session.done)return;clearChallengeTimer();session.done=true;if(session.type==='quest'){state.quests[session.pack]=Math.max(state.quests[session.pack]||0,session.score);save();if(session.score>=6){award(35);confetti();tone('win');}}if(session.type==='challenge'){state.challengeWins++;save();if(session.score>=6){award(30);confetti();tone('win');}}if(session.type==='duel')confetti();render();}
function quiz(){if(!session)return home();if(session.done)return finishScreen();const {type,round,total,score,question,answered,answer,seconds}=session;const duel=type==='duel',count=round+1;return `<div class="screen">${gameHead(type==='quest'?'🎮':type==='challenge'?'🏆':'👥',type==='quest'?'Arcade Quest':type==='challenge'?'Challenge Mode':'2-Player Battle',esc(getPack(session.pack).title)+' · '+(duel?'Pass the device after each turn':type==='challenge'?'60-second timed challenge':'Complete the mission'),type==='quest'?'quest':'home')}<div class="game-layout"><div class="game-board">${duel?`<div class="duel-score"><div class="player">🔵 PLAYER 1<strong>${session.scores[0]}</strong></div><span class="vs">VS</span><div class="player two">🔴 PLAYER 2<strong>${session.scores[1]}</strong></div></div>`:''}<div class="board-top"><span class="tag">${duel?`🎮 PLAYER ${round%2+1}`:type==='quest'?`🌍 ${esc(getPack(session.pack).title)}`:'⚡ SPEED ROUND'}</span><span class="tag" id="timer">${type==='challenge'?'⏱ '+seconds+'s':`QUESTION ${count} / ${total}`}</span><span class="tag">${duel?'TEAM SCORE':`⭐ ${score} CORRECT`}</span></div><div class="meter"><i style="width:${Math.round(round/total*100)}%"></i></div><div class="question-kicker">${esc(question.tip)}</div><h2 class="question-title">${esc(question.title)}</h2><div class="answers">${question.options.map((opt,i)=>{const cls=answered?(opt===question.answer?'correct':opt===answer?'wrong':''):'';return `<button class="answer-btn ${cls}" data-action="answer" data-value="${esc(opt)}" ${answered?'disabled':''}><span class="letter">${'ABCD'[i]}</span>${esc(opt)}</button>`;}).join('')}</div>${answered?`<div class="feedback ${answer===question.answer?'good':'bad'}">${answer===question.answer?'✅ Amazing! Correct answer!':'💡 Not quite. The correct answer is: '+esc(question.answer)}<div class="context-sentence">💬 ${esc(question.word.example||'')}</div><button class="soft-btn" data-action="speak" data-value="${esc(question.word.example||question.word.en)}">🔊 Hear the example</button></div>${nextActions('next-quiz',count===total?'SEE RESULTS →':'NEXT QUESTION →')}`:''}</div>${sideArt(type==='quest'?'quest':type==='duel'?'duel':'challenge',duel?'Take turns!':type==='quest'?'World '+(getPacks().findIndex(p=>p.id===session.pack)+1):'Beat the clock!',duel?'One device, two players and ten turns.':type==='quest'?'Look for meanings and complete sentences.':'Answer as many questions as possible in 60 seconds.')}</div></div>`;}
function finishScreen(){const {type,score,total,scores}=session;const title=type==='duel'?(scores[0]===scores[1]?'It’s a draw!':`Player ${scores[0]>scores[1]?1:2} wins!`):score>=Math.ceil(total*.65)?'Mission complete!':'Keep practising!';return `<div class="screen">${gameHead('🏅','Results','One game finished. Many more adventures ahead!')}<div class="game-board center"><div class="finish-icon">${score>=Math.ceil(total*.65)||type==='duel'?'🏆':'✨'}</div><div class="finish-heading">${esc(title)}</div>${type==='duel'?`<h2>🔵 ${scores[0]} — ${scores[1]} 🔴</h2><p>Great team challenge. Try another word world!</p>`:`<h2 style="font:800 39px var(--title)">${score} / ${total} correct</h2><p>Every attempt helps you remember more English.</p>`}<div class="board-actions" style="justify-content:center"><button class="action-btn" data-action="replay">↻ PLAY AGAIN</button><button class="soft-btn" data-action="mode" data-id="home">⌂ HOME</button><button class="soft-btn" data-action="mode" data-id="practice">⚡ PRACTICE</button></div></div></div>`;}
function challengeLanding(){return `<div class="screen">${gameHead('🏆','Challenge Mode','One minute. Twelve questions. How far can you go?')}<div class="game-layout"><div class="game-board center"><p class="mini-kicker">⚡ THE 60-SECOND CHALLENGE ⚡</p><div style="font-size:82px">⏱️</div><h2 class="question-title">Ready to race the clock?</h2><p class="muted">12 questions · ${esc(activePack().title)} · English words, meanings and sentences.</p><div class="board-actions" style="justify-content:center"><button class="action-btn" data-action="start-challenge">▶ START CHALLENGE</button><button class="soft-btn" data-action="mode" data-id="practice">Practise first</button></div></div>${sideArt('challenge','Quick thinking!','The timer starts when you press Start. Wrong answers help you learn too.')}</div><div class="panel" style="margin-top:17px"><h3>Pick your challenge world</h3>${deckGrid()}</div></div>`;}
function flashCard(){const pack=activePack(),word=pack.words[practiceIndex%pack.words.length];const key=pack.id+':'+word.en;return `<button class="flashcard" data-action="flip"><span class="emoji">${flipped?'💬':esc(word.emoji||'✨')}</span><strong>${esc(flipped?word.fr:word.en)}</strong><small>${flipped?esc(word.example||'Think of an example sentence.'):'TAP TO REVEAL THE MEANING'}</small></button><div class="split" style="margin-top:16px"><span class="tag">CARD ${practiceIndex%pack.words.length+1} / ${pack.words.length}</span><div class="flex"><button class="soft-btn" data-action="speak" data-value="${esc(word.en)}">🔊 Listen</button><button class="soft-btn" data-action="known" data-value="${esc(key)}" ${state.known[key]?'disabled':''}>${state.known[key]?'✓ Known':'✓ I know it'}</button><button class="action-btn" data-action="next-flash">NEXT →</button></div></div>`;}
function initPractice(){practiceTab='flash';flipped=false;practiceIndex=0;practiceAnswered=false;practiceFeedback='';matchGame=null;go('practice');}
function nextPractice(){practiceIndex++;practiceAnswered=false;practiceFeedback='';flipped=false;render();}
function currentPracticeWord(){return activePack().words[practiceIndex%activePack().words.length];}
function practice(){const tabs=[['flash','🃏 Flashcards'],['listen','🎧 Listening'],['spell','⌨️ Spelling'],['match','🧩 Word Match']];let area='';const pack=activePack();
 if(practiceTab==='flash')area=flashCard();
 if(practiceTab==='listen'){const qWord=currentPracticeWord();let choices=practiceChoice(qWord);area=`<p class="question-kicker">LISTEN AND CHOOSE</p><h2 class="question-title">Which word do you hear?</h2><button class="action-btn" data-action="speak" data-value="${esc(qWord.en)}">🔊 PLAY THE WORD</button><div class="spacer"></div><div class="answers">${choices.map((w,i)=>`<button class="answer-btn ${practiceAnswered?(w===qWord.en?'correct':w===practiceFeedback?'wrong':''):''}" data-action="listen-choice" data-value="${esc(w)}" ${practiceAnswered?'disabled':''}><span class="letter">${'ABCD'[i]}</span>${esc(w)}</button>`).join('')}</div>${practiceAnswered?`<div class="feedback">${practiceFeedback===qWord.en?'✅ Well done!':'💡 You heard: '+esc(qWord.en)}</div>${nextActions('next-practice','NEXT WORD →')}`:''}`;}
 if(practiceTab==='spell'){const qWord=currentPracticeWord();area=`<p class="question-kicker">TRANSLATE INTO ENGLISH</p><h2 class="question-title">${esc(qWord.fr)}</h2><p class="muted">Write the English word or expression.</p><form id="spell-form"><input class="input-answer" id="spell-input" name="answer" placeholder="Type your answer..." autocomplete="off" spellcheck="false" ${practiceAnswered?'disabled':''} aria-label="English answer"><div class="board-actions"><button type="submit" class="action-btn" ${practiceAnswered?'disabled':''}>CHECK ✓</button><button type="button" class="soft-btn" data-action="speak" data-value="${esc(qWord.en)}">🔊 Listen</button></div></form>${practiceAnswered?`<div class="feedback ${normal(practiceFeedback)===normal(qWord.en)?'good':'bad'}">${normal(practiceFeedback)===normal(qWord.en)?'✅ Brilliant!':'💡 Correct spelling: '+esc(qWord.en)}</div>${nextActions('next-practice','NEXT WORD →')}`:''}`;}
 if(practiceTab==='match'){if(!matchGame||matchGame.pack!==pack.id)prepareMatch();const m=matchGame;area=`<p class="question-kicker">FIND THE PAIRS</p><h2 class="question-title">Connect English with French!</h2><p class="muted">Select one English word and its matching translation.</p><div class="two-col"><div>${m.english.map(w=>`<button style="display:block;width:100%;margin:0 0 9px" class="answer-btn ${m.left===w?'correct':''}" ${m.found.includes(w)?'disabled':''} data-action="match-left" data-value="${esc(w)}">${m.found.includes(w)?'✓ ':''}${esc(w)}</button>`).join('')}</div><div>${m.french.map(w=>`<button style="display:block;width:100%;margin:0 0 9px" class="answer-btn ${m.right===w?'correct':''}" ${m.found.includes(m.mapping[w])?'disabled':''} data-action="match-right" data-value="${esc(w)}">${m.found.includes(m.mapping[w])?'✓ ':''}${esc(w)}</button>`).join('')}</div></div><div class="feedback ${practiceFeedback==='Correct pair!'?'good':''}">${m.found.length}/4 pairs ${practiceFeedback?'· '+esc(practiceFeedback):''}</div>${m.found.length===4?nextActions('new-match','NEW PAIRS →'):''}`;}
 return `<div class="screen">${gameHead('⚡','Practice Zone','No pressure. Take your time and build your vocabulary!')}<div class="tabs" role="tablist">${tabs.map(([id,label])=>`<button class="tab ${id===practiceTab?'active':''}" role="tab" aria-selected="${id===practiceTab}" data-action="practice-tab" data-id="${id}">${label}</button>`).join('')}</div><div class="game-layout"><div class="game-board"><div class="split"><span class="tag">${esc(pack.emoji)} ${esc(pack.title)}</span><span class="tag">${pack.words.length} WORDS</span></div><div class="spacer"></div>${area}</div>${sideArt('practice','Learn at your pace','See it, hear it, write it and use it. A little practice every day makes a difference.')}</div><div class="panel" style="margin-top:18px"><h3>📦 Change vocabulary pack</h3>${deckGrid()}</div></div>`;}
const practiceOptions={};
function practiceChoice(word){const key=activePack().id+':'+word.en;if(!practiceOptions[key])practiceOptions[key]=shuffle([word.en,...sample(activePack().words.filter(w=>w.en!==word.en).map(w=>w.en),3)]);return practiceOptions[key];}
function checkSpelling(value){if(practiceAnswered)return;const ok=normal(value)===normal(currentPracticeWord().en);practiceAnswered=true;practiceFeedback=value;recordAnswer(ok,8);render();}
function listenChoice(value){if(practiceAnswered)return;const ok=value===currentPracticeWord().en;practiceAnswered=true;practiceFeedback=value;recordAnswer(ok,8);render();}
function prepareMatch(){const words=sample(activePack().words,4);matchGame={pack:state.pack,english:shuffle(words.map(w=>w.en)),french:shuffle(words.map(w=>w.fr)),mapping:Object.fromEntries(words.map(w=>[w.fr,w.en])),left:null,right:null,found:[]};practiceFeedback='';}
function handleMatch(side,value){if(!matchGame)return;matchGame[side]=value;if(matchGame.left!==null&&matchGame.right!==null){const ok=matchGame.mapping[matchGame.right]===matchGame.left;practiceFeedback=ok?'Correct pair!':'Try another pair!';if(ok){matchGame.found.push(matchGame.left);recordAnswer(true,5);}else tone('wrong');matchGame.left=null;matchGame.right=null;if(matchGame.found.length===4){confetti();tone('win');}}render();}
function stories(){return `<div class="screen">${gameHead('📖','Story Mode','Learn English inside interactive adventures.')}<div class="story-list">${STORIES.map(s=>`<button class="story-choice" data-action="start-story" data-id="${s.id}"><div class="story-img"></div><div class="story-info"><div class="split"><span style="font-size:33px">${s.emoji}</span><span class="tag">${state.stories[s.id]?'✓ FINISHED':'4 SCENES'}</span></div><h3>${esc(s.name)}</h3><p>${esc(s.subtitle)}</p><strong style="color:var(--green)">OPEN THE STORY →</strong></div></button>`).join('')}</div></div>`;}
function storyPlay(){const s=STORIES.find(x=>x.id===storySession?.id);if(!s)return stories();if(storySession.done)return `<div class="screen">${gameHead('📖',s.name,'The end of the chapter.')}<div class="game-board center"><div class="finish-icon">🌟</div><h2 class="finish-heading">Story complete!</h2><p>Great reading and amazing vocabulary choices!</p><div class="board-actions" style="justify-content:center"><button class="action-btn" data-action="mode" data-id="story">MORE STORIES →</button><button class="soft-btn" data-action="mode" data-id="home">HOME</button></div></div></div>`;const step=s.steps[storySession.step];return `<div class="screen">${gameHead(s.emoji,s.name,s.subtitle,'story')}<div class="game-layout"><div class="game-board"><div class="split"><span class="tag">📖 SCENE ${storySession.step+1} / ${s.steps.length}</span><span class="tag">INTERACTIVE STORY</span></div><div class="meter"><i style="width:${storySession.step/s.steps.length*100}%"></i></div><div class="learn-card"><h3>${s.emoji} Chapter ${storySession.step+1}</h3><p>${esc(step.text)}</p><button class="soft-btn" data-action="speak" data-value="${esc(step.text)}">🔊 Read aloud</button></div><h2 class="question-title" style="font-size:27px">${esc(step.question)}</h2><div class="answers">${step.options.map((option,i)=>`<button class="answer-btn ${storySession.answered?(i===step.correct?'correct':i===storySession.choice?'wrong':''):''}" ${storySession.answered?'disabled':''} data-action="story-choice" data-index="${i}">${esc(option)}</button>`).join('')}</div>${storySession.answered?`<div class="feedback ${storySession.choice===step.correct?'good':'bad'}">${storySession.choice===step.correct?'✅ '+esc(step.note):'💡 '+esc(step.note)}</div>${nextActions('story-next',storySession.step===s.steps.length-1?'FINISH STORY →':'NEXT SCENE →')}`:''}</div>${sideArt('story',s.name,'Read carefully, choose the best answer and follow the adventure.')}</div></div>`;}
function startStory(id){const s=STORIES.find(x=>x.id===id);if(!s)return;storySession={id,step:0,answered:false,choice:null,done:false};go('storyplay');}
function storyChoice(index){if(!storySession||storySession.answered)return;const s=STORIES.find(x=>x.id===storySession.id);storySession.answered=true;storySession.choice=index;recordAnswer(index===s.steps[storySession.step].correct,15);render();}
function nextStory(){if(!storySession||!storySession.answered)return;const s=STORIES.find(x=>x.id===storySession.id);storySession.step++;storySession.answered=false;storySession.choice=null;if(storySession.step>=s.steps.length){storySession.done=true;if(!state.stories[s.id]){state.stories[s.id]=true;save();award(55);}tone('win');confetti();}render();}
function duelLanding(){return `<div class="screen">${gameHead('👥','2-Player Battle','An offline vocabulary duel — share one screen!')}<div class="game-layout"><div class="game-board center"><div style="font-size:78px">🎮 🆚 🎮</div><h2 class="question-title">Player 1 vs Player 2</h2><p class="muted">Ten questions, alternating turns. Every correct answer earns a point. Take turns using the same device; no accounts or internet needed.</p><div class="board-actions" style="justify-content:center"><button class="action-btn" data-action="start-duel">▶ START LOCAL BATTLE</button></div></div>${sideArt('duel','Friendly face-off','Perfect for pair work: practise vocabulary together, one turn at a time.')}</div><div class="panel" style="margin-top:18px"><h3>Pick your battle world</h3>${deckGrid()}</div></div>`;}
function rewards(){return `<div class="screen">${gameHead('🎁','Rewards & Avatar','Create your arcade identity and unlock new companions.')}<div class="panel"><h3>🎭 Choose your avatar</h3><p>Express yourself! All avatars are free.</p><div class="reward-grid">${AVATARS.map((a,i)=>`<button class="reward-card ${state.avatar===a?'selected':''}" data-action="avatar" data-value="${a}"><span class="emoji">${a}</span>Hero ${i+1}<small>${state.avatar===a?'✓ Selected':'Tap to select'}</small></button>`).join('')}</div></div><div class="panel" style="margin-top:18px"><h3>🐾 Choose a companion</h3><p>Unlock friendly companions as your XP grows. No purchases.</p><div class="reward-grid">${PETS.map(([e,name,req])=>`<button class="reward-card ${state.pet===e?'selected':''}" data-action="pet" data-value="${e}" ${state.xp<req?'disabled':''}><span class="emoji">${state.xp>=req?e:'🔒'}</span>${esc(name)}<small>${state.xp<req?'Unlock at '+req+' XP':state.pet===e?'✓ Selected':'Available'}</small></button>`).join('')}</div></div><div class="panel" style="margin-top:18px"><h3>🏅 Your badges (${earnedBadges().length}/${BADGES.length})</h3><div class="badges-grid">${BADGES.map(([e,name,fn,description])=>`<div class="badge-tile ${fn(state)?'earned':''}"><span class="emoji">${fn(state)?e:'🔒'}</span><b>${esc(name)}</b><small>${esc(description)}</small></div>`).join('')}</div></div></div>`;}
function speak(text){if(!('speechSynthesis' in window)){toast('Speech playback is unavailable in this browser.');return;}try{window.speechSynthesis.cancel();const utter=new SpeechSynthesisUtterance(text);utter.lang='en-GB';utter.rate=.84;utter.pitch=1;utter.volume=1;const voices=window.speechSynthesis.getVoices();const english=voices.find(v=>v.lang.toLowerCase().startsWith('en-gb'))||voices.find(v=>v.lang.toLowerCase().startsWith('en'));if(english)utter.voice=english;window.speechSynthesis.speak(utter);}catch(e){toast('Audio could not start.');}}
function openTeacher(){const modal=$('#modal-root');modal.hidden=false;modal.innerHTML=`<section class="modal" role="dialog" aria-modal="true" aria-label="Teacher studio"><button class="soft-btn modal-close" data-action="close-modal">✕ Close</button><h2>✏️ Teacher Studio</h2><p>Make your own vocabulary pack. This stays <strong>on this browser only</strong> — no student accounts, no server, no tracking.</p><label for="pack-title">New pack name</label><input id="pack-title" maxlength="45" value="My Class Vocabulary" placeholder="e.g. Halloween Words"><label for="pack-lines">Vocabulary — one word per line</label><textarea id="pack-lines" spellcheck="false" placeholder="pumpkin;citrouille;The pumpkin is orange.&#10;costume;déguisement;My costume is colourful.&#10;haunted house;maison hantée;The haunted house is spooky."></textarea><p class="help-text">Format: <code>English;French;Example sentence</code>. At least 4 words, up to 60 per pack. Examples are optional. Separate fields with semicolons.</p><div class="board-actions"><button class="action-btn" data-action="import-pack">＋ CREATE MY PACK</button><button class="soft-btn" data-action="close-modal">CANCEL</button></div>${state.custom.length?`<div class="spacer"></div><h3>Your local packs</h3>${state.custom.map(p=>`<div class="split learn-card"><span>${esc(p.title)} (${p.words.length} words)</span><button class="soft-btn" data-action="delete-pack" data-id="${esc(p.id)}">Delete</button></div>`).join('')}`:''}<p class="help-text">Tip: to use the same pack on several devices, create it separately on each device, or edit the data in <code>app.js</code> before publishing. Teacher packs are saved in local browser storage.</p></section>`;$('#pack-title').focus();}
function closeTeacher(){const modal=$('#modal-root');modal.hidden=true;modal.innerHTML='';}
function importPack(){const title=$('#pack-title')?.value.trim()||'',raw=$('#pack-lines')?.value||'';if(title.length<2||title.length>45){toast('Please choose a pack name (2–45 characters).');return;}const lines=raw.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);if(lines.length<4||lines.length>60){toast('Use between 4 and 60 vocabulary lines.');return;}const words=[];for(let i=0;i<lines.length;i++){const fields=lines[i].split(';').map(t=>t.trim());if(fields.length<2||!fields[0]||!fields[1]||fields[0].length>65||fields[1].length>90){toast('Check line '+(i+1)+': English;French;Example.');return;}words.push({en:fields[0],fr:fields[1],emoji:'✨',example:fields[2]||`I can use the word ${fields[0]} in a sentence.`});}
 if(new Set(words.map(w=>normal(w.en))).size!==words.length||new Set(words.map(w=>normal(w.fr))).size!==words.length){toast('Each word and translation must be unique in a pack.');return;}
 const id='custom-'+Date.now();state.custom.push({id,title,emoji:'🪄',level:'YOUR CLASS',grade:'extra',axis:0,words});state.pack=id;gradeFilter='extra';deckSearch='';save();closeTeacher();go('home');toast('Your custom pack is ready! ✨');}
function deletePack(id){state.custom=state.custom.filter(p=>p.id!==id);if(state.pack===id)state.pack='curr-6-1';save();closeTeacher();openTeacher();toast('Custom pack deleted.');}
function wordLibrary(){const packs=filteredPacks();const query=normal(deckSearch);const entries=packs.flatMap(p=>p.words.filter(w=>!query||[w.en,w.fr,w.example].some(x=>normal(x).includes(query))).map(w=>({pack:p,w})));const seen=new Set();const unique=entries.filter(({w})=>{const key=normal(w.en);if(seen.has(key))return false;seen.add(key);return true;});const current=unique.slice(0,libraryLimit);return `<div class="screen">${gameHead('📚','Word Library','Search, hear, and review English words from the 2025 collège curriculum.')}<div class="panel"><div class="split"><div><h3>🔍 Explore your vocabulary</h3><p>Filter by class level and type a word in English or French.</p></div><span class="tag">${uniqueWords()} UNIQUE WORDS IN ARCADE</span></div>${filterControls()}<p class="search-results">${unique.length} distinct English terms in this selection · ${totalEntries()} entries in total</p></div><div class="library-grid">${current.map(({pack:p,w})=>{const key=p.id+':'+w.en;return `<article class="word-tile"><div class="split"><span class="tag">${p.emoji} ${p.grade==='extra'?'BONUS':p.grade}</span><span class="small muted">${esc(p.title)}</span></div><h3>${esc(w.en)}</h3><p class="translation">${esc(w.fr)}</p><p class="example">“${esc(w.example)}”</p><div class="flex"><button class="soft-btn" data-action="speak" data-value="${esc(w.example)}">🔊 Listen</button><button class="soft-btn" data-action="known" data-value="${esc(key)}" ${state.known[key]?'disabled':''}>${state.known[key]?'✓ Known':'✓ I know this'}</button></div></article>`;}).join('')||'<div class="panel"><p>No results. Try searching another word or changing class level.</p></div>'}</div>${libraryLimit<unique.length?`<div class="board-actions center" style="justify-content:center"><button class="action-btn" data-action="more-words">＋ SHOW MORE WORDS (${libraryLimit} / ${unique.length})</button></div>`:''}<p class="help-text">The decks are an original pedagogical selection based on official themes, not an exhaustive official vocabulary list. English pronunciation uses your browser's speech voices.</p></div>`;}
/* V3: original crossword, word scramble, matching memory and free collectible word boosters. */
let crosswordState=null, scrambleSession=null, memorySession=null, boosterSession=null, albumLimit=36;
state.boostersOpened=Number.isFinite(state.boostersOpened)?state.boostersOpened:0;
state.cards=state.cards&&typeof state.cards==='object'?state.cards:{};
state.crosswordWins=state.crosswordWins&&typeof state.crosswordWins==='object'?state.crosswordWins:{};
const boosterTickets=()=>Math.max(0,1+Math.floor(Math.max(0,state.xp)/120)-state.boostersOpened);
const allCollectibleWords=()=>{
 const seen=new Set();return getPacks().flatMap(p=>p.words.map(w=>({p,w}))).filter(({w})=>{
 const id=normal(w.en);if(!id||seen.has(id))return false;seen.add(id);return true;
 });
};
function crosswordWords(pack){
 let eligible=pack.words.filter(w=>/^[a-z]{3,12}$/i.test(w.en));
 if(eligible.length<8)eligible=getPacks().filter(p=>p.grade===pack.grade).flatMap(p=>p.words).filter(w=>/^[a-z]{3,12}$/i.test(w.en));
 const seen=new Set();return shuffle(eligible).filter(w=>{const name=normal(w.en);if(seen.has(name))return false;seen.add(name);return true;});
}
function buildCrossword(pack){
 const size=17,pool=crosswordWords(pack),grid=Array.from({length:size},()=>Array(size).fill(''));
 const dirs=Array.from({length:size},()=>Array.from({length:size},()=>new Set()));
 const entries=[];
 const inside=(r,c)=>r>=0&&c>=0&&r<size&&c<size;
 const empty=(r,c)=>!inside(r,c)||!grid[r][c];
 function fits(word,row,col,direction,first=false){
  let crosses=0;
  const dr=direction==='down'?1:0,dc=direction==='across'?1:0;
  if(!inside(row,col)||!inside(row+dr*(word.length-1),col+dc*(word.length-1)))return -1;
  if(!empty(row-dr,col-dc)||!empty(row+dr*word.length,col+dc*word.length))return -1;
  for(let i=0;i<word.length;i++){
   const r=row+dr*i,c=col+dc*i,here=grid[r][c];
   if(here){if(here!==word[i]||dirs[r][c].has(direction))return -1;crosses++;}
   else if(direction==='across'){
    if(!empty(r-1,c)||!empty(r+1,c))return -1;
   } else if(!empty(r,c-1)||!empty(r,c+1))return -1;
  }
  return !first&&crosses===0?-1:crosses;
 }
 function insert(w,r,c,d){
  const word=w.en.toUpperCase(),dr=d==='down'?1:0,dc=d==='across'?1:0;
  for(let i=0;i<word.length;i++){const rr=r+dr*i,cc=c+dc*i;grid[rr][cc]=word[i];dirs[rr][cc].add(d);}
  entries.push({en:w.en,fr:w.fr,word,row:r,col:c,dir:d});
 }
 if(pool.length<4)return null;
 const chosen=sample(pool.filter(w=>w.en.length<=11),1)[0];
 if(!chosen)return null;
 const first=chosen.en.toUpperCase(),row=8,col=Math.floor((size-first.length)/2);
 insert(chosen,row,col,'across');
 const unused=pool.filter(w=>w!==chosen);
 for(const w of unused){
  if(entries.length>=10)break;
  const word=w.en.toUpperCase(),candidates=[];
  for(let rr=0;rr<size;rr++)for(let cc=0;cc<size;cc++)if(grid[rr][cc]){
   const ixs=[];for(let i=0;i<word.length;i++)if(word[i]===grid[rr][cc])ixs.push(i);
   for(const i of ixs)for(const d of ['across','down']){
    if(![...dirs[rr][cc]].some(x=>x!==d))continue;
    const startRow=rr-(d==='down'?i:0),startCol=cc-(d==='across'?i:0);
    const crosses=fits(word,startRow,startCol,d);
    if(crosses>0)candidates.push({r:startRow,c:startCol,d,score:crosses*100-Math.abs(startRow-8)-Math.abs(startCol-8)});
   }
  }
  if(!candidates.length)continue;
  candidates.sort((a,b)=>b.score-a.score);
  const best=sample(candidates.slice(0,Math.min(3,candidates.length)),1)[0];
  insert(w,best.r,best.c,best.d);
 }
 if(entries.length<4)return null;
 const seen=new Map();let number=0;
 entries.slice().sort((a,b)=>a.row-b.row||a.col-b.col).forEach(x=>{
  const k=x.row+'-'+x.col;if(!seen.has(k))seen.set(k,++number);x.no=seen.get(k);
 });
 let rmin=size-1,rmax=0,cmin=size-1,cmax=0;
 entries.forEach(e=>{for(let i=0;i<e.word.length;i++){
  const r=e.row+(e.dir==='down'?i:0),c=e.col+(e.dir==='across'?i:0);
  rmin=Math.min(rmin,r);rmax=Math.max(rmax,r);cmin=Math.min(cmin,c);cmax=Math.max(cmax,c);
 }});
 return {pack:pack.id,grid,entries,seen,values:{},done:false,hints:0,rmin,rmax,cmin,cmax};
}
function startCrossword(){
 let candidate=null;
 for(let tries=0;tries<7;tries++){
  const x=buildCrossword(activePack());
  if(x&&(!candidate||x.entries.length>candidate.entries.length))candidate=x;
  if(candidate?.entries.length>=7)break;
 }
 crosswordState=candidate;
 go('crossword');
}
function crosswordScreen(){
 const c=crosswordState,pack=activePack();
 if(!c)return `<div class="screen">${gameHead('🧩','Crossword Challenge','Choose another word world to make a crossword.')}<div class="panel"><p>We need more short, single-word terms for this world.</p>${deckGrid()}<button class="action-btn" data-action="new-crossword">GENERATE GRID</button></div></div>`;
 const cols=c.cmax-c.cmin+1,nums=c.seen;
 let cells='';
 for(let r=c.rmin;r<=c.rmax;r++)for(let x=c.cmin;x<=c.cmax;x++){
  const letter=c.grid[r][x],key=r+'-'+x;
  if(!letter){cells+='<span class="cw-blank" aria-hidden="true"></span>';continue;}
  cells+=`<label class="cw-cell">${nums.has(key)?`<small>${nums.get(key)}</small>`:''}<input class="cw-input" type="text" maxlength="1" inputmode="text" autocapitalize="characters" autocomplete="off" data-key="${key}" data-row="${r}" data-col="${x}" aria-label="Crossword cell row ${r-c.rmin+1}, column ${x-c.cmin+1}" value="${esc(c.values[key]||'')}" ${c.done?'disabled':''}></label>`;
 }
 const clues=type=>c.entries.filter(e=>e.dir===type).sort((a,b)=>a.no-b.no).map(e=>`<li><strong>${e.no}.</strong> ${esc(e.fr)} <span class="muted">(${e.word.length})</span></li>`).join('');
 return `<div class="screen">${gameHead('🧩','Crossword Challenge',`${pack.title} · Translate the French clues into English.`)}<div class="panel"><div class="split"><span class="tag">${c.entries.length} CROSSING WORDS</span><span class="tag">${c.hints} HINTS</span></div><div class="crossword-layout"><div class="cw-scroll"><div class="cw-grid" style="--cw-cols:${cols}">${cells}</div></div><div class="cw-clues"><h3>➡️ Across</h3><ol>${clues('across')}</ol><h3>⬇️ Down</h3><ol>${clues('down')}</ol></div></div>${c.done?`<div class="feedback good">🎉 Completed! All your English answers are correct.</div>`:`<p class="help-text">Type one letter per square. Words cross in shared squares. Use the French clues to find the English words.</p>`}<div class="board-actions"><button class="action-btn" data-action="check-crossword" ${c.done?'disabled':''}>✓ CHECK WORDS</button><button class="soft-btn" data-action="hint-crossword" ${c.done?'disabled':''}>💡 REVEAL A LETTER</button><button class="soft-btn" data-action="new-crossword">↻ NEW GRID</button></div></div><div class="panel" style="margin-top:18px"><h3>Change the crossword world</h3>${deckGrid()}</div></div>`;
}
function checkCrossword(){
 const c=crosswordState;if(!c||c.done)return;
 let correct=true;
 for(let r=c.rmin;r<=c.rmax;r++)for(let col=c.cmin;col<=c.cmax;col++){
  if(!c.grid[r][col])continue;
  const k=r+'-'+col,ok=c.values[k]===c.grid[r][col];if(!ok)correct=false;
  const input=$(`.cw-input[data-key="${k}"]`);if(input)input.classList.toggle('incorrect',!ok&&Boolean(c.values[k]));
 }
 if(!correct){tone('wrong');toast('Not yet! Check the highlighted letters and finish the empty squares.');return;}
 c.done=true;
 const firstWin=!state.crosswordWins[c.pack];state.crosswordWins[c.pack]=true;save();
 if(firstWin)award(45);tone('win');confetti();toast(firstWin?'Crossword solved! +45 XP':'Crossword solved!');render();
}
function hintCrossword(){
 const c=crosswordState;if(!c||c.done)return;
 const wrong=[];
 for(let r=c.rmin;r<=c.rmax;r++)for(let col=c.cmin;col<=c.cmax;col++){
  if(c.grid[r][col]&&c.values[r+'-'+col]!==c.grid[r][col])wrong.push([r,col]);
 }
 if(!wrong.length){checkCrossword();return;}
 const [r,col]=sample(wrong,1)[0];c.values[r+'-'+col]=c.grid[r][col];c.hints++;render();
}
function scramblePool(){
 const pack=activePack();let words=pack.words.filter(w=>/^[A-Za-z]{4,12}$/.test(w.en));
 if(words.length<6)words=getPacks().filter(p=>p.grade===pack.grade).flatMap(p=>p.words).filter(w=>/^[A-Za-z]{4,12}$/.test(w.en));
 return sample(words.filter((w,i,a)=>a.findIndex(v=>v.en===w.en)===i),10);
}
function scrambleLetters(word){let letters=word.toUpperCase().split(''),attempt=0,s=letters.join('');while(s===word.toUpperCase()&&attempt++<15)s=shuffle(letters).join('');return s;}
function startScramble(){const words=scramblePool();if(!words.length){toast('Please choose a different word world.');return;}scrambleSession={pack:activePack().id,words,round:0,score:0,answered:false,guess:'',letters:scrambleLetters(words[0].en),done:false};go('scramble');}
function scrambleScreen(){
 const s=scrambleSession;if(!s)return `<div class="screen">${gameHead('🔠','Letter Lab','Unscramble vocabulary words.')}<button class="action-btn" data-action="new-scramble">START</button></div>`;
 const word=s.words[s.round];return `<div class="screen">${gameHead('🔠','Letter Lab',`${getPack(s.pack).title} · Put the English letters in the correct order.`)}<div class="game-layout"><div class="game-board"><div class="split"><span class="tag">ROUND ${s.round+1}/${s.words.length}</span><span class="tag">⭐ ${s.score} CORRECT</span></div><div class="meter"><i style="width:${(s.round/s.words.length)*100}%"></i></div><h2 class="center" style="font:800 31px var(--title)">💬 ${esc(word.fr)}</h2><div class="scramble-tiles">${s.letters.split('').map(c=>`<span>${esc(c)}</span>`).join('')}</div><form id="scramble-form"><label for="scramble-answer" class="help-text">Write the English word</label><input id="scramble-answer" class="input-answer" name="answer" required autocomplete="off" maxlength="15" placeholder="Type your answer…" value="${esc(s.guess)}" ${s.answered?'disabled':''}><div class="board-actions">${!s.answered?'<button class="action-btn" type="submit">✓ CHECK ANSWER</button>':`<button class="action-btn" type="button" data-action="scramble-next">${s.round===s.words.length-1?'SEE RESULTS →':'NEXT WORD →'}</button>`}</div></form>${s.answered?`<div class="feedback ${normal(s.guess)===normal(word.en)?'good':'bad'}">${normal(s.guess)===normal(word.en)?'✅ Excellent!':'💡 Correct word: '+esc(word.en)}<p>${esc(word.example)}</p><button class="soft-btn" data-action="speak" data-value="${esc(word.example)}">🔊 Hear the sentence</button></div>`:''}</div>${sideArt('practice','Build the word','Remember its spelling, then hear it in a sentence.')}</div><div class="panel" style="margin-top:18px"><h3>Choose a vocabulary pack</h3>${deckGrid()}</div></div>`;
}
function checkScramble(guess){const s=scrambleSession;if(!s||s.answered)return;const w=s.words[s.round];s.guess=String(guess).trim();s.answered=true;const ok=normal(s.guess)===normal(w.en);if(ok)s.score++;recordAnswer(ok,8);render();}
function scrambleNext(){const s=scrambleSession;if(!s||!s.answered)return;s.round++;if(s.round>=s.words.length){if(s.score>=6){confetti();award(20);}go('scrambleresult');return;}s.answered=false;s.guess='';s.letters=scrambleLetters(s.words[s.round].en);render();}
function scrambleResult(){const s=scrambleSession;if(!s)return home();return `<div class="screen">${gameHead('🔠','Letter Lab — Results','You finished the letter challenge.')}<div class="game-board center"><div class="finish-icon">🏆</div><h2 class="finish-heading">${s.score} / ${s.words.length} words</h2><p>Practice makes every new word easier to remember.</p><div class="board-actions" style="justify-content:center"><button class="action-btn" data-action="new-scramble">↻ PLAY AGAIN</button><button class="soft-btn" data-action="mode" data-id="home">HOME</button></div></div></div>`;}
function startMemory(){
 const pack=activePack();const uniqueEN=new Set(),uniqueFR=new Set();const possible=shuffle(pack.words).filter(w=>{const en=normal(w.en),fr=normal(w.fr);if(uniqueEN.has(en)||uniqueFR.has(fr))return false;uniqueEN.add(en);uniqueFR.add(fr);return true;});const words=sample(possible,6);
 if(words.length<4){toast('Pick a pack with at least four words.');return;}
 const cards=shuffle(words.flatMap((w,i)=>[{id:'en-'+i,pair:i,label:w.en,side:'EN'},{id:'fr-'+i,pair:i,label:w.fr,side:'FR'}]));
 memorySession={pack:pack.id,cards,shown:[],matched:[],turns:0,busy:false,done:false};go('memory');
}
function memoryScreen(){const m=memorySession;if(!m)return home();const isShown=x=>m.shown.includes(x.id)||m.matched.includes(x.pair);
 return `<div class="screen">${gameHead('🃏','Flip Memory',`${getPack(m.pack).title} · Turn cards and find English–French pairs.`)}<div class="panel"><div class="split"><span class="tag">${m.matched.length} / ${m.cards.length/2} MATCHES</span><span class="tag">${m.turns} TURNS</span></div><div class="memory-grid">${m.cards.map(c=>`<button class="memory-card ${isShown(c)?'is-open':''} ${m.matched.includes(c.pair)?'is-matched':''}" data-action="memory-flip" data-id="${c.id}" ${m.busy||m.matched.includes(c.pair)?'disabled':''} aria-label="${isShown(c)?esc(c.side+' '+c.label):'Face-down card'}"><span class="memory-back">★</span><span class="memory-face"><small>${c.side}</small>${esc(c.label)}</span></button>`).join('')}</div>${m.done?'<div class="feedback good">✨ Brilliant memory! You matched every word.</div>':''}<div class="board-actions"><button class="action-btn" data-action="new-memory">↻ NEW GAME</button><button class="soft-btn" data-action="mode" data-id="library">📚 WORD LIBRARY</button></div></div><div class="panel" style="margin-top:18px"><h3>Choose another vocabulary world</h3>${deckGrid()}</div></div>`;
}
function memoryFlip(id){
 const m=memorySession;if(!m||m.busy||m.done||m.shown.includes(id))return;
 const card=m.cards.find(c=>c.id===id);if(!card||m.matched.includes(card.pair))return;
 m.shown.push(id);
 if(m.shown.length===1){render();return;}
 m.turns++;m.busy=true;render();
 const [a,b]=m.shown.map(k=>m.cards.find(c=>c.id===k));
 if(a.pair===b.pair){setTimeout(()=>{if(memorySession!==m)return;m.matched.push(a.pair);m.shown=[];m.busy=false;recordAnswer(true,6);if(m.matched.length===m.cards.length/2){m.done=true;award(30);tone('win');confetti();}render();},540);}
 else{tone('wrong');setTimeout(()=>{if(memorySession!==m)return;m.shown=[];m.busy=false;render();},1100);}
}
function boosterScreen(){
 const ticketCount=boosterTickets(),collected=Object.keys(state.cards).length,all=allCollectibleWords().length;
 const display=boosterSession?.cards||[];
 const opened=boosterSession&&display.length;
 return `<div class="screen">${gameHead('🎁','Booster Station','Open FREE vocabulary surprise packs and grow your word-card album.')}<section class="booster-stage"><div class="split"><span class="tag">🎟️ ${ticketCount} FREE TICKETS</span><span class="tag">🃏 ${collected} / ${all} UNIQUE CARDS</span></div><div class="booster-box ${opened?'opened':''}"><div class="booster-glow"></div><span>⭐</span><b>WORDUP<br>BOOSTER</b><small>3 WORD CARDS · NO PURCHASES</small></div>${!opened?`<p>Get a starter pack free, then earn a new ticket every 120 XP. You can collect words by practising, not by spending money.</p><button class="action-btn" data-action="open-booster" ${ticketCount<=0||collected>=all?'disabled':''}>✨ OPEN BOOSTER</button>`:`<div class="booster-card-grid">${display.map((x,i)=>`<button class="booster-word-card ${boosterSession.revealed.includes(i)?'revealed':''}" data-action="reveal-booster" data-index="${i}" ${boosterSession.revealed.includes(i)?'disabled':''}>${boosterSession.revealed.includes(i)?`<span class="boost-label">${esc(x.p.title)}</span><strong>${esc(x.w.en)}</strong><em>${esc(x.w.fr)}</em><small>🗣 ${esc(x.w.example)}</small>`:'<span class="boost-mystery">?</span><b>FLIP CARD</b>'}</button>`).join('')}</div>${boosterSession.revealed.length===display.length?'<div class="feedback good">🎉 Three cards added to your album! Discover more vocabulary by playing.</div><button class="action-btn" data-action="booster-finish">CONTINUE →</button>':'<p>Tap each card to reveal the English word and its meaning.</p>'}`}</section><div class="panel" style="margin-top:19px"><h3>🃏 My Word Card Album</h3><p>Collectible English words with French meanings and example sentences. Your collection stays on this browser.</p>${collected?`<div class="album-grid">${allCollectibleWords().filter(({w})=>state.cards[normal(w.en)]).slice(0,36).map(({p,w})=>`<article class="album-card"><span>${p.emoji}</span><strong>${esc(w.en)}</strong><small>${esc(w.fr)}</small><button class="soft-btn" data-action="speak" data-value="${esc(w.example)}">🔊</button></article>`).join('')}</div>${collected>albumLimit?`<div class="board-actions" style="justify-content:center"><button class="soft-btn" data-action="album-more">SHOW MORE CARDS (${albumLimit} / ${collected})</button></div>`:''}`:'<p class="help-text">Your album is empty. Open your free starter booster to collect your first cards!</p>'}</div></div>`;
}
function openBooster(){
 if(boosterTickets()<1){toast('Earn XP in games to unlock the next free booster.');return;}
 let pool=allCollectibleWords().filter(({w})=>!state.cards[normal(w.en)]);
 if(pool.length<3){toast('You have collected almost every available word!');return;}
 // The selected school level determines the booster category whenever possible.
 const filtered=pool.filter(x=>gradeFilter==='all'||x.p.grade===gradeFilter);
 if(filtered.length>=3)pool=filtered;
 const cards=sample(pool,3);
 cards.forEach(({w})=>{state.cards[normal(w.en)]=true;});
 state.boostersOpened++;save();boosterSession={cards,revealed:[]};tone('win');render();
}
function revealBooster(index){const b=boosterSession;if(!b||b.revealed.includes(index)||!b.cards[index])return;b.revealed.push(index);tone('correct');if(b.revealed.length===b.cards.length)confetti();render();}

function render(){const app=$('#app');const views={home,quest:questMap,quiz,challenge:challengeLanding,practice,story:stories,storyplay:storyPlay,duel:duelLanding,rewards,library:wordLibrary,crossword:crosswordScreen,booster:boosterScreen,scramble:scrambleScreen,scrambleresult:scrambleResult,memory:memoryScreen};app.innerHTML=(views[view]||home)();updateHeader();}
function handleAction(button){if(button.disabled)return;const action=button.dataset.action,id=button.dataset.id,value=button.dataset.value;tone('click');switch(action){
 case 'mode':if(id==='practice'){initPractice();break;}if(id==='crossword'){startCrossword();break;}if(id==='scramble'){startScramble();break;}if(id==='memory'){startMemory();break;}go(id);break;
 case 'back':go(id||'home');break;
 case 'pack':state.pack=getPack(id).id;gradeFilter=getPack(id).grade||'all';deckSearch='';save();practiceIndex=0;flipped=false;practiceAnswered=false;practiceFeedback='';matchGame=null;if(view==='crossword'){startCrossword();break;}if(view==='scramble'){startScramble();break;}if(view==='memory'){startMemory();break;}render();break;
 case 'start-quest':startQuest(id);break;
 case 'new-crossword':startCrossword();break;
 case 'check-crossword':checkCrossword();break;
 case 'hint-crossword':hintCrossword();break;
 case 'new-scramble':startScramble();break;
 case 'scramble-next':scrambleNext();break;
 case 'new-memory':startMemory();break;
 case 'memory-flip':memoryFlip(id);break;
 case 'open-booster':openBooster();break;
 case 'reveal-booster':revealBooster(Number(button.dataset.index));break;
 case 'booster-finish':boosterSession=null;render();break;
 case 'album-more':albumLimit+=36;render();break;
 case 'grade':gradeFilter=id;deckSearch='';libraryLimit=35;render();break;
 case 'more-words':libraryLimit+=35;render();break;
 case 'start-challenge':startQuiz('challenge');break;
 case 'start-duel':startQuiz('duel');break;
 case 'answer':answerQuiz(value);break;
 case 'next-quiz':nextQuiz();break;
 case 'replay':startQuiz(session?.type||'quest');break;
 case 'practice-tab':practiceTab=id;practiceAnswered=false;practiceFeedback='';practiceIndex=0;flipped=false;matchGame=null;render();break;
 case 'flip':flipped=!flipped;render();break;
 case 'next-flash':nextPractice();break;
 case 'next-practice':nextPractice();break;
 case 'known':if(!state.known[value]){state.known[value]=true;award(3);toast('Word marked as known! +3 XP');}render();break;
 case 'speak':speak(value);break;
 case 'listen-choice':listenChoice(value);break;
 case 'match-left':handleMatch('left',value);break;
 case 'match-right':handleMatch('right',value);break;
 case 'new-match':prepareMatch();render();break;
 case 'start-story':startStory(id);break;
 case 'story-choice':storyChoice(Number(button.dataset.index));break;
 case 'story-next':nextStory();break;
 case 'avatar':state.avatar=value;save();render();toast('Avatar selected!');break;
 case 'pet':if(PETS.find(p=>p[0]===value)?.[2]<=state.xp){state.pet=value;save();render();toast('New companion selected!');}break;
 case 'close-modal':closeTeacher();break;
 case 'import-pack':importPack();break;
 case 'delete-pack':deletePack(id);break;
 }}
$('#app').addEventListener('click',e=>{const button=e.target.closest('[data-action]');if(button)handleAction(button);});
$('#modal-root').addEventListener('click',e=>{const button=e.target.closest('[data-action]');if(button)handleAction(button);else if(e.target===$('#modal-root'))closeTeacher();});
$('#app').addEventListener('input',e=>{if(e.target.classList.contains('cw-input')){const key=e.target.dataset.key;const c=crosswordState;if(c){const v=e.target.value.replace(/[^a-z]/gi,'').slice(0,1).toUpperCase();c.values[key]=v;e.target.value=v;e.target.classList.remove('incorrect');if(v){const r=Number(e.target.dataset.row),col=Number(e.target.dataset.col);const next=$(`.cw-input[data-row="${r}"][data-col="${col+1}"]`);if(next)next.focus();}}return;}if(e.target.id==='pack-search'){const position=e.target.selectionStart;deckSearch=e.target.value;libraryLimit=35;render();const field=$('#pack-search');if(field){field.focus();try{field.setSelectionRange(position,position);}catch(_){}}}});
$('#app').addEventListener('submit',e=>{if(e.target.id==='spell-form'){e.preventDefault();checkSpelling(new FormData(e.target).get('answer')||'');}else if(e.target.id==='scramble-form'){e.preventDefault();checkScramble(new FormData(e.target).get('answer')||'');}});
$('#home-btn').addEventListener('click',()=>go('home'));
$('#sound-btn').addEventListener('click',()=>{state.sound=!state.sound;save();toast(state.sound?'Sound on 🔊':'Sound off 🔇');});
$('#teacher-btn').addEventListener('click',openTeacher);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#modal-root').hidden)closeTeacher();if(e.target.classList?.contains('cw-input')){const r=Number(e.target.dataset.row),c=Number(e.target.dataset.col),d={ArrowRight:[0,1],ArrowLeft:[0,-1],ArrowDown:[1,0],ArrowUp:[-1,0]}[e.key];if(d){e.preventDefault();const next=$(`.cw-input[data-row="${r+d[0]}"][data-col="${c+d[1]}"]`);if(next)next.focus();}}});
render();
