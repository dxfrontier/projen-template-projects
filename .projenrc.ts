import { javascript, typescript } from 'projen';
import { PullRequestTemplate } from 'projen/lib/github';
import { getPullRequestTemplateLines } from './src/templates/pullRequest';
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'projen-template-github-action',
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,

  githubOptions: {
    mergify: false,
    workflows: false,
  },
  pullRequestTemplate: false,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  peerDeps: [
    'projen',
    'construct',
  ],
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

new PullRequestTemplate(project.github!, {
  lines: getPullRequestTemplateLines(),
});

project.synth();