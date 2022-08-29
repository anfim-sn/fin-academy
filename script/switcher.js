let rus = {
	lang: 'RU',
	finacademiya: 'ФИНАКАДЕМИЯ',
	menu1: 'Физическим лицам',
	menu2: 'Предприятиям',
	menu3: 'Инвестиции',
	menu4: 'Блог',
	menu5: 'О компании',

	descTitle: 'Генератор оптимальных финансовых решений',
	descSubtitle: 'Консалтинговая компания, специализирующаяся на предоставлении организациям и частным лицам финансовых услуг в качестве агрегатора',

	aboutTitle1: 'Наша миссия',
	aboutSubtitle1: 'Обеспечить простой и удобный доступ всем желающим к любому финансовому продукту на любом рынке',
	aboutTitle2: 'Наши принципы',
	aboutSubtitle2_1: 'Открытость',
	aboutSubtitle2_2: 'Индивидуальный подход',
	aboutSubtitle2_3: 'Ответственность',
	aboutTitle3: 'Наши ценности',
	aboutSubtitle3: 'Важнейшая ценность для нас - это наши клиенты. Их интересы, потребности, их развитие и рост — залог нашего успеха',
	aboutTitle4: 'Наша команда',
	aboutSubtitle4: 'В команде ООО "ФИНАКАДЕМИЯ" собрались как профессионалы с многолетним опытом работы на банковском и финансовом рынке, так и молодые перспективные специалисты',
	aboutButton: 'Познакомится с нами',

	partnersTitle: "Партнеры",
	freedomDesc: "Депозиты, кредитование Инвестирование, валютные операции",
	alphaDesc: "Кредитование бизнеса под льготный процент",
	sgbDesc: "Банковские гарантии",

	productTitle: "Продукты",
	card1_title: 'Участие в IPO',
	card1_desc: 'Без статуса квалифицированного инвестора',
	card2_title: 'Кредит для бизнеса 6% годовых',
	card2_desc: 'от 50 млн. рублей сроком до 15 лет',

	newsTitle: 'Новости',
	newsTitle1: 'Facebook и Instagram вложат более $1 млрд в создателей контента',
	newsDesc1: 'Первая программа будет поощрять авторов контента в сервисе коротких видео Reels в Instagram.',
	newsTitle2: 'Karma - краудлендинговая платформа',
	newsDesc2: 'Платформа, на которой можно приунможить свой капитал и привлечь инвестиции',
	newsTitle3: 'Пресс релиз "Регионы - устойчивое развитие"',
	newsDesc3: 'Всероссийский конкурс по программе господдержки',

	footerLlc: 'Компания "Финакадемия ООО"',

	scroller: 'Наверх'
}

let eng = {
	lang: 'EN',
	finacademiya: 'FINACADEMIYA',
	menu1: 'Private',
	menu2: 'Business',
	menu3: 'Investments',
	menu4: 'Blog',
	menu5: 'About',

	descTitle: 'Optimal Financial Solutions Generator',
	descSubtitle: 'Consulting company specializing in providing organizations and individuals with financial services as an aggregator',

	aboutTitle1: 'Our mission',
	aboutSubtitle1: 'Provide easy and convenient access for everyone to any financial product in any market',
	aboutTitle2: 'Our princeples',
	aboutSubtitle2_1: 'Openness',
	aboutSubtitle2_2: 'Individual approach',
	aboutSubtitle2_3: 'Responsibility',
	aboutTitle3: 'Our values',
	aboutSubtitle3: 'Most important value for us is our customers. Their interests, their needs, their development and growth are the key to our success',
	aboutTitle4: 'Our team',
	aboutSubtitle4: 'The FINAKADEMIA LLC team includes professionals with many years of experience in the banking and financial market, as well as young promising specialists.',
	aboutButton: 'Meet us',

	partnersTitle: 'Partners',
	freedomDesc: 'Deposits, crediting Investing, currency operations',
	alphaDesc: 'Lending to businesses at preferential interest rates',
	sgbDesc: 'Bank guarantees',

	productTitle: 'Products',
	card1_title: 'IPO participation',
	card1_desc: 'Without qualified investor status',
	card2_title: 'Loan for business 6% per annum',
	card2_desc: 'from 50 million rubles for up to 15 years',

	newsTitle: 'News',
	newsTitle1: 'Facebook and Instagram will invest more than $1 billion in content creators',
	newsDesc1: "The first program will reward content creators on Instagram's short video service Reels",
	newsTitle2: 'Karma - crowdsourcing platform',
	newsDesc2: 'A platform on which you can raise capital and investment',
	newsTitle3: 'Press realise "Regiony - Ustoychivoe Razvitie"',
	newsDesc3: 'All-Russian competition on the program of state support',

	footerLlc: 'Finakademiya LLC',

	scroller: 'To start'
}
let language = rus;

changeLanguage();

function changeLanguage() {
	language = lang.checked ? rus : eng;
	document.querySelectorAll('[text]').forEach(el => {
		el.innerHTML = language[el.getAttribute('text')];
	})
}

