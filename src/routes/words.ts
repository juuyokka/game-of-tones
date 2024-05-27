/*
 * This file is part of Game of Tones.
 *
 * This work is based on "List of Germanic and Latinate equivalents in English" on Wikipedia.
 * Changes were made to this work. This derivative work is licensed under the
 * Creative Commons Attribution-ShareAlike 4.0 International License.
 *
 * A copy of this license is included in the file CC-BY-SA-4.0.txt.
 */

import { Word } from './types';

// prettier-ignore
const wordList = [
  {
    germanic: ['abandon', 'leave, leave off', 'forsake', 'forlet', 'give up', 'blin'],
    latinate: ['relinquish', 'abdicate', 'desert', 'renounce'],
  },
  {
    germanic: ['ache', 'hurt', 'smart', 'woe', 'sore', 'throe', 'wark'],
    latinate: ['pain', 'agony'],
  },
  {
    germanic: ['allegiance', 'troth'],
    latinate: ['fidelity', 'loyalty'],
  },
  {
    germanic: ['alive', 'quick (living)'],
    latinate: ['animate'],
  },
  {
    germanic: ['anger', 'wrath'],
    latinate: ['rage', 'ire'],
  },
  {
    germanic: ['array', 'row', 'range', 'rank', 'line', 'lineup', 'set', 'lot', 'list'],
    latinate: ['series', 'order', 'sequence'],
  },
  {
    germanic: ['answer'],
    latinate: ['response'],
  },
  {
    germanic: ['ask', 'frain', 'beseech', 'beg', 'seek'],
    latinate: ['inquire', 'request'],
  },
  {
    germanic: ['aware', 'abreast'],
    latinate: ['cognizant'],
  },
  {
    germanic: ['beacon', 'buoy', 'flag', 'herald', 'harbinger', 'guide'],
    latinate: ['signal', 'indicator'],
  },
  {
    germanic: ['before', 'beforehand', 'ahead of', 'ere'],
    latinate: ['prior', 'previous'],
  },
  {
    germanic: ['behaviour', 'bearing', 'etiquette', 'guise', 'way'],
    latinate: ['action', 'attitude', 'manner', 'conduct'],
  },
  {
    germanic: ['behest', 'bidding'],
    latinate: ['command', 'order'],
  },
  {
    germanic: ['behoof', 'gain', 'foredeal', 'boon', 'blessing', 'welfare'],
    latinate: ['advantage', 'benefit'],
  },
  {
    germanic: ['begin', 'start'],
    latinate: ['commence'],
  },
  {
    germanic: ['belief', 'mindset', 'gospel', 'truth', 'leaning'],
    latinate: ['creed'],
  },
  {
    germanic: ['belive', 'belave', 'abide', 'tarry', 'stay'],
    latinate: ['remain'],
  },
  {
    germanic: ['belly', 'midriff', 'womb'],
    latinate: ['abdomen'],
  },
  {
    germanic: ['big', 'great', 'stour', 'mickle', 'huge'],
    latinate: ['large', 'grand'],
  },
  {
    germanic: ['birthday', 'yeartide'],
    latinate: ['anniversary'],
  },
  {
    germanic: ['blee', 'hue', 'dye', 'shade', 'lit'],
    latinate: ['colour'],
  },
  {
    germanic: ['bloom', 'blossom', 'bud', 'burgeon'],
    latinate: ['flower'],
  },
  {
    germanic: ['body', 'embodiment', 'frame', 'makeup', 'lich'],
    latinate: ['corpus', 'corpse', 'carcass', 'cadaver'],
  },
  {
    germanic: ['brotherly'],
    latinate: ['fraternal'],
  },
  {
    germanic: ['bug', 'beetle'],
    latinate: ['insect'],
  },
  {
    germanic: ['build', 'rear', 'raise'],
    latinate: ['construct'],
  },
  {
    germanic: ['business', 'undertaking', 'note'],
    latinate: ['affair', 'enterprise'],
  },
  {
    germanic: ['buy', 'cop'],
    latinate: ['purchase'],
  },
  {
    germanic: ['calf'],
    latinate: ['veal'],
  },
  {
    germanic: ['calling', 'job', 'lifework', 'livelihood', 'living'],
    latinate: ['career', 'profession', 'vocation', 'occupation', 'employment'],
  },
  {
    germanic: ['cat'],
    latinate: ['felid', 'feline'],
  },
  {
    germanic: ['chagrin', 'dismay', 'shame'],
    latinate: ['displeasure', 'dissatisfaction'],
  },
  {
    germanic: ['chic', 'trendy', 'in vogue', 'dapper', 'dashing', 'swanky', 'uptown'],
    latinate: ['elegant', 'fashionable', 'stylish'],
  },
  {
    germanic: ['child', 'bairn', 'baby', 'kid', 'newborn'],
    latinate: ['infant', 'neonate'],
  },
  {
    germanic: ['choose', 'pick', 'wale'],
    latinate: ['opt', 'select'],
  },
  {
    germanic: ['chore'],
    latinate: ['task'],
  },
  {
    germanic: ['cold', 'chilly', 'freezing'],
    latinate: ['frigid'],
  },
  {
    germanic: ['come', 'land', 'reach', 'get to', 'make (to a place)'],
    latinate: ['arrive'],
  },
  {
    germanic: ['cow', 'bull', 'neat', 'ox', 'steer', 'bison', 'aurochs'],
    latinate: ['beef', 'cattle'],
  },
  {
    germanic: ['daily'],
    latinate: ['diurnal', 'quotidian'],
  },
  {
    germanic: ['deadly', 'baneful'],
    latinate: ['mortal', 'fatal'],
  },
  {
    germanic: ['deem', 'regard', 'hold', 'feel', 'bethink'],
    latinate: ['judge', 'consider', 'esteem'],
  },
  {
    germanic: ['deer', 'hart', 'doe', 'hind', 'stag', 'roe', 'buck'],
    latinate: ['venison'],
  },
  {
    germanic: ['demean', 'bemean', 'belittle', 'put down', 'lower'],
    latinate: ['debase', 'abase', 'degrade', 'humiliate'],
  },
  {
    germanic: ['do', 'perform', 'undertake'],
    latinate: ['execute', 'dispatch'],
  },
  {
    germanic: ['dog', 'hound'],
    latinate: ['canid', 'canine'],
  },
  {
    germanic: ['drink', 'swill', 'carouse', 'wassail', 'sup', 'sip'],
    latinate: ['imbibe', 'beverage'],
  },
  {
    germanic: ['dove'],
    latinate: ['pigeon', 'culver'],
  },
  {
    germanic: ['earnest', 'grim', 'stern'],
    latinate: ['serious', 'grave', 'sober'],
  },
  {
    germanic: ['dirt', 'earth', 'land', 'ground', 'landscape'],
    latinate: ['terrain'],
  },
  {
    germanic: ['eastern', 'easterly', 'eastward'],
    latinate: ['oriental'],
  },
  {
    germanic: ['eat', 'sup', 'break bread', 'banquet', 'feed', 'snack', 'swallow', 'nosh', 'take in', 'bite', 'scarf'],
    latinate: ['dine', 'consume', 'devour', 'ingest'],
  },
  {
    germanic: ['eld', 'lifetime', 'lifespan'],
    latinate: ['age'],
  },
  {
    germanic: ['end', 'fulfill', 'halt', 'wrap up', 'stop', 'blin'],
    latinate: ['finish', 'complete', 'discontinue', 'terminate'],
  },
  {
    germanic: ['even', 'flat', 'smooth', 'in line', 'lined up', 'steady'],
    latinate: ['level', 'planar', 'equal'],
  },
  {
    germanic: ['fare', 'trek', 'go abroad', 'take a trip', 'rove', 'gallivant'],
    latinate: ['travel', 'journey', 'voyage'],
  },
  {
    germanic: ['fast', 'rathe', 'rather', 'snell', 'quick', 'swift', 'speedy'],
    latinate: ['rapid'],
  },
  {
    germanic: ['fatherly', 'fatherlike'],
    latinate: ['paternal'],
  },
  {
    germanic: ['feeling', 'awareness', 'touch'],
    latinate: ['sentiment', 'sensation'],
  },
  {
    germanic: ['fill up', 'stock', 'renew'],
    latinate: ['replenish'],
  },
  {
    germanic: ['first', 'foremost', 'main'],
    latinate: ['primary'],
  },
  {
    germanic: ['flood', 'overwhelm', 'overset'],
    latinate: ['inundate'],
  },
  {
    germanic: ['follow', 'track'],
    latinate: ['ensue'],
  },
  {
    germanic: ['former', 'erstwhile', 'foregoing', 'aforegoing', 'whilom'],
    latinate: ['previous', 'preceding'],
  },
  {
    germanic: ['forbid', 'ban', 'forestall'],
    latinate: ['prohibit', 'prevent', 'interdict'],
  },
  {
    germanic: ['forecast', 'outlook'],
    latinate: ['projection'],
  },
  {
    germanic: ['foretell', 'soothsay', 'forebode', 'foreshadow'],
    latinate: ['predict'],
  },
  {
    germanic: ['freedom'],
    latinate: ['liberty'],
  },
  {
    germanic: ['friendly', 'kindly', 'warm'],
    latinate: ['amicable'],
  },
  {
    germanic: ['garden', 'yard', 'park', 'pound', 'paddock'],
    latinate: ['court', 'enclosure'],
  },
  {
    germanic: ['gather', 'forgather', 'gather up', 'group', 'cluster', 'lease'],
    latinate: ['assemble'],
  },
  {
    germanic: ['gift', 'handsel'],
    latinate: ['present'],
  },
  {
    germanic: ['give', 'afford', 'furnish'],
    latinate: ['provide'],
  },
  {
    germanic: ['gladness', 'bliss', 'fairness', 'merriment', 'mirth', 'winsomeness', 'happiness', 'glee', 'thrill', 'queem'],
    latinate: ['joy', 'felicity', 'pleasure', 'delight'],
  },
  {
    germanic: ['god', 'goddess', 'godhead'],
    latinate: ['deity', 'divine', 'immortal'],
  },
  {
    germanic: ['good', 'well', 'helpful', 'gainful', 'wholesome', 'worthwhile'],
    latinate: ['beneficial'],
  },
  {
    germanic: ['go on', 'wend'],
    latinate: ['proceed'],
  },
  {
    germanic: ['green', 'lush'],
    latinate: ['verdant'],
  },
  {
    germanic: ['guess', 'fathom', 'sound', 'gauge'],
    latinate: ['estimate'],
  },
  {
    germanic: ['harbour', 'haven'],
    latinate: ['port'],
  },
  {
    germanic: ['hardship', 'ordeal'],
    latinate: ['difficulty'],
  },
  {
    germanic: ['hate', 'loathe', 'scorn'],
    latinate: ['detest'],
  },
  {
    germanic: ['height', 'loftiness'],
    latinate: ['altitude', 'elevation'],
  },
  {
    germanic: ['help', 'abet', 'give a hand', 'bestand', 'bestead'],
    latinate: ['assist'],
  },
  {
    germanic: ['hen'],
    latinate: ['pullet'],
  },
  {
    germanic: ['here', 'ferd'],
    latinate: ['army', 'militia'],
  },
  {
    germanic: ['hill', 'barrow', 'mound', 'down', 'dune'],
    latinate: ['mount'],
  },
  {
    germanic: ['holiday', 'leave', 'break', 'furlough'],
    latinate: ['vacation'],
  },
  {
    germanic: ['holy', 'hallowed'],
    latinate: ['sacred'],
  },
  {
    germanic: ['island', 'ait', 'eyot', 'holm'],
    latinate: ['isle'],
  },
  {
    germanic: ['house'],
    latinate: ['domicile'],
  },
  {
    germanic: ['itch', 'irk', 'tease', 'fret', 'grill'],
    latinate: ['irritate'],
  },
  {
    germanic: ['kind', 'ilk', 'brand', 'breed', 'set', 'strain', 'tier', 'like'],
    latinate: ['type', 'class', 'sort', 'genre'],
  },
  {
    germanic: ['know', 'wit', 'wot', 'espy', 'spot', 'tell'],
    latinate: ['recognize'],
  },
  {
    germanic: ['late', 'delayed'],
    latinate: ['tardy'],
  },
  {
    germanic: ['lawful', 'straight', 'fair', 'right', 'rightful', 'sound', 'meet', 'warranted', 'fitting'],
    latinate: ['legal', 'legitimate', 'legit', 'just', 'proper'],
  },
  {
    germanic: ['leader', 'king', 'head', 'baron', 'earl'],
    latinate: ['chief', 'captain', 'emperor', 'count', 'duke', 'president'],
  },
  {
    germanic: ['length'],
    latinate: ['longitude'],
  },
  {
    germanic: ['lie (down)', 'rest', 'lean (back)'],
    latinate: ['repose', 'recline'],
  },
  {
    germanic: ['loving', 'fond'],
    latinate: ['amorous'],
  },
  {
    germanic: ['many', 'manifold', 'rife', 'teeming'],
    latinate: ['multiple', 'numerous', 'abundant', 'copious'],
  },
  {
    germanic: ['match', 'fit', 'answer to'],
    latinate: ['correspond'],
  },
  {
    germanic: ['mean', 'betoken', 'stand for', 'ettle'],
    latinate: ['intend', 'signify'],
  },
  {
    germanic: ['meet', 'hit'],
    latinate: ['encounter'],
  },
  {
    germanic: ['midday'],
    latinate: ['noon'],
  },
  {
    germanic: ['mistake', 'blunder', 'wrength'],
    latinate: ['error'],
  },
  {
    germanic: ['motherly'],
    latinate: ['maternal'],
  },
  {
    germanic: ['nigh', 'near'],
    latinate: ['close', 'circa', 'approximate'],
  },
  {
    germanic: ['new', 'fresh', 'now'],
    latinate: ['novel', 'modern'],
  },
  {
    germanic: ['nightly'],
    latinate: ['nocturnal'],
  },
  {
    germanic: ['northern'],
    latinate: ['septentrional'],
  },
  {
    germanic: ['old', 'stale', 'elderly', 'of yore'],
    latinate: ['ancient', 'antediluvian'],
  },
  {
    germanic: ['other', 'else'],
    latinate: ['different', 'alternative'],
  },
  {
    germanic: ['oven', 'hearth', 'stove', 'oast', 'smithy', 'smithery'],
    latinate: ['kiln', 'furnace'],
  },
  {
    germanic: ['road', 'way', 'boulevard', 'drive', 'path', 'street'],
    latinate: ['route', 'avenue', 'itinerary'],
  },
  {
    germanic: ['rot', 'defile', 'befoul'],
    latinate: ['putrefy'],
  },
  {
    germanic: ['see', 'ken'],
    latinate: ['perceive'],
  },
  {
    germanic: ['seem', 'look'],
    latinate: ['appear'],
  },
  {
    germanic: ['seethe', 'bubble'],
    latinate: ['boil'],
  },
  {
    germanic: ['selfhood', 'likeness', 'selfdom'],
    latinate: ['identity'],
  },
  {
    germanic: ['selfsame'],
    latinate: ['identical'],
  },
  {
    germanic: ['sell', 'trade', 'deal in', 'bargain'],
    latinate: ['vend'],
  },
  {
    germanic: ['shape', 'build', 'outline'],
    latinate: ['form'],
  },
  {
    germanic: ['sheep', 'lamb'],
    latinate: ['mutton'],
  },
  {
    germanic: ['shop'],
    latinate: ['store'],
  },
  {
    germanic: ['shut'],
    latinate: ['close'],
  },
  {
    germanic: ['shy'],
    latinate: ['timid'],
  },
  {
    germanic: ['sight', 'seeing', 'ken'],
    latinate: ['vision'],
  },
  {
    germanic: ['skill', 'craft', 'cunning', 'list'],
    latinate: ['art', 'science'],
  },
  {
    germanic: ['skillful', 'crafty', 'deft'],
    latinate: ['adept'],
  },
  {
    germanic: ['sleeping', 'slumbering', 'idle', 'fallow'],
    latinate: ['dormant', 'hibernate', 'torpid'],
  },
  {
    germanic: ['small', 'little', 'tiny', 'wee'],
    latinate: ['minute', 'petite', 'diminutive'],
  },
  {
    germanic: ['snake', 'worm'],
    latinate: ['serpent'],
  },
  {
    germanic: ['sorrow', 'care', 'woe'],
    latinate: ['grief'],
  },
  {
    germanic: ['southern'],
    latinate: ['meridional'],
  },
  {
    germanic: ['speak', 'talk', 'prate', 'prattle'],
    latinate: ['converse', 'discourse', 'communication', 'dictation'],
  },
  {
    germanic: ['stound', 'time', 'tide', 'while', 'throw', 'spell', 'stint'],
    latinate: ['hour', 'moment', 'interval'],
  },
  {
    germanic: ['sundry', 'mixed'],
    latinate: ['various', 'miscellaneous'],
  },
  {
    germanic: ['swine', 'farrow', 'sow', 'boar', 'pig', 'hog'],
    latinate: ['pork'],
  },
  {
    germanic: ['teach', 'show', 'lear', 'lere'],
    latinate: ['educate'],
  },
  {
    germanic: ['tell', 'kithe', 'make known'],
    latinate: ['relate', 'narrate'],
  },
  {
    germanic: ['thinking', 'thoughtful', 'mindful'],
    latinate: ['pensive'],
  },
  {
    germanic: ['thought', 'hunch', 'inkling', 'clue'],
    latinate: ['idea'],
  },
  {
    germanic: ['threat', 'plight', 'fear'],
    latinate: ['danger', 'peril', 'menace'],
  },
  {
    germanic: ['token', 'mark', 'hallmark', 'hint', 'stamp'],
    latinate: ['sign', 'symbol', 'trace', 'indication'],
  },
  {
    germanic: ['tongue', 'speech', 'talk'],
    latinate: ['language'],
  },
  {
    germanic: ['twin', 'twofold'],
    latinate: ['double', 'duplicate'],
  },
  {
    germanic: ['understand', 'get', 'grasp'],
    latinate: ['comprehend'],
  },
  {
    germanic: ['uphold', 'bolster', 'bear up', 'undergird', 'upbear', 'shore up', 'stay'],
    latinate: ['support'],
  },
  {
    germanic: ['uplifting', 'raising', 'rearing'],
    latinate: ['elevating'],
  },
  {
    germanic: ['utter', 'say'],
    latinate: ['pronounce'],
  },
  {
    germanic: ['utterly', 'altogether', 'fully', 'wholly'],
    latinate: ['totally'],
  },
  {
    germanic: ['wage', 'meed', 'hire'],
    latinate: ['salary'],
  },
  {
    germanic: ['wait, await', 'bide', 'tarry', 'ween'],
    latinate: ['expect'],
  },
  {
    germanic: ['warning', 'tip off'],
    latinate: ['notice', 'alert', 'recommendation', 'admonition'],
  },
  {
    germanic: ['wash', 'cleanse', 'rinse', 'lave', 'bathe', 'scrub'],
    latinate: ['launder'],
  },
  {
    germanic: ['watch', 'keep', 'behold'],
    latinate: ['observe', 'supervise'],
  },
  {
    germanic: ['watchful', 'waking', 'wary'],
    latinate: ['vigilant'],
  },
  {
    germanic: ['wed'],
    latinate: ['marry'],
  },
  {
    germanic: ['wedlock'],
    latinate: ['marriage'],
  },
  {
    germanic: ['weird', 'fremd', 'odd', 'queer', 'uncouth', 'outlandish', 'eldritch', 'eerie', 'fey'],
    latinate: ['strange'],
  },
  {
    germanic: ['worldly', 'earthly'],
    latinate: ['mundane', 'secular'],
  },
  {
    germanic: ['weep', 'greet (cry)', 'regret', 'bawl', 'wail', 'whine', 'cry', 'mourn', 'sob'],
    latinate: ['lament', 'deplore'],
  },
  {
    germanic: ['weighty', 'meaningful', 'key'],
    latinate: ['important', 'grave'],
  },
  {
    germanic: ['western'],
    latinate: ['occidental'],
  },
  {
    germanic: ['whole'],
    latinate: ['entire'],
  },
  {
    germanic: ['width', 'breadth', 'span'],
    latinate: ['latitude'],
  },
  {
    germanic: ['wild', 'fell', 'grim'],
    latinate: ['savage', 'feral'],
  },
  {
    germanic: ['wise', 'clever', 'insightful', 'enlightened', 'keen', 'knowledgeable', 'shrewd'],
    latinate: ['prudent', 'intelligent', 'sapient'],
  },
  {
    germanic: ['wish', 'will', 'yearning', 'longing', 'lust', 'want'],
    latinate: ['desire', 'cupidity'],
  },
  {
    germanic: ['womanly'],
    latinate: ['feminine'],
  },
  {
    germanic: ['wood (a wood)', 'holt', 'weald/wold', 'bush, boscage', 'grove', 'brush', 'thicket', 'frith', 'shaw'],
    latinate: ['forest', 'copse', 'coppice'],
  },
  {
    germanic: ['wordbook'],
    latinate: ['dictionary'],
  },
  {
    germanic: ['work', 'drudge, drudgery', 'swink'],
    latinate: ['labor'],
  },
  {
    germanic: ['writing', 'writ'],
    latinate: ['script'],
  },
  {
    germanic: ['wyrd', 'doom'],
    latinate: ['fate', 'destiny'],
  },
  {
    germanic: ['yearly'],
    latinate: ['annual'],
  },
  {
    germanic: ['yellow'],
    latinate: ['ochre'],
  },
  {
    germanic: ['youthful', 'young'],
    latinate: ['juvenile', 'immature'],
  },
  {
    germanic: ['youth', 'teenhood'],
    latinate: ['adolescence'],
  },
] as const;

export default wordList.map((cat) => {
  return {
    germanic: cat.germanic.map((word) => new Word(word, 'germanic')),
    latinate: cat.latinate.map((word) => new Word(word, 'latinate')),
  };
});
