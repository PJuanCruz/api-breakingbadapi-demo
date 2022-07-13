module.exports = (date) => {
    if (date === 'Unknown') {
        return null;
    } else {
        // 'MM-DD-YYYY' -> 'YYYY-MM-DD'
        const [MM, DD, YYYY] = date.split('-');
        return `${YYYY}-${MM}-${DD}`;
    }
};
