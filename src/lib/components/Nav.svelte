<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<nav class="grid grid-cols-3 lg:divide-x gap-2 lg:gap-0 md:grid-cols-6 justify-center items-center">
		<a href="{resolve('/aktuell')}" class="hover:bg-gray-200 p-2 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2">AKTUELL</a>
		<a href="{resolve('/workshop')}" class="hover:bg-gray-200 p-2 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2">WORKSHOP</a>
		<a href="{resolve('/das-spiel')}" class="hover:bg-gray-200 p-2 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2">DAS SPIEL</a>
		<a href="{resolve('/ueber-uns')}" class="hover:bg-gray-200 p-2 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2">ÜBER UNS</a>
		<a href="{resolve('/kontakt')}" class="hover:bg-gray-200 p-2 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2">KONTAKT</a>
		<a href="{resolve('/impressum')}" class="hover:bg-gray-200 p-2 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2">IMPRESSUM</a>
</nav>
