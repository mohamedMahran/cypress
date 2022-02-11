export class adminBar
{
    hoverOnProfileDropDown()
    {
        cy.get('a[class*="admin-dropdown profile"]').trigger('mouseover')
    }
   logOut(){
    cy.get('i.fa.fa-power-off').click({ force: true })
   }
 
}
export const onNavBar = new adminBar()