# pg

`pg` ist ein repo-eigenes Pages CMS Setup.

Das Repository enthaelt:

- den Pages CMS Quellcode als Next.js App
- eine lokale Postgres Datenbank per Docker Compose
- die Content-Konfiguration in `.pages.yml`
- Beispiel-Content in `docs/`
- Medienablage in `media/`

Du musst dadurch nicht die gehostete App auf `app.pagescms.org` nutzen. Pages CMS braucht aber weiterhin eine GitHub App, weil Login, Repository-Zugriff, Webhooks und Schreibzugriff auf GitHub darueber laufen.

## Lokal starten

1. Docker Image bauen:

```bash
docker compose build cms
```

2. Lokale Env-Datei mit Secrets erzeugen:

```bash
docker compose run --rm cms npm run init:env
```

3. GitHub App fuer diese lokale CMS Instanz erzeugen:

```bash
docker compose run --rm cms npm run setup:github-app -- --base-url http://localhost:3000 --env .env.local --app-name "pg Pages CMS" --no-open
```

Der Helper gibt dir eine GitHub URL aus. Oeffne sie im Browser, erstelle die App und installiere sie fuer das Repository `klausbreyer/pg`.

4. CMS starten:

```bash
docker compose up cms
```

5. Oeffnen:

```text
http://localhost:3000
```

## Content

Pages CMS liest die Projekt-Konfiguration aus:

```text
.pages.yml
```

Aktuell editierbar:

- `docs/**/*.md` als Sammlung `Seiten`
- `media/` als Medienordner

## Nuetzliche Befehle

```bash
docker compose up db
docker compose up cms
docker compose run --rm cms npm run db:migrate
docker compose run --rm cms npm run lint
```

## Deployment

Fuer eine oeffentliche Installation brauchst du:

- eine Postgres Datenbank
- eine feste HTTPS URL
- `BASE_URL` passend zu dieser URL
- eine GitHub App, deren Callback URL, Webhook URL und Setup URL auf diese URL zeigen

Die wichtigsten Runtime-Variablen stehen in `.env.local.example`.
