# 🔋🍑 Pile ou Fesse

Un site web fun et minimaliste pour tirer à "pile ou fesse" - la version décalée du classique "pile ou face" !

## 🎮 Concept

Au lieu de pile ou face, tu obtiens soit :
- 🔋 **Une pile** (batterie)
- 🍑 **Une fesse**

## ✨ Fonctionnalités

- 🎲 Tirage aléatoire avec animation
- 📊 Statistiques persistantes (sauvegardées localement)
- 🎨 Design fun et coloré inspiré de raclette.world
- 📱 Responsive (fonctionne sur mobile et desktop)
- ⌨️ Utilise la barre d'espace pour tirer
- 💻 100% TypeScript avec Vite

## 🛠️ Stack Technique

- **TypeScript** - Typage fort pour un code maintenable
- **Vite** - Build tool ultra-rapide
- **CSS3** - Animations et gradients modernes
- **LocalStorage API** - Sauvegarde des stats

Aucune dépendance runtime ! Code propre et léger.

## 🚀 Installation & Développement

```bash
# Installe les dépendances
pnpm install

# Lance le serveur de développement
pnpm dev

# Build pour la production
pnpm build

# Preview du build de production
pnpm preview

# Vérification des types TypeScript
pnpm typecheck
```

## 📦 Structure du Projet

```
pile-ou-fesse/
├── src/
│   ├── main.ts       # Point d'entrée principal
│   ├── stats.ts      # Gestion des statistiques
│   └── style.css     # Styles
├── index.html        # HTML de base
├── package.json      # Dépendances
├── tsconfig.json     # Config TypeScript
└── vite.config.ts    # Config Vite
```

## 🎨 Design

Inspiré de raclette.world avec :
- Un design minimaliste et épuré
- Des couleurs vives et fun (gradient violet/rose)
- Des animations fluides
- Une interface intuitive
- Code organisé et maintenable

## 🚢 Déploiement

Le projet peut être déployé facilement sur :
- **Vercel** : `pnpm build` puis déploie le dossier `dist/`
- **Netlify** : `pnpm build` puis déploie le dossier `dist/`
- **GitHub Pages** : Utilise le workflow GitHub Actions

Commande de build : `pnpm build`
Dossier de sortie : `dist/`

## 📝 License

Voir le fichier LICENSE
