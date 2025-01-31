/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 *
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import * as eslint from '../../shared/eslint';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available.
 */
test('Config file matches expected template', (): void => {
  const additionalRules: Record<string, string> = {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/class-literal-property-style': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
  };
  const additionalIgnores: string[] = ['docs/', 'test/', 'lib/', '.jsii'];
  eslint.testConfigFile(snapshot, additionalRules, additionalIgnores);
});
