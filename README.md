# 🐾 Socket Chat Monorepo

Ce projet est un monorepo moderne pour un chat en temps réel, construit avec :

-   **Next.js** (App Router, Server Actions)
-   **React** (frontend)
-   **Socket.IO** (temps réel)
-   **Prisma** + **PostgreSQL** (ORM & base de données)
-   **Tailwind CSS** & **Shadcn UI** (UI moderne)
-   **Zustand** (state management)
-   **pnpm** (gestionnaire de monorepo)
-   **TypeScript** (typage strict)
-   **next-i18next** (i18n)
-   **Stripe** (paiement, si besoin)

## 📦 Structure du monorepo

```
/Front      # Frontend Next.js/React
/Back       # Backend Node.js/Express/Socket.IO
pnpm-workspace.yaml
package.json (racine)
```

## 🚀 Démarrage rapide

1. **Installer les dépendances**

```bash
pnpm install
```

2. **Lancer le backend**

```bash
pnpm dev:back
```

3. **Lancer le frontend**

```bash
pnpm dev:front
```

4. **Lancer les deux en même temps**

```bash
pnpm dev
```

## 🛠️ Scripts utiles

-   `pnpm dev:front` : démarre le frontend Next.js
-   `pnpm dev:back` : démarre le backend Express/Socket.IO
-   `pnpm dev` : lance tout le monorepo en mode dev
-   `pnpm add <pkg> --filter front` : ajoute un package au frontend
-   `pnpm add <pkg> --filter back` : ajoute un package au backend

## 🖥️ Frontend (Next.js)

-   App Router (`/app`)
-   Server Actions pour la logique serveur
-   Authentification JWT sécurisée (cookie httpOnly)
-   Zustand pour le state global
-   Tailwind CSS + Shadcn UI pour l'UI
-   next-i18next pour l'internationalisation
-   Dark/Light mode avec persistance
-   Axios pour les requêtes HTTP

## ⚡ Backend (Express/Socket.IO)

-   Socket.IO pour le chat temps réel (rooms, messages globaux)
-   Prisma pour l'accès PostgreSQL
-   Sécurité : validation Zod, headers, CORS, CSRF, XSS
-   Stripe (paiement sécurisé, webhooks)

## 🗄️ Base de données

-   PostgreSQL (local ou cloud)
-   Modélisation via Prisma (`/Back/prisma/schema.prisma`)

## 🌍 Internationalisation

-   next-i18next, fichiers JSON par langue dans `/Front/public/locales/`

## 🎨 UI/UX

-   Composants réutilisables, typés, sans logique métier dans le JSX
-   Responsive, dark/light mode, accessibilité

## 🔒 Sécurité

-   JWT en cookie httpOnly, jamais accessible côté client
-   Validation et sanitation de toutes les entrées
-   Headers de sécurité (CSP, etc.)
-   CSRF sur les formulaires
-   Jamais d'erreur technique exposée côté client

## 💡 Bonnes pratiques

-   Utiliser pnpm partout (pas de npm/yarn)
-   Ajouter les dépendances avec `--filter front` ou `--filter back`
-   Logique métier isolée, composants purs
-   Utiliser les hooks Zustand pour le state
-   Protéger les routes sensibles côté serveur

## 📚 Documentation

-   Voir `/Front/explication.md` pour un guide Socket.IO détaillé
-   Voir `/Back/server.js` pour la logique temps réel

---

**Développé pour l'apprentissage et la collaboration.**

N'hésitez pas à contribuer ou à poser vos questions ! 🚀
