module.exports = {

	prompts: false,

	// These are variables will be accessible via our templates
	templateData: {

		// Conference info
		conf: {
			nome: "Python Weekend 2015 | Feira de Santana - Bahia - Brasil",
			descricao_rapida: "Conference description",
			sobre_evento: "Sobre o evento",
			data: "November 15",
			// If your event is free, just comment this line
			preco: "$100",
			local: "Coco Bongo",
			endereco: "Endereço do evento",
			cidade: "Feira de Santana", 
			estado: "BA",
			pais: "Brasil"
		},

		curso: {
			nome: "Name of course",
			data: "Data minicurso",
			horario: "Horario minicurso",
			descricao_rapida: "Course description",
			name_palestrante: "",
			sobre_palestrante: ""
		},

		// The Call To Action button at the header,
		// If you don't want this, just remove the callToAction property.
		callToAction: {
				text: "Register now!",
				link: "http://eventick.com.br"
		},

		// Site info
		site: {
			theme: "yellow-swan",
			url: "",
			googleanalytics: "UA-33656081-1"
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
			location: "Location",
			speakers: "Speakers",
			schedule: "Schedule",
			sponsors: "Sponsors",
			partners: "Partners",
			contact: "Contact"
		},

		programacao: [
			{
				horario: "Horário da palestra",
				palestrante: "Nome do palestrante",
				titulo: "Titulo da palestra"
			},
			{
				horario: "08:30",
				palestrante: "Douglas da Cruz Cerqueira",
				titulo: "Django para desenvolvimento de paginas web"
			}
		],

		patrocinadores: [
			{
				nome: "",
				logo: "",
				url: ""
			}
		],

		// List of Sponsors
		sponsors: [
			{
				name: "Eventick",
				logo: "themes/yellow-swan/img/sponsor.png",
				url: "http://eventick.com.br"
			}
		],

		// Theme path
		getTheme: function() {
			return "themes/" + this.site.theme;
		},

		// Site Path
		getUrl: function() {
			return this.site.url;
		}
	}
};
