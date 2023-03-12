Feature('login');

Scenario('cadastro com sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Cadastro')
    I.waitForText('Cadastro de usuário', 10)
    I.fillField('#user', 'Erick');
    I.fillField('#email', 'erick_teste@gmail.com');
    I.fillField('#password', 'testeteste');
    I.click('Cadastrar'),
    I.waitForText('Cadastro realizado!', 1)
}).tag('@cadastrocomsucesso');

Scenario('login com sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user', 'teste@gmail.com');
    I.fillField('#password', 'testeteste');
    I.click('#btnLogin')
    I.waitForText('Login realizado',10)
}).tag('@Sucesso')

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'teste@gmail.com');
    I.waitForText('Login', 3)
    I.click('login')
    I.waitForText('Senha inválida.', 1)
}).tag('@logarapenascomemail');


Scenario('Tentando logar sem digitar apenas a senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 3)
    I.fillField('#password', 'teste');
    I.waitForText('Login', 3)
    I.click('login')
    I.waitForText('E-mail inválido.', 1)
}).tag('@logarsemdados');

Scenario('Tentando Logar sem digitar e-mail e sennha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 3)
    I.click('login')
    I.waitForText('E-mail inválido.', 1)
}).tag('@logarseme-mailesenha');