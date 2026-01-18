<script lang="ts">
	import valliImgSrc from '$lib/assets/team-images/valli.png';
	import fabiImgSrc from '$lib/assets/team-images/fabi.png';
	import floImgSrc from '$lib/assets/team-images/flora.png';
	import samImgSrc from '$lib/assets/team-images/samu.png';
	import connyImgSrc from '$lib/assets/team-images/conny.png';
	import chrisiImgSrc from '$lib/assets/team-images/chrisi.png';
	import TeamMember from '$lib/components/TeamMember.svelte';

	let valli = {
		imageSrc: valliImgSrc,
		altText: 'Auf dem Foto sieht man Valerie Seebacher aka Vali, zuständig für Design und Struktur. Sie ist der kreative Kopf des Teams.',
		description: 'Valerie Seebacher, auch Valli genannt, ist Lehrerin und Lehramtsstudentin für Sport, Inklusive Pädagogik und Deutsch. Zu ihren Erfahrungen zählen außerdem jahrelange Trainer- und Vorstandstätigkeiten sowie ihre Selbstständigkeit im Designbereich. Im Team ist Valli für die kreativen Aufgaben wie das Corporate Design (Logo, Instagram, Website) und den Strukturaufbau zuständig.',
		inclusionDefinition: 'Inklusion bedeutet für Valli… Vielfalt anzuerkennen, Solidarität zu zeigen, Chancengerechtigkeit zu fordern und an das Gute in jedem Menschen zu glauben.',
		favoriteSports: 'Tanzen, Akrobatik',
		favoriteGames: 'Puzzle, Gemeinschaftsspiele und Real Life Games',
		reverse: true
	};
	let fabi = {
		imageSrc: fabiImgSrc,
		altText: 'Auf dem Foto sieht man Fabian Veider aka Fabi aka Beanie, den kreativen Kopf des Teams.',
		description: 'Fabian Veider aka. Fabi oder Beanie bringt mit seiner Vielseitigkeit die unterschiedlichsten Blickwinkel in unser Projekt ein. Neben seinem Job als Doktorant der Systemwissenschaften und Mathecoach beim FAB Graz ist er stark in der Musik-Szene vernetzt und auch aktivistisch für die Themen Klimawandel und LGBTQ+ unterwegs. Dieses Netzwerk und seine Organisationserfahrung bringt Fabi auch bei unserem EU-Projekt ein.',
		inclusionDefinition: 'Inklusion bedeutet für Fabi… individuell und als Gemeinschaft jede Person, unabhängig von Einschränkungen, zu akzeptieren und so gut wie möglich am gesellschaftlichen Leben teilhaben zu lassen.',
		favoriteSports: 'Taekwondo',
		favoriteGames: 'ichu, Sushi Go!, Planet B'
	};
	let conny = {
		imageSrc: connyImgSrc,
		altText: 'Auf dem Foto sieht man Cornelia Thonhauser aka Conny aka Lia, die als Psychologin und Trainerin im Team ist.',
		description: 'Cornelia Thonhauser ist bei uns auch als Conny oder Lia bekannt. Sie ist Psychologin und hat eine Leidenschaft für Bewegung - am besten mit viel Abwechslung! Für unser Team ist Conny Trainerin und Coach. Sie bringt sich mit ihrer beruflichen Erfahrung aus dem Inklusionsbereich mit ein. Außerdem ist Conny Special Olympics Übungsleiterin und Trainerin für eine inklusive Laufgruppe.',
		inclusionDefinition: 'Inklusion bedeutet für Lia…jeden Menschen als Individuum zu sehen. Die Fähigkeiten und Interessen jedes Menschen zu schätzen und zu sehen, dass wir alle Teil eines großen Ganzen sind.',
		favoriteSports: 'Schwimmen',
		favoriteGames: 'Alles, was Phantasie & "Out-of-the-box thinking" fördert'
	};
	let flo = {
		imageSrc: floImgSrc,
		altText: 'Auf dem Foto sieht man Flora Bodingbauer aka Flo, die frische Perspektiven aus der Waldorfschule ins Team bringt.',
		description: 'Flora Bodingbauer kennt man auch als Flo. Frisch aus der Waldorfschule mit allgemeinem Fokus auf Inklusion bringt sie ganz junge Perspektiven mit in das Team. Zu ihren Erfahrungen zählen Praktika, unter anderem im partizipativen Forschungsbüro für Menschenrechte von LebensGroß. Mit dabei ist Flo in der Organisation von Workshops und der Betreuung des Instagram-Kanals.',
		inclusionDefinition: 'Inklusion bedeutet für Flo… ein gutes Zusammensein. Sie findet, ein großer Teil von Inklusion ist das Akzeptieren von Unterschieden und das Unterstützt-Werden oder Unterstützen, wo es leicht geht, um ein gutes Zusammensein möglich zu machen!',
		favoriteSports: 'Bouldern, Arial Silk',
		favoriteGames: 'Kartenspiele, Charade, Activity',
		reverse: true
	};

	let sam = {
		imageSrc: samImgSrc,
		altText: 'Auf dem Foto sieht man Samuel Grausgruber aka Samu, der Ideengeber für das Projekt des BewegUNS-Würfels.',
		description: 'Samuel Grausgruber, auch bei uns bekannt als Samu, ist Lehramtsstudent für Sport und Informatik, bringt bereits einiges an beruflicher und ehrenamtlicher Erfahrung mit und ist der Ideengeber für das Projekt des BewegUNS-Würfels. Außerdem ist er unser Spezialist für den 3D-Druck - jeder Würfel geht durch seine Hände.',
		inclusionDefinition: 'Inklusion bedeutet für Samu… gesehen und gehört werden, auf Augenhöhe mitentscheiden und mitmachen können.',
		favoriteSports: 'im Sommer Beachvolleyball, im Winter Snowboarden',
		favoriteGames: 'Mario Party mit Freund*innen, Activity Sports Edition',
		reverse: true
	};

	let chrisi = {
		imageSrc: chrisiImgSrc,
		altText: 'Auf dem Foto sieht man Christoph Thonhauser aka Chrisi, der für die Website-Entwicklung zuständig ist.',
		description: 'Christoph Thonhauser, auch bekannt als Chrisi, studiert Computer Science and Digital Communication und ist leidenschaftlicher Programmierer mit mehreren Jahren Berufserfahrung in der Webentwicklung. Sein Aufgabenbereich im Team ist die digitale Kommunikation des Projektes und die Website-Entwicklung.',
		inclusionDefinition: 'Inklusion bedeutet für Chrisi… Zugänge für alle zu schaffen und das aktive Miteinbeziehen von Menschen in einem Umfeld ohne Ausgrenzung oder Benachteiligung.',
		favoriteSports: 'Beachvolleyball',
		favoriteGames: { text: 'Mario Kart mit FreundInnen', singular: true }
	};
</script>

<svelte:head>
	<title>Über Uns - BewegUNS-Würfel</title>
</svelte:head>

<h1 class="text-3xl font-bold mb-6">Über Uns</h1>
<div class="space-y-10">
	<TeamMember {...sam}></TeamMember>
	<TeamMember {...conny}></TeamMember>
	<TeamMember {...flo}></TeamMember>
	<TeamMember {...fabi}></TeamMember>
	<TeamMember {...valli}></TeamMember>
	<TeamMember {...chrisi}></TeamMember>
</div>