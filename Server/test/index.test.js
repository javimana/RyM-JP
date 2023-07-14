const server = require("../src/server");
const session = require("supertest");
const agent = session(server);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = (await agent.get("/rickandmorty/character/1")).body;
      expect(response).toHaveProperty(
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image"
      );
    });

    it("Si hay un error responde con status: 404", async () => {
      await agent.get("/rickandmorty/character/1554").expect(404);
    });
  });

  describe("GET /rickandmorty/login",()=>{
    it('Credenciales correctas',async()=>{
      const response=(await agent.get('/rickandmorty/login?email=jpereyra1979@gmail.com&password=abc123')).body;
      expect(response.access).toBeTruthy()
    })
    it('Credenciales incorrectas',async()=>{
      const response=(await agent.get('/rickandmorty/login?email=pepe1979@gmail.com&password=vinagre123')).body;
      expect(response.access).toBeFalsy()

    })

  })

  describe("POST /rickandmorty/fav",()=>{
    const character1= {id:1,name:"Ana"}
    const character2= {id:2,name:"Samuel"}
    it('Devuelve el elemento enviado por "body"',async()=>{
      const response=(await agent.post('/rickandmorty/fav').send(character1)).body;
      expect(response).toContainEqual(character1)
    })
    
    it('Devuelve los elementos previos y el actual', async()=>{
      const response=(await agent.post('/rickandmorty/fav').send(character2)).body;
      expect(response).toContainEqual(character1)
      expect(response).toContainEqual(character2)
    })
  })
  
  describe("DELETE /rickandmorty/fav/:id",()=>{
    const character1= {id:1,name:"Ana"}
    const character2= {id:2,name:"Samuel"}
    
    it('Devuelve todo el arreglo cuando no hay personaje con ese ID',async()=>{
      const character1= {id:1,name:"Ana"}
      const response=(await agent.delete('/rickandmorty/fav/32')).body;
      expect(response).toContainEqual(character1)
      expect(response).toContainEqual(character2)
  })

  it('Devuelve todo el arreglo sin el personaje eliminado',async()=>{
    const response=(await agent.delete('/rickandmorty/fav/1')).body;
    console.log(response);
     expect(response).not.toContainEqual(character1)
  })

})

});
