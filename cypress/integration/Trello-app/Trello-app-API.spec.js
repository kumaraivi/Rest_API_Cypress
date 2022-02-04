///<reference types="cypress"/>

describe('API  Testing - Trello Applications', () => {
    //var baseUrl = 'http://localhost:3000'
    beforeEach(() => {
        // cy.request({
        //     method: 'POST',
        //     url: '/api/reset'
        // })
    })
   it('Create a new Board',()=>{
       cy.visit('/')
       cy.request({
           method:'POST',
           url:'/api/boards',
           body:{
               'name':'Create Cypress Samples'
           }
       })
   })

   it.skip('Update Board Name',()=>{
    cy.visit('/')
    cy.request({
        method:'PUT',
        url:'/api/boards/81580969213',
        body:{
            'name':'Updated My Board Name'
        }
    })
   })

   it.skip('Delete Board Name',()=>{
    cy.visit('/')
    cy.request({
        method:'DELETE',
        url:'/api/boards/30217694053',
     })
   })



})