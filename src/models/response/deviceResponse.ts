import { DeviceType } from '../../enums/deviceType';

export class DeviceResponse {
    id: string;
    name: number;
    identifier: string;
    type: DeviceType;
    creationDate: string;

    constructor(response: any) {
        this.id = response.Id;
        this.name = response.Name;
        this.identifier = response.Identifier;
        this.type = response.Type;
        this.creationDate = response.CreationDate;
    }
}
