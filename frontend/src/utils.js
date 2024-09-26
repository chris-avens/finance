

export const round = (num, digits) => {
    const mult = Math.pow(10, digits);
    return Math.round(mult * num) / mult;
};

export async function getIndexYahoo(index) {
    const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v8/finance/chart/${index}`,
    );

    if(response.ok) {
        const data = await response.json();
        console.log(data.chart.result[0]);
        // console.log({...data.chart.result[0].indicators.quote[0], timestamp: data.chart.result[0].timestamp});
        // console.log(Object.fromEntries(
        //     Object.entries(data.chart.result[0].indicators.quote[0])
        //         .map(([key, arr]) => [key, arr.at(-1)])
        // ));
        return {
            ...data.chart.result[0].meta,
            ...Object.fromEntries(
                Object.entries(data.chart.result[0].indicators.quote[0])
                    .map(([key, arr]) => [key, arr.at(-1)])
            ),
            timestamp: data.chart.result[0].timestamp.at(-1)
        };
    } else {
        throw new Error('Request failed');
    }
}