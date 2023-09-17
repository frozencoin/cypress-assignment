# Cypress Assignment

## Setup
0. nodejs and npm install following the [instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm)
1. navigate to `cypress-assignment` folder
2. run `npm install` – this will install all dependencies
3. run `npm run cy:run-report` – this will clean up any reports (if we've had it), run tests and generate new allure results data
4. run `npm run allure:generate` – this will generate new allure report
5. run `npm run allure:open` – this will require java 8+ to start JVM and open allure report locally

## Input and assumptions 
- since there are only two pages and one of those has a single verification action, there’s no need to show off with Page Object pattern. Although they'll become very useful as the framework grows
- for now, working with regular tests, not gherkin BDD scenarios
- I'd go for TS, but going for JS to keep the assignment simple
- for now, just a single environment config
- intentionally using an outdated cypress version to keep current allure reporter
- since I've got zero product knowledge, I'm making some assumptions regarding the default behaviours, e.g. verifying final step results just by the url link, this can obviously be extended
