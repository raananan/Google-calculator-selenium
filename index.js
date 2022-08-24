async function start() {


    const Action = require('./Functions.js');

    test = new Action();
    test.OpenBrowser("https://www.google.co.il/search?q=google+calculator");
    test.Displayed("res"); //Here i check if the right page is appears
    test.ActionMethod("//*[text()='5']");
    await sleep(5000); //Added delay for stability
    test.ActionMethod("//*[text()='+']");
    await sleep(5000);
    test.ActionMethod("//*[text()='1']");
    await sleep(1000);
    test.ActionMethod("//*[text()='0']");
    await sleep(1000);
    test.ActionMethod("//*[text()='=']");
    test.CheckResult("cwos"); //Validation of the result
    await sleep(1000);
    test.CheckButonsWithNumbers("//table/tbody/tr/td/div"); //Here i get the number of buttons which contain numbers
    test.CheckTotalButtons("//table/tbody/tr/td/div"); //Here i get the number of all buttons 
    await sleep(1000);
    test.CloseBrowser();
}
start();



function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}