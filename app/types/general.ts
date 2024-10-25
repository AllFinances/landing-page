export type GeoPluginResponse = {
	geoplugin_request: string;
	geoplugin_status: number;
	geoplugin_delay: string;
	geoplugin_credit: string;
	geoplugin_city: string;
	geoplugin_region: string;
	geoplugin_regionCode: string;
	geoplugin_regionName: string;
	geoplugin_areaCode: string;
	geoplugin_dmaCode: string;
	geoplugin_countryCode: string;
	geoplugin_countryName: string;
	geoplugin_inEU: number;
	geoplugin_euVATrate: number;
	geoplugin_continentCode: string;
	geoplugin_continentName: string;
	geoplugin_latitude: string;
	geoplugin_longitude: string;
	geoplugin_locationAccuracyRadius: string;
	geoplugin_timezone: string;
	geoplugin_currencyCode: string;
	geoplugin_currencySymbol: string;
	geoplugin_currencySymbol_UTF8: string;
	geoplugin_currencyConverter: number;
};

export type UserAgentInfo = {
	description: string;
	layout: string;
	manufacturer: string | null;
	name: string;
	prerelease: string | null;
	product: string | null;
	ua: string;
	version: string;
	os: {
		architecture: number;
		family: string;
		version: string;
	};
};

export type SubscribePayload = {
	email: string;
	is_sub: boolean;
	country: string | null;
	city: string | null;
	ua_os: string | null;
	ua_name: string | null;
	ua_version: string | null;
};
