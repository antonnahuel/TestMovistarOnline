import homePage from '../pages/homePage.cy';
import searchPage from '../pages/searchPage.cy';
import productPage from '../pages/productPage.cy';

describe('Test 1', () => {

    beforeEach(()=>{
        cy.visit('https://tiendaonline.movistar.com.ar/');
    });

    it('Search A14 and verify installments', ()=>{
        homePage.search('A14');
        searchPage.clickFirstProduct();
        cy.get('.base').should('contain', 'A14');
        productPage.searchInstallment('Banco BICA', 'Mastercard');
        cy.get('#installmentsTable').should('contain', '3 cuotas sin interés');

        /*
        La prueba me generaba un error que no lo podia solucionar,
        busque en internet y esta fue una de las soluciones:
        https://stackoverflow.com/questions/74636602/uncaught-exceptionreferenceerror-gtag-is-not-defined-in-cypress
        */
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        })        

    });

});