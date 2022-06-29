//Importación para acceder a los métodos
import LoginPage from"../../PageObject/LoginPage"


describe("Cypress POM Test Suite", function () {
 
    before(function () {
        //Con esto me traigo los datos de usuario y clave que tengo en el Json
        cy.fixture('credentials').then(function (testdata) {
            this.testdata = testdata
        })
    })
    it("Login with valid credentials", function () {
        const login = new LoginPage();
        login.navigate();
        login.enterUser(this.testdata.username)
        login.enterPassword(this.testdata.password)
        login.BtnLogin();
        //Assert 1: La 2da opción del menú debe cambiar a “Admin”
        login.elements.menu().invoke('text').then((text) => {
            expect(text).to.equal('Admin')
        })
         //Assert 2: El titulo de la pagina debe ser “Admin View”
        login.elements.title().invoke('text').then((text) => {
            expect(text).to.equal('Admin View')
        })
        //Assert 3: no debe aparecer el botón de Login
        login.elements.loginBtn().should('not.exist')
        //Assert 4. El botón de logout debe tener una propiedad onclick que dispara el logout.
        login.elements.logOut().should('have.attr', 'onClick')
        //Assert 5. La nueva opción debe aparecer en la lista. Posicionada de primero. Validar el nombre
        login.list()
        login.newList(this.testdata.lista +'{enter}')
        login.elements.detalleList().contains('Lista-Nueva')
        //Assert 6. Valide que el titulo de la pagina sea: TODOs: <<suLista>>
        login.elements.clickList().click()
        login.elements.titleList().should('have.to.text', 'TODOs : Lista Nueva')
        //Assert 1: La 2da opción del menú debe cambiar a “Admin Login”
        login.BtnLogout()
        login.elements.menu().contains('Admin Login')

    });
});