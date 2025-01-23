import { BaseProjectOptions, BaseProject, BaseOptions } from '../base';
import { CommitLintConfigCapService } from './config/commitlint';
import { DevContainerConfigCapService } from './config/devcontainer';
import { EsLintConfigCapService } from './config/eslint';
import { GitConfigCapService } from './config/git';
import { GitHubConfigCapService } from './config/github';
import { HuskyConfigCapService } from './config/husky';
import { JestConfigCapService } from './config/jest';
import { NpmConfigCapService } from './config/npm';
import { PrettierConfigCapService } from './config/prettier';
import { SampleCodeConfigCapService } from './config/samplecode';
import { TypeScriptConfigCapService } from './typescript';
import { VsCodeConfigCapService } from './config/vscode';
import { exec } from 'child_process';

export interface CapServiceProjectOptions extends BaseProjectOptions {
  readonly namespace?: string;
  readonly entityName?: string;
}

/**
 * Base class for managing project CapService configuration.
 */
export class CapServiceProject extends BaseProject {
  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: CapServiceProjectOptions) {
    const updatedOptions = {
      ...options,
      commitlintEnabled: options.commitlintEnabled ?? true,
      devContainerEnabled: options.devContainerEnabled ?? true,
      eslintEnabled: options.eslintEnabled ?? true,
      githubEnabled: options.githubEnabled ?? true,
      huskyEnabled: options.huskyEnabled ?? true,
      jestEnabled: options.jestEnabled ?? true,
      prettierEnabled: options.prettierEnabled ?? true,
      vscodeEnabled: options.vscodeEnabled ?? true,
      sampleCodeEnabled: options.sampleCodeEnabled ?? true,
      typescriptEnabled: true,
      name: options.name,
      namespace: options.namespace ?? 'de.customer.org.project',
      description: options.description ?? 'SAP CAP Project',
      entityName: options.entityName ?? 'Entity1',
    };
    super({
      ...BaseOptions.sharedOptions(updatedOptions),
    });

    this.gitConfig = new GitConfigCapService(this);
    this.npmConfig = new NpmConfigCapService(this);
    this.typescriptConfig = new TypeScriptConfigCapService(this);

    if (updatedOptions.commitlintEnabled) {
      this.commitlintConfig = new CommitLintConfigCapService(this);
    }
    if (updatedOptions.devContainerEnabled) {
      this.devContainerConfig = new DevContainerConfigCapService(this);
    }
    if (updatedOptions.eslintEnabled) {
      this.eslintConfig = new EsLintConfigCapService(this);
    }
    if (updatedOptions.jestEnabled) {
      this.jestConfig = new JestConfigCapService(this);
    }
    if (updatedOptions.githubEnabled) {
      this.githubConfig = new GitHubConfigCapService(this);
    }
    if (updatedOptions.prettierEnabled) {
      this.prettierConfig = new PrettierConfigCapService(this);
    }
    if (updatedOptions.vscodeEnabled) {
      this.vscodeConfig = new VsCodeConfigCapService(this);
    }
    if (updatedOptions.huskyEnabled) {
      this.huskyConfig = new HuskyConfigCapService(this);
    }
    if (updatedOptions.sampleCodeEnabled) {
      this.sampleCodeConfig = new SampleCodeConfigCapService(this, updatedOptions);
    }
  }

  protected override initializeBaseConfigs(options: BaseProjectOptions): void {
    super.initializeBaseConfigs(options);
  }

  public override postSynthesize(): void {
    super.postSynthesize();
    console.log('CapServiceProject postSynthesize');
    exec('npx projen eject', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  }
}
