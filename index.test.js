const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  test("Test 1", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ id: 1, name: "John Doe" }]);
        done();
      });
  });
});

describe("POST /:param", () => {
  test("Test 1/2", (done) => {
    request(app)
      .post("/1")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ error: false, num: "1" }]);
        done();
      });
  });
});

describe("POST /s1/exercice1", () => {
  test('Vérification de n1 undefined', async () => {
    const res = await request(app)
      .post('/s1/exercice1')
      .send({ n1: undefined, n2: 5 }); 

    expect(res.status).toBe(200); 
    expect(res.body).toEqual([{ reponse: 'Le nombre est invalide' }]);
  });
  test('Vérification de n2 undefined', async () => {
    const res = await request(app)
      .post('/s1/exercice1')
      .send({ n1: 5, n2: undefined }); 

    expect(res.status).toBe(200); 
    expect(res.body).toEqual([{ reponse: 'Le nombre est invalide' }]);
  });
  test('Vérification si n1 et n2 undefined', async () => {
    const res = await request(app)
      .post('/s1/exercice1')
      .send({ n1: undefined, n2: undefined }); 

    expect(res.status).toBe(200); 
    expect(res.body).toEqual([{ reponse: 'Le nombre est invalide' }]);
  });
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: null, n2: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: 5, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("Calcule correctement la somme de n1 et n2", async () => {
    const res = await request(app).post("/s1/exercice1").send({ n1: 5, n2: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 10 }]);
  });
});

describe("POST /s1/exercice2", () => {
  test('Vérification de n1 undefined', async () => {
    const res = await request(app)
      .post('/s1/exercice2')
      .send({ n1: undefined, n2: 2 }); 

    expect(res.status).toBe(200); 
    expect(res.body).toEqual([{ reponse: 'Le nombre est invalide' }]);
  });
  test('Vérification de n2 undefined', async () => {
    const res = await request(app)
      .post('/s1/exercice2')
      .send({ n1: 5, n2: undefined }); 

    expect(res.status).toBe(200); 
    expect(res.body).toEqual([{ reponse: 'Le nombre est invalide' }]);
  });
  test('Vérification si n1 et n2 undefined', async () => {
    const res = await request(app)
      .post('/s1/exercice2')
      .send({ n1: undefined, n2: undefined }); 

    expect(res.status).toBe(200); 
    expect(res.body).toEqual([{ reponse: 'Le nombre est invalide' }]);
  });
 

  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: 5, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });
  test("Calcule correctement la soustraction de n1 et n2", async () => {
    const res = await request(app).post("/s1/exercice2").send({ n1: 5, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 3}]);
  });
});

describe("POST /s1/exercice3", () => {
  test("Vérifie que n1 et n2 sont des nombres", async () => {
    const res = await request(app).post("/s1/exercice3").send({ n1: "abc", n2: "def" }); // Envoyer des chaînes au lieu de nombres
  
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: null, n2: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: 5, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });
  test("Calcule correctement la multiplication de n1 et n2", async () => {
    const res = await request(app).post("/s1/exercice3").send({ n1: 5, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 10 }]);
  });
});

describe("POST /s1/exercice4", () => {
 

  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: 6, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("Renvoie une erreur si n1 et  n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("Calcule correctement la division de n1 et n2", async () => {
    const res = await request(app).post("/s1/exercice4").send({ n1: 6, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 3}]);
  });
});

describe("POST /s1/exercice5", () => {

  test('Vérification si n1  undefined', async () => {
    const res = await request(app)
      .post('/s1/exercice5')
      .send({ n1: undefined }); 

    expect(res.status).toBe(200); 
    expect(res.body).toEqual([{ reponse: 'Le nombre est invalide' }]);
  });
  
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice5").send({ n1: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });
  test('Factorielle de 0 retourne 1', async() => {
    const res = await request(app).post("/s1/exercice5").send({ n1: 0 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 1}]);  
  });
  test('Factorielle de 1 retourne 1', async() => {
    const res = await request(app).post("/s1/exercice5").send({ n1: 1 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 1}]);  
  });
  
  test("Factorielle de n1", async () => {
    const res = await request(app).post("/s1/exercice5").send({ n1: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 120 }]);
  });
});

describe("POST /s1/exercice6", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("n1 est un nombre impair ou pair", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: 9 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "impair" }]);
  });

  test("n1 est un nombre impair ou pair", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: 8 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "pair" }]);
  });
});

describe("POST /s1/exercice7", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice7").send({ n1: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("celsius est correct", async () => {
    const res = await request(app).post("/s1/exercice7").send({ n1: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 41 }]);
  });
});

describe("POST /s1/exercice8", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice8").send({ n1: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });
  test("Renvoie une erreur si n1 est undefined", async () => {
    const res = await request(app).post("/s1/exercice8").send({ n1: undefined });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("calcul aire d'un cercle", async () => {
    const res = await request(app).post("/s1/exercice8").send({ n1: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 78.53981633974483 }]);
  });
});

