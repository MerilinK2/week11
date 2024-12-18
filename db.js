const { Pool } = require(`pg`);
const itemsPool = new Pool({
    user: `postgres`,
    password: `Kasukas89`,
    host: `localhost`,
    port: `8989`,
    database: `myrecipes`
});

module.exports = itemsPool;
