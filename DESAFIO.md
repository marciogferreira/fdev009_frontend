
---

# 🚀 Desafio: API com Express, Sequelize, MVC e ES Modules

Este desafio ensina como criar uma API backend com **Node.js**, **Express.js**, **Sequelize**, utilizando **ES Modules** e o padrão **MVC**, com o modelo `UsuarioModel` e o controlador `UsuarioController`.

---

## ✅ Requisitos

* Node.js 14+
* MySQL (ou PostgreSQL, com pequenas adaptações)
* NPM ou Yarn

---

## 📦 1. Inicializar o Projeto

```bash
mkdir minha-api
cd minha-api
npm init -y
```

Edite o `package.json` para usar ES Modules:

```json
{
  "type": "module",
  ...
}
```

---

## 📁 2. Instalar Dependências

```bash
npm install express sequelize mysql2 dotenv
npm install --save-dev nodemon
```

---

## 🌲 3. Estrutura de Pastas

```
minha-api/
│
├── config/
│   └── database.js
│
├── controllers/
│   └── UsuarioController.js
│
├── models/
│   └── UsuarioModel.js
│
├── routes/
│   └── usuarioRoutes.js
│
├── .env
├── app.js
├── package.json
```

---

## ⚙️ 4. Configuração do Banco (`.env`)

Crie o arquivo `.env`:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=meubanco
DB_DIALECT=mysql
DB_PORT=3306
```

---

## 🧠 5. Conectar Sequelize (`config/database.js`)

```js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: false,
  }
);

export default sequelize;
```

---

## 🧱 6. Criar Modelo (`models/UsuarioModel.js`)

```js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const UsuarioModel = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'usuarios',
  timestamps: true,
});

export default UsuarioModel;
```

---

## 🧠 7. Controlador (`controllers/UsuarioController.js`)

```js
import UsuarioModel from '../models/UsuarioModel.js';

const UsuarioController = {
  async index(req, res) {
    try {
      const usuarios = await UsuarioModel.findAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  },

  async store(req, res) {
    try {
      const { nome, email } = req.body;
      const usuario = await UsuarioModel.create({ nome, email });
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao criar usuário' });
    }
  }
};

export default UsuarioController;
```

---

## 🌐 8. Rotas (`routes/usuarioRoutes.js`)

```js
import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController.js';

const router = Router();

router.get('/usuarios', UsuarioController.index);
router.post('/usuarios', UsuarioController.store);

export default router;
```

---

## 🚀 9. App Principal (`app.js`)

```js
import express from 'express';
import dotenv from 'dotenv';
import usuarioRoutes from './routes/usuarioRoutes.js';
import sequelize from './config/database.js';
import UsuarioModel from './models/UsuarioModel.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', usuarioRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Banco sincronizado');
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error('Erro ao conectar com banco:', err);
});
```

---

## 🧪 10. Testando

Use **Postman** ou **Insomnia**:

* `GET /api/usuarios` → lista usuários
* `POST /api/usuarios` → cria usuário `{ "nome": "João", "email": "joao@email.com" }`

---

## 📌 Conclusão

Você agora tem:

* Uma API REST com Express
* Banco conectado com Sequelize
* Modelo separado (`UsuarioModel`)
* Controlador estruturado (`UsuarioController`)
* Padrão MVC usando ES Modules

---

