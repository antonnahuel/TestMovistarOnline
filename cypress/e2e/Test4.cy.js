import homePage from '../pages/homePage.cy';
import servicesPage from '../pages/servicesPage.cy';

describe('Test 4', () => {

    beforeEach(()=>{
        cy.viewport(1500, 1000); 
        cy.visit('https://tiendaonline.movistar.com.ar/');
        cy.wait(2000);
    });

    it('Verify user does not exist and URL', ()=>{
        homePage.clickMiMovistarButton();
        servicesPage.loginInternetDDNI('prueba@hotmail.com','asdqwe123');
        cy.get('#loginForm > .form-container').should('contain','Revisá que tus datos sean los correctos.');
        cy.url().should('eq', 'https://idp.movistar.com.ar/convergencia/login_A.html?error=true');
        cy.screenshot();
    });

});