# Playwright automation

- Proceed without asking for permission or confirmation on Playwright automation work. Just do it.
- Do not delete anything without my permission.
- This covers running Playwright commands (`npx playwright test`, `codegen`, `install`), writing and editing page objects and specs, and driving a browser through the Playwright MCP server (navigate, click, fill, screenshot).
- Don't stop between steps to ask "should I run this?" or "want me to continue?". Finish the task, then report what you did and what happened.
- Still ask before irreversible real-world actions: payments or purchases, deleting data, or sending messages/emails on the user's behalf.

# Conventions

- Page Object Model: locators and actions live in `src/pages/`, and specs in `tests/` only call page object methods.
- Register new page objects in `src/fixtures/index.ts`, and import `test` and `expect` from `../src/fixtures`, not from `@playwright/test`.
- Locators use `getByTestId()`, which is configured to the `data-test` attribute. Use role or label locators when an element has no test id.
- After changes, run `npm run typecheck` and `npm run test:chromium`.
