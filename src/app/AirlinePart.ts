export interface AirlinePart {
    Key: string;
    Record: AirlinePartInfo;
}
export interface AirlinePartInfo {
    productID: number;
    quantity: number;
    owner: string;
}