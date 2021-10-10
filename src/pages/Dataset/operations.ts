function getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
}

export const getDivision = () => {

    return {
        type:"operation",
        operation_name:"division",
        uid: getRandomInt(10000).toString(),
        value: [
            {
                type: null,
                value: null,
                uid: getRandomInt(10000).toString(),
            },
            {
                type: null,
                value: null,
                uid: getRandomInt(10000).toString(),
            }
        ]
    }

}

export const getSum = () => {

    return {
        type:"operation",
        operation_name:"sum",
        uid: getRandomInt(10000).toString(),
        value: [
            {
                type: null,
                value: null,
                uid: getRandomInt(10000).toString(),
            },
            {
                type: null,
                value: null,
                uid: getRandomInt(10000).toString(),
            }
        ]
    }

}

export const getMean = () => {

    return {
        type:"operation",
        operation_name:"mean",
        uid: getRandomInt(10000).toString(),
        value: [
            {
                type: null,
                value: null,
                uid: getRandomInt(10000).toString(),
            },
        ]
    }

}

export const genRowValue = (value: string) => {

    return {
        type:"row_value",
        uid: getRandomInt(10000).toString(),
        value: value
    }

}