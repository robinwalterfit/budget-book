/**
 * Cypress is a JavaScript end-to-end testing framework that runs in the browser.
 * With Cypress it's possible to make sure, that the website behaves as expected.
 *
 *   Copyright 2023 Robin Walter <hello@robinwalter.me>
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 * @author Robin Walter <hello@robinwalter.me>
 * @file This file is used to setup cypress.
 * @license SPDX-License-Identifier: Apache-2.0
 * @see {@link https://commitlint.js.org/#/reference-configuration}
 */

import { defineConfig } from "cypress"

export default defineConfig({
    component: {
        devServer: {
            framework: "next",
            bundler: "webpack",
        },
        setupNodeEvents(on, config) {
            import("cypress-mochawesome-reporter/plugin")(on)
        },
        specPattern: "packages/**/*.cy.{js,jsx,ts,tsx}",
        supportFile: "cypress/support/component.js",
        viewportHeight: 1080,
        viewportWidth: 1920,
    },
    e2e: {
        baseUrl: "http://localhost:3000",
        setupNodeEvents(on, config) {
            import("cypress-mochawesome-reporter/plugin")(on)
        },
        specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
        supportFile: "cypress/support/e2e.js",
        viewportHeight: 1080,
        viewportWidth: 1920,
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
        charts: true,
        embeddedScreenshots: true,
        html: true,
        inlineAssets: true,
        json: false,
        overwrite: true,
        reportDir: process.env.CYPRESS_BROWSER ? `cypress/docker/${process.env.CYPRESS_BROWSER}/results` : "cypress/results",
        reportPageTitle: "Budget Book",
        saveAllAttempts: false,
    },
})
