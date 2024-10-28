/**
 * Provides the standard template for creating question issues.
 * @returns lines of the question issue template.
 */
export function getQuestionIssueTemplateLines(): string[] {
  return [
    'name: ❓ Question',
    'description: Ask a question',
    'title: "[QUESTION] <title>"',
    'labels: ["type: question"]',
    'body:',
    '  - type: textarea',
    '    attributes:',
    '      label: Question',
    '      description: What would you like to know? If you encounter unusual behavior or identified a missing feature, consider opening a bug report instead.',
    '    validations:',
    '      required: true',
    '# Generated by projen. To modify, edit .projenrc.ts and run \"npx projen\".',
  ];
}
