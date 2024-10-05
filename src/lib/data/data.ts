import type {BikeItem, ProductItem} from "../../app";

const siteDomain = 'bikesynergy.com';
export const SiteDetail = {
    name: "Bike Synergy",
    description: "Mountain Bike equipment, maintenance & coaching",
    email: `info@${siteDomain}`,
    paymentEmail: `payment@${siteDomain}`,
    phone: "0408 464 525"
}

// TODO: this need to come from the backend. hardcoded for now
export const STORE_DISCOUNT = {
    HOME_DELIVERY_DISCOUNT : 0.5,
    COMBO_PACKAGE_DISCOUNT : 0.3
}
export const accessoryPackageList: ProductItem[] = [
    {
        title: 'Accessory package',
        productType: 'package',
        slug: '',
        description: 'Giro high protection Trail helmet > Black or Grey  - unisize or XL see size chart, JB PRO Cycling sunglasses with case and interchangeable lenses (dark, clear, amber), Giro long finger cycling gloves - XS, S, M, L ,XL, XXL, Trail side repair tool kit + pump, Water Bottle and holder',
        imagePath: '/accessories-package.jpeg',
        count: Infinity,
        summary: [
            'Giro high protection Trail helmet > Black or Grey  - unisize or XL see size chart',
            'JB PRO Cycling sunglasses with case and interchangeable lenses (dark, clear, amber)',
            'Giro long finger cycling gloves - XS, S, M, L ,XL, XXL',
            'Trail side repair tool kit + pump',
            'Water Bottle and holder'
        ],
        normalPrice: "340.00"
    }
]

export const servicePackageList: ProductItem[] = [
    {
        title: '6 months unlimited servicing package',
        productType: 'package',
        slug: '',
        description: '',
        imagePath: '',
        count: Infinity,
        summary: [
            'Unlimited package includes priority same day adjustment servicing onsite at Glengarry.'
        ],
        normalPrice: "500.00"
    }
]

export const DeliveryOptions:ProductItem[] = [
    {
        title: 'FREE DELIVERY TO SCOTS COLLEGE',
        productType: 'package',
        slug: '',
        description: '',
        imagePath: '',
        count: Infinity,
        summary: [
            'Intake 1 - order by November 1 (delivery late Nov - date TBA)',
            'Intake 2 - order by June 1 (delivery mid June - date TBA)',
        ],
        normalPrice: "0.00"
    },
    {
        title: 'GLENGARRY DELIVERY',
        productType: 'package',
        slug: '',
        description: '',
        imagePath: '',
        count: Infinity,
        summary: [
            'Order after November 1 (INTAKE 1) or June 1 (INTAKE 2) for free delivery directly to Glengarry at start of term.',
        ],
        normalPrice: "0.00"
    },
    {
        title: 'HOME DELIVERY',
        productType: 'package',
        slug: '',
        description: '',
        imagePath: '',
        count: Infinity,
        summary: [
            'Door to door home delivery bike and equipment',
        ],
        normalPrice: "150.00"
    },
]

