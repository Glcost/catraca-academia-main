
---

# 🚪 GymSports - Catraca Digital de Acesso

![Status](https://img.shields.io/badge/status-online-brightgreen)
![Versão](https://img.shields.io/badge/version-1.0.0-blue)
![Licença](https://img.shields.io/badge/license-MIT-yellow)
![Frontend](https://img.shields.io/badge/frontend-JavaScript-orange)

---

## 🌐 Demo

🔗 **Acesse o sistema:**
👉 [https://seu-link-aqui.vercel.app](https://seu-link-aqui.vercel.app) *(coloque seu deploy aqui)*

---

## 🎥 Demonstração

![Preview](https://via.placeholder.com/400x600?text=Catraca+GymSports)

---

## 📋 Sobre o Projeto

Interface de **catraca digital para academias**, onde o aluno digita o CPF para validar o acesso em tempo real.

Ideal para:

* 📱 Tablets na recepção
* 📲 Celulares
* 🖥️ Totens de autoatendimento

---

## ⚙️ Como Funciona

O sistema funciona como uma catraca digital:

```id="a1x2bc"
CPF digitado → API → Validação → Feedback → Limpeza automática
```

---

## ✨ Funcionalidades

* 🔢 Teclado numérico na tela
* ⚡ Consulta automática via API
* 🎯 Feedback instantâneo (visual + mensagem)
* ⏳ Loading animado durante requisição
* 🧹 Limpeza automática após 3 segundos
* 📱 Interface 100% responsiva

---

## 🚀 Tecnologias

* HTML5
* Tailwind CSS
* JavaScript (ES6+)
* Font Awesome
* Google Fonts (Inter)

---

## 📁 Estrutura

```id="7s9k2d"
project/
├── index.html
├── catraca.js
└── img/
```

---

## 🔌 Integração com API

### Base URL:

```id="x93j2k"
https://backendacademia.vercel.app
```

### Endpoint utilizado:

```id="0as92l"
GET /clientes/{cpf}
```

---

## 🧠 Lógica do Sistema

Baseado no seu código:

```js id="lp0sk1"
const resposta = await fetch(`${API_BASE_URL}/clientes/${cpfAtual}`);
```

### Regras:

| Situação       | Resultado              |
| -------------- | ---------------------- |
| status = true  | ✅ Acesso liberado      |
| status = false | ❌ Pendência financeira |
| 404            | ⚠️ Não encontrado      |
| erro           | 🔴 Falha no sistema    |

---

## 🎯 Fluxo do Usuário

1. Digita o CPF
2. Clica no botão ➡️
3. Sistema consulta API
4. Exibe resultado
5. Limpa automaticamente

---

## 🎨 Interface

### Cores principais:

* 🖤 Fundo: Preto
* 💛 Destaque: Amarelo (#FFD700)
* ✅ Sucesso: Verde
* ❌ Erro: Vermelho

---

## 📱 Responsividade

* Mobile-first
* Botões grandes (touch-friendly)
* Layout centralizado
* Ideal para telas de 7” a 12”

---

## 🔔 Feedback Visual

| Tipo    | Exemplo              |
| ------- | -------------------- |
| Sucesso | OLÁ, JOÃO!           |
| Erro    | PENDÊNCIA FINANCEIRA |
| Aviso   | NÃO ENCONTRADO       |
| Falha   | SEM SINAL            |

---

## ⚠️ Tratamento de Erros

Implementado no seu código:

```js id="kls9d2"
catch (erro) {
    exibirMensagem('SEM SINAL', 'erro');
}
```

### Possíveis erros:

* ❌ Sem internet
* ❌ API offline
* ❌ CPF inválido
* ❌ Timeout

---

## 🛠️ Personalização

### Alterar API

```js id="p9xk2l"
const API_BASE_URL = 'https://sua-api.com';
```

---

### Alterar tempo de limpeza

```js id="w82kdl"
setTimeout(() => limpar(), 3000);
```

---

## 🔒 Segurança (melhorias recomendadas)

* Validação real de CPF
* Rate limit na API
* Logs de acesso
* HTTPS obrigatório

---

## 💡 Sugestões de melhoria

* [ ] Validação de CPF real
* [ ] Som de confirmação
* [ ] Modo offline
* [ ] Reconhecimento facial
* [ ] QR Code
* [ ] Dashboard admin

---

## 🐛 Problemas comuns

| Problema           | Solução                |
| ------------------ | ---------------------- |
| SEM SINAL          | Verificar internet/API |
| ERRO               | Backend ou CORS        |
| Botão não responde | JS bloqueado           |
| Layout bugado      | Limpar cache           |

---

## 📈 Roadmap

* Versão 1.1 → validação CPF
* Versão 1.2 → offline mode
* Versão 2.0 → biometria

---

## 🤝 Contribuição

```bash id="p0sk2l"
git checkout -b feature/minha-feature
git commit -m "feat: melhoria"
git push origin feature/minha-feature
```

---

## 📄 Licença

MIT

---

## 👨‍💻 Desenvolvedor

Sistema desenvolvido para **GymSports Academia**

---

## ⭐ Dica pra deixar ainda mais profissional

Faz isso depois:

1. 📸 Tire um print real da tela
2. 🎥 Grave um GIF usando o celular
3. 🔗 Suba no GitHub/Vercel

---

