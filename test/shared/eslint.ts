import { SynthOutput } from 'projen/lib/util/synth';

/**
 * Validates that the ESLint configuration file matches the expected template.
 * Allows extending the base configuration with additional rules and ignores.
 *
 * @param snapshot Synthesized project output.
 * @param additionalRules Additional rules to include in the configuration.
 * @param additionalIgnores Additional file paths to include in the ignore list.
 */
export function testConfigFile(
  snapshot: SynthOutput,
  additionalRules: Record<string, string> = {},
  additionalIgnores: string[] = [],
): void {
  const baseRules: Record<string, string> = {
    'no-console': 'off',
    'require-atomic-updates': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
  };
  const baseIgnores: string[] = [];

  const rules: Record<string, string> = { ...baseRules, ...additionalRules };
  const ignores: string[] = [...baseIgnores, ...additionalIgnores];

  const rulesString: string = Object.entries(rules)
    .map(([rule, setting]: [string, string]): string => `      '${rule}': '${setting}',`)
    .join('\n');
  const ignoresString: string = ignores.map((ignore: string): string => `'${ignore}'`).join(', ');

  const expectedTemplateLines: string = [
    // '// Generated by projen.To modify, edit.projenrc.ts and run "npx projen".',
    // '',
    "import eslint from '@eslint/js';",
    "import tseslint from 'typescript-eslint';",
    '',
    'export default tseslint.config(',
    '  eslint.configs.recommended,',
    '  ...tseslint.configs.recommended,',
    '  ...tseslint.configs.stylistic,',
    '  {',
    '    rules: {',
    rulesString,
    '    },',
    '  },',
    '  {',
    `    ignores: [${ignoresString}],`,
    '  },',
    ');',
  ].join('\n');

  expect(snapshot['eslint.config.mjs']).toStrictEqual(expectedTemplateLines);
}
