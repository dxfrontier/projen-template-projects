import { JsiiProject } from './src/jsii/project';
// import { GitHubActionProject } from './src/github-action/project';
// import { TerraformModuleProject } from './src/terraform-module';

export const project = new JsiiProject({
  name: '@dxfrontier/projen-template-projects',
  repositoryUrl: 'https://github.com/dxfrontier/projen-template-projects.git',
  author: 'DXFrontier Dev Team',
  authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
  copyrightOwner: 'ABS GmbH',
  defaultReleaseBranch: 'dev',

  commitlintEnabled: true,
  devContainerEnabled: true,
  eslintEnabled: true,
  githubEnabled: true,
  huskyEnabled: true,
  jestEnabled: true,
  prettierEnabled: true,
  vscodeEnabled: true,
  readme: {
    contents: `
    dadadaa
    test
    `,
  },
  // Use projen standard API for jest.
  // For the other modules like vscode, devContainer, etc.
  // we use own configuration which are set to false as defaults
  // in the JsiiProject itself
  jest: true,
});

// export const project = new TerraformModuleProject({
//   name: '@dxfrontier/projen-template-projects',
//   // repositoryUrl: 'https://github.com/dxfrontier/projen-template-projects.git',
//   // author: 'DXFrontier Dev Team',
//   // authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
//   copyrightOwner: 'ABS GmbH',
//   defaultReleaseBranch: 'dev',

//   commitLintEnabled: true,
//   devContainerEnabled: true,
//   eslintEnabled: true,
//   githubEnabled: true,
//   huskyEnabled: true,
//   jestEnabled: true,
//   prettierEnabled: true,
//   typescriptEnabled: true,
//   vscodeEnabled: true,
//   sampleCodeEnabled: true,

//   // use projen standard jest and npm
//   // the others like vscode, devContainer, ...
//   // we use own configuration which are set to false as defaults
//   // in the JsiiProject itself
//   jest: true,
// });

// export const project = new GitHubActionProject({
//   name: '@dxfrontier/projen-template-projects',
//   // repositoryUrl: 'https://github.com/dxfrontier/projen-template-projects.git',
//   // author: 'DXFrontier Dev Team',
//   // authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
//   copyrightOwner: 'ABS GmbH',
//   defaultReleaseBranch: 'dev',

//   commitLintEnabled: true,
//   devContainerEnabled: true,
//   eslintEnabled: true,
//   githubEnabled: true,
//   huskyEnabled: true,
//   jestEnabled: true,
//   prettierEnabled: true,
//   typescriptEnabled: true,
//   vscodeEnabled: true,
//   sampleCodeEnabled: true,

//   // use projen standard jest and npm
//   // the others like vscode, devContainer, ...
//   // we use own configuration which are set to false as defaults
//   // in the JsiiProject itself
//   jest: true,
// });

project.synth();
