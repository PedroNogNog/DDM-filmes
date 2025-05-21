const DATA = [
    {
        id:'01',
        nome:'João e Maria: Caçadores de Bruxas',
        nota:'4',
        imagem:'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/93/11/58/20392738.jpg',
        sinopse:'Os jovens João e Maria foram abandonados pelos pais na sombria floresta e acabam indo parar na casa de uma malvada bruxa. Mas o que parecia ser o fim acabou se tornando o começo de uma vida cheia de aventuras, uma vez que eles eliminaram a malvada e viraram verdadeiros exterminadores de criaturas do mal. Após o desaparecimento de várias crianças, os dois já adultos (Jeremy Renner e Gemma Arterton) são contratados pelas autoridades locais para desvendar o mistério. Só que eles não imaginavam que essa nova missão iria colocá-los diante da terrível Bruxa Negra (Famke Janssen), pronta para destruir não só a reputação de excelentes caçadores de bruxas, mas também as suas vidas.'

    },{
        id:'02',
        nome:'Debi & Lóide - Dois Idiotas em Apuros',
        nota:'3,9',
        imagem:'https://br.web.img3.acsta.net/c_310_420/pictures/210/542/21054207_20131030221640204.jpg',
        sinopse:'Lloyd Christmas (Jim Carrey) e Harry Dunne (Jeff Daniels) são dois homens extremamente estúpidos. Quando Lloyd leva até o aeroporto Mary Swanson (Lauren Holly), uma bela mulher que vai para Aspen, Colorado, acredita que Mary perdeu uma mala. Na verdade ela "esqueceu" no saguão, pois dentro dela está uma grande soma para pagar o resgate do marido, mas antes que os seqüestradores peguem a valise Lloyd a recupera e tenta lhe entregar. Como o vôo já partiu e ele se sente atraído por Mary, convence Harry para irem até Aspen para devolver o dinheiro. Na viagem se envolvem em várias confusões, além de serem perseguidos pelos seqüestradores.'
    },
    {
        id:'03',
        nome:'Projeto X - Uma Festa Fora de Controle',
        nota:'3,5',
        imagem:'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/93/27/20039800.jpg',
        sinopse:'Thomas (Thomas Mann), Costa (Oliver Cooper) e JB (Jonathan Daniel Brown) são grandes amigos. Eles não são populares no colégio nem têm namorada. Sonhando dar uma virada na situação, eles planejam transformar o aniversário de Thomas em um acontecimento épico. Para tanto realizam uma grande festa na casa do aniversariante, aproveitando o fato que os pais dele estarão viajando no fim de semana.'
    },
    {
        id:'04',
        nome:'Gente Grande',
        nota:'4',
        imagem:'https://br.web.img3.acsta.net/c_310_420/pictures/210/299/21029996_20130821205722213.jpg',
        sinopse:'Em Gente Grande, Lenny (Adam Sandler), Kurt (Chris Rock), Eric (Kevin James), Marcus (David Spade) e Rob (Rob Schneider) se conhecem desde pequenos. Passados trinta anos, os cinco amigos se reencontram para curtir um fim de semana juntos com as respectivas famílias, mas o feriado de 4 de Julho em uma casa no lago promete muito mais diversão do que apenas lembranças dos bons momentos. Casados e com várias crianças, os homens de família terão de confrontar o fato de não serem mais tão jovens.'
    },
    {
        id:'05',
        nome:'A Hora do Pesadelo',
        nota:'3,8',
        imagem:'https://br.web.img2.acsta.net/c_310_420/pictures/15/03/10/16/48/336112.jpg',
        sinopse:'Em Gente Grande, Lenny (Adam Sandler), Kurt (Chris Rock), Eric (Kevin James), Marcus (David Spade) e Rob (Rob Schneider) se conhecem desde pequenos. Passados trinta anos, os cinco amigos se reencontram para curtir um fim de semana juntos com as respectivas famílias, mas o feriado de 4 de Julho em uma casa no lago promete muito mais diversão do que apenas lembranças dos bons momentos. Casados e com várias crianças, os homens de família terão de confrontar o fato de não serem mais tão jovens.'

    },
    {
        id:'06',
        nome:'Uma Noite de Crime',
        nota:'3,5',
        imagem:'https://br.web.img3.acsta.net/c_310_420/pictures/210/335/21033500_20130830193413918.jpg',
        sinopse:'Quando o governo norte-americano constata que suas prisões estão cheias demais para receberem novos detentos, uma nova lei é criada, permitindo todas as atividades ilegais durante 12 horas. Este período, chamado de Noite do Crime, é marcado por milhares de assassinatos, linchamentos e outros atos de violência por todo o país. O intuito, segundo o governo, é permitir que todos os cidadãos libertem seus impulsos violentos, garantindo a paz nos outros dias do ano. Neste contexto vive a família de James Sandin (Ethan Hawke), um vendedor de sistemas de segurança que prospera graças à Noite do Crime. Quando o evento ocorre, no entanto, o filho de James aceita abrigar um homem perseguido por psicopatas. Logo, toda a família está em perigo, seja dentro de sua própria casa, com a presença do desconhecido, seja pelas ameaças vindas dos psicopatas em frente ao imóvel, que prometem entrar e matar a todos.  '
    },
    {
        id:'07',
        nome:'Como Eu Era Antes de Você',
        nota:'4,4',
        imagem:'https://br.web.img3.acsta.net/c_310_420/pictures/16/02/03/19/11/303307.jpg',
        sinopse:'Em Como Eu Era Antes de Você, o rico e bem sucedido Will (Sam Claflin) leva uma vida repleta de conquistas, viagens e esportes radicais até ser atingido por uma moto. O acidente o torna tetraplégico, obrigando-o a permanecer em uma cadeira de rodas. A situação o torna depressivo e extremamente cínico, para a preocupação de seus pais (Janet McTeer e Charles Dance). É neste contexto que Louisa Clark (Emilia Clarke) é contratada para cuidar de Will. De origem modesta, com dificuldades financeiras e sem grandes aspirações na vida, ela faz o possível para melhorar o estado de espírito de Will e, aos poucos, acaba se envolvendo com ele.'
    },
    {
        id:'08',
        nome:'Thunderbolts*',
        nota:'4,3',
        imagem:'https://br.web.img3.acsta.net/c_310_420/img/1d/6f/1d6f98938e13ae86e4178850a709b9f3.png',
        sinopse:'Em Thunderbolts*, uma equipe de anti-heróis é recrutada para uma missão perigosa. Yelena Belova, Bucky Barnes, Guardião Vermelho, Fantasma, Treinadora e John Walker formam o grupo de desajustados e rejeitados que, pegos numa armadilha pela diretora da CIA Valentina Allegra de Fontaine, são obrigados a embarcar num plano ofensivo que os fará confrontar seus maiores traumas e cicatrizes do passado. Prontos para agir a favor de causas duvidosas, os seis parecem ser a escolha errada para lidar com os desafios de alto risco ao lado do governo. Yelena é uma ex-espiã e assassina altamente treinada pela organização criminosa russa Sala Vermelha. Guardião Vermelho era um super soldado russo que esteve ao lado de Yelena em uma de suas missões secretas nos Estados Unidos. Já Ava Starr, conhecida como Fantasma, era uma espiã da SHIELD explorada por suas habilidades quânticas. John Walker, o Agente Americano, foi um herói descartado de sua posição como substituto de Steve Rogers/Capitão América por seu jeito impulsivo e violento. Treinadora é filha do líder da Sala Vermelha, submetida a um tratamento experimental que a transformou numa assassina ciberneticamente aprimorada. E por último, Bucky Barnes, o Soldado Invernal, foi um assassino mentalmente controlado pela organização secreta HYDRA. Será que eles vão alcançar a glória e se tornar *Os Novos Vingadores?'
    },
    {
        id:'09',
        nome:'Operação Big Hero',
        nota:'4,5',
        imagem:'https://br.web.img3.acsta.net/c_310_420/pictures/14/10/17/19/18/097729.jpg',
        sinopse:'Cidade de San Fransokyo, Estados Unidos. Hiro Hamada (voz de Ryan Potter) é um garoto prodígio que, aos 13 anos, criou um poderoso robô para participar de lutas clandestinas, onde tenta ganhar um bom dinheiro. Seu irmão, Tadashi (voz de Daniel Henney), deseja atraí-lo para algo mais útil e resolve levá-lo até o laboratório onde trabalha, que está repleto de invenções. Hiro conhece os amigos de Tadashi e logo se interessa em estudar ali. Para tanto ele precisa fazer a apresentação de uma grande invenção, de forma a convencer o professor Callahan (James Cromwell) a matriculá-lo. Entretanto, as coisas não saem como ele imaginava e Hiro, deprimido, encontra auxílio inesperado através do robô inflável Baymax (voz Scott Adsit), criado pelo irmão.'
    },
    {
        id:'10',
        nome:'O Poderoso Chefão',
        nota:'4,8',
        imagem:'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg',
        sinopse:'Don Vito Corleone (Marlon Brando) é o chefe de uma "família" de Nova York que está feliz, pois Connie (Talia Shire), sua filha, se casou com Carlo (Gianni Russo). Porém, durante a festa, Bonasera (Salvatore Corsitto) é visto no escritório de Don Corleone pedindo "justiça", vingança na verdade contra membros de uma quadrilha, que espancaram barbaramente sua filha por ela ter se recusado a fazer sexo para preservar a honra. Vito discute, mas os argumentos de Bonasera o sensibilizam e ele promete que os homens, que maltrataram a filha de Bonasera não serão mortos, pois ela também não foi, mas serão severamente castigados. Vito porém deixa claro que ele pode chamar Bonasera algum dia para devolver o "favor". Do lado de fora, no meio da festa, está o terceiro filho de Vito, Michael (Al Pacino), um capitão da marinha muito decorado que há pouco voltou da 2ª Guerra Mundial. Universitário educado, sensível e perceptivo, ele quase não é notado pela maioria dos presentes, com exceção de uma namorada da faculdade, Kay Adams (Diane Keaton), que não tem descendência italiana mas que ele ama. Em contrapartida há alguém que é bem notado, Johnny Fontane (Al Martino), um cantor de baladas românticas que provoca gritos entre as jovens que beiram a histeria. Don Corleone já o tinha ajudado, quando Johnny ainda estava em começo de carreira e estava preso por um contrato com o líder de uma grande banda, mas a carreira de Johnny deslanchou e ele queria fazer uma carreira solo. Por ser seu padrinho Vito foi procurar o líder da banda e ofereceu 10 mil dólares para deixar Johnny sair, mas teve o pedido recusado. Assim, no dia seguinte Vito voltou acompanhado por Luca Brasi (Lenny Montana), um capanga, e após uma hora ele assinou a liberação por apenas mil dólares, mas havia um detalhe: nas "negociações" Luca colocou uma arma na cabeça do líder da banda. Agora, no meio da alegria da festa, Johnny quer falar algo sério com Vito, pois precisa conseguir o principal papel em um filme para levantar sua carreira, mas o chefe do estúdio, Jack Woltz (John Marley), nem pensa em contratá-lo. Nervoso, Johnny começa a chorar e Vito, irritado, o esbofeteia, mas promete que ele conseguirá o almejado papel. Enquanto a festa continua acontecendo, Don Corleone comunica a Tom Hagen (Robert Duvall), seu filho adotivo que atua como conselheiro, que Carlo terá um emprego mas nada muito importante, e que os "negócios" não devem ser discutidos na sua frente. Os verdadeiros problemas começam para Vito quando Sollozzo (Al Lettieri), um gângster que tem apoio de uma família rival, encabeçada por Phillip Tattaglia (Victor Rendina) e seu filho Bruno (Tony Giorgio). Sollozzo, em uma reunião com Vito, Sonny e outros, conta para a família que ele pretende estabelecer um grande esquema de vendas de narcóticos em Nova York, mas exige permissão e proteção política de Vito para agir. Don Corleone odeia esta idéia, pois está satisfeito em operar com jogo, mulheres e proteção, mas isto será apenas a ponta do iceberg de uma mortal luta entre as'
    },
    {
        id:'11',
        nome:'Karate Kid: Lendas',
        nota:'3,9',
        imagem:'https://br.web.img3.acsta.net/c_310_420/img/6a/9e/6a9edfd55ce28ca6df541b983c2d9d25.jpg',
        sinopse:'Em Karate Kid: Lendas, acompanhamos a história do prodígio do kung fu Li Fong (Ben Wang). Depois de uma tragédia familiar, Li e sua mãe se mudam de seu lar em Beijing para viver uma nova vida em Nova York. Ao chegar nos Estados Unidos, o jovem encontra dificuldades de superar o passado e se encaixar numa nova cultura. Diante desse mundo novo e desconhecido, ele tenta se estabelecer na escola, mas, apesar de não querer lutar mais, um rastro de problemas aparece e o persegue em todos os lugares. Quando seu novo amigo e colega de classe precisa de ajuda, Li atrai a atenção indesejada de um campeão local de karatê, uma rixa que o leva a se candidatar para a competição mais prestigiada do país. O problema é que suas habilidades não são o bastante para ganhar, levando seu mestre e professor de kung fu Sr. Han (Jackie Chan) a recrutar o lendário Daniel LaRusso (Ralph Macchio) para guiar o novo pupilo nessa jornada. Li Fong, então, orientado pela sabedoria dos dois mentores, aprende uma nova maneira de lutar, unindo dois estilos e duas abordagens diferentes para se preparar para um espetáculo épico das artes marciais.'
    },
    {
        id:'12',
        nome:'Um Filme Minecraft',
        nota:'3,7',
        imagem:'https://br.web.img2.acsta.net/c_310_420/img/39/68/3968d0b052682d5c6625be54c9b513ef.png',
        sinopse:''
    },
    {
        id:'13',
        nome:'Batman - O Cavaleiro Das Trevas',
        nota:'4,8',
        imagem:'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/98/32/19870786.jpg',
        sinopse:''
    },
    {
        id:'14',
        nome:'Vingadores: Ultimato',
        nota:'4,7',
        imagem:'https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg',
        sinopse:''
    },
    {
        id:'15',
        nome:'Bastardos Inglórios',
        nota:'4,6',
        imagem:'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/43/36/20096333.jpg',
        sinopse:''
    },
    {
        id:'16',
        nome:'O Macaco',
        nota:'2,5',
        imagem:'https://br.web.img3.acsta.net/c_310_420/img/d2/e5/d2e517612de9e1db2463aeec34dc6d29.jpg',
        sinopse:''
    },
    {
        id:'17',
        nome:'Planeta dos Macacos: A Guerra',
        nota:'4,3',
        imagem:'https://br.web.img3.acsta.net/c_310_420/pictures/17/07/13/18/50/359962.png'

    },
]

export default DATA;
