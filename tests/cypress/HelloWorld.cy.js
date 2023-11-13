import { mount } from '@cypress/vue';
import HelloWorld from '@/components/HelloWorld.vue';

describe('Return Information Component', () => {

  it('renders correctly', () => {

        mount(HelloWorld, {
          props: {}
        });
        
        cy.get('h1').should('have.text', 'API Data Fetcher')
    
  })

  it('intercepts POST with relative path', () => {

        let postResponse;
        cy.fixture('postResponse.json').then(data => {
            postResponse = data;
        });

        cy.intercept({method: 'POST', path: '*'}, req => {
            req.reply({
                statusCode: 200,
                body: postResponse
            });
        }).as('postDataRequest');

        mount(HelloWorld, {});
        
        cy.get('[data-testid="post-response"]').should('contain', '"id": 102')
    
  }) 

  it('intercepts GET with relative path', () => {

        let getResponse;
        cy.fixture('getResponse.json').then(data => {
            getResponse = data;
        });

        cy.intercept({method: 'GET', path: '*'}, req => {
            req.reply({
                statusCode: 200,
                body: getResponse
            });
        }).as('getDataRequest');


        mount(HelloWorld, {});
        
        cy.get('[data-testid="get-response"]').should('contain', '"userId": 2')
    
  }) 

})
