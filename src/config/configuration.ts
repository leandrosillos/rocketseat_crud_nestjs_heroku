const configuration = {
    mongodb: {
        clustername: process.env.MDB_CLUSTERNAME,
        username: process.env.MDB_USERNAME,
        password: process.env.MDB_PASS
    }
};

export { configuration };