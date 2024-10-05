import {z} from "zod";
import type {BikeItem} from "../../app";

export const catalogDataStore = catalogStore([]);

function catalogStore(initialState: BikeItem[]) {
    let catalog = $state<BikeItem[]>(initialState);
    return {
        get catalog() {return catalog},
        set catalog(v) {
            catalog = v;
        },
        update(data: BikeItem[]){
            catalog = data
        }
    }
}

export const _bikeDetailSchema = z.object({
    bikeSize: z.string(),
    helmetSize: z.string(),
    helmetColour: z.string(),
    mXGlovesSize: z.string(),
    accessoryPackage: z.string().optional(),
    servicePackage: z.string().optional(),
    pedalPackage: z.string().optional(),
    deliveryOption: z.string(),
    fullName: z.string(),
    height: z.string(),
    weight: z.string(),
});

export type BikeDetailSchema = typeof _bikeDetailSchema;
export type BikeDetail = z.infer<typeof _bikeDetailSchema> & {
    id: string
    item: BikeItem
};