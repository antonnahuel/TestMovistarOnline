import homePage from '../pages/homePage.cy';
import productPage from '../pages/productPage.cy';

describe('Test 3', () => {

    beforeEach(()=>{
        cy.visit('https://tiendaonline.movistar.com.ar/');
    });

    it('Check that there are no 60 installments',()=> {
        homePage.selectProductIndex(2);
        productPage.searchInstallment('Credicoop', 'Visa');
        cy.get('#installmentsTable').should('not.contain', '60 cuotas');

        //Tenia mismo error que Test1
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        })

    });

})