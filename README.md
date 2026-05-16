# pg

Pages CMS Projekt fuer GitHub.

## Struktur

- `.pages.yml`: Pages CMS Konfiguration
- `.github/workflows/deploy-pages.yml`: Deployment nach GitHub Pages
- `docs/`: editierbare Seiten
- `media/`: Upload-Ziel fuer Bilder und Dateien

## Nutzung mit Pages CMS

1. Oeffne [app.pagescms.org](https://app.pagescms.org).
2. Melde dich mit GitHub an.
3. Installiere die GitHub App fuer den Account oder die Organisation, die dieses Repository besitzt.
4. Oeffne das Repository `pg`.
5. Bearbeite die Sammlung `Seiten`.

## Deployment

Pushes auf `main` deployen automatisch nach GitHub Pages. In Pages CMS gibt es zusaetzlich den Button `Site deployen`.
