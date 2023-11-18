import express, { json } from 'express';
import cors from 'cors';
import {v4 as uuidv4} from 'uuid';

const app = express()
app.use(cors())
app.use(json())

const cursos = [
  {
    id: uuidv4(),
    nome: "Desenvolvimento Web Full Stack",
    tecnologia: "Node.js",
    logoTecnologia: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
    descricao: "Aprenda a desenvolver aplicativos web completos, do front-end ao back-end utilizando Node.js.",
    preco: 49.99,
    numeroAlunos: 500,
    requisitos: "Conhecimento básico de HTML, CSS e JavaScript.",
    nota: 4.5,
    tempo: "40 horas",
    autor: "Gabriel Santos",
    pais: "Brasil",
    descricaoAula: "Curso abrangente para dominar o desenvolvimento Full Stack com Node.js.",
    idioma: "Português",
    palavrasChave: ["Node.js", "Desenvolvimento Web", "Full Stack"],
    oQueAprendera: [
      "Construção de interfaces responsivas com HTML e CSS",
      "Desenvolvimento de APIs utilizando Node.js e Express",
      "Integração com banco de dados NoSQL (MongoDB)",
      "Construção de interfaces dinâmicas com React.js"
    ],
    tecnologiasUtilizadas: ["Node.js", "Express.js", "MongoDB", "React.js"],
    aulas: [
      {
        nome: "Introdução ao Node.js",
        secoes: [
          { nome: "Instalação e Configuração", tempo: "1 hora" },
          { nome: "Principais Conceitos", tempo: "3 horas" }
        ]
      },
      {
        nome: "Express.js",
        secoes: [
          { nome: "Rotas e Middlewares", tempo: "4 horas" },
          { nome: "Desenvolvimento de APIs", tempo: "8 horas" }
        ]
      },
      {
        nome: "MongoDB",
        secoes: [
          { nome: "Modelagem de Dados", tempo: "5 horas" },
          { nome: "Integração com Node.js", tempo: "7 horas" }
        ]
      },
      {
        nome: "React.js",
        secoes: [
          { nome: "Componentes e Estado", tempo: "6 horas" },
          { nome: "Gerenciamento de Estado", tempo: "10 horas" }
        ]
      }
    ]
  },
  {
    id: uuidv4(),
    nome: "Introdução à Inteligência Artificial",
    tecnologia: "Python",
    logoTecnologia: "https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png",
    descricao: "Explore os conceitos fundamentais da inteligência artificial e suas aplicações práticas utilizando Python.",
    preco: 69.99,
    numeroAlunos: 300,
    requisitos: "Conhecimento básico de programação.",
    nota: 4.2,
    tempo: "35 horas",
    autor: "Ana Oliveira",
    pais: "Portugal",
    descricaoAula: "Curso abrangente para compreender os fundamentos da inteligência artificial com Python.",
    idioma: "Inglês",
    palavrasChave: ["Python", "Inteligência Artificial", "Machine Learning"],
    oQueAprendera: [
      "Fundamentos de IA e seu histórico",
      "Aprendizado de Máquina com Python",
      "Visão Computacional e processamento de imagens",
      "Projeto Prático em IA com Python"
    ],
    tecnologiasUtilizadas: ["Python", "Scikit-Learn"],
    aulas: [
      {
        nome: "Fundamentos de IA",
        secoes: [
          { nome: "Definição e História", tempo: "2 horas" },
          { nome: "Aplicações Práticas", tempo: "3 horas" }
        ]
      },
      {
        nome: "Aprendizado de Máquina com Python",
        secoes: [
          { nome: "Algoritmos de Machine Learning", tempo: "6 horas" },
          { nome: "Práticas de Implementação", tempo: "6 horas" }
        ]
      },
      {
        nome: "Visão Computacional",
        secoes: [
          { nome: "Processamento de Imagens", tempo: "5 horas" },
          { nome: "Reconhecimento de Padrões", tempo: "5 horas" }
        ]
      },
      {
        nome: "Projeto Prático em IA com Python",
        secoes: [
          { nome: "Desenvolvimento de Projeto", tempo: "4 horas" },
          { nome: "Apresentação e Discussão", tempo: "4 horas" }
        ]
      }
    ]
  },
  {
    id: uuidv4(),
    nome: "Segurança da Informação",
    tecnologia: "Cybersecurity",
    logoTecnologia: "https://image.shutterstock.com/image-photo/image-260nw-1198762213.jpg", 
    descricao: "Entenda os princípios de segurança da informação e proteja sistemas contra ameaças.",
    preco: 59.99,
    numeroAlunos: 250,
    requisitos: "Conhecimento básico de redes de computadores.",
    nota: 4.8,
    tempo: "30 horas",
    autor: "Carlos Rodriguez",
    pais: "México",
    descricaoAula: "Curso abrangente para fortalecer a segurança da informação e proteção contra ameaças cibernéticas.",
    idioma: "Espanhol",
    palavrasChave: ["Cybersecurity", "Segurança da Informação", "Firewalls"],
    oQueAprendera: [
      "Criptografia e técnicas de codificação",
      "Firewalls e Antivírus para proteção contra ameaças online",
      "Teste de Penetração e avaliação de vulnerabilidades",
      "Práticas de Segurança em Redes"
    ],
    tecnologiasUtilizadas: ["Cybersecurity", "Criptografia", "Firewalls"],
    aulas: [
      {
        nome: "Criptografia",
        secoes: [
          { nome: "Tipos e Algoritmos", tempo: "3 horas" },
          { nome: "Implementação Prática", tempo: "3 horas" }
        ]
      },
      {
        nome: "Firewalls e Antivírus",
        secoes: [
          { nome: "Configuração e Uso", tempo: "4 horas" },
          { nome: "Análise de Logs", tempo: "4 horas" }
        ]
      },
    ]
  }
];

app.get('/', (_req, res) => {
  res.json({message: "API running!"});
})

app.get('/cursos', (_req, res) => {
  res.json(cursos)
})

app.get('/cursos/:id', (req, res) => {
  const { id } = req.params;
  const curso = cursos.find(curso => curso.id === id);
  res.json(curso);
})

app.post('/cursos', (req, res) => {
  const curso = req.body;
  curso.id = uuidv4();
  cursos.push(curso);
  res.json(curso);
 })

export default app;