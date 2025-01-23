// import { Task } from 'projen';
import { BaseProject, NpmConfigBase } from '../../base';
import { Settings } from '../../types';

/**
 * Implementing all relevant NPM configuration for the CapService project.
 */
export class NpmConfigCapService extends NpmConfigBase {
  protected override get additionalDevDependencies(): string[] {
    return ['npm-run-all@^4.1.5'];
  }

  protected override get additionalSettings(): Settings {
    return {
      files: ['gen', 'README.md'],
    };
  }

  protected override get additionalIgnorePatterns(): string[] {
    return ['docs/'];
  }

  /**
   * Gets additional ignore patterns to be added to the project's ignore configuration.
   *
   * @returns A list of ignore patterns.
   */
  private get additionalIgnorePrettierPatterns(): string[] {
    return [
      '/package-lock.json',
      '/package.json',
      '/API.md',
      ...this.additionalAttributesPatterns.map((pattern: string): string => {
        return `/${pattern}`;
      }),
    ];
  }

  protected override get additionalAttributesPatterns(): string[] {
    return ['@cds-models', 'dist', 'gen'];
  }

  public override registerConfig(): void {
    if (this.project instanceof BaseProject) {
      this.addDevDependencies(this.additionalDevDependencies);
      this.addSettings(this.additionalSettings);
      this.removeScriptsOnInit(this.removeScripts);
      this.project.eslintConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
      this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePrettierPatterns);
      this.project.githubConfig?.addAttributePatterns(this.additionalAttributesPatterns);

      // const installTask: Task | undefined = this.project.tasks.tryFind('install');
      // if (installTask) {
      //   installTask.reset("echo 'install task overwritten, postponed to npm post-install step'");
      // }
    }
  }
}
