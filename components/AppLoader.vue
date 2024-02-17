<template>
	<div class="fixed top-0 bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
		<div class="relative w-full h-full flex justify-center items-center">
			<Transition name="fade-animation-text">
				<div
					v-if="!props.animationEnded"
					class="!z-[5000] absolute w-[300px] overflow-hidden flex items-center justify-center text-white drop-shadow-xl text-2xl"
				>
					<span id="animationText" class="tracking-widest drop-shadow"></span>
					<div class="w-12">
						<Icon
							v-if="props.showTerminalChar"
							id="terminalChar"
							name="mdi:slash-forward"
							size="48"
							class="flex items-center text-white drop-shadow"
						/>
					</div>
				</div>
			</Transition>
			<div
				id="loader-section-1"
				class="w-[--loader-section-width] h-[--loader-section-height] rounded shrink-0 pointer-events-auto bg-secondary-600"
			></div>
			<div
				id="loader-section-2"
				class="w-[--loader-section-width] h-[--loader-section-height] rounded shrink-0 pointer-events-auto bg-secondary-600"
			></div>
			<div
				id="loader-section-3"
				class="w-[--loader-section-width] h-[--loader-section-height] rounded shrink-0 pointer-events-auto bg-secondary-600"
			></div>
			<div
				id="loader-section-4"
				class="w-[--loader-section-width] h-[--loader-section-height] rounded shrink-0 pointer-events-auto bg-secondary-600"
			></div>
			<div
				id="loader-section-5"
				class="w-[--loader-section-width] h-[--loader-section-height] rounded shrink-0 pointer-events-auto bg-secondary-600"
			></div>
			<div
				id="loader-section-6"
				class="w-[--loader-section-width] h-[--loader-section-height] rounded shrink-0 pointer-events-auto bg-secondary-600"
			></div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	animationEnded: boolean;
	showTerminalChar: boolean;
}>();
</script>

<style>
@keyframes loader-animation {
	0% {
		transform: translate(0%, 0%);
	}
	1% {
		@apply rounded-e-xl;
	}
	100% {
		transform: translate(0%, -100%);
	}
}

.fade-animation-text-enter-active,
.fade-animation-text-leave-active {
	transition: opacity 0.25s;
}

.fade-animation-text-enter-from,
.fade-animation-text-leave-to {
	opacity: 0;
}

#loader-section-1 {
	animation: loader-animation 1s forwards;
	animation-delay: 8800ms;
}

#loader-section-2 {
	animation: loader-animation 1s forwards;
	animation-delay: 8900ms;
}

#loader-section-3 {
	animation: loader-animation 1s forwards;
	animation-delay: 9000ms;
}

#loader-section-4 {
	animation: loader-animation 1s forwards;
	animation-delay: 9100ms;
}

#loader-section-5 {
	animation: loader-animation 1s forwards;
	animation-delay: 9200ms;
}

#loader-section-6 {
	animation: loader-animation 1s forwards;
	animation-delay: 9300ms;
}
</style>
