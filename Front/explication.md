# Guide Socket.IO pour le Chat en Temps Réel

## 📚 Introduction

Socket.IO est une bibliothèque JavaScript qui permet une communication bidirectionnelle en temps réel entre le navigateur web (client) et le serveur. C'est idéal pour créer des applications comme des chats, des jeux en temps réel ou des tableaux de bord live.

## 🏗️ Architecture

### Côté Serveur (Backend)

```javascript
const express = require("express");
const { Server } = require("socket.io");
const app = express();
const server = require("http").createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    console.log("Un utilisateur s'est connecté");

    socket.on("chat message", (message) => {
        // Enrichir le message avec la date et l'heure
        const messageWithTime = {
            text: message,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
            timestamp: new Date(),
        };

        // Diffuser le message à tous les clients
        io.emit("chat message", messageWithTime);
    });

    socket.on("disconnect", () => {
        console.log("Un utilisateur s'est déconnecté");
    });
});

server.listen(3000, () => {
    console.log("Serveur en écoute sur le port 3000");
});
```

### Côté Client (Frontend React)

```typescript
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

// Dans votre composant React
function ChatComponent() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Écouter les nouveaux messages
        socket.on("chat message", (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        // Nettoyage à la déconnexion
        return () => {
            socket.off("chat message");
        };
    }, []);

    // Envoyer un message
    const sendMessage = (message) => {
        socket.emit("chat message", message);
    };
}
```

## 🔄 Flux de Communication

1. **Connexion Initiale**

    - Le client se connecte au serveur via `io("http://localhost:3000")`
    - Le serveur détecte la connexion via `io.on('connection')`

2. **Envoi d'un Message**

    - Client : `socket.emit('chat message', message)`
    - Serveur : Reçoit via `socket.on('chat message')`
    - Serveur : Traite et enrichit le message
    - Serveur : Diffuse via `io.emit('chat message')`

3. **Réception d'un Message**
    - Tous les clients connectés reçoivent le message via leur listener `socket.on('chat message')`
    - Le message est ajouté à l'état local React

## 🔑 Concepts Clés

### 1. Événements

-   `emit()` : Envoie un événement
-   `on()` : Écoute un événement
-   `off()` : Arrête d'écouter un événement

### 2. Types de Diffusion

```javascript
// Envoie à tous les clients
io.emit("event", data);

// Envoie à tous sauf l'émetteur
socket.broadcast.emit("event", data);

// Envoie à un client spécifique
socket.to(socketId).emit("event", data);
```

### 3. Rooms (Salles)

```javascript
// Rejoindre une room
socket.join("room1");

// Envoyer à une room spécifique
io.to("room1").emit("event", data);
```

## 🛠️ Bonnes Pratiques

1. **Nettoyage des Listeners**

    ```typescript
    useEffect(() => {
        socket.on("event", handler);
        return () => socket.off("event");
    }, []);
    ```

2. **Gestion des Erreurs**

    ```typescript
    socket.on("connect_error", (error) => {
        console.error("Erreur de connexion:", error);
    });
    ```

3. **Validation des Messages**
    ```typescript
    interface Message {
        text: string;
        time: string;
        date: string;
        timestamp: Date;
    }
    ```

## 🚀 Pour Aller Plus Loin

-   Ajout d'une liste des utilisateurs connectés
-   Système de rooms pour des chats privés
-   Indicateur de "typing"
-   Historique des messages
-   Statut en ligne/hors ligne
-   Notifications de nouveaux messages

## 📦 Installation

```bash
# Backend
pnpm add express socket.io

# Frontend
pnpm add socket.io-client
```

## 🔒 Sécurité

1. Toujours valider les données côté serveur
2. Limiter le nombre de connexions par IP
3. Utiliser CORS correctement
4. Implémenter une authentification si nécessaire

## 🐛 Debug

Socket.IO inclut un debugger intégré. Activez-le avec :

```bash
# Windows
set DEBUG=socket.io:*

# Linux/Mac
DEBUG=socket.io:* node server.js
```

---

N'hésitez pas à contribuer à ce guide ou à poser vos questions ! 🚀