export const catalog: BikeItem[] = [
    {
        title: 'OPTION 2 - Norco Fluid DUAL SUSPENSION BIKE - RED - 2023 BIKE OF THE YEAR',
        imagePath: '/bikes/BC795F45-17FC-4F51-96B6-CDAC9241588C.png',
        productType: 'bike',
        slug: '',
        extraPackageDetail: {
            accessoryPackage: accessoryPackageList,
            servicePackage: servicePackageList
        },
        description: 'The Norco FLUIDis the perfect dual suspension trail bike suited to advanced riding on rugged trails at Glengarry. With a softer, more compliant ride this bike provides added comfort and control, with advanced All Mountain" performance. ADVANCED ALL MOUNTAIN performance, durability and accessories',
        normalPrice: '3199.00',
        discount: '2847.00',
        summary: [
            "The Norco FLUIDis the perfect dual suspension trail bike suited to advanced riding on rugged trails at Glengarry. With a softer, more compliant ride this bike provides added comfort and control, with advanced All Mountain\" performance.",
            "ADVANCED ALL MOUNTAIN performance, durability and accessories",
            "Add a servicing and accessories package and receive 30% discount off each - save $252",
            "Order prior to November 15 to receive FREE delivery to Scots College in time for Summer holidays"
        ],
        variants: {
            bikeSize: ["XS", "S", "M", "L", "XL"],
            helmetSize: ["small", "Unisize", "XL",],
            helmetColour: ["Black", "Grey"],
            mXGlovesSize: ["XS", "S", "M", "L", "XL", "XXL"],
        },
        count: Infinity
    },
    {
        imagePath: '/bikes/7C8F50B8-8E9F-4492-833E-295D3A06FA94.png',
        title: 'OPTION 2 - Norco Fluid DUAL SUSPENSION BIKE -BLACK - 2023 BIKE OF THE YEAR',
        productType: 'bike',
        slug: '',
        extraPackageDetail: {
            accessoryPackage: accessoryPackageList,
            servicePackage: servicePackageList
        },
        description: 'The *Norco FLUID`is the perfect dual suspension trail bike suited to advanced riding on rugged trails at Glengarry. With a softer, more compliant ride this bike provides added comfort and control, with advanced All Mountain\' performance.',
        normalPrice: '3199.00',
        discount: '2847.00',
        summary: [
            "The *Norco FLUID`is the perfect dual suspension trail bike suited to advanced riding on rugged trails at Glengarry. With a softer, more compliant ride this bike provides added comfort and control, with advanced All Mountain\' performance.",
            "Add a servicing and accessories package and receive 30% discount off each - save $252",
            "Order prior to November 15 to receive FREE delivery to Scots College in time for Summer holidays."
        ],
        variants: {
            bikeSize: ["XS", "S", "M", "L", "XL"],
            helmetSize: ["small", "Unisize", "XL",],
            helmetColour: ["Black", "Grey"],
            mXGlovesSize: ["XS", "S", "M", "L", "XL", "XXL"],
        },
        count: Infinity
    },
    {
        imagePath: '/bikes/big-9-200.png',
        title: 'OPTION 1-MERIDA BIG9 HARDTAIL BIKE',
        productType: 'bike',
        slug: '',
        extraPackageDetail: {
            accessoryPackage: accessoryPackageList,
            servicePackage: servicePackageList
        },
        description: 'The \'MERIDA BIG9 200\' is a dynamic hardtail mountain bike built for the beginner rider. An entry-level mountain bike to deliver reliable performance.',
        normalPrice: '1279.00',
        discount: '1279.00',
        summary: [
            "The 'MERIDA BIG9 200' is a dynamic hardtail mountain bike built for the beginner rider. An entry-level mountain bike to deliver reliable performance.",
            "Add a servicing and accessories package and receive 30% discount off each - save $252",
            "Order prior to November 15 to receive FREE delivery to Scots College in time for Summer holidays.",
        ],
        variants: {
            bikeSize: ["XS", "S", "M", "L", "XL"],
            helmetSize: ["small", "Unisize", "XL",],
            helmetColour: ["Black", "Grey"],
            mXGlovesSize: ["XS", "S", "M", "L", "XL", "XXL"],
        },
        count: Infinity
    },
    {
        imagePath: '/package.png',
        title: 'Accessory and Service Package',
        productType: 'package',
        slug: '',
        extraPackageDetail: {
            accessoryPackage: accessoryPackageList,
            servicePackage: servicePackageList
        },
        description: 'purchase the accessories package and / or the servicing package - without buying a bike.',
        normalPrice: '0.00',
        discount: '0.00',
        summary: [
            "accessories package",
            "servicing package",
        ],
        variants: {
            helmetSize: ["small", "Unisize", "XL",],
            helmetColour: ["Black", "Grey"],
            mXGlovesSize: ["XS", "S", "M", "L", "XL", "XXL"],
        },
        count: Infinity
    },
]

export const allImage = [
    "/bikes/DG692668-1.jpg",
    "/bikes/DG692685-1.jpg",
    "/bikes/DG692704-1.jpg",
    "/bikes/DG692709-1.jpg",
    "/bikes/DG692938-1.jpg",
    "/bikes/DG692944-1.jpg",
    "/bikes/DG692963-1.jpg",
    "/bikes/DG694268-1.jpg"
]

export const allMobileImage = [
    "/bikes/mobile/i1.png",
    "/bikes/mobile/i2.png",
    "/bikes/mobile/i3.png",
    "/bikes/mobile/i4.png",
    "/bikes/mobile/i5.png",
    "/bikes/mobile/i6.png",
    "/bikes/mobile/i7.png",
    "/bikes/mobile/i8.png",
]