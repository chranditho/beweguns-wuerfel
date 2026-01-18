<script lang="ts">
	import FotoCard from '$lib/components/FotoCard.svelte';
	import workshopImage from '$lib/assets/workshop/workshop.png';
</script>

<svelte:head>
	<title>Workshop - BewegUNS-Würfel</title>
</svelte:head>

<article>
	<h1 class="text-3xl font-bold mb-6">Workshop</h1>
	<section class="space-y-4">
		<FotoCard
			imageSrc={workshopImage}
			altText="Teilnehmende probieren den BewegUNS-Würfel im Workshop aus"
			text="Bei unseren Workshops kannst du gemeinsam mit anderen Teilnehmerinnen und Teilnehmern verschiedene Spielformen mit dem BewegUNS-Würfel ausprobieren. Auch deine Meinung und dein Feedback sind gefragt - wir wollen wissen, was Dir Spaß macht und welche Ideen Du zu unserem Spiel hast!"
		/>
		<p>Mit Übungen aus den Bereichen Mobilisierung, Motorik, Körperbewusstsein, spielerische Bewegung & Koordination,
			die
			an Deine Bedürfnisse angepasst werden können, ist der BewegUNS-Würfel für alle etwas!
		</p>
		<p>Die Teilnahme an unseren Workshops ist kostenlos. Wir sind dankbar für Dein Mitmachen und Dein Feedback!</p>
	</section>
</article>
<section>
	<h2 class="text-2xl font-bold mb-4">Wie sind unsere Workshops aufgebaut?</h2>
	<div class="grid grid-cols-1 text-center lg:grid-cols-3 gap-6">
		<section class="bg-secondary-50 rounded-xl p-6">
			<div class="text-6xl my-6 text-secondary-700">1</div>
			<h3 class="font-bold mb-2">Ankommen und Kennenlernen</h3>
			<p>Da bei unseren Workshops eine bunte Gruppe an Personen zusammenkommt, ist uns wichtig, dass wir uns
				gegenseitig
				erst einmal kennenlernen. Wir stellen uns und den BewegUNS-Würfel kurz vor und machen meistens ein kleines
				Spiel
				zum
				Ankommen.</p>
		</section>

		<section class="bg-primary-50 rounded-xl p-6 ring-4 ring-primary-500">
			<div class="text-6xl my-6 text-primary-700">2</div>
			<h3 class="font-bold mb-2">Der Hauptteil: Spielen!</h3>
			<p>In 3-4 Kleingruppen probieren wir unterschiedliche Spielformen des BewegUNS-Würfels aus. Jede Gruppe hat eine
				Gruppenleitung, die dir die Regeln erklärt und dann wird gemeinsam gespielt! Nach ca. 15 Minuten werden die
				Gruppen
				gewechselt, so dass du alle Spielformen ausprobieren kannst.</p>
		</section>

		<section class="bg-accent-50 rounded-xl p-6">
			<div class="text-6xl my-6 text-accent-700">3</div>
			<h3 class="font-bold mb-2">Reflexion und Jause</h3>
			<p>Im Anschluss an die Übungen tauschen wir uns bei einem gemütlichen Zusammentreffen über den Workshop aus. Wir
				wollen wissen, was Dir Spaß gemacht hat, aber auch was Du verbessern würdest. Eine gute Jause und Erfrischung
				darf
				dabei natürlich nicht fehlen.</p>
		</section>
	</div>
</section>
<section class="space-y-6">
	<h2 class="text-2xl font-bold mb-4">Wer kann bei unseren Workshops mitmachen?</h2>
	<article>
		<p>
			Der BewegUNS-Würfel ist so gemacht, dass er so inklusiv wie möglich verwendbar ist. Das bedeutet, dass Menschen
			mit
			und ohne Beeinträchtigung mit unseren Würfeln spielen können.
		</p>
		<p>
			Grundsätzlich gibt es keine Altersbegrenzung, um bei unseren Workshops teilzunehmen - ab Volksschulalter (ca. 6
			Jahre) machen unsere Workshops aber erst richtig Spaß.
		</p>
	</article>
	<dl class="space-y-4">
		<div>
			<dt class="font-bold inline">Gruppengröße:</dt>
			<dd class="inline">
				Wir bieten unsere Workshops ab einer Gruppengröße von mindestens 6 Personen bis maximal 30 Personen an.
			</dd>
		</div>
		<div>
			<dt class="font-bold inline">Dauer:</dt>
			<dd class="inline">
				Je nach Gruppengröße dauert ein Workshop in der Regel zwischen 2 und 3 Stunden.
				(Bei Anfragen ist die Dauer anpassbar)
			</dd>
		</div>
		<div>
			<dt class="font-bold inline">Räumlichkeiten:</dt>
			<dd class="inline">
				Alle Workshops, die von uns veranstaltet werden, finden an einem barrierefreien Ort statt.
				Solltest Du uns für einen Workshop buchen wollen, können wir auch zu Dir kommen!
			</dd>
		</div>
	</dl>
</section>
