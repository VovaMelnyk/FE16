const moment = require('moment');

const showTodayDate = () => moment().format("DD/MM/YYYY");

module.exports = {
    showTodayDate,
}