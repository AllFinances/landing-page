import platform from "platform";

export const useSessionStore = defineStore("session", {
	state: () => ({
		allowSessionData: true,
		sessionLocation: {} as GeoPluginResponse,
		sessionUA: {} as UserAgentInfo,
	}),
	actions: {
		async loadSessionLocation() {
			var requestOptions: RequestInit = {
				method: "GET",
			};

			await fetch("http://www.geoplugin.net/json.gp", requestOptions)
				.then(async (response) => {
					this.sessionLocation = await response.json();
				})
				.catch((error) => console.log(error));
		},
		loadSessionPlatform() {
			this.sessionUA = { ...platform };
		},
		async subscribeUser(email: string) {
			const allowStore = this.allowSessionData;
			const payload = <SubscribePayload>{
				email: email,
				is_sub: true,
				country: allowStore ? this.sessionLocation.geoplugin_countryName : null,
				city: allowStore ? this.sessionLocation.geoplugin_city : null,
				ua_os: allowStore ? `${this.sessionUA.os.family} ${this.sessionUA.os.version} ${this.sessionUA.os.architecture}` : null,
				ua_name: allowStore ? this.sessionUA.name : null,
				ua_version: allowStore ? this.sessionUA.version : null,
			};

			if (email) {
				try {
					const { success, message } = await $fetch("/api/subscribe", {
						method: "POST",
						body: { payload: payload },
					});

					if (success) {
						console.error("Error subscribing user:", message);
					}
				} catch (err) {
					console.error("Unexpected error:", err);
				}
			}
		},
		unsubscribeUser() {},
	},
	getters: {
		getSessionLocation: (state) => state.sessionLocation,
		getSessionUA: (state) => state.sessionUA,
	},
});
