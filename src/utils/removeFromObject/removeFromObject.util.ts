export const removeFromObject = <T>(object: T) => {
    for (const key in object) {
        if (object[key] === null || object[key] === undefined || !object[key]) {
            delete object[key];
        }
    }

    return object;
};
