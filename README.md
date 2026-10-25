# Playwright Framework

UI test automation with [Playwright](https://playwright.dev) and TypeScript, using the Page Object Model.
The sample tests run against the public demo shop https://www.saucedemo.com.

## Setup

```bash
npm install
npx playwright install
cp .env.example .env   # optional, the defaults already work
```

In VS Code, install the recommended **Playwright Test for VS Code** extension to run and debug tests from the editor.

## Run tests

| Command | What it does |
| --- | --- |
| `npm test` | All tests in Chromium, Firefox and WebKit |
| `npm run test:chromium` | Chromium only |
| `npm run test:headed` | Chromium with a visible browser |
| `npm run test:ui` | Playwright UI mode |
| `npm run test:debug` | Step through with the inspector |
| `npm run test:smoke` | Only tests tagged `@smoke` |
| `npm run report` | Open the last HTML report |
| `npm run codegen` | Record a test by clicking through the app |
| `npm run typecheck` | Type-check without running tests |

## Structure

```
playwright.config.ts   Config: browsers, reporters, trace/screenshot/video, setup project
src/pages/             Page objects (one class per page, locators + actions)
src/fixtures/          Custom `test` that hands page objects to tests
src/utils/             Test data and helpers
tests/                 Specs; *.setup.ts files run first and save the login session
.auth/                 Saved login session (git-ignored)
```

## Adding a test

1. Add a page object in `src/pages/` that extends `BasePage` and register it in `src/fixtures/index.ts`.
2. Add a `*.spec.ts` file in `tests/` and import `test` and `expect` from `../src/fixtures`.
3. Specs start logged in. To test logged-out behavior, add `test.use({ storageState: { cookies: [], origins: [] } })` as in `tests/login.spec.ts`.

## Pointing at another app

Set `BASE_URL` in `.env`. If the app doesn't use `data-test` attributes, change `testIdAttribute` in `playwright.config.ts`
and rewrite the locators in `src/pages/`.
