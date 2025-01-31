import { PrettierConfigBase } from '../base';
import { DevContainerConfigBase } from '../base/config/devcontainer';
import { GitConfigBase } from '../base/config/git';
import { GitHubConfigBase } from '../base/config/github';
import { HuskyConfigBase } from '../base/config/husky';
import { BaseOptions } from '../base/config/options';
import { BaseProjectOptions, BaseProject } from '../base/project';
import { VsCodeConfigBase } from '../base/config/vscode';
import { CommitLintConfigGitHubAction } from './config/commitlint';
import { NpmConfigGitHubAction } from './config/npm';
import { SampleCodeConfigGitHubAction } from './config/samplecode';
import { TypeScriptConfigGitHubAction } from './config/typescript';

export interface GitHubActionProjectOptions extends BaseProjectOptions {}

/**
 * Base class for managing project GitHubAction configuration.
 */
export class GitHubActionProject extends BaseProject {
  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: GitHubActionProjectOptions) {
    const updatedOptions = {
      ...options,
      typescriptEnabled: false,
      jestEnabled: false,
      eslintEnabled: false,
    };
    super({
      ...BaseOptions.sharedOptions(updatedOptions),
    });

    this.npmConfig = new NpmConfigGitHubAction(this);

    if (updatedOptions.commitlintEnabled) {
      this.commitlintConfig = new CommitLintConfigGitHubAction(this);
    }
    if (updatedOptions.sampleCodeEnabled) {
      this.sampleCodeConfig = new SampleCodeConfigGitHubAction(this);
    }
  }

  protected override initializeBaseConfigs(options: BaseProjectOptions): void {
    super.initializeBaseConfigs(options);

    this.gitConfig = new GitConfigBase(this);
    this.typescriptConfig = new TypeScriptConfigGitHubAction(this);

    if (options.prettierEnabled) {
      this.prettierConfig = new PrettierConfigBase(this);
    }
    if (options.devContainerEnabled) {
      this.devContainerConfig = new DevContainerConfigBase(this);
    }
    if (options.githubEnabled) {
      this.githubConfig = new GitHubConfigBase(this);
    }
    if (options.vscodeEnabled) {
      this.vscodeConfig = new VsCodeConfigBase(this);
    }
    if (options.huskyEnabled) {
      this.huskyConfig = new HuskyConfigBase(this);
    }
  }
}
