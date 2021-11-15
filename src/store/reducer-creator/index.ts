export interface Action<Payload> {
    type: string;
    payload: Payload;
}

export interface State<W> {
    data: W;
    isLoading: boolean;
    isError: W | boolean;
}

export const createReducer = <Payload>(name: string, data: Payload) => {
    return (
        state = { data, isLoading: false, isError: false },
        { type, payload }: Action<Payload>
    ): State<Payload> => {
        switch (type) {
            case `FETCH_${name}_REQUEST`:
                return { data, isLoading: true, isError: false };
            case `FETCH_${name}_SUCCESS`:
                return { data: payload, isLoading: false, isError: false };
            case `FETCH_${name}_FAILURE`:
                return { data, isLoading: false, isError: payload };
            default:
                return state;
        }
    };
};
