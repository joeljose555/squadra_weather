export async function getTimestamps(startDate, endDate) {
    const timestamps = [];
    let currentDate = new Date(startDate);
    endDate = new Date(endDate)
    while (currentDate <= endDate) {
        timestamps.push(Math.floor(currentDate.getTime() / 1000));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return timestamps;
}