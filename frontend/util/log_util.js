export const fetchAllLogs = () => {
    return $.ajax({
        method: 'GET',
        url: '/logs',
    });
};

export const createLog = (log) => {
    return $.ajax({
      method: 'POST',
      url: '/logs',
      data: log
    });
  };

export const destroyLog = (logId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/logs/${logId}`,
    });
};