//clase para ingreso Index
class LoginPage {
    navigate() {
        cy.visit('https://eviltester.github.io/simpletodolist/adminlogin.html')
    }

    //Lista de Elementos
    elements = {

        loginBtn: () => cy.get('#login'),
        title: () => cy.get('h1'),
        menu: () => cy.get('#navadminlogin'),
        logOut: ()=> cy.get('#navadminlogout'),
        list: ()=> cy.get('#navtodolists'),
        detalleList: ()=> cy.get('ul.todo-list-list li'),
        clickList: ()=> cy.get('[data-id="Lista-Nueva"] > .view > a'),
        titleList: () => cy.get('#todostitle')

    }

 
    //Método para ingresar el email
    enterUser(username) {
        cy.get('[name=username]')
            .clear()
            .type(username);
        return this
    }
    //Método para pasarle la clave
    enterPassword(pswd) {
        cy.get('[name=password]')
            .clear()
            .type(pswd)
        return this
    }

        //Método para pasarle la lista a agregar
        newList(lista) {
            cy.get('.new-todo-list')
                .clear()
                .type(lista)
            return this
            
        }

    BtnLogin() {
        cy.get('[type=submit]').click()
    }

    BtnLogout() {
        cy.get('#navadminlogout').click()
    }

    list() {
        this.elements.list().click()
    }


}

//Exportado clase para usar en archivo de especificaciones	
export default LoginPage