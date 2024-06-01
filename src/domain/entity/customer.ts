import { Address } from './address';

export class Customer {
    private _name: string;
    private _id: string;
    private _address!: Address;
    private _active: boolean = false;
    private _rewardPoints: number = 0;

    constructor(id: string, name: string) {
        this._name = name;
        this._id = id;
        this.validate();
    }

    get id() {
        return this._id;
    }

    get rewardPoints(): number {
        return this._rewardPoints;
    }

    get name() {
        return this._name;
    }

    get address() {
        return this._address;
    }

    set address(address: Address) {
        this._address = address;
    }

    validate() {
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }

        if (this._id.length === 0) {
            throw new Error("Id is required");
        }

        return true;
    }

    addRewardPoints(points: number) {
        this._rewardPoints += points;
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    isActive() {
        return this._active;
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }
}