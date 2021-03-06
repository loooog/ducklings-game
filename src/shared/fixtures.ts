import {ValidUUID} from "../utils/ids";

export enum FixtureType {
    DUCKLING,
    PLAYER,
    FOOD_PLANT,
}

export type FixtureUserData = {
    uuid: ValidUUID,
    fixtureIndex: number,
    fixtureType?: FixtureType,
    [key: string]: any,
}

export type FixtureDucklingData = FixtureUserData & {
    ducklingId: string,
}