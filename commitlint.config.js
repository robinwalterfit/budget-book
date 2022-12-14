/**
 * Lint commit messages to prevent bad commits.
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
 * @file This file is used to setup commitlint.
 * @license SPDX-License-Identifier: Apache-2.0
 * @see {@link https://commitlint.js.org/#/reference-configuration}
 */

module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "scope-enum": [
            2,
            "always",
            [
                "cms",
                "design",
                "devcontainer",
                "docker",
                "editor",
                "git",
                "github",
                "linter",
                "next",
                "react",
                "server",
                "website",
            ],
        ],
    },
}
