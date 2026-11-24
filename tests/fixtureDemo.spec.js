const{test, expect, request} = require('@playwright/test');
require("../")

customtest('Fixtures demo', async({authenticatedPage}) => {

    authenticatedPage.goto()


})