import type {LayoutData, SiteSettings} from "../../app";

export const siteDataStore = siteStore()
function siteStore(){
    let siteStore: SiteStore = {
        hideAsideCart: true,
    };
    let value = $state<SiteStore>(siteStore);

    return {
        get siteState() {return value},
        set siteState(v) {
            value = v;
        }
    }
}

export type SiteStore = {
    hideAsideCart: boolean
    layoutData?: LayoutData
}