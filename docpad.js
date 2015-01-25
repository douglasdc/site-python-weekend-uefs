module.exports = {

	prompts: false,

	// These are variables will be accessible via our templates
	templateData: {

		// Conference info
		conf: {
			nome: "Python Weekend 2015 | Feira de Santana - Bahia - Brasil",
			descricao_rapida: "Um final de semana sobre Python",
			sobre_evento: "O Python Weekend é um evento realizado por pessoas como você que tem utilizam Python ou tem interesse em aprender mais",
			data: "14 e 15 de Março",
			// If your event is free, just comment this line
			preco: "$30 reais (Promocional)",
			local: "Auditório do Multiplace",
			endereco: " Rua Jovelino Carneiro, 3665, Feira de Santana - BA, 44149-999",
			cidade: "Feira de Santana", 
			estado: "BA",
			pais: "Brasil"
		},

		curso: {
			nome: "Python para Zumbis,
			data: "14 de Março",
			horario: "Horario minicurso",
			descricao_rapida: "",
			name_palestrante: "Fernando Masanori",
			sobre_palestrante: "Docente da FATEC São José dos Campos, adora dar aulas, graduado em Computação pelo IME-USP, mestrado pelo ITA. Desenvolveu projetos para a Cobra Tecnologia, Credicard Mastercard, PriceWaterhouse & Coopers e Itaú BankBoston. Interesses: Python, NoSQL, Pentaho, Google Technology, Facebook."
		},

		// The Call To Action button at the header,
		// If you don't want this, just remove the callToAction property.
		callToAction: {
				text: "Inscreva-se agora!",
				link: ""
		},

		// Active sections on the website
		// to deactivate comment out with '//'
		// you can also change order here and it will reflect on page
		sections: [
			'about',
		'minicurso',
			'location',
		'payment',
			'schedule',
			//'sponsors'
			//'partners'
			// 'contact'
		],

		// Labels which you can translate to other languages
		labels: {
			about: "About",
			location: "Auditório do Multiplace",
			speakers: "Speakers",
			schedule: "Schedule",
			sponsors: "Sponsors",
			partners: "Partners",
			contact: "lucas.ecomp2012@gmail.com/daecompuefs@gmail.com/(75) 9134-9390"
		},

		programacao: [
			{
				horario: "8:30 - 10:50",
				palestrante: "Total Informática",
				titulo: "Minicurso - Interface Gráfica com Python"
			},
			{
				horario: "10:50 - 11:30",
				palestrante: "Tupy",
				titulo: "Sendo definido"
			},
			{
				horario: "11:30 - 12:10",
				palestrante: "Ivo Lima",
				titulo: "Sendo definido"
			},
			{
				horario: "14:10 - 14:50",
				palestrante: "Diego Leite",
				titulo: "Scrapy"
			},
			{
				horario: "14:50 - 15:30",
				palestrante: "Jonata Weber",
				titulo: "Home-Office"
			},
			{
				horario: "15:50 - 16:30",
				palestrante: "Douglas da Cruz Cerqueira",
				titulo: "Django para desenvolvimento de paginas web"
			}
			{
				horario: "16:30 - 17:10",
				palestrante: "Total Informática",
				titulo: "Minicurso - Interface Gráfica com Python"
			},
		],

		patrocinadores: [
			{
				nome: "Asa Inovação",
				logo: "themes/asa.jpg",
				url: "http://www.asainovacao.com.br/"
			},
			{
				nome: "D.A. Ecomp Uefs",
				logo: "themes/da-ecomp.jpg",
				url: "https://www.facebook.com/d.a.ecomp.uefs.7"
			},
			{
				nome: "Sagui Tech",
				logo: "",
				url: ""
			},
			{
				nome: "Total Informática",
				logo: "themes/total.png",
				url: "http://www.infototal.com.br/"
			}
		],
		

		// List of Sponsors
		sponsors: [
			{
				name: "Doity",
				logo: "themes/doity.png",
				url: "http://doity.com.br"
			}
		],

	}
};
