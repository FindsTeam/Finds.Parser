/* eslint-disable no-undef */
module.exports = {
    browserOptions: {
        args : [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-gpu"
        ],
        devtools: false,
        headless: true,
        timeout: 60000
    },
    dateFormat: "DD.MM.YY, HH:mm",
};
