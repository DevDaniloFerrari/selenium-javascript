require('chromedriver');
const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');

describe('Testar Business como Admin', function() {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Logar', async function() {
        await driver.get('http://localhost:3000/login');
        await driver.findElement(By.id('email')).sendKeys('admin@email.com');
        await driver.findElement(By.id('password')).sendKeys('123123');
        await driver.findElement(By.id('login-button')).click();
        await driver.wait(until.elementLocated(By.id('organization-screen')), 2000);
    });

    // it('Adicionar Organização', async function() {
    //     await driver.findElement(By.id('add-organization-button')).click();
    //     await driver.findElement(By.id('nome')).sendKeys('orgteste2');
    //     await driver.findElement(By.id('email')).sendKeys('orgteste2@email.com');
    //     await driver.findElement(By.id('endereco')).sendKeys('rua teste');
    //     await driver.findElement(By.id('incluir')).click();

    //     await driver.wait(until.elementLocated(By.id('organization-screen')), 2000);
    // });

    it('Verificar Vacinas', async function() {
        await driver.get('http://localhost:3000/vaccines');
        await driver.wait(until.elementLocated(By.id('vaccines-screen')), 2000);
    });

    // it('Adicionar Usuário', async function() {
    //     await driver.get('http://localhost:3000/users');
    //     await driver.findElement(By.id('add-user-button')).click();
    //     await driver.findElement(By.id('tipo')).sendKeys('Administrativo');
    //     await driver.sleep(1000);
    //     await driver.findElement(By.id('email')).sendKeys('userteste2@email.com');
    //     await driver.findElement(By.id('continuar')).click();
    //     await driver.wait(until.elementLocated(By.id('users-screen')), 2000);
    // });

    it('Verificar Funcionalidades', async function() {
        await driver.get('http://localhost:3000/features');
        await driver.wait(until.elementLocated(By.id('features-screen')), 2000);
    });

    it('Verificar FAQ', async function() {
        await driver.get('http://localhost:3000/frequent-questions');
        await driver.wait(until.elementLocated(By.id('faq-screen')), 2000);
    });

    it('Deslogar', async function() {
        await driver.findElement(By.id('logout-button')).click();
        await driver.wait(until.elementLocated(By.id('login-screen')), 2000);
    });

    after(() => driver && driver.quit());
})