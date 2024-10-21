import { t } from "vue-i18n";

declare module "vue" {
	export interface componentcustomproperties {
		$t: typeof t;
	}
}
