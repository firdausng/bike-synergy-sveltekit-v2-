// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import {ZodType} from "zod";

declare global {
    namespace App {
        interface Locals extends LoaderLocals {
        }



        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}
export type MainPageData = {
    mainPage: {
        hero:Hero
        parallax1: Parallax
        aboutUs: any
        faq: {question: string, answer: string}[]
        parallax2: Parallax
        team: {
            title: string,
            note: any,
            subtitle: any,
            members: TeamMember[]
        }
        parallax3: Parallax
        parallax4: Parallax
        parallax5: Parallax
    },
    siteSettings: SiteSettings,
    allProducts: BikeItem[]
}

export type LayoutData = {
    siteSettings: SiteSettings
    accessoryPackages: ProductItem[]
    servicePackages: ProductItem[]
    deliveryOptions: DeliveryOption[]
}


export type ProductDetailPageData = {
    siteSettings: SiteSettings
    product: BikeItem
    productPage: ProductPage
}

export type ProductPage = {
    title: string;
    sections: string[];
    form: FormData[]
}

export type FormData = {
    type: string;
    name: string;
    value: string;
    section: string;
    description: string;
    label: string
    dependOn: string;
    colSpan: string;
    validation: {
        type: string;
        value: string|number;
        message: string;
    }[];
    options: {
        title?: string;
        variants?: string[];
        name?: string;
        packages?: ProductItem[];
        _type: string;
    }
}

export type TeamMember = {
    name: string
    description: string
    imagePath: string
    position: string
}

export type SiteSettings = {
    name: string
    description: string
    email: string
    paymentEmail: string
    phone: string
    homeDeliveryDiscount: number
    comboPackageDiscount: number
    navigations: SiteNavigation[]
}

export type SiteNavigation = {
    navText: string
    navPath: string
}

export type Parallax = {
    title: string
    subtitle1: string
    subtitle2: string
    textList: string[]
}

export type Hero = {
    callToAction_Text: string
    mobileImages: string[]
    description: string
    title: string
    callToAction_Link: string
    images: string[]
}

export {};

export type ProductItem = {
    title: string,
    slug: {
        current: string
    }
    description: string
    summary: string[]
    normalPrice: string
    discount?: string
    imagePath: string
    count: number
    cta: string
    productType: 'bike' | 'package'
    imageListPath: string[]
    deliveryOptions: DeliveryOption[]
    variants:{
        title: string
        variant:Variant[]
    }
}

export type Variant = {
    title: string
    variants: string[]
}


export type DeliveryOption = {
    title: string
    price: string
    summary: string[]
}

export type BikeItem = ProductItem & {
    extraPackageDetail: {
        packages: ExtraPackage[]
    }
}

export type ExtraPackage = {
    name: string
    packages: ProductItem[]
}

export type OrderTabState = { setActiveTab: (a: string) => void }

export type PaymentEmailProps = {
    invoiceId: string,
    order: OrderData,
    paymentSummary: PinResponse
}

export type FormSchema = Record<string, ZodType<any>>