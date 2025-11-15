
import type { DictionaryEntry, GrammarRule, WritingSystem, XelyonData, SampleText, WritingSystemSection, Glyph } from '../types';

export const rawXelyonGuide = `
===============================
XELYON LANGUAGE – COMPLETE GUIDE
===============================

--------------------------------
1. OVERVIEW
--------------------------------
Xelyon is an alien constructed language with its own dictionary, grammar, writing
system, numerals, glyphs, phonetics, and poetic structure. It is built to feel
cosmic, melodic, and non-human, using influences from 20 Earth languages but
remaining distinctly alien.

--------------------------------
2. DICTIONORY (EXPANDED)
--------------------------------

--- Core Pronouns ---
ya [yah] /ja/ = I / me
no [noh] /no/ = you
ven [ven] /vɛn/ = we / us
xerai [ze-RAI] /zɛ'raɪ/ = we (our species)
to [toh] /to/ = my
no’re [noh-RAY] /no'reɪ/ = your
ven’re [ven-RAY] /vɛn'reɪ/ = our
yon [yon] /jon/ = he/she/it
yora [YOR-ah] /'jora/ = they (singular non-human)
yoran [yor-AN] /jor'an/ = they (plural)
nokai [no-KAI] /no'kaɪ/ = intimate “you”
nona [NO-nah] /'nona/ = you all
venai [ven-AI] /vɛn'aɪ/ = us all
xen’ai [zen-AI] /zɛn'aɪ/ = oneself
yor’e [YOR-eh] /'jorɛ/ = their (singular)
yoran’e [yor-AN-eh] /jor'anɛ/ = their (plural)

--- Verbs (General & Advanced) ---
vek [vek] /vɛk/ = speak
dovek [doh-VEK] /do'vɛk/ = spoke (past)
shavek [shah-VEK] /ʃa'vɛk/ = will speak (future)
malek [MA-lek] /'malɛk/ = touch
yorin [YOR-in] /'jorɪn/ = listen
tora [TOR-ah] /'tora/ = wrap around
nalek [NA-lek] /'nalɛk/ = see
mira’k [meer-AHK] /mɪ'rak/ = look deeply
shor [shor] /ʃor/ = breathe
xora [ZOR-ah] /'zora/ = dream
elai [el-AI] /ɛl'aɪ/ = feel
sora [SOR-ah] /'sora/ = warm/comfort
fira [FEER-ah] /'fira/ = protect
yesh [yesh] /jɛʃ/ = learn
venok [ven-OK] /vɛn'ok/ = arrive
rava [RA-vah] /'rava/ = move/go
navek [na-VEK] /na'vɛk/ = hear
zorek [ZOR-ek] /'zorɛk/ = fear
ranek [RA-nek] /'ranɛk/ = build
trinek [TREE-nek] /'trinɛk/ = break
sholai [sho-LAI] /ʃo'laɪ/ = sing
torin [TOR-in] /'torɪn/ = remember
felorin [fel-OR-in] /fɛl'orɪn/ = create
xor’el [zor-EL] /zor'ɛl/ = telepathically speak
nal’en [nal-EN] /nal'ɛn/ = share memories
tora’el [tor-ah-EL] /tora'ɛl/ = merge auras
jorai [jor-AI] /ʒo'raɪ/ = levitate
selorin [sel-OR-in] /sɛl'orɪn/ = manipulate light
velor [vel-OR] /vɛl'or/ = heal
yesh’el [yesh-EL] /jɛʃ'ɛl/ = absorb knowledge
xelor [ze-LOR] /zɛ'lor/ = slow time
fe’kai [fey-KAI] /feɪ'kaɪ/ = astral shift
norai [nor-AI] /nor'aɪ/ = phase through matter
dor’en [dor-EN] /dor'ɛn/ = erase thought
kaloren [kal-OR-en] /kal'orɛn/ = create illusions
shen [shen] /ʃɛn/ = exist
doshen [doh-SHEN] /do'ʃɛn/ = existed
shashen [shah-SHEN] /ʃa'ʃɛn/ = will exist
felen [FEL-en] /'fɛlɛn/ = become
nalor [NA-lor] /'nalor/ = grow
valek [VA-lek] /'valɛk/ = know
dovalek [doh-VA-lek] /do'valɛk/ = knew
shavalek [shah-VA-lek] /ʃa'valɛk/ = will know
kiran [KEER-an] /'kiran/ = begin
dovakiran [doh-vah-KEER-an] /dova'kiran/ = began
shakiran [shah-KEER-an] /ʃa'kiran/ = will begin
noran [NOR-an] /'noran/ = end
dovonoran [doh-vo-NOR-an] /dovo'noran/ = ended
shanoran [shah-NOR-an] /ʃa'noran/ = will end
felek [FEL-ek] /'fɛlɛk/ = fly
belen [BEL-en] /'bɛlɛn/ = walk
xaran [ZAR-an] /'zaran/ = run
ron-ten [ron-TEN] /ron'tɛn/ = work
sharen [SHA-ren] /'ʃarɛn/ = think
dosharen [doh-SHA-ren] /do'ʃarɛn/ = thought
shasharen [sha-SHA-ren] /ʃa'ʃarɛn/ = will think
yorak [YOR-ak] /'jorak/ = give
doyorak [doh-YOR-ak] /do'jorak/ = gave
shayorak [sha-YOR-ak] /ʃa'jorak/ = will give
mirak [MEER-ak] /'mirak/ = take
domirak [doh-MEER-ak] /do'mirak/ = took
shamirak [sha-MEER-ak] /ʃa'mirak/ = will take

--- Emotions & Connection ---
ahlé [ah-LAY] /a'leɪ/ = love
mura [MOOR-ah] /'mura/ = heart
vale [vayl] /veɪl/ = soul
tora’lum [tor-ah-LOOM] /tora'lum/ = aura field
xorin [ZOR-in] /'zorɪn/ = heartbond
nalin [NA-lin] /'nalɪn/ = soft/gentle
tora’nai [tor-ah-NAI] /tora'naɪ/ = life energy
vaira [VAI-rah] /'vaɪra/ = hope
doral [DOR-al] /'doral/ = sadness
xarin [ZAR-in] /'zarɪn/ = longing
shori [SHOR-ee] /'ʃori/ = desire
vela [VEL-ah] /'vɛla/ = trust
tora’el [tor-ah-EL] /tora'ɛl/ = merge energies
shonai [sho-NAI] /ʃo'naɪ/ = stay
halé [ha-LAY] /ha'leɪ/ = belong
nalorin’dai [na-lor-in-DAI] /nalorɪn'daɪ/ = instant soul recognition
xalorin [za-LOR-in] /za'lorɪn/ = love across light-years
shora’vel [shor-ah-VEL] /ʃora'vɛl/ = breath harmony
felora’nai [fel-or-ah-NAI] /fɛlora'naɪ/ = beauty seen only by the heart
nalora [na-LOR-ah] /na'lora/ = harmony
zorin'fe [zor-in-FE] /zorɪn'feɪ/ = joy
doral'max [dor-al-MAKS] /doral'maks/ = despair
xarin'fe [zar-in-FE] /zarɪn'feɪ/ = peacefulness
shori'nar [shor-ee-NAR] /ʃori'nar/ = passion
vela'kri [vel-ah-KRI] /vɛla'kri/ = betrayal

--- Space & Cosmic Terms ---
xalé [za-LAY] /za'leɪ/ = star
xaliran [za-leer-AN] /zalɪ'ran/ = stars
shira [SHEER-ah] /'ʃira/ = world/planet
shiranai [sheer-ah-NAI] /ʃira'naɪ/ = galaxy
felek [FEL-ek] /'fɛlɛk/ = sky
torak [TOR-ak] /'torak/ = nebula
lunora [lu-NOR-ah] /lu'nora/ = moon-light field
nova’kai [no-vah-KAI] /nova'kaɪ/ = black hole
fenor [FEN-or] /'fɛnor/ = comet
belen [BEL-en] /'bɛlɛn/ = homeworld
xora’lum [zor-ah-LOOM] /zora'lum/ = dream-plane
kelan [KEL-an] /'kɛlan/ = era
shénai [shay-NAI] /ʃeɪ'naɪ/ = void
xalor'felek [za-lor-FEL-ek] /zalor'fɛlɛk/ = starfield
shira'kiran [sheer-ah-KEER-an] /ʃira'kiran/ = genesis planet
torak'shor [tor-ak-SHOR] /torak'ʃor/ = stellar nursery
lunora'ven [lu-nor-ah-VEN] /lunora'vɛn/ = twin moons
fenor'xaran [fen-or-ZAR-an] /fɛnor'zaran/ = meteor shower

--- Physical World ---
ron-ten [ron-TEN] /ron'tɛn/ = day
niva [NEE-vah] /'niva/ = nightfall
xaran [ZAR-an] /'zaran/ = dawn
nova [NO-vah] /'nova/ = dusk
fenek [FEN-ek] /'fɛnɛk/ = storm
sela [SEL-ah] /'sɛla/ = water
felen [FEL-en] /'fɛlɛn/ = stone
moren [MOR-en] /'morɛn/ = river
ronshai [ron-SHAI] /ron'ʃaɪ/ = desert
nalor [NA-lor] /'nalor/ = forest
belora [bel-OR-ah] /bɛl'ora/ = mountain
sela'max [sel-ah-MAKS] /sɛla'maks/ = ocean
felen'kai [fel-en-KAI] /fɛlɛn'kaɪ/ = crystal
moren'fe [mor-en-FE] /morɛn'feɪ/ = current
nalor'xalé [na-lor-za-LAY] /nalor'zaleɪ/ = glowing forest
belora'xen [bel-or-ah-ZEN] /bɛlora'zɛn/ = floating mountain

--- People & Roles ---
xenor [ZEN-or] /'zɛnor/ = alien being
nalorin [na-LOR-in] /na'lorɪn/ = guardian
shiranor [sheer-ah-NOR] /ʃira'nor/ = star-seer
xora’dal [zor-ah-DAL] /zora'dal/ = dream-walker
velorin [vel-OR-in] /vɛl'orɪn/ = healer
feronai [fer-o-NAI] /fɛro'naɪ/ = traveler
tora’elai [tor-ah-el-AI] /toraɛl'aɪ/ = bondmate
xalor [za-LOR] /za'lor/ = navigator
ranek'lor [ra-nek-LOR] /ranɛk'lor/ = builder/architect
yesh'xen [yesh-ZEN] /jɛʃ'zɛn/ = scholar/student
sholai'nor [sho-lai-NOR] /ʃolaɪ'nor/ = lorekeeper/singer
fira'xen [feer-ah-ZEN] /fira'zɛn/ = elite guard

--- Objects & Technology ---
xena [ZEN-ah] /'zɛna/ = ship
xena’k [zen-AHK] /zɛn'ak/ = our ship
torax [TOR-aks] /'toraks/ = energy blade
selonor [sel-o-NOR] /sɛlo'nor/ = star-core
fenral [FEN-ral] /'fɛnral/ = communicator
joranex [jor-AN-ex] /ʒor'anɛks/ = anti-grav device
venul [VEN-ul] /'vɛnul/ = shield field
belora’k [bel-or-AHK] /bɛlor'ak/ = memory stone
xel-pad [zel-PAD] /zɛl'pad/ = knowledge slate
rorai [ror-AI] /ro'raɪ/ = scanning orb
xena'max [zen-ah-MAKS] /zɛna'maks/ = mothership
torax'ven [tor-aks-VEN] /toraks'vɛn/ = warrior's stance
selonor'fe [sel-o-nor-FE] /sɛlonor'feɪ/ = power conduit
venul'max [ven-ul-MAKS] /vɛnul'maks/ = fortress shield
xena'rava [zen-ah-RA-vah] /zɛna'rava/ = fleet maneuver

--- Spiritual & Mystical Terms ---
xora’lum [zor-ah-LOOM] /zora'lum/ = dream-plane
tora’nai [tor-ah-NAI] /tora'naɪ/ = life energy
felorin [fel-OR-in] /fɛl'orɪn/ = creation essence
nalora [na-LOR-ah] /na'lora/ = harmony
belenai [bel-en-AI] /bɛlɛn'aɪ/ = ancestors
xendora [zen-DOR-ah] /zɛn'dora/ = fate-thread
lor’nai [lor-NAI] /lor'naɪ/ = destiny
shai-lum [shai-LOOM] /ʃaɪ'lum/ = sacred vow
vale'xenai [vayl-zen-AI] /veɪl'zɛnaɪ/ = collective consciousness
kiran'lor [keer-an-LOR] /kiran'lor/ = point of creation
noran'shai [nor-an-SHAI] /noran'ʃaɪ/ = entropy/cosmic end
xendora'fel [zen-dor-ah-FEL] /zɛndora'fɛl/ = interwoven fates

--- Flora & Fauna ---
nalor'kai [na-lor-KAI] /nalor'kaɪ/ = bioluminescent fungus
shira'ven [sheer-ah-VEN] /ʃira'vɛn/ = winged sky-hunter
sela'mor [sel-ah-MOR] /sɛla'mor/ = deep-sea leviathan
felen'xir [fel-en-ZIR] /fɛlɛn'zɪr/ = crystal-shelled crawler
xora'shai [zor-ah-SHAI] /zora'ʃaɪ/ = dream-eating bloom
ven'lora [ven-LOR-ah] /vɛn'lora/ = symbiotic plant-animal
ronshai'felek [ron-shai-FEL-ek] /ronʃaɪ'fɛlɛk/ = sand-swimmer
nalor'vek [na-lor-VEK] /nalor'vɛk/ = whispering tree
belora'yon [bel-or-ah-YON] /bɛlora'jon/ = mountain beast
sela'sholai [sel-ah-sho-LAI] /sɛla'ʃolaɪ/ = siren kelp

--- Society & Culture ---
sholai'kel [sho-lai-KEL] /ʃolaɪ'kɛl/ = grand chorus/anthem
xelorin'tora [ze-lor-in-TOR-ah] /zɛlorɪn'tora/ = historical tapestry
ven'halé [ven-ha-LAY] /vɛn'haleɪ/ = community gathering
lor'nai'vek [lor-nai-VEK] /lornaɪ'vɛk/ = destiny reading/prophecy
felorin'fe [fel-or-in-FE] /fɛlorɪn'feɪ/ = artistic expression
nalora'shon [na-lor-ah-SHON] /nalora'ʃon/ = harmony ritual
xenor'tora [zen-or-TOR-ah] /zɛnor'tora/ = council of elders
yesh'bel [yesh-BEL] /jɛʃ'bɛl/ = archive/library
ranek'shai [ra-nek-SHAI] /ranɛk'ʃaɪ/ = rite of passage
tora'venai [tor-ah-ven-AI] /tora'vɛnaɪ/ = social bond

--- Advanced Concepts ---
shen'xelor [shen-ze-LOR] /ʃɛn'zɛlor/ = state of timelessness
valek'dai [va-lek-DAI] /valɛk'daɪ/ = absolute knowledge
sharen'max [sha-ren-MAKS] /ʃarɛn'maks/ = epiphany
kiran'ma [keer-an-MA] /kiran'ma/ = paradox
noran'fe [nor-an-FE] /noran'feɪ/ = inevitability
elai'xen [el-ai-ZEN] /ɛlaɪ'zɛn/ = empathy
valek'kri [va-lek-KRI] /valɛk'kri/ = uncertainty
shen'kelan [shen-KEL-an] /ʃɛn'kɛlan/ = cycle of existence
xelor'ma [ze-lor-MA] /zɛlor'ma/ = time distortion
felorin'vale [fel-or-in-VAYL] /fɛlorɪn'veɪl/ = self-creation

--- Combat & Defense ---
zorek'shai [zor-ek-SHAI] /zorɛk'ʃaɪ/ = fear-inducing cry
trinek'lor [tree-nek-LOR] /trinɛk'lor/ = shattering blow
rava'nar [ra-vah-NAR] /rava'nar/ = swift advance
shonai'fira [sho-nai-FEER-ah] /ʃonaɪ'fira/ = defensive position
venul'trin [ven-ul-TRIN] /vɛnul'trɪn/ = shield break
xena'dor [zen-ah-DOR] /zɛna'dor/ = retreat signal
torax'fe [tor-aks-FE] /toraks'feɪ/ = precise strike
zorek'ma [zor-ek-MA] /zorɛk'ma/ = fearlessness
fira'dai [feer-ah-DAI] /fira'daɪ/ = absolute defense
rava'xar [ra-vah-ZAR] /rava'zar/ = charge/blitz

--- Prepositions ---
fel [fel] /fɛl/ = with
dor [dor] /dor/ = from
bel [bel] /bɛl/ = in/inside
tor [tor] /tor/ = around
ron [ron] /ron/ = over
mel [mel] /mɛl/ = under
sen [sen] /sɛn/ = without
nar [nar] /nar/ = through
kai [kai] /kaɪ/ = beyond
ven [ven] /vɛn/ = among

--- Time ---
sena [SEN-ah] /'sɛna/ = moment
ron-ten [ron-TEN] /ron'tɛn/ = day
kelan [KEL-an] /'kɛlan/ = cycle/era
ten [ten] /tɛn/ = now
do-ten [doh-TEN] /do'tɛn/ = past
sha-ten [shah-TEN] /ʃa'tɛn/ = future
niva'ten [nee-vah-TEN] /niva'tɛn/ = midnight
xaran'ten [zar-an-TEN] /zaran'tɛn/ = sunrise
nova'ten [no-vah-TEN] /nova'tɛn/ = sunset
kelan'noran [kel-an-NOR-an] /kɛlan'noran/ = end of an era

--- Numbers ---
1 = una [OO-nah] /'una/
2 = dua [DOO-ah] /'dua/
3 = trin [trin] /trɪn/
4 = kat [kat] /kat/
5 = pex [peks] /pɛks/
6 = sen [sen] /sɛn/
7 = sepa [SEP-ah] /'sɛpa/
8 = ota [OH-tah] /'ota/
9 = niva [NEE-vah] /'niva/
10 = dex [deks] /dɛks/
20 = duadex [doo-ah-DEKS] /dua'dɛks/
100 = xendex [zen-DEKS] /zɛn'dɛks/
1000 = toradex [tor-ah-DEKS] /tora'dɛks/
infinity = feladex [fel-ah-DEKS] /fɛla'dɛks/

--------------------------------
3. GRAMMAR SYSTEM (COMPLETE)
--------------------------------

--- Pronouns & Persons ---
This section details the personal and possessive pronouns in Xelyon.
- 1st Person Singular: ya (I), to (my)
- 2nd Person Singular: no (you), no're (your)
- 3rd Person Singular: yon (he/she/it), yon're (his/her/its)
- 1st Person Plural: ven (we), ven're (our)
- 2nd Person Plural: nona (you all), nona're (your)
- 3rd Person Plural: yoran (they), yoran're (their)

--- Sentence Order ---
Xelyon follows a strict Subject-Object-Verb (S-O-V) word order.
- Example: Ya no ahlé. (I you love.)
- Example: Ven xaliran nalek. (We the stars see.)
- Adjectives precede the noun they modify: nalin belora (green mountain).
- Adverbs typically precede the verb: ya no’re shonai felavek. (I your stay forever speak -> I speak of you staying forever.)

--- Noun Cases ---
Nouns can take suffixes to denote their grammatical role, though it's often optional if context is clear.
- Subject (Nominative): (base form) - The agent of the action. Example: Xenor venok. (The alien arrives.)
- Object (Accusative): -’el - The direct object. Example: Ya xena’el nalek. (I see the ship.)
- Indirect Object (Dative): -’nai - The recipient of the action. Example: Ya no’nai selonor’el shonai. (I give the star-core to you.)
- Possessive (Genitive): ’k / ’re - Denotes possession. Example: xena'k (my ship), no're mura (your heart).
- Location (Locative): -’bel - Indicates location 'in' or 'at'. Example: Ven shira’bel shen. (We exist on the world.)
- Movement From (Ablative): -’dor - Indicates movement 'from'. Example: Xenor belen’dor rava. (The alien moves from the homeworld.)
- Movement To (Allative): -’tor - Indicates movement 'to' or 'towards'. Example: Ya xalé’tor felek. (I fly towards the star.)

--- Tenses & Moods ---
Verb tense is marked by prefixes, while aspect and mood are marked by suffixes.
- Present Tense: (base verb) - Describes current actions. Example: Ya vek. (I speak.)
- Past Tense: do- prefix. Example: Ya dovek. (I spoke.)
- Future Tense: sha- prefix. Example: Ya shavek. (I will speak.)
- Continuous Aspect: -el suffix. Indicates an ongoing action. Example: Ya vek’el. (I am speaking.)
- Perfective Aspect: -en suffix. Indicates a completed action. Example: Ya dovek’en. (I have spoken.)
- Imperative Mood: -'ka suffix. Used for commands. Example: Vek'ka! (Speak!)
- Conditional Mood: -'so suffix. Used for 'if' statements. Example: No rava'so, ya rava. (If you go, I go.)
- Certainty Particle: -dai suffix. Expresses certainty. Example: Ven venok'dai. (We will certainly arrive.)
- Hearsay Particle: -kri suffix. Expresses something heard from others. Example: Yon venok'kri. (They say he has arrived.)

--- Plurals & Negation ---
- Plural: Add -ran suffix to nouns. Example: xalé (star) -> xaliran (stars).
- Negation: Use the ma- prefix for present, mado- for past, and masha- for future.
- Example: Ya ma-vek. (I do not speak.)
- Example: Ya mado-vek. (I did not speak.)
- Example: Ya masha-vek. (I will not speak.)

--- Adjectives & Adverbs ---
- Adjectives: Placed before the noun. Example: nalin mura (gentle heart).
- Comparative: -’nar suffix. 'more'. Example: belora'nar (bigger/higher).
- Superlative: -’max suffix. 'most'. Example: belora'max (biggest/highest).
- Adverbs: Formed by adding -'fe to an adjective. Example: nalin'fe (gently).

--- Questions ---
- Yes/No Questions: Add ka? at the end of the sentence. Example: No shonai ka? (Will you stay?)
- WH- Questions: Use question words at the start of the sentence. (Who = Xan, What = Fen, Where = Bel, When = Sen, Why = Tor). Example: Xan no ahlé? (Who do you love?)

--------------------------------
4. WRITING SYSTEM — LUMEK SCRIPT
--------------------------------

--- Consonant Glyphs ---
B = ᛒ | belen (homeworld)
D = ᛞ | doral (sadness)
F = ᚠ | fel (with)
G = ᚷ | (rare glyph)
H = ᚺ | halé (belong)
K = ᛕ | kelan (era)
L = ᛚ | lunora (moon-light field)
M = ᛗ | mura (heart)
N = ᚾ | no (you)
P = ᛈ | (rare glyph)
R = ᚱ | rava (move/go)
S = ᛋ | sora (warm/comfort)
T = ᛏ | to (my)
V = ᚡ | ven (we / us)
X = 𐊴 | xalé (star)
Y = 𐊲 | ya (I / me)
Z = ᛉ | zorek (fear)
Sh = ߛ | shira (world/planet)

--- Vowel Glyphs ---
A = ᚫ | ahlé (love)
Á = ᚫ· | (stressed 'a')
E = ᛂ | elai (feel)
É = ᛂ· | (stressed 'e')
I = ᛁ | fira (protect)
Í = ᛁ· | (stressed 'i')
O = ᛟ | yon (he/she/it)
Ó = ᛟ· | (stressed 'o')
U = ᚢ | mura (heart)
Ú = ᚢ· | (stressed 'u')

--- Glottal Break ---
◆ = 𐚁 | mira’k (look deeply)

--- Numerals ---
1 = 𐄇 | una (one)
2 = 𐄈 | dua (two)
3 = 𐄉 | trin (three)
4 = 𐄊 | kat (four)
5 = 𐄋 | pex (five)
6 = 𐄌 | sen (six)
7 = 𐄍 | sepa (seven)
8 = 𐄎 | ota (eight)
9 = 𐄏 | niva (nine)
10 = 𐄐 | dex (ten)

--- Sacred Glyphs ---
𐓷 = Soul fusion | tora'el (merge auras)
𐌓 = Eternal bond | xorin (heartbond)
𐌼 = Cosmic truth | xendora (fate-thread)
𐑿 = Starbirth | xaliran (stars)
𐒾 = Memory weaving | nal’en (share memories)
𐓂 = Fate alignment | lor’nai (destiny)
𐙚 = The Void | shénai (the void)
𐘺 = Life ignition | tora'nai (life energy)
𐛭 = The Great Return | (cosmological event)
𐛇 = Infinite Light | feladex (infinity)

--------------------------------
5. SAMPLE TEXTS
--------------------------------

--- The Seeker's Vow ---
Xelyon: Ya, shiranor, xaliran'el mira'k. To'vale xendora'el fel. Shénai'dor, to'mura lor'nai sholai.
English: I, the star-seer, look deeply into the stars. My soul is with the fate-thread. From the void, my heart sings of destiny.
Context: A vow taken by Xelyon mystics who dedicate their lives to navigating the cosmic energies and understanding fate.

--- First Contact ---
Xelyon: Ven xerai no'nai venok. Zorek'ka ma-. Ven nalora'el shavek.
English: We, the Xerai, arrive to you. Do not fear. We will speak of harmony.
Context: A standard greeting protocol for making peaceful first contact with a new species. It is designed to be calming and non-threatening.

--- Lament for a Lost World ---
Xelyon: To'belen do-shen. Ten, sela'el mel, to'doral shen'el. Belenai, no ven're yorin ka?
English: My homeworld was. Now, under the water, my sadness is existing. Ancestors, do you hear us?
Context: A line from a famous epic poem about a cataclysm that forced the Xelyon people to leave their original homeworld.

--- The Bondmate's Promise ---
Xelyon: No're vale to'vale fel tora'el. Sha-ten, do-ten, ten'dai... ven shen'dai.
English: Your soul merges with my soul. Future, past, now... we will certainly exist.
Context: A sacred promise exchanged between two 'tora'elai' (bondmates), signifying a connection that transcends time and space.

--- The Navigator's Log ---
Xelyon: Xalor ya shen. Ron-ten'dai, xena'k nova'kai'tor rava. Zorek'el, to'vale vaira'dai sholai. Lor'nai to'fel.
English: The Navigator I am. This day, my ship moves towards the black hole. Though I feel fear, my soul sings of certain hope. Destiny is with me.
Context: An entry from the personal log of a Xelyon star navigator embarking on a perilous but essential journey through a hazardous region of space.

--- Ritual of Harmony ---
Xelyon: Venai, shora’vel'el. Nalora'shon kiran. Tora’nai ven're tora’el, una'fe felen.
English: All of us, breathing in harmony. The harmony ritual begins. Our life energies merge, becoming as one.
Context: The opening words of a common Xelyon ritual intended to unify the community and strengthen their collective energy field before a significant event.

--- The Shaper's Proverb ---
Xelyon: Felen'el, felorin'dai. Trinek'el, yesh'dai. Shen'el, ahlé'dai.
English: In becoming, there is creation. In breaking, there is learning. In existing, there is love.
Context: A famous Xelyon philosophical saying attributed to the "Shapers," ancient beings believed to have forged worlds. It emphasizes the purpose found in all states of being.

--- Call to Arms ---
Xelyon: Fira'xen! Torax'ven shonai'ka! Venul'max kiran! Belen're fira'dai!
English: Elite Guard! Assume the warrior's stance! The fortress shield begins! We will certainly protect our home!
Context: A battle cry from a Xelyon commander during a planetary defense drill, showcasing commands and defensive terminology.
`;

