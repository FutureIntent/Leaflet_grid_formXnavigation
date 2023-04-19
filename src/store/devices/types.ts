export interface IDevice {
    uuid: string;
    poster: string;
    name: string;
    therapy: string;
    description: string;
    prices: {
        planA: number;
        planB: number;
        planC: number;
    };
}
