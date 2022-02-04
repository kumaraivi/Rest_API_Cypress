///<reference types="cypress"/>

describe('api testing', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/'
    it('api test-1', () => {
        cy.request(baseUrl.concat('users')).as('userResponse')
        cy.get('@userResponse').its('status').should('equals', 200)

    })

    it('api test-2', () => {
        cy.request('GET', 'https://reqres.in/api/users').then((response) => {
            expect(response.body.data[0].first_name).equals('George')
            expect(response.body.data).to.have.length(6)
            cy.log(response.body.data)
        })

    })

    it('post request api test- create user', () => {
        var userRecord = {
            name: 'Avinash',
            job: 'leader'
        }
        cy.request('POST', 'https://reqres.in/api/users', userRecord).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).equals('Avinash')
        })
        cy.request('POST','https://reqres.in/api/users', userRecord).its('body').should('include',{name:'Avinash'})
    })

    it('api test-3', () => {
        cy.request('https://jsonplaceholder.typicode.com/comments').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    })

    it('update request api test', () => {
        var userRecord = {
            name: "morpheus",
            job: "zion resident"
        }
        cy.request('PUT', 'https://reqres.in/api/users', userRecord).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response)
            expect(response.body.name).equals('morpheus')
        })
        
        cy.request('POST','https://reqres.in/api/users', userRecord).its('body').should('include',{name:'morpheus'})
    })
    it.only('Patch request api test', () => {
        var userRecord = {
            name: "morpheus",
            job: "zion resident"
        }
        cy.request('PATCH', 'https://reqres.in/api/users', userRecord).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response)
            expect(response.body.name).equals('morpheus')
        })
    })
})