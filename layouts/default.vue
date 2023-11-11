<template>
	<header class="text-secondary-500 brand-extralight text-2xl space-x-2">
		<div class="header-title">
			<span id="headerText"></span>
			<span v-if="showTerminalChar" id="terminalChar">/</span>
		</div>
	</header>
</template>

<script setup lang="ts">
const showTerminalChar = ref(false);
const headerText = ref('Ychahbar.dev');

// const terminalCharAnimation = setInterval(() => {
// 	showTerminalChar.value = !showTerminalChar.value;
// }, 500);

const delay = (delayInms: number): Promise<NodeJS.Timeout> => {
	return new Promise(resolve => setTimeout(resolve, delayInms));
};

onMounted(async () => {
	await delay(2000);
	consoleText(headerText.value, 'headerText');
	await delay(2800);
	// clearInterval(terminalCharAnimation);
	// showTerminalChar.value = true;
});

function consoleText(word: string, id: string) {
	const target = document.getElementById(id) as HTMLElement;

	function typeLetter(index: number) {
		if (index < word.length) {
			target.innerHTML += word[index];
			setTimeout(() => {
				typeLetter(index + 1);
			}, 120);
		}
	}

	typeLetter(0);
}
</script>

<style scoped>
header {
	font-family: space-mono;
	font-size: 1.6vw;
	/* position: relative; */
}

.header-title {
	width: fit-content;
	user-select: none;
	position: absolute;
	top: 40%;
	left: calc(50% - 50px);
	animation: 1.7s reposition ease forwards;
	animation-delay: 5760ms;
}

@keyframes reposition {
	from {
		top: 40%;
		left: calc(50% - 50px);
	}
	to {
		top: 0;
		left: 0;
		/* transform: translate(0, 0); */
	}
}
</style>
