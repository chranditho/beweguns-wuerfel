<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<nav class="grid grid-cols-3 lg:divide-x gap-2 lg:gap-0 md:grid-cols-6 justify-center items-center">
		<a href="{resolve('/aktuell')}" class="hover:bg-gray-200 p-2 transition-all  text-center">AKTUELL</a>
		<a href="{resolve('/workshop')}" class="hover:bg-gray-200 p-2 transition-all  text-center">WORKSHOP</a>
		<a href="{resolve('/das-spiel')}" class="hover:bg-gray-200 p-2 transition-all  text-center">DAS SPIEL</a>
		<a href="{resolve('/ueber-uns')}" class="hover:bg-gray-200 p-2 transition-all  text-center">ÜBER UNS</a>
		<a href="{resolve('/kontakt')}" class="hover:bg-gray-200 p-2 transition-all  text-center">KONTAKT</a>
		<a href="{resolve('/impressum')}" class="hover:bg-gray-200 p-2 transition-all  text-center">IMPRESSUM</a>
</nav>
