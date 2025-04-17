describe("visita-auth", () => {
  beforeEach(() => {
    cy.visit("https://devmci.ingeaa.com.mx");
    cy.wait(3000); 
    
  });

  it("visita e iniciar sesion con usuario y contraseña", () => {
    cy.get('input[placeholder="Usuario"]').type("practicante");
    cy.get('input[placeholder="Contraseña"]').type("pr4ct!c4nt3");
    cy.wait(2000);
    cy.get('button[type="submit"]').click({ force: true });

    cy.get("nav.sidebar-nav").within(() => {
      cy.get('a[href="#/visitas/panel"]').click();
    });

    cy.get("#btn_capturista", { timeout: 10000 }).should("exist").click();
    cy.wait(3000);

    cy.get("#rfcSel", { timeout: 10000 })
      .should("be.visible")
      .select("Practicantes");
    cy.wait(2000);
    cy.get("#areaSel").should("be.visible").select("AreaConPreAutorizador");
    cy.get("#tipoVisita", { timeout: 10000 })
      .should("exist")
      .select("Visita general")
      .then(() => {
        cy.get("#tipoVisita", { timeout: 10000 })
          .find('option[value="general"]')
          .click({ force: true });
      });
    /*   cy.get("#tipoVisita", { timeout: 10000 })
  .should("be.visible")
  .click() 
  .then(() => {
    
    cy.get('#tipoVisita option[value="general"]')
      .click({ force: true });
  }); */


    cy.wait(2000);
    cy.get("#noIdV", { timeout: 10000 }).should("be.visible").type("146534");
    cy.wait(2000);
    cy.get("#Buscar").should('exist').click({force: true});
    cy.wait(5000);
    cy.get("#tipoId", { timeout: 15000 }).should("be.visible").select("INE");
    cy.wait(1000)

    cy.get("#nameV", { timeout: 10000 }).type("Guadalupe");
    cy.get("#aPatV").type("Kent");
    cy.get("#aMatV").type("Ochoa");
    cy.get("#emailV").type("practicanteKent@gmail.com");
    cy.get("#motivoV").type("Visita con preAuto");
    cy.get("#telV").type("5512345678");
    cy.wait(4000);
    cy.get("#fotoIdV > div > span > svg").find("g").click();
    cy.get(".d-flex.justify-content-around.mb-2", { timeout: 10000 })
      .first()
      .within(() => {
        cy.get("select", { timeout: 10000 }).select("fake_device_0");
        cy.wait(2000);
        cy.get(".text-center.mt2",{ timeout: 10000 }).within(() => {
          cy.get('svg[aria-label="camera"]').click({force:true})

        })

        cy.wait(2000);
        cy.contains("title", "Guardar", { timeout: 10000 })
          .parent()
          .find("g")
          .click({ force: true });
        cy.get("select", { timeout: 10000 }).select("fake_device_0");
        cy.wait(2000);
        cy.get("svg", { timeout: 10000 }).click();
        cy.wait(2000);
        cy.contains("title", "Guardar", { timeout: 10000 })
          .parent()
          .find("g")
          .click({ force: true });
      });
    cy.get("#fotoV > div > span > svg").find("g").click();
    cy.contains("div", "Camaras disponibles", { timeout: 10000 })
      .should("be.visible")
      .parents('div[role="group"]')
      .within(() => {
        cy.get("select", { timeout: 10000 }).select("fake_device_0");
        cy.wait(2000);
        cy.get("svg", { timeout: 10000 }).click();
        cy.wait(2000);
        cy.contains("title", "Guardar", { timeout: 10000 })
          .parent()
          .find("g")
          .click({ force: true });
      });
    cy.wait(2000);

    cy.get("#marcaVehV").type("Ford");
    cy.wait(1000);
    cy.get("#modVehV").type("Eco Sport");

    cy.wait(1000);
    cy.get("#placaVehV").type("45NM8");
    cy.wait(1000);
    cy.get("#emailEmpV").type("votiw94110@cctoolz.com");
    cy.get("#btn_validar_mail", { timeout: 4000 }).should("be.visible").click();
    cy.wait(1000);
    cy.get("#btn_save_new_visitor", { timeout: 5000 })
      .should("be.visible")
      .click();
  });
});
