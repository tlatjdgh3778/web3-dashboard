//dynamic import를 통해 조건부로 module 로드
export async function initMocks() {
	if (typeof window === "undefined") {
		const { server } = await import("./server");

		server.listen();
	} else {
		const { worker } = await import("./browser");

		worker.start();
	}
}