const parseDictionary = (text: string): DictionaryEntry[] => {
  const dictionary: DictionaryEntry[] = [];
  const lines = text.split('\n');
  let currentCategory = 'Uncategorized';

  for (const line of lines) {
    if (line.startsWith('---')) {
      currentCategory = line.replace(/---/g, '').trim();
      continue;
    }
    const parts = line.split('=');
    if (parts.length === 2) {
      const wordPart = parts[0].trim();
      const translation = parts[1].trim();

      const phoneticMatch = wordPart.match(/(.*)\s\[(.*)\]\s\/(.*)\//);
      if (phoneticMatch) {
        const [, word, pronunciation, phonetic] = phoneticMatch;
        dictionary.push({
          word: word.trim(),
          translation,
          category: currentCategory,
          pronunciation: `[${pronunciation}]`,
          phonetic: `/${phonetic}/`,
        });
      } else {
        const pronunciationMatch = wordPart.match(/(.*)\s\[(.*)\]/);
        if (pronunciationMatch) {
          const [, word, pronunciation] = pronunciationMatch;
          dictionary.push({
            word: word.trim(),
            translation,
            category: currentCategory,
            pronunciation: `[${pronunciation}]`,
            phonetic: '',
          });
        } else {
            dictionary.push({
                word: wordPart,
                translation,
                category: currentCategory,
                pronunciation: '',
                phonetic: '',
            });
        }
      }
    }
  }

  return dictionary;
};

const parseGrammar = (text: string): GrammarRule[] => {
    const grammar: GrammarRule[] = [];
    const lines = text.split('\n');
    let currentRule: GrammarRule | null = null;
  
    for (const line of lines) {
      if (line.startsWith('---')) {
        if (currentRule) {
          grammar.push(currentRule);
        }
        currentRule = {
          title: line.replace(/---/g, '').replace('(COMPLETE)', '').trim(),
          rules: [],
        };
      } else if (currentRule && line.trim()) {
        currentRule.rules.push(line.trim());
      }
    }
  
    if (currentRule) {
      grammar.push(currentRule);
    }
  
    return grammar;
  };
  
const parseWritingSystem = (text: string): WritingSystem => {
    const sections: Record<string, WritingSystemSection> = {};
    let currentSection: WritingSystemSection | null = null;
  
    const lines = text.split('\n');
    for (const line of lines) {
      if (line.startsWith('---')) {
        const title = line.replace(/---/g, '').trim();
        currentSection = { title, glyphs: [] };
        const key = title.toLowerCase().replace(/\s/g, '_').replace(/&/g, 'and');
        sections[key] = currentSection;
      } else if (currentSection && line.trim()) {
        const parts = line.split('|').map(s => s.trim());
        const definition = parts[0];
        const exampleStr = parts[1];

        const defParts = definition.split('=').map(s => s.trim());
        if (defParts.length === 2) {
            const char = defParts[0].trim();
            const glyph = defParts[1].trim();
            let example: { word: string; translation: string } | null = null;

            if (exampleStr) {
                const exampleMatch = exampleStr.match(/(.+)\((.+)\)/);
                if (exampleMatch && exampleMatch.length === 3) {
                    example = {
                        word: exampleMatch[1].trim(),
                        translation: exampleMatch[2].trim(),
                    };
                }
            }
            
            currentSection.glyphs.push({ char, glyph, example });
        }
      }
    }
  
    return {
      consonants: sections['consonant_glyphs'],
      vowels: sections['vowel_glyphs'],
      glottalBreak: sections['glottal_break'],
      numerals: sections['numerals'],
      sacred: sections['sacred_glyphs'],
    };
  };

  const parseSampleTexts = (text: string): SampleText[] => {
    const samples: SampleText[] = [];
    const sections = text.split('---').map(s => s.trim()).filter(Boolean);
  
    for (const section of sections) {
        const lines = section.split('\n');
        if (lines.length >= 3) {
            const title = lines[0];
            const xelyonLine = lines.find(l => l.startsWith('Xelyon:'));
            const englishLine = lines.find(l => l.startsWith('English:'));
            const contextLine = lines.find(l => l.startsWith('Context:'));

            if (xelyonLine && englishLine && contextLine) {
                samples.push({
                    title,
                    xelyon: xelyonLine.replace('Xelyon:', '').trim(),
                    english: englishLine.replace('English:', '').trim(),
                    context: contextLine.replace('Context:', '').trim(),
                });
            }
        }
    }
  
    return samples;
  };
  

export const parseXelyonData = (): XelyonData => {
  const dictionarySection = rawXelyonGuide.split('2. DICTIONORY (EXPANDED)')[1].split('3. GRAMMAR SYSTEM (COMPLETE)')[0];
  const grammarSection = rawXelyonGuide.split('3. GRAMMAR SYSTEM (COMPLETE)')[1].split('4. WRITING SYSTEM — LUMEK SCRIPT')[0];
  const writingSystemSection = rawXelyonGuide.split('4. WRITING SYSTEM — LUMEK SCRIPT')[1].split('5. SAMPLE TEXTS')[0];
  const sampleTextsSection = rawXelyonGuide.split('5. SAMPLE TEXTS')[1];

  return {
    dictionary: parseDictionary(dictionarySection),
    grammar: parseGrammar(grammarSection),
    writingSystem: parseWritingSystem(writingSystemSection),
    sampleTexts: parseSampleTexts(sampleTextsSection),
  };
};
