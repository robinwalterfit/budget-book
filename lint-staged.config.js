/**
 * Lint staged files to prevent committing bad code.
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
 * @file This file is used to setup lint-staged.
 * @license SPDX-License-Identifier: Apache-2.0
 * @see {@link https://github.com/okonet/lint-staged/blob/master/README.md#configuration}
 */

const { ESLint } = require("eslint")
const { quote } = require("shell-quote")

const eslint = new ESLint()
const isWin = process.platform === "win32"

module.exports = {
    "**/*.{js,jsx,ts,tsx}": (filenames) => {
        const escapedFileNames = filenames.map((filename) => `"${isWin ? filename : escape([filename])}"`).join(" ")
        return [
            `prettier --with-node-modules --ignore-path .prettierignore_staged --write ${escapedFileNames}`,
            `eslint --no-ignore --max-warnings=0 --fix ${filenames
                .filter((file) => !eslint.isPathIgnored(file))
                .map((f) => `"${f}"`)
                .join(" ")}`,
            `git add ${escapedFileNames}`,
        ]
    },
    "**/*.{json,md,mdx,css,html,yml,yaml,scss}": (filenames) => {
        const escapedFileNames = filenames.map((filename) => `"${isWin ? filename : escape([filename])}"`).join(" ")
        return [
            `prettier --with-node-modules --ignore-path .prettierignore_staged --write ${escapedFileNames}`,
            `git add ${escapedFileNames}`,
        ]
    },
}

function escape(str) {
    const escaped = quote(str)
    return escaped.replace(/\\@/g, "@")
}
