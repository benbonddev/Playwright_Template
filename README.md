# Playwright Template

This project provides a basic Playwright setup using TypeScript with Allure reporting.
It includes environment specific Playwright configuration files under `config/`.

## Setup

Install dependencies (requires network access):

```bash
npm install
```

## Running tests

Execute all tests:

```bash
npm test
```

Run tests against the predefined environments:

```bash
npm run test:dev
npm run test:test
npm run test:staging
```

Generate and open the Allure report:

```bash
npm run allure:generate
npm run allure:open
```

### Accessing custom configuration in tests

Each environment config exports a `custom` object that can be retrieved in a
test via `testInfo.config`:

```ts
import { test } from '@playwright/test';

test('print environment name', ({}, testInfo) => {
  console.log((testInfo.config as any).custom.envName);
});
```
