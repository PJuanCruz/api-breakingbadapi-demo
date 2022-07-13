module.exports = (date) => {
    // 'MM-DD-YYYY' -> 'YYYY-MM-DD'
    const [MM, DD, YYYY] = date.split('-');
    return `${YYYY}-${MM}-${DD}`;
};
