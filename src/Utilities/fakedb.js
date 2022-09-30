// use local storage to manage activity data
const addToDb = time => {
    let activity = {};

    //get the activity data from local storage
    const storedInfo = localStorage.getItem('activity-info');
    if (storedInfo) {
        activity = JSON.parse(storedInfo);
    }

    // add quantity
    const quantity = activity[time];
    if (quantity) {
        const newQuantity = quantity + 1;
        activity[time] = newQuantity;
    }
    else {
        activity[time] = 1;
    }
    localStorage.setItem('activity-info', JSON.stringify(activity));
}


export {
    addToDb,
}