import homePage from '../pages/homePage.cy';

describe('Test 2', ()=> {

    beforeEach(()=>{
        cy.visit('https://tiendaonline.movistar.com.ar/');
    });
    
    it ('Check filter and count products', ()=> {
        homePage.searchFilter();
        homePage.countWithFilter().then(count => {
            cy.get('.total-products > p').should('contain.text', `Mostrando ${count} equipos`);
        });
    });
    

})