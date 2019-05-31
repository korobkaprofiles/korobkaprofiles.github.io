function selectQuote(){
  var randomNumber=Math.floor(Math.random()*arguments[0].length);
document.getElementById("quote").innerHTML = arguments[0][randomNumber];
  document.getElementById("source").innerHTML = arguments[1][randomNumber];
};
var dertaArr=["1. Географическое, физико-географическое положение."];
  var dertaSrc=["Red Dead Redemption"];

var famousArr=["2.  Экономическая география. Геополитическое положение России."];
  var famousSrc =["Marilyn Monroe"];

var moviesArr=["3.  Разница во времени часовых поясов."];
  var moviesSrc=["Yoda, Star Wars","Love Story"];

var a4Arr=["4.  Моря России. Природа, хозяйственное значение."];
 var a4Src=["J.R.R. Tolkien, "];

 var a5Arr=["5. Заселение Русской Равнины."];
 var a5Src=['<p>5. Первоначальный исток России находится в первых государственных образованиях восточных славян, которые возникли в результате их расселения по Русской равнине. С VI в. по XI в. восточные славяне заселили не только бассейн Днепра (современная Украина и Белоруссия), но и крайне западную часть современной России. На севере в бассейне р. Волхов и о. Ильмень проживали ильменские словене. Северные границы их расселения достигали Финского залива, р. Невы, Ладожского озера, р. Свири и Онежского озера. На востоке область их расселения простиралась до о. Белое и верхних притоков Волги. Южнее ильменских словен длинной полосой по течению верховий Днепра, западной Двины и Волги расселились кривичи, бассейн Верхней Оки занимали вятичи. По левобережью Днепра, по р. Сож и притокам сложилась область расселения радимичей, а в долине Десны, Сейма и Ворсклы - северян. <br><br>На северо-западе восточные славяне граничили с летто-литовскими племенами (предками современных литовцев и латышей) и финноязычными эстами (современные эстонцы). На севере и северо-востоке восточные славяне граничили с многочисленными мелкими финно-угорскими племенами (карелы, саами, пермь - предки современных коми, югра - предки современных хантов и манси). В Волго-Окском междуречье проживали меря, к востоку от них, в междуречье Волги и Ветлуги и по правобережью Волги - черемисы (современные марийцы). Большую территорию от правобережья Средней Волги до низовий Оки, Цны и верховий Хопра занимали мордва, южнее которых вдоль Волги проживали родственные им буртасы. В Окско-Клязминском междуречье жили родственные мордве мурома и меще-ра. Уже в процессе своего первоначального расселения на северо-восток восточные славяне смешивались и ассимилировали мелкие финно-угорские племена (водь, ижора, мещера), имена которых сейчас сохранились лишь в географических названиях.</p>'];

 var a6Arr=["6. Рельеф. Факторы рельефообразования."];
 var a6Src=['<p>6. Факторы рельефообразования <br><br>Рельеф формируется в результате взаимодействия внутренних (эндогенных) и внешних (экзогенных) сил. Эндогенные и экзогенные процессы рельефообразования действуют постоянно. При этом эндогенные процессы в основном создают главные черты рельефа, а экзогенные пытаются выровнять рельеф. <br> <br>Основными источниками энергии при рельефообразовании являются: <br> <br>Внутренняя энергия Земли; <br> <br>Энергия Солнца; <br> <br>Сила тяжести <br> <br>Влияние космоса <br> <br>.Источником энергии эндогенных процессов является тепловая энергия Земли, связанная с процессами, происходящими в мантии (радиоактивный распад). За счет эндогенных сил произошло выделение земной коры из мантии с образованием двух ее типов: континентальной и океанической. <br> <br>Эндогенные силы вызывают: движения литосферы, образование складок и разломов, землетрясения и вулканизм. Все эти движения отражаются в рельефе и приводят к образованию гор и прогибов земной коры <br> <br>.Разломы земной коры различают по: размерам, форме и по времени образования. Глубокие разломы образуют крупные блоки земной коры, которые испытывают вертикальные и горизонтальные смещения. Такие разломы часто определяют очертания материков. <br> <br>Крупные блоки земной коры прорезаны сетью мелких разломов. Нередко к ним приурочены речные долины (например, долина р. Дон). Вертикальные движения таких блоков всегда отражены в рельефе. Особенно хорошо видны формы, созданные современными (неотектоническими) движениями. Так, в нашем Центрально-Черноземном регионе площадь Среднерусской возвышенности (Белгородская, Воронежская, Курская области) поднимается со скоростью 4-6 мм/год. Одновременно Окско-Донская низменность (Тамбовская, Липецкая и северо-восток Воронежской областей) ежегодно опускается на 2 мм. Древние движения земной коры обычно отражены в характере залегания пород.</p>' ];

 var a7Arr=["7. Значение рельефа в хозяйстве."];
 var a7Src=['<p>7. Рельеф непосредственно и опосредованно влияет на хозяйственную деятельность человека. От него зависят площади пахотных земель, сенокосов, пастбищ, определяющие производственную специализацию сельского хозяйства. Рельеф может затруднять возможности применения сельскохозяйственных машин и т.п.. <br><br>На протяжении всей истории развития нашей планеты на ее поверхности и в недрах образовались различные горные породы. Те из них, которые используются человеком, называются полезными ископаемыми. их, как и горные породы, делят по происхождению на осадочные, магматические и метаморфические. <br><br>Добыче полезных ископаемых, в основном, с небольших глубин (до 1 тыс. м). Следовательно, они тесно связаны со строением именно верхних слоев земной коры. Поэтому для разных тектонических структур характерны определенные группы полезных ископаемых. <br><br>Полезные ископаемые осадочного происхождения распространены преимущественно в пределах тектонических впадин и плит платформенных областе ^, а также предгорных краевых прогибов. То есть они характерны для структур, которые в прошлом были бассейнами накопления осадочного материала, сносился с прилегающих территорий. <br><br>Магматические и метаморфические полезные ископаемые следует искать в горах со следами вулканических процессов, а также в кристаллических щитах, где близко к поверхности залегают древние магматические и метаморфизованные породы. их месторождения формируются, как правило, на стыках литосферных плит. <br><br>Так, на континентах, в местах развития рифтовых зон, образуются месторождения марганца, железа и меди. В зоне схода материковых литосферных плит возникают залежи меди, серы, урана. <br><br>Запасы полезных ископаемых не безграничны и постепенно исчерпываются, поэтому их необходимо бережно использовать, наиболее полно извлекать, а отработанные шахты и карьеры возвращать в безопасное состояние.</p>'];

 var a8Arr=["8.Климат России и его особенности."];
 var a8Src=['<p>8.Климат всей России характеризуется четким разделением на теплые и холодные сезоны года. С севера на юг прослеживается уменьшение температурных перепадов и потепление климата. Восточная часть страны холоднее, чем западная. Это связано с тем, что на западную часть наибольшее влияние оказывает океан, который смягчает климат. В стране определяются следующие климатические пояса: <br><br>арктический; <br><br>субарктический; <br><br>умеренный; <br><br>субтропический. <br><br>В пределах каждого пояса выделяют зональные типы климата, сменяющиеся в направлении с севера на юг, и климатические области, направленные с запада на восток. Влияние на климат России оказывают такие факторы, как рельеф и близость к океану. В таблице представлены зоны климата для разных регионов страны. </p>'];

 var a9Arr=["9. Типы климатов ."];
 var a9Src=["<p>9. Жаркие климатические пояса К жарким климатическим поясам относятся экваториальный, субэкваториальный и тропический. Эти территории постоянно получают значительное количество тепла из-за большого угла падения солнечных лучей. В экваториальном поясе весь год господствует экваториальная воздушная масса. Нагреваемый воздух в условиях низкого давления постоянно поднимается вверх, что приводит к образованию дождевых облаков. Здесь ежедневно выпадают ливневые осадки, часто с грозами. Количество осадков 1000-3000 мм в год. Это больше, чем может испариться влаги. В экваториальном поясе один сезон года: всегда жарко и влажно. <br> <br>Умеренные климатические пояса Умеренные пояса занимают около 1/4 поверхности Земли. Они имеют более резкие сезонные различия в температуре и осадках, чем жаркие пояса. Это связано со значительным уменьшением величины угла падения солнечных лучей и усложнением атмосферной циркуляции. В них весь год находится воздух умеренных широт, но отмечаются частые вторжения арктического и тропического воздуха. В Южном полушарии господствует океанический умеренный климат с нежарким летом (от +12 до +14 °С), мягкой зимой (от +4 до +6 °С) и обильными осадками (около 1000 мм в год). В Северном полушарии большие площади занимает материковый умеренный климат Евразии и Северной Америки. Его главная особенность — резко выраженные изменения температуры по сезонам года. <br><br>Холодные климатические пояса В арктическом и антарктическом поясах земная поверхность во время полярного дня получает мало солнечного тепла, а во время полярной ночи не нагревается совсем. Поэтому арктическая и антарктическая воздушные массы очень холодные и содержат мало водяного пара. Антарктический материковый климат наиболее суровый: исключительно морозная зима и холодное лето с отрицательными температурами. Поэтому Антарктида покрыта мощным ледником. В Северном полушарии похожий климат в Гренландии, а над Северным Ледовитым океаном — морской арктический. Он теплее антарктического, так как океанские воды, даже покрытые льдами, дают дополнительное тепло. </p>"];

 var a10Arr=["10. Водные ресурсы России ."];
 var a10Src=["<p>10. Холодные климатические пояса В арктическом и антарктическом поясах земная поверхность во время полярного дня получает мало солнечного тепла, а во время полярной ночи не нагревается совсем. Поэтому арктическая и антарктическая воздушные массы очень холодные и содержат мало водяного пара. Антарктический материковый климат наиболее суровый: исключительно морозная зима и холодное лето с отрицательными температурами. Поэтому Антарктида покрыта мощным ледником. В Северном полушарии похожий климат в Гренландии, а над Северным Ледовитым океаном — морской арктический. Он теплее антарктического, так как океанские воды, даже покрытые льдами, дают дополнительное тепло. </p>"];

 var a11Arr=["11. Почвенные ресурсы России."];
 var a11Src=["<p>11. Почвенные ресурсы России Почвы – ценный природный ресурс. Это главный источник получения продуктов питания и некоторых видов промышленного сырья. В сельском хозяйстве почвы являются основным средством производства. Однако для этой сферы хозяйственной деятельности очень важно качество почв, их плодородие. Поэтому в сельском хозяйстве используются далеко не все земли. Основная часть сельскохозяйственных земель расположена в южной части России, так как здесь наилучшие почвенно-климатические условия. Под пашню используют наиболее плодородные почвы – черноземы, серые лесные, темно-каштановые. На них выращивают пшеницу, подсолнечник, сахарную свеклу и др. Для дерново-подзолистых почв также высока степень распаханности. Эти почвы благоприятны для возделывания таких культур, как рожь, лен-долгунец, картофель. Таким образом, основная земледельческая зона расположена в природных зонах лесостепей, степей и смешанных лесов. Подзолистые почвы хвойных лесов, каштановые, бурые сухих степей, полупустынь менее пригодны для земледелия. Среди сельскохозяйственных земель здесь преобладают сенокосы и пастбища. Возможности для увеличения площади пахотных земель в России практически исчерпаны. Поэтому для удовлетворения потребностей населения в продуктах питания необходимо рациональное использование почвенных ресурсов и повышение плодородия почв. Важная роль в этом принадлежит мелиорации земель. </p>"];

 var a12Arr=["12. Минерально-сырьевые ресурсы России."];
 var a12Src=["<p>12. Минерально-сырьевые ресурсы России Россия обладает уникальным запасом минеральных ресурсов. Созданная в стране минерально-сырьевая база играет важную роль в минерально-сырьевом комплексе мира. В России открыто и разведано около 20 тыс. месторождений полезных ископаемых, из которых более трети введены в промышленное освоение. Крупные и уникальные месторождения (около 5% ) содержат почти 70% запасов и обеспечивают 50% добычи минерального сырья. Месторождения России содержат свыше 10% мировых разведанных запасов нефти, ….% – газа, 11% – угля, 26% – железных руд, значительную часть разведанных запасов цветных и редких металлов. По объему разведанных запасов никеля, платиноидов и платины, алмазов, ряда других полезных ископаемых Российская Федерация занимает первое – третье места в мире. Имеются крупные запасы апатитов, калийных солей, плавикового шпата и других неметаллических минеральных ресурсов. </p> "];

 var a13Arr=["13. Растительность России ."];
 var a13Src=["<p>13. Растительность России<br> <br>Растительный покров – важнейший компонент природы, индикатор природных условий. Определяет внешний облик территории, поэтому природные зоны получили название по типу растительного покрова: тундра, тайга, смешанные леса и т.д. Растительность обнаруживает тесную связь с климатом, почвами и рельефом. Поэтому для ее размещения характерна широтная зональность и провинциальность (секторность) на равнинах и высотная поясность в горах. <br> <br>Для территории России (в силу ее размеров, разнообразия природных условий) характерны сложные сочетания фитоценозов, образующих разные типы растительности. В составе флоры России насчитывается: <br> <br>Более 11 тыс. сосудистых растений; <br> <br>Свыше 10 тыс. видов водорослей; <br> <br>Около 5 тыс. видов лишайников; <br> <br>Много видов грибов (выше перечисленных вместе взятых); <br> <br>Широко распространены цветковые (сложноцветные, бобовые, злаки – свыше 1 тыс. видов <br> <br>каждого семейства) и т.д. <br> <br>Флористическое разнообразие возрастает с С на Ю, в пустынях снижается (аридность). Увеличивается также от равнин к горам из-за разнообразия экологических условий (экологических ниш) и многократной их сменой на коротких расстояниях. Горы являются «убежищем жизни», флора их насыщена реликтами. К их числу относятся древовидная корейская ива чозения; папоротники чистоус коричневый и оноклея чувствительная в Приамурье и Приморье; тис ягодный на Кавказе; кустарник волчеягодник Софии на Среднерусской возвышенности и др. Одни виды растут повсеместно, но встречаются и эндемики. Наиболее богаты ими горные районы (особенно Кавказ). <br> <br>Для России характерны следующие типы растительности: <br> <br>Тундровый, <br> <br>Лесной, <br> <br>Степной, <br> <br>Пустынный, <br> <br>Луговой, <br> <br>Болотный.</p> "];

 var a14Arr=["14. Животный мир России."];
 var a14Src=["<p>аа</p> "];

 var a15Arr=["15. Природно-территориальные комплексы России ."];
 var a15Src=["<p>15. Наша Россия представляет собой систему природно-территориальных комплексов (ПТК)..Для исследования территории применяется метод природного районирования. Его принципы- Азональные и Зональные.<br> <br>.Азональные-основные элементы Природного комплекса- тектоническое строение и рельеф..Крупные природно-территориальные комплексы России:Кавказ,Восточно-Европейская равнина,Урал,Западно-Сибирская равнина,Средняя Сибирь,Северо-Восточная Сибирь,Горы Южной Сибири,а также Дальний Восток.<br> <br>.Зональные-зоны-арктические пустыни,тундра.лесотундра,тайга,лесостепи,степи,полупусты-ни,пустыни<br> <br>.А природные зоны-это большие участки со своей почвой,со своим растительным,со своим животным миром,которые формируются от тепла и влаги,их сочетания. А в горах,на разных высотах,формируются свои определенные природные зоны..</p>"];

 var a16Arr=["16. Природные зоны России. Зоны тундры, тайги ."];
 var a16Src=["<p></p> "];

 var a17Arr=["17. Зоны лесостепной, степной и пустынь ."];
 var a17Src=["<p> 17. Степь. <br> <br>1. Географическое положение зоны.Она невелика по площади и занимает юг европейской части России и Западной Сибири. <br> <br>2. Климатические условия.Климат умеренно-континентальный.Осадков выпадает мало 300-400мм. <br> <br>Зима  умеренно холодная  -19°.<br> <br>Лето жаркое и солнечное +20°.<br> <br>Сильные ветры,засухи,суховеи,пыльные бури. <br> <br>3. Почвы.Чернозёмы,тёмно-каштановые. <br> <br>4. Растительность.Эта зона полностью распахана.Травянистая степная растительность,преобладает ковыль. <br> <br>5. Животный мир.В основном преобладают грызуны:тушкан,суслик,хомяк,сурок.Есть дрофа,стрепет,сайгак,лисица,барсук. <br> <br>   Лесостепь. <br> <br>1. Географическое положение зоны.Это переходная зона от леса к степи.Расположена севернее степной зоны.Она находится в южной части Урала,в Алтайском крае. <br> <br>2. Климатические условия.Эта зона лежит в умеренном климатическом поясе.Климат умеренно-континентальный.Осадков выпадает 600 мм.Зима умеренно холодная  -10°.Лето жаркое и засушливое  +25°.<br> <br>3. Почвы.Серые лесные,чернозёмы. <br> <br>4. Растительность.Лиственные леса,дуб,ясень,липа,каштан,степное разнотравье. <br> <br>5. Животный мир.Косули,белки,зайцы,лоси,суслики,куницы,сурки,змеи. <br> <br>Настоящие пустыни на территории России тоже есть, но в отличии от полупустынь, они не образуют сплошной природной зоны, а встречаются отдельными участками: в Астраханской и Волгоградской областях, Калмыкии и в районе Кавказа. <br> <br>Полупустыня и пустыня вовсе не лишена жизни. Учёные полагают, что здесь обитает даже больше животных, чем в современных степях. Из-за того, что степи усиленно осваиваются, животные уходят на юг. <br> <br>Но всё же главная причина образования пустынных территорий - это климат. В полупустыни и пустыни климат резко-континентальный. Осадков здесь выпадает мало: от 250 мм в полупустынях, до 150 мм в год в пустынях. Испаряемость превышает количество осадков в 4-7 раз. Это означает, что все осадки, которые здесь выпадают могли бы испариться целых 7 раз. Температура воздуха зимой может быть очень низкой (до -30 градусов), а летом достигать +40 градусов по Цельсию. Средняя температура воздуха в июле около +25 градусов. Такой важный агроклиматический показатель, как коэффициент увлажнения достигает всего 0,3 или 0,1. Увлажнение явно недостаточное. Лето очень жаркое, сухое, солнечное. Количество солнечных дней в году в пустынях и полупустынях достигает 200.</p> "];

 var a18Arr=["18. Природные районы России. Восточно-европейская равнина ."];
 var a18Src=["<p>18.1 Восточно-Европейская равнина. <br> <br>2 Дальний Восток. <br> <br>3 Урал. <br> <br>4 Кавказ. <br> <br>5 Восточная Сибирь. <br> <br>6 Горы Южной Сибири. <br> <br>7 Западная Сибирь. <br> <br>8 Северо-восток Сибири. <br> <br> Восточ евроейская .Протяжённость равнины с севера на юг составляет более 2,5 тысяч километров, а с запада на восток – 1 тысяча километров. Практически на всём протяжении Восточно-Европейской равнины преобладает полого-равнинный рельеф. В пределах территории Восточно-Европейской равнины сосредоточена большая часть населения России и большинство крупных городов страны. Именно здесь много веков назад образовалось русское государство, ставшее в последствии крупнейшей по своей территории страной в мире. Здесь также сосредоточена значительная часть природных ресурсов России. </p> "];

 var a19Arr=["19. Большой Кавказ, Урал."];
 var a19Src=["<p>19. Б. Кавказ — сложная горная система, состоящая из осевых, передовых и поперечных хребтов и отрогов, которые поднимаются на общем возвышенном остове. Длина его около 1100 км, ширина различна, максимальная в районе Эльбруса около 180 км. Площадь примерно 145 тыс. кв. км. В этой горной системе выделяются осевая полоса, северный и южный склоны, но, кроме того, Б. Кавказ часто делят по длине на три части: Западный Кавказ, Центральный и Восточный, границами между ними считают сечения, проходящие через Эльбрус и Казбек. <br> <br>Большую часть района занимают Уральские горы, являющиеся границей между европейской и азиатской частями России. Площадь района — 824 тыс. км2. Состав: Курганская, Оренбургская, Пермская, Свердловская, Челябинская области; 2 республики – Башкирия, Удмуртия и Коми-Пермяцкий АО. Экономико-географическое положение территории благоприятно. Район располагается на стыке экономически развитой Европейской части страны и громаднейшей сырьевой зоны на востоке России. Ресурсы Урала активно используются уже несколько веков, но до сих пор он продолжает оставаться кладовой полезных ископаемых </p> "];

 var a20Arr=["20. Западная Сибирь ."];
 var a20Src=["<p>20. Западно-Сибирская низменность третья по величине равнина на нашей планете после Амазонской и Русской. Площадь её около 2,6 миллионов квадратных километров. Протяжённость Западно-Сибирской низменности с севера на юг (от побережья Карского моря до гор Южной Сибири и полупустынь Казахстана) составляет около 2,5 тысяч километров, а с запада на восток (от Урала до Енисея) – 1,9 тысячи километров. Западно-Сибирская низменность довольно чётко ограничена с севера береговой линией Карского моря, с юга – сопками Казахстана и горами Алтая, с запада – восточными предгорьями Урала, а на востоке – долиной реки Енисей. Поверхность Западно-Сибирской низменности равнинная с довольно незначительным перепадом высот. Небольшие возвышенности характерны в основном для западных, южных и восточных окраин равнины. Там их высота может достигать порядка 250-300 метров. Для северных и центральных районов характерны низменности с высотой 50-150 метров над уровнем моря. . </p> "];

 var a21Arr=["21. Восточная Сибирь ."];
 var a21Src=["<p>21. Восточная Сибирь занимает территорию около 7 миллионов квадратных километров. Восточной Сибирью называют область, расположенную к востоку от Енисея, до гор, которые образуют водораздел между Тихим и Северным Ледовитым океанами. Наибольшую площадь занимает Среднесибирское плоскогорье. На севере и востоке располагаются две низменности: Северно-Сибирская и Центрально-Якутская. На юге и западе горы (Забайкалье, Енисейский кряж). Протяжённость этой географической области с севера на юг около 3 тысяч километров. На юге располагается граница с Монголией и Китаем, а самая северная точка – мыс Челюскин. Рельеф Восточной Сибири значительно приподнят над уровнем моря. Среднесибирское плоскогорье (основная часть Восточной Сибири) сформировалась на древней сибирской платформе. Средняя его высота над уровнем моря 500-700 метров, а наиболее высокие участки, расположенные на северо-западе достигают 1500-1700 метров (Вилюйское плато и междуречье реки Лены). Большинство рек, протекающих в Восточной Сибири, многоводны, быстротечны и протекают в глубоких долинах.</p> "];

 var a22Arr=["22. Дальний Восток."];
 var a22Src=["<p>22. Дальний Восток занимает самую восточную часть России, включая острова Новосибирские, Курильские, Сахалин. Это самый большой район России, площадь — 6,2 млн. км2. Состав: 10 субъектов федерации — Амурская, Камчатская, Магаданская, Сахалинская области, Приморский, Хабаровские края, республика Якутия (Саха), Европейская автономная область, Чукотский и Корякский АО. ЭГП своеобразное. Дальний Восток очень удалён от основных экономических районов страны, связь с ними затруднена из-за плохой транспортной обеспеченности. С другой стороны район имеет широкий выход к морям Северного Ледовитого и Тихого океанов, морскую границу с США и Японией, сухопутную — с Китаем и Кореей, то есть выгодное внешнеторговое положение, являясь связующим звеном между Россией и странами Азиатско-Тихоокеанского региона. Природные условия суровые. Рельеф преимущественно горный. Камчатка и Курильские острова — район землетрясений и вулканизма. . </p> "];

 var a23Arr=["23. Горы Юга Сибири. ."];
 var a23Src=["<p>23. Горы Южной Сибири — одна из наиболее крупных горных стран Советского Союза: ее площадь — более 1,5 млн. км2. Большая часть территории располагается в глубине материка на значительном расстоянии от океанов. С запада на восток горы Южной Сибири протягиваются почти на 4500 км — от равнин Западной Сибири до хребтов побережья морей Тихого океана. Они образуют водораздел между великими сибирскими реками, стекающими к Северному Ледовитому океану, и реками, отдающими свои воды бессточной области Центральной Азии, а на крайнем востоке — Амуру. <br> <br> На западе и севере горы Южной Сибири отделены от соседних стран четкими естественными границами, чаще всего совпадающими с уступами окраинных участков гор над прилегающими равнинами. В качестве южного рубежа страны принимают государственную границу СССР и МНР; восточная же граница проходит от слияния Шилки и Аргуни на север, к Становому хребту, и далее, к верховьям Зеи и Маи. <br> <br> Значительная приподнятость территории над уровнем моря служит главной причиной отчетливо выраженной высотной зональности в распределении ландшафтов, из которых наиболее типичны горно-таежные, занимающие более 60% площади страны. Сильно пересеченный рельеф и большие амплитуды его высот вызывают существенное разнообразие и контрастность природных условий. </p> "];

 var a24Arr=["24. Предмет, методы исследования социально-экономической географии ."];
 var a24Src=["<p>24. Предмет методы исследования социально-экономической географии<br> <br>1. картографический (карты) <br> <br>2. районирование (экономическо) <br> <br>3. сравнительно-географический<br> <br>4. непосредственное наблюдение и ключи<br> <br>5. дистанционные наблюдения (аэро, космо снимки, спутники)</p> "];

 var a25Arr=["25. Экономическое районирование ."];
 var a25Src=["<p>25. экономическое районирование<br> <br>К основным видам районирования в современных условиях можно отнести: <br> <br>-административно-территориальное деление; <br> <br>-общее экономическое районирование; <br> <br>-проблемное экономическое районирование.</p> "];

 var a26Arr=["26. История становления социально-экономической географии. Вклад крупнейших ученых."];
 var a26Src=["<p>26. история становления социально-экономической географии. Вклад крупнейших ученых: <br> <br>1. И. К. Кириллов первая половина 18 века «Цветущее состояние Всероссийского гос-ва» <br> <br>2. В. Н. Татищев- развитие горного дела на Урале, первая половина 18 века- Екатеринбург<br> <br>3. М. В. Ломоносов- изучение льдов морского течения</p> "];

 var a27Arr=["27. Экономическое районирование."];
 var a27Src=["<p></p> "];

 var a28Arr=["28. Значение и принципы экономического районирование ."];
 var a28Src=["<p></p> "];

 var a29Arr=["29. Экономические районы России."];
 var a29Src=["<p></p> "];

 var a30Arr=["30. Положение России в мире: пространственные и экономические изменения."];
 var a30Src=["<p></p> "];

 var a31Arr=["31. Роль России в мировых ресурсах, численности населения и мировой экономике."];
 var a31Src=["<p></p> "];

 var a32Arr=["32. Особенности заселения и хозяйственного освоения России ."];
 var a32Src=["<p></p> "];

 var a33Arr=["33. Численность и воспроизводство России ."];
 var a33Src=["<p></p> "];

 var a34Arr=["34. Размещение населения ."];
 var a34Src=["<p></p> "];

 var a35Arr=["35. Трудовые ресурсы, занятость ."];
 var a35Src=["<p>35. Трудовые ресурсы, занятость. <br> <br>Возраст является главным критерием при определении основной производительной части населения — трудовых ресурсов. Трудовые ресурсы — это часть населения страны, обладающая необходимым физическим развитием, знаниями и практическим опытом для работы в хозяйстве страны. О степени его вовлечения в производство свидетельствует показатель экономически активного населения — часть трудоспособного населения, которая участвует в материальном производстве и непроизводственной сфере. М – 16 - 65 лет. Ж – 16-60 лет. Так же относятся подростки от 16 лет(неполны р/б), работающие пенсионеры. Экономически активное(пассивное) население, занятые/незанятые, во всех сферах труда/безработные, этот статус человек получает, если он активен и готов выполнять работу(не занят и не ищет работу.)</p> "];

 var a36Arr=["36. Топливно-энергетические комплексы ."];
 var a36Src=["<p>36. Топливно-энергетический комплекс.<br> <br>ТЭК — это совокупность отраслей, связанных с производством и распределением энергии в различных её видах и формах. В состав ТЭК входят отрасли по добычи и переработке различных видов топлива (топливная промышленность), электроэнергетика и предприятия по транспортировке и распределению электроэнергии. Значение топливно-энергетического комплекса в хозяйстве нашей страны - снабжает топливом и энергией все отрасли хозяйства, главный поставщик валюты (40% —доля ТЭК в экспорте России).</p>"];

 var a37Arr=["37. Металлургический комплекс."];
 var a37Src=["<p>37. Металлургия<br> <br>Металлургический комплекс включает в себя: добычу и обогащение руды, выплавку металлов, производство сплавов и проката, вторичный передел металлов. В комплекс входят и другие производства, связанные с выплавкой металла — коксовое, огнеупорное, флюсовое, магнезитовое и др. Это базовая отрасль индустрии. Поэтому первые места по выплавке металлов удерживают развитые страны мира — США,Германия, Россия. Черная металлургия —  основа, железная руда. Продукция – чугун, сталь. <br> <br>Цветная – медно-никелевые руды, цинк, свинец, <br> <br>Алюминий – роль в машино-, самолётостроении. Волгоград, Братск, Карелия, Монголия.</p> "];

 var a38Arr=["38. Машиностроительный комплекс."];
 var a38Src=["<p>38. Машиностроение. <br> <br>Главная отрасль мировой промышленности. Развитие машиностроения во многом определяет в целом уровень развития той или иной страны. В этой отрасли наиболее заметен разрыв между развитыми и развивающимися странами.  Тяжелое машиностроение, транспортное,  железнодорожное(Казань),судостроение(Саратов), авиационное(Самара).</p> "];

 var a39Arr=["39. Химический комплекс ."];
 var a39Src=["<p>39. Химический комплекс. <br> <br>Химическая промышленность занимается производством продукции из углеводородного, минерального и другого сырья путем химической переработки. Первые химические предприятия появились в России в начале 19 века, но активно развиваться эта отрасль промышленности начала только в 60-х годах 20 века, когда во многих регионах России началось строительство химических комбинатов. Продукция химической отрасли широко используется в нефтепереработке, тепловой энергетике, целлюлозно-бумажном производстве, черной и цветной металлургии, производстве строительных материалов и других отраслях народного хозяйства, где применяются химические процессы изменения структур исходного вещества. Основа – удобрения. Полимер – пластмасса.</p> "];

 var a40Arr=["40. Лесопромышленный комплекс."];
 var a40Src=["<p>40. Лесопромышленный комплекс. <br> <br>В лесопромышленном комплексе выделяются три основные подотрасли — лесная, деревообрабатывающая и целлюлозно-бумажная. Общий запас древесины на корню составляет чуть более 80 млрд м3. Среди субъектов Российской Федерации лидирующее положение занимают: Красноярский край — 14% от общероссийских запасов; Республика Саха (Якутия) и Иркутская область — по 11%; Хабаровский край — 6%; Республика Коми — 3,6%; Архангельская область — 3,1%; Забайкальский край, Ханты-Мансийский автономный округ — Югра и Томская область — по 3–4%; Свердловская область — 2,5%; Пермский край и Вологодская область — по 2%; Кировская область — 1,4%. Однако в России преобладают сырьевые составляющие лесопромышленного комплекса, а деревообрабатывающие производства пока развиваются недостаточно эффективно. Поскольку механическая обработка древесины сопряжена с высокими удельными расходами сырья и огромными масштабами отходов, многие деревообрабатывающие предприятия тяготеют к сырью. На привозном сырье работают многие предприятия Алтайского края и Новгородской области. </p> "];

 var a41Arr=["41. Агропромышленный ."];
 var a41Src=["<p>41. Агропромышленный. <br> <br>Агропромышленный комплекс (АПК)– это совокупность взаимосвязанных отраслей хозяйства, производящих, перерабатывающих сельскохозяйственную продукцию и доводящих её до потребителя. Основной задачей АПК является обеспечение населения страны продовольствием. Основу АПК составляет сельское хозяйство, но оно одно не может справиться со столь важной задачей, так как ему требуется техника, комбайны, тракторы, картофелеуборочные машины, ядохимикаты, удобрения, новые сорта растений и лучшие породы скота. Поэтому АПК состоит из трех звеньев, или трех стадий производства. АПК: Отрасли обслуживания, Сельское хозяйство, Перерабатывающие отрасли. 1-е звено - сельскохозяйственное машиностроение(Ростов-на Дону, Таганрог, Рязань, Омск), основная химия, селекция, мелиорация. 2-е звено - земледелие и животноводство: растениеводство, виноградарство, рыболовство, овцеводство, пчеловодство. 3-е звено -  пищевая промышленность, сахарная промышленность, легкая, или текстильная промышленность, торговля.</p> "];

  var a42Arr=["42.Внешнеэкономические связи России."];
 var a42Src=["<p>42. Внешнеэкономические связи Рф. <br> <br>Внешние экономические связи являются результатом международного разделения труда, которое в свою очередь является частью территориального разделение труда (ТРТ). Для нашей страны предпосылкой участия в международном разделении труда является богатство и разнообразие природных ресурсов территории, а также достижения в некоторых отраслях научно-технического прогресса (прежде всего в сфере ВПК). Одним из важнейших показателей, отражающих внешнеэкономическую деятельность, является сальдо экспортно-импортных операций. Для России оно положительно. Это означает, что страна продает гораздо больше, чем покупает. Существенная часть всех внешнеторговых операций осуществляется со странами СНГ, из общей суммы экспорта продукции на их долю приходится 18%, по импорту эта величина увеличивается до 25%. Крупнейшими нашими торговыми партнерами в СНГ являются Украина, Белоруссия и Казахстан. Среди стран дальнего зарубежья выделяются по экспорту Германия (8 % всего российского экспорта), США (7 %), Нидерланды (5 %), Италия (4 %), по импорту — Германия (13% всего российского импорта), Италия (4 %), Франция (3,6 %), Финляндия (3,3 %). В экспорте ведущую роль играет вывоз энергоносителей, на них приходится примерно 50 % всех зарубежных поставок.</p> "];

function tweetIt () {
  var phrase = document.getElementById('quote').innerText;
  var quotesrc = document.getElementById('source').innerText;
    ;  
  window.open(tweetUrl);
}



var header = document.getElementById("btn-bar");
var btns = header.getElementsByClassName("btn-default");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}