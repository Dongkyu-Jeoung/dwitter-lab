const users = [
        {"id": "test", "pwd": "1234"},
        {"id": "hong", "pwd": "1111"},
        {"id": "test1234", "pwd": "test1234"}
    ];

export const getusers = () => {
    const users = [
        {"id": "test", "pwd": "1234"},
        {"id": "hong", "pwd": "1111"},
        {"id": "test1234", "pwd": "test1234"}
    ];

    return users;
}

export const login = (id, pwd) => {
    const users = getusers();
    return users.some( user => user.id === id && user.pwd === pwd);
}