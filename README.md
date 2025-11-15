# Gadki - Kampania Edukacyjna

Aplikacja webowa kampanii edukacyjnej "Gadki" - strona informacyjna w języku polskim/ukraińskim stworzona dla dzieci, rodziców, opiekunów i edukatorów.

## 🌟 O projekcie

Gadki to wielojęzyczna platforma edukacyjna zaprojektowana w celu wspierania nauki i rozwoju dzieci. Projekt został wygenerowany automatycznie z projektów Figma przy użyciu platformy [Anima](https://animaapp.com/) i dostosowany do potrzeb kampanii.

## 🚀 Technologie

- **React 18** - Biblioteka do budowy interfejsu użytkownika
- **React Router v6** - Routing i nawigacja między stronami
- **Vite 6.0** - Szybkie narzędzie do budowania i development server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS** - Przetwarzanie CSS

## 📋 Wymagania

Przed rozpoczęciem upewnij się, że masz zainstalowane:

- [Node.js](https://nodejs.org/) (wersja 16 lub nowsza)
- npm (dostarczany z Node.js)

## 🛠️ Instalacja i uruchomienie

### 1. Klonowanie repozytorium

```bash
git clone https://github.com/ilusi0npl/gadki-experiment.git
cd gadki-experiment
```

### 2. Instalacja zależności

```bash
npm install
```

### 3. Uruchomienie serwera deweloperskiego

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: [http://localhost:5173/](http://localhost:5173/)

### 4. Budowanie dla produkcji

```bash
npm run build
```

Zbudowane pliki znajdą się w katalogu `dist/`.

## 📁 Struktura projektu

```
src/
├── screens/              # Ekrany główne (np. strona główna)
│   └── GadkiStronaGwna/
│       └── sections/     # Sekcje specyficzne dla ekranu
├── routes/               # Routing i ekrany dla poszczególnych tras
│   ├── GadkiMenuGwne/
│   ├── GadkiDlaDzieci/
│   ├── GadkiDlaEdukatorw/
│   └── sections/         # Współdzielone komponenty sekcji
│       └── screens/
│           └── sections/ # Komponenty UI (Footer, Newsletter, etc.)
└── components/           # Globalne komponenty (Header)
```

## 🎨 Stylowanie

Projekt wykorzystuje niestandardową paletę kolorów zdefiniowaną w `tailwind.config.js`:

**Kolory marki:**
- `gadkidarkblue` - Ciemny niebieski
- `gadkidarkgreen` - Ciemny zielony
- `gadkidarkred` - Ciemny czerwony
- `gadkiorange` - Pomarańczowy
- `gadkiyellow` - Żółty
- Odcienie beżowe: `beige-100` do `beige-500`

**Czcionki:**
- `font-lato` - Lato (podstawowa czcionka)
- `font-happy-season` - Happy Season (czcionka dekoracyjna)

## 🗺️ Struktura nawigacji

- `/` - Strona główna
- `/menu` - Menu główne (overlay)
- `/o-kampanii` - O kampanii
- `/dla-dzieci` - Dla dzieci
- `/dla-rodzicow-i-opiekunow` - Dla rodziców i opiekunów
- `/dla-edukatorow` - Dla edukatorów
- `/faq` - Często zadawane pytania
- `/logowanie` - Logowanie/Rejestracja
- `/konto` - Konto użytkownika

## 🔧 Konfiguracja

### Vite

Konfiguracja znajduje się w `vite.config.js`:
- Plugin React z obsługą JSX
- Ścieżka bazowa ustawiona na `./` dla elastycznego wdrożenia

### Tailwind CSS

Konfiguracja w `tailwind.config.js`:
- Niestandardowe kolory i czcionki
- Skanowanie plików `.jsx` w katalogu `src/`

## 📝 Dalsze informacje

Więcej szczegółów technicznych i wskazówek dla programistów znajduje się w pliku [CLAUDE.md](./CLAUDE.md).

## 🤝 Współpraca

Projekt został wygenerowany z Anima i dostosowany dla kampanii Gadki. Aby wnieść wkład:

1. Fork repozytorium
2. Utwórz branch dla swojej funkcji (`git checkout -b feature/AmazingFeature`)
3. Commit zmian (`git commit -m 'Add some AmazingFeature'`)
4. Push do brancha (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

## 📄 Licencja

Ten projekt został stworzony dla kampanii edukacyjnej Gadki.

## 🔗 Linki

- [Repozytorium GitHub](https://github.com/ilusi0npl/gadki-experiment)
- [Anima Platform](https://animaapp.com/)

---

**Uwaga:** Projekt zawiera komponenty wygenerowane automatycznie przez Anima, co może skutkować nietypową strukturą i stylowaniem (pozycjonowanie absolutne, stałe wymiary).