describe("POST /s1/exercice9", () => {
  test("est un palindrome", async () => {
    const res = await request(app).post("/s1/exercice9").send({ n1: "kayak" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: true }]);
  });
  
});

describe("POST /s1/exercice10", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });
  test("Renvoie une erreur si n1 est undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: undefined, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });
  test("Renvoie une erreur si n1 est undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: 1, n2:undefined });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });
  test("Renvoie une erreur si n1 et n2 est undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: undefined, n2:undefined });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Le nombre est invalide" }]);
  });

  test("plus grand commun diviseur de n1 et n2", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: 6, n2: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 3 }]);
  });
});


//S2


describe("POST /s2/exercice1", () => {
  test("doit renvoyer la date d'aujourd'hui moins 10 ans", async () => {
    const dateAuj = new Date();
    const année = dateAuj.getFullYear() - 10;
    const mois = ("0" + (dateAuj.getMonth() + 1)).slice(-2);
    const jour = ("0" + dateAuj.getDate()).slice(-2);
    const dateAttendue = `${année}-${mois}-${jour}`;

    const res = await request(app).post("/s2/exercice1").expect(200);

    expect(res.body[0].reponse).toBe(dateAttendue);
  });
});

describe('POST /s2/exercice2', () => {
  test('Renvoie le premier jour du mois pour une date valide', async () => {
    const date = '2000-01-03'; // Date valide (format AAAA-MM-JJ)
    const res = await request(app)
      .post('/s2/exercice2')
      .send({ date });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('le premier jour ');
    
  });

  test('Gère correctement une date invalide', async () => {
    const date = 'date invalide'; // Date invalide
    const res = await request(app)
      .post('/s2/exercice2')
      .send({ date });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('Veuillez entrer une date valide.');
  });
});


describe("POST /s2/exercice3", () => {
  test("calcule de jours entre deux dates", async () => {
    const date1 = new Date("2023-01-01");
    const date2 = new Date("2023-01-10");

    const expectedDifference = (date2 - date1) / (1000 * 60 * 60 * 24);

    const res = await request(app)
      .post("/s2/exercice3")
      .send({ date1: date1.toISOString(), date2: date2.toISOString() });

    expect(res.statusCode).toBe(200);
    expect(res.body[0].reponse).toBe(expectedDifference);
  });

  test("dates invalides", async () => {
    const invalidDate1 = "not-a-date";
    const date2 = new Date("2023-01-10");

    const res = await request(app)
      .post("/s2/exercice3")
      .send({ date1: invalidDate1, date2: date2.toISOString() });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Veuillez entrer des dates valides.");
  });
  test("dates invalides", async () => {
    const date1 = new Date("2023-01-10");

    const invalidDate2 = "not-a-date";

    const res = await request(app)
      .post("/s2/exercice3")
      .send({ date1:date1.toISOString() , date2:invalidDate2});

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Veuillez entrer des dates valides.");
  });

});

describe("POST /s2/exercice4", () => {
  test("ajoute des jours a une date", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = 10;
    const expectedDate = new Date("2023-01-11").toISOString();

    const res = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(res.statusCode).toBe(200);
    expect(res.body.reponse).toBe(expectedDate);
  });

  test("erreur si la date et le jours sont invalide", async () => {
    const invalidDate = "not-a-date";
    const jours = "not-a-number";

    const res = await request(app)
      .post("/s2/exercice4")
      .send({ date: invalidDate, jours });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Données invalides.");
  });
  test("erreur si la date est invalide", async () => {
    const invalidDate = "not-a-date";
    const jours = "10";
    const res = await request(app)
      .post("/s2/exercice4")
      .send({ date: invalidDate, jours });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Données invalides.");
  });
  test("erreur si le jour est invalide", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = "not-a-number";
    const res = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Données invalides.");
  });
  test("Retourne  une erreur si la date est null", async () => {
    const date = null ;
    const jours = "10";


    const res = await request(app)
      .post("/s2/exercice4")
      .send({ date:null, jours });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Données invalides.");
  });
  test("Retourne  une erreur si la date et le jours sont  null ", async () => {
    const date = null ;
    const jours = null;


    const res = await request(app)
      .post("/s2/exercice4")
      .send({ date:null, jours:null });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Données invalides.");
  });
  test("Retourne  une erreur si le jours est  null ", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = null;


    const res = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours:null });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Données invalides.");
  });
});


