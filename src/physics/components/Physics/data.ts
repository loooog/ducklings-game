import {Object3D} from "three";

export type Buffers = { positions: Float32Array; angles: Float32Array }

export const maxNumberOfDynamicPhysicObjects = 100

// export const buffers = {
//     positions: new Float32Array(maxNumberOfDynamicPhysicObjects * 2),
//     angles: new Float32Array(maxNumberOfDynamicPhysicObjects),
// }

export const collisionStartedEvents: {
    [key: string]: (data: any, fixtureIndex: number) => void,
} = {}

export const collisionEndedEvents: {
    [key: string]: (data: any, fixtureIndex: number) => void,
} = {}

export type CollisionEventProps = {
    uuid: string,
    fixtureIndex: number,
    data: {
        uuid: string,
    }
}

export const storedPhysicsData: {
    bodies: {
        [uuid: string]: number,
    }
} = {
    bodies: {},
}

export const applyPositionAngle = (buffers: Buffers, object: Object3D | null, index: number, applyAngle: boolean = false) => {
    if (index !== undefined && buffers.positions.length && !!object) {
        const start = index * 2
        const position = buffers.positions.slice(start, start + 2)
        object.position.x = position[0]
        object.position.y = position[1]
        if (applyAngle) {
            object.rotation.z = buffers.angles[index]
        }
    } else {
        // console.warn('no match?')
    }
}