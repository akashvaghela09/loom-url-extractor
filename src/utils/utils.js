export const loadData = (key) => {
    try {
        let data = localStorage.getItem(key)
        data = JSON.parse(data)
        return data;
    } catch (err) {
        return undefined
    }
}

export const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const clearData = () => {
    localStorage.clear();
}

export const printLog = (message) => {
    console.log("Print => ", message);
};

export const waitFor = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};