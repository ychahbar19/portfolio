export const useDelay = (delayInms: number): Promise<NodeJS.Timeout> => {
	return new Promise(resolve => setTimeout(resolve, delayInms));
};
