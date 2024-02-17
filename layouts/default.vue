<!-- eslint-disable vue/no-multiple-template-root -->
<template>
	<div class="fixed top-0 left-0 right-0 bottom-0 overflow-hidden z-10 pointer-events-none">
		<AppLoader :animation-ended="animationEnded" :show-terminal-char="showTerminalChar" />
		<Transition name="fade-header">
			<header
				v-if="animationEnded"
				class="select-none main-header text-white absolute top-0 left-0 w-full pointer-events-auto bg-transparent flex flex-row justify-between overflow-hidden items-center"
			>
				<div class="h-fit w-fit flex flex-row items-center">
					<span class="col-span-5 inline-flex items-center tracking-wide text-xl">
						{{ headerText }}
					</span>
					<div class="col-span-1 flex justify-center items-center w-10">
						<Transition name="fade">
							<Icon
								v-if="showTerminalChar"
								id="terminalChar"
								name="mdi:slash-forward"
								size="42"
								class="flex items-center text-primary-400"
							/>
						</Transition>
					</div>
					<Transition name="fade">
						<div v-if="showAvatar" class="w-10 h-10 rounded-full overflow-hidden col-span-5">
							<NuxtImg src="/img/profile.jpg" />
						</div>
					</Transition>
				</div>
				<button class="group flex flex-col ring-2 ring-primary-400 px-4 py-2 rounded">
					<span>{{ $t('contact.contact_me') }} </span>
					<span class="test group-hover:h-0.5 group-hover:bg-red-500 w-full"></span>
				</button>
			</header>
		</Transition>
	</div>
	<slot />
</template>

<script setup lang="ts">
const { t } = useI18n();
const showTerminalChar = ref(false);
const animationEnded = ref(false);
const showAvatar = ref(false);
const headerText = ref(t('header.site_title'));

const terminalCharAnimation = (() => {
	let animation: NodeJS.Timeout;
	return {
		start(duration: number = 700) {
			animation = setInterval(() => {
				showTerminalChar.value = !showTerminalChar.value;
			}, duration);
		},
		stop() {
			clearInterval(animation);
			showTerminalChar.value = true;
		},
	};
})();

onMounted(async () => {
	terminalCharAnimation.start();
	await useDelay(2800);
	consoleText(headerText.value, 'animationText');
	await useDelay(5000);
	terminalCharAnimation.stop();
	await useDelay(400);
	animationEnded.value = true;
	await useDelay(950);
	showAvatar.value = true;
	await useDelay(500);
	terminalCharAnimation.start(2000);
});

const typeLetter = (index: number, word: string, target: HTMLElement) => {
	if (index < word.length) {
		target.innerHTML += word[index];
		setTimeout(() => {
			typeLetter(index + 1, word, target);
		}, 180);
	}
};

const consoleText = (word: string, id: string) => {
	const target = document.getElementById(id) as HTMLElement;
	typeLetter(0, word, target);
};
</script>

<style>
.test {
	transition: background-color 0.5s;
}
.fade-header-enter-active,
.fade-header-leave-active {
	transition: opacity 1.5s;
	transition-delay: 0.8s;
}

.fade-header-enter-from,
.fade-header-leave-to {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.main-header {
	height: 4.6em;
	padding: 0 calc(var(--grid-line-padding) * 1.5);
}
</style>
