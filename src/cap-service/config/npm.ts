// import { Task } from 'projen';
import { BaseProject, NpmConfigBase } from '../../base';
import { constants } from '../../util/constants';
import { Settings } from '../../util/types';

/**
 * Implementing all relevant NPM configuration for the CapService project.
 */
export class NpmConfigCapService extends NpmConfigBase {
  protected override get additionalDevDependencies(): string[] {
    return [
      `${constants['npm-run-all'].NAME}@${constants['npm-run-all'].VERSION}`,
      `${constants['@cap-js/sqlite'].NAME}@${constants['@cap-js/sqlite'].VERSION}`,
    ];
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
    }
  }
}
