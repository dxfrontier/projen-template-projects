import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { BaseOptions } from './options';
import { BaseConfig, Config } from '.';

export interface BaseProjectOptions extends TypeScriptProjectOptions {
  readonly projenEnabled?: boolean;
  readonly commitLintEnabled?: boolean;
  readonly devContainerEnabled?: boolean;
  readonly eslintEnabled?: boolean;
  readonly githubEnabled?: boolean;
  readonly huskyEnabled?: boolean;
  readonly jestEnabled?: boolean;
  readonly npmEnabled?: boolean;
  readonly prettierEnabled?: boolean;
  readonly typescriptEnabled?: boolean;
  readonly vscodeEnabled?: boolean;
  readonly sampleCodeEnabled?: boolean;
  readonly npm?: boolean;
}

/**
 * Base class for managing project configuration.
 */
export class BaseProject<TConfig extends BaseConfig = BaseConfig> extends TypeScriptProject {
  protected readonly npm?: boolean;
  public gitConfig?: TConfig;
  // public readonly commitLintConfig?: CommitLintConfigJsii;
  // public readonly devContainerConfig?: DevContainerConfigJsii;
  // public readonly eslintConfig?: EsLintConfigJsii;
  // public readonly githubConfig?: GitHubConfigJsii;
  // public readonly huskyConfig?: HuskyConfigJsii;
  // public readonly jestConfig?: JestConfigJsii;
  // public readonly npmConfig?: NpmConfigJsii;
  // public readonly prettierConfig?: PrettierConfigJsii;
  // public readonly typescriptConfig?: TypeScriptConfigJsii;
  // public readonly vscodeConfig?: VsCodeConfigJsii;
  // public readonly sampleCodeConfig?: SampleCodeConfigJsii;

  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: BaseProjectOptions) {
    super({
      ...BaseOptions.sharedOptions(options),
    });

    // special case to align with Projen standard API handling
    this.npm = options.npmEnabled && options.projenEnabled && options.npm
      ? options.npm
      : false;
  }

  public override preSynthesize(): void {
    for (const comp of this.components) {
      if (comp instanceof Config) {
        comp.applyConfig();
      }
    }
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }

  protected setGitConfig(gitConfig: TConfig) {
    this.gitConfig = gitConfig;
  }
}
