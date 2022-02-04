///<reference types="cypress"/>

describe('Intercept - API - Trello Applications', () => {

    it('Intercept test',()=>{
        
        cy.intercept({
            method:'GET',
            url:'/api/boards'
        }).as('boards')
        cy.visit('/')
        cy.wait('@boards')
        .its('response.statusCode')
        .should('eq',200)
        cy.get('[data-cy=board-item]').should('have.length',5)
    })

    it('Return  empty list',()=>{
        cy.intercept({
            method:'GET',
            url:'/api/boards'
        },{
            body:[]
        }).as('boards')
        cy.visit('/')
    })

    it.only('Pass Values from fixture',()=>{
        cy.intercept({
            method:'GET',
            url:'/api/boards'
        },{
            fixture:'boards'
        }).as('boards')
        cy.visit('/')
    })

    it('Network Failure',()=>{
        cy.intercept({
            method:'GET',
            url:'/api/boards'
        },{
            forceNetworkError:true
        }).as('boards')
        cy.visit('/')
    })

})