<script lang="ts">
	import wuerfelImg from '$lib/assets/das-spiel/wuerfel.png';
	import gamePlayedImg from '$lib/assets/das-spiel/game-being-played.png';
	import differentWuerfelImg from '$lib/assets/das-spiel/showing-different-wuerfel.png';
	import wuerfelInHandImg from '$lib/assets/das-spiel/wuerfel-in-hand.png';
	import wuerfelUsageImg from '$lib/assets/das-spiel/wuerfel-in-usage.png';
</script>

<svelte:head>
	<title>Das Spiel - BewegUNS-Würfel</title>
</svelte:head>

<article class="space-y-20">
	<h1 class="text-3xl font-bold mb-6">Das Spiel</h1>

	<section class="flex flex-col lg:flex-row gap-10 items-center">
		<div class="flex-1 space-y-4">
			<h2 class="text-2xl font-bold">Was ist ein BewegUNS-Würfel?</h2>
			<p>Der BewegUNS-Würfel ist das zentrale Spielgerät unseres Projekts: Ein handlicher, stabiler Würfel mit sechs
				klar erkennbaren und ertastbaren Symbolen für Bewegungsübungen.
			</p>
			<p>Er ist so gestaltet, dass er gut in der Hand liegt, leicht zu würfeln ist und dadurch Freude macht. Die
				farbigen Seiten und die eingelassenen Symbole sorgen dafür, dass jede Bewegung leicht verständlich ist.
			</p>
		</div>
		<div class="flex-1 flex justify-center">
			<img src="{wuerfelImg}" alt="Der BewegUNS-Würfel" class="h-64 lg:h-80 w-auto object-contain rounded-xl shadow-lg">
		</div>
	</section>

	<section class="flex flex-col lg:flex-row-reverse gap-10 items-center">
		<div class="flex-1 space-y-4">
			<h2 class="text-2xl font-bold">Wie funktioniert das Spiel?</h2>
			<p>Der BewegUNS-Würfel kann alleine, zu zweit oder in der Gruppe gespielt werden. Jede Seite zeigt eine einfache
				Bewegung. Nach dem Würfeln wird diese Bewegung so gut wie möglich ausgeführt, je nach eigener Fähigkeit, Lust
				und
				Unterstützung. Das Ziel ist immer gleich: in Bewegung kommen, Neues ausprobieren und Spaß haben.</p>
		</div>
		<div class="flex-1 flex justify-center">
			<img src="{gamePlayedImg}" alt="Das Spiel wird in einer Gruppe gespielt" class="h-64 lg:h-80 w-auto object-contain rounded-xl shadow-lg">
		</div>
	</section>

	<section class="space-y-8">
		<div class="space-y-4">
			<h2 class="text-2xl font-bold">Was kann man damit spielen?</h2>
			<p>In der einfachsten Version, dem Imitationsspiel, gibt es für jede Seite des Würfels eine Bewegung, die nach
				eigenem Ermessen durchgeführt werden kann. Das Spiel fängt an, indem eine Person würfelt und die Übung
				ausführt.
				Alle anderen machen die Bewegung so gut wie möglich nach. Dann wird der Würfel weitergegeben und die nächste
				Person würfelt. Das Spielende wird von der Gruppe bestimmt.
			</p>
		</div>

		<article class="bg-slate-50 p-8 rounded-2xl">
			<h3 class="font-bold text-xl mb-6">Variationen:</h3>
			<dl class="grid md:grid-cols-2 grid-cols-1 items-center gap-6 text-center">
				<div class="p-4 bg-white rounded-xl shadow-sm border-t-4 border-primary-500">
					<dt class="font-semibold text-primary-600">Schneller Wechsel der Vorturnerinnen und Vorturner</dt>
				</div>
				<div class="p-4 bg-white rounded-xl shadow-sm border-t-4 border-secondary-500">
					<dt class="font-semibold text-secondary-600">Partnerinnen- und Partner-Modus:</dt>
					<dd class="text-secondary-700">sich zu zweit gegenseitig imitieren</dd>
				</div>
				<div class="p-4 bg-white rounded-xl shadow-sm border-t-4 border-tertiary-500">
					<dt class="font-semibold text-tertiary-600">Für mehr Herausforderung:</dt>
					<dd class="text-tertiary-700">zwei Bewegungen hintereinander nachmachen</dd>
				</div>
				<div class="p-4 bg-white rounded-xl shadow-sm border-t-4 border-accent-500">
					<dt class="font-semibold text-accent-600">Intensitäts-Würfel:</dt>
					<dd class="text-accent-700">Mit einem 6-seitigen Extrawürfel (1 = ganz leicht, 6 = so intensiv wie möglich)</dd>
				</div>
			</dl>
		</article>
	</section>

	<section class="flex flex-col lg:flex-row gap-10 items-center">
		<div class="flex-1 space-y-4">
			<h2 class="text-2xl font-bold">Wie kann der BewegUNS-Würfel noch verwendet werden?</h2>
			<p>Der BewegUNS-Würfel lässt sich auf viele unterschiedliche Arten spielen und immer wieder neu anpassen. Neben
				dem klassischen Spiel gibt es zahlreiche Variationen, die für Abwechslung sorgen und den Schwierigkeitsgrad
				verändern können:</p>
			<div class="space-y-4 mt-4">
				<p><span class="font-semibold text-secondary-600">Partnerinnen- und Partner-Modus:</span> Zwei Personen spielen zusammen und imitieren sich
					gegenseitig. Das stärkt Kommunikation, Vertrauen und ein gemeinsames Bewegungserleben.</p>
				<p><span class="font-semibold text-tertiary-600">Mehr Herausforderung:</span> Es können zwei oder mehr Bewegungen
					hintereinander gewürfelt und anschließend kombiniert ausgeführt werden, ähnlich wie bei “Ich packe meinen
					Koffer”.</p>
				<p><span class="font-semibold text-accent-600">Intensitäts-Modus:</span> Mit einem weiteren sechsseitigen Würfel kann die
					Intensität oder Wiederholungsanzahl der Bewegungen festgelegt werden (z. B. 1 = ganz leicht, 6 = so
					intensiv wie möglich).</p>
			</div>
			<p class="mt-4 italic">Alle Varianten können jederzeit an individuelle Fähigkeiten, Bedürfnisse und Tagesformen angepasst werden.
				Wichtig ist nicht die perfekte Ausführung, sondern die Freude an der Bewegung und am gemeinsamen Spiel.</p>
		</div>
		<div class="flex-1 flex justify-center">
			<img src="{wuerfelUsageImg}" alt="Der Würfel im Einsatz" class="h-64 lg:h-80 w-auto object-contain rounded-xl shadow-lg">
		</div>
	</section>

	<section class="flex flex-col lg:flex-row-reverse gap-10 items-center">
		<div class="flex-1 space-y-4">
			<h2 class="text-2xl font-bold">Wer ist die Zielgruppe?</h2>
			<p>Der BewegUNS-Würfel ist so gemacht, dass er so inklusiv wie möglich verwendbar ist. Das bedeutet, dass
				alle Menschen mit und ohne Beeinträchtigung mit unseren Würfeln spielen können.</p>
		</div>
		<div class="flex-1 flex justify-center">
			<img src="{differentWuerfelImg}" alt="Verschiedene bunte BewegUNS-Würfel" class="h-64 lg:h-80 w-auto object-contain rounded-xl shadow-lg">
		</div>
	</section>

	<section class="flex flex-col lg:flex-row gap-10 items-center">
		<div class="flex-1 space-y-4">
			<h2 class="text-2xl font-bold">Wie wird der BewegUNS-Würfel hergestellt?</h2>
			<p>Jeder BewegUNS-Würfel entsteht in sorgfältiger Handarbeit mit Hilfe moderner 3D-Drucktechnik. Dahinter steckt
				viel Tüftelei, Liebe zum Detail und jede Menge Entwicklungszeit. Aber genau das macht ihn so besonders.
			</p>
			<p>Uns war wichtig, dass der Würfel gut in jeder Hand liegt, robust ist und es Spaß macht, ihn anzufassen. Die
				Symbole werden so gedruckt, dass sie klar ertastbar sind. Die leuchtenden, kontrastreichen Farben wurden in
				gemeinsamen Workshops ausgesucht. Immer mit dem Ziel, dass möglichst alle Menschen damit spielen können.
			</p>
		</div>
		<div class="flex-1 flex justify-center">
			<img src="{wuerfelInHandImg}" alt="Ein BewegUNS-Würfel in der Hand zeigt die Details" class="h-64 lg:h-80 w-auto object-contain rounded-xl shadow-lg">
		</div>
	</section>
</article>
