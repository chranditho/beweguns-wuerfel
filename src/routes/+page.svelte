<script>
	import Cards from '$lib/cards/Cards.svelte';
	import Hero from '$lib/hero/Hero.svelte';

	const hauptprobleme = {
		headerText: 'Wir lösen drei Hauptprobleme:',
		cards:
			[
				{
					title: '🎯 Hohe Zugangshürden zu inklusivem Sport',
					description: 'Mobilität (immer irgendwo hinfahren zu müssen) und starre Strukturen schrecken viele ab. Unser spielerischer Ansatz macht Bewegung zugänglich.'
				},
				{
					title: '💡 Mangel an spielerischer Bewegung',
					description: 'Bewegung soll Spaß machen! Unser Würfel macht Bewegung zum Spiel und fördert so die Motivation.'
				},
				{
					title: '🌱 Fehlende Nachhaltigkeit',
					description: 'Viele Bewegungsangebote sind einmalig. Wir bilden Bewegungsbeauftragte aus, die die Idee weitergeben. Mit dem Würfel hat man auch eine Erinnerung an die Bewegung.'
				}
			]
	};

	const wasUnsAusmacht = {
		headerText: 'Was uns ausmacht',
		cards: [
			{
				title: '🎲 Spielerisch bewegen',
				description: 'Der Bewegungswürfel macht Bewegung zum Spiel. Einfach würfeln und loslegen - so einfach kann Bewegung sein!'
			},
			{
				title: '🤝 Partizipativ entwickeln',
				description: 'Gemeinsam mit Menschen mit und ohne Behinderung entwickeln wir neue Spielformen und Bewegungsideen.'
			},
			{
				title: '🌟 Nachhaltig wirken',
				description: 'Durch die Ausbildung von Bewegungsbeauftragten schaffen wir langfristige Strukturen für inklusive Bewegung.'
			}
		]
	};
</script>

<main class="flex flex-col justify-between text-center gap-40">
	<div class="space-y-2">
		<h1 class="h1 text-primary-500">Beweg-Uns-Würfel</h1>
		<p class="h6 text-secondary-400">Inklusive Bewegung für alle - spielerisch barrierefrei</p>
	</div>

	<Hero />

	<Cards {...wasUnsAusmacht} />
	<Cards {...hauptprobleme} />

	<div>
		<h2>Unser nächster Workshop</h2>
		<p>Lerne den Bewegungswürfel kennen und werde Teil unserer inklusiven Bewegung.</p>
	</div>
</main>
