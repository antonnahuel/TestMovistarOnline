class servicesPage{

    constructor(){ 
        this.internetButton = ':nth-child(2) > .f9fmg4o';
        this.nextButton = '.f1mibvjw';
        this.DNIButton = ':nth-child(1) > .fcaipju';
        this.nextButtonDNI = '.f1mibvjw';
        this.emailInput = '#nemail';
        this.passInput = '#npass';
        this.loginButton = '#btn-enviar';
    }

    loginInternetDDNI = (user, pass) => {
        cy.get(this.internetButton).click();
        cy.get(this.nextButton).click();
        cy.get(this.DNIButton).click();
        cy.get(this.nextButtonDNI).click();
        cy.get(this.emailInput).type(user);
        cy.get(this.passInput).type(pass);
        cy.get(this.loginButton).click();
    }

}

export default new servicesPage