import values from 'lodash/values';

export const selectLogs = (state) => {
    return (
        values(state.logs)
    );
};