describe("POST /s2/exercice5", () => {
  test("Retourne true pour une année bissextile", async () => {
    const annee = 2024; 

    const res = await request(app).post("/s2/exercice5").send({ annee });

    expect(res.statusCode).toBe(200);
    expect(res.body.reponse).toBe(true);
  });

  test("Retourne  false pour une année non bissextile", async () => {
    const annee = 2023; 

    const res = await request(app).post("/s2/exercice5").send({ annee });

    expect(res.statusCode).toBe(200);
    expect(res.body.reponse).toBe(false);
  });

  test("Retourne une erreur si l'année est invalide", async () => {
    const annee = "mille neuf cent "; // Une chaîne de caractères au lieu d'un nombre

    const res = await request(app).post("/s2/exercice5").send({ annee });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Données invalides.");
  });
  test("Retourne  une erreur si l'année est nulle ", async () => {
    const annee = null ; 

    const res = await request(app).post("/s2/exercice5").send({ annee });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Données invalides.");
  });
  test("Retourne  une erreur si l'année est undefined ", async () => {
    const annee = undefined ; 

    const res = await request(app).post("/s2/exercice5").send({ annee });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Données invalides.");
  });

});

describe("POST /s2/exercice6", () => {
  test("Retourne le premier jour du mois pour une date donnée", async () => {
    const res = await request(app)
      .post("/s2/exercice6")
      .send({ date: "2023-11-30" }); // Utilisez une date en format ISO-8601

    expect(res.statusCode).toBe(200);
    expect(res.body.reponse).toBe("2023-11-01");
  });

  test(" Retourne une erreur pour une date invalide", async () => {
    const res = await request(app)
      .post("/s2/exercice6")
      .send({ date: "format invallide" });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Veuillez fournir une date valide.");
  });
  test("Retourne une erreur pour une date null", async () => {
    const res = await request(app)
      .post("/s2/exercice6")
      .send({ date: null });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Veuillez fournir une date valide.");
  });
  test("Retourne une erreur pour une date undefined", async () => {
    const res = await request(app)
      .post("/s2/exercice6")
      .send({ date: undefined });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Veuillez fournir une date valide.");
  });
});

describe("POST /s2/exercice7", () => {
  test("Retourne le dernier jour du mois pour une date donnée", async () => {
    const date = new Date(Date.UTC(2023, 10, 15)); // 15 novembre 2023
    const res = await request(app)
      .post("/s2/exercice7")
      .send({ date: date.toISOString().split("T")[0] });

    expect(res.statusCode).toBe(200);
    expect(res.body.reponse).toBe("2023-11-30");
  });

  test("Retourne une erreur pour une date invalide", async () => {
    const res = await request(app)
      .post("/s2/exercice7")
      .send({ date: "une date invalide" });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Veuillez fournir une date valide.");
  });
  test("Retourne une erreur pour une date null", async () => {
    const res = await request(app)
      .post("/s2/exercice7")
      .send({ date: null });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Veuillez fournir une date valide.");
  });
  test("Retourne une erreur pour une date undefined", async () => {
    const res = await request(app)
      .post("/s2/exercice7")
      .send({ date: undefined });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Veuillez fournir une date valide.");
  });
});

describe("POST /s2/exercice8", () => {
  test('devrait retourner une durée formatée en "hh:mm"', async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ heures: 9, minutes: 5 });

    expect(res.statusCode).toBe(200);
    expect(res.body.reponse).toBe("09:05");
  });

  test("devrait retourner une erreur si les heures ou les minutes ne sont pas des nombres", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ heures: "neuf", minutes: "cinq" });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe(
      "Veuillez fournir des nombres valides pour les heures et les minutes."
    );
  });
});




describe("POST /s2/exercice9", () => {
  test("Les plages se chevauchent", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut1: "2023-01-01",
      fin1: "2023-01-10",
      debut2: "2023-01-05",
      fin2: "2023-01-15",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.reponse).toBeTruthy();
  });

  test("devrait retourner false si les plages de dates ne se chevauchent pas", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut1: "2023-01-01",
      fin1: "2023-01-10",
      debut2: "2023-01-11",
      fin2: "2023-01-20",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.reponse).toBeFalsy();
  });

  test("devrait retourner une erreur pour des dates invalides", async () => {
    const res = await request(app).post("/s2/exercice9").send({
      debut1: "date invalide",
      fin1: "2023-01-10",
      debut2: "2023-01-11",
      fin2: "2023-01-20",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.reponse).toBe("Veuillez entrer des dates valides.");
  });
});

describe("POST /s2/exercice10", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s2/exercice10")
      .send({ n1: null});
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de naissance." }]);
  });

  test("Renvoie une erreur s'il n'y a pas de n1", async () => {
      const res = await request(app)
        .post("/s2/exercice10")
        .send({ });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de naissance." }]);
  });

  test("Calcule l'âge en fonction de la date de naissance n1", async () => {
    const res = await request(app).post("/s2/exercice10").send({ n1: "2000-12-12"});
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 22 }]);
  });
});

