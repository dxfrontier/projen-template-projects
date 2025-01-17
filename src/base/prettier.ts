import { JsonFile, TextFile } from 'projen';
import { Config } from './config';
import { TrailingComma } from 'projen/lib/javascript';
import { ProjectTypes, Settings } from '../types';
import { isValidProjectTypes } from '../utils';

/**
 * Base class for implementing all relevant Prettier configuration.
 *
 * This class acts as a base for handling Prettier configuration within projects.
 */
export class PrettierConfigBase extends Config {
  protected ignorePatterns: string[];

  constructor(project: ProjectTypes) {
    super(project);

    this.ignorePatterns = this.standardIgnorePatterns;
  }

  /**
   * Gets the standard ignore patterns required for configuration.
   *
   * @returns A list of ignore patterns.
   */
  protected get standardIgnorePatterns(): string[] {
    return ['/.prettierignore', '/.prettierrc.json'];
  }

  /**
   * Gets the additional development dependencies required for configuration.
   *
   * @returns A list of package names with version specifications.
   */
  protected get additionalDevDependencies(): string[] {
    return ['prettier@^3.4.2'];
  }

  /**
   * Gets the additional npm scripts to be added to the project's configuration.
   *
   * @returns A record of script names and their corresponding commands.
   */
  protected get additionalScripts(): Record<string, string> {
    return {
      prettier: 'prettier . --write',
    };
  }

  /**
   * Gets the config file to be added to the project's configuration.
   *
   * @returns A record of the having the path to the file as key and the content as value.
   */
  protected get configFile(): Settings {
    return {
      '.prettierrc.json': {
        overrides: [
          {
            files: '*.*',
            options: {
              semi: true,
              trailingComma: TrailingComma.ALL,
              singleQuote: true,
              printWidth: 120,
              tabWidth: 2,
            },
          },
        ],
      },
    };
  }

  /**
   * Gets the ignore file to be added to the project's configuration.
   *
   * @returns A record of the having the path to the file as key and the content as value.
   */
  protected get ignoreFile(): Record<string, string[]> {
    return {
      '.prettierignore': [...this.ignorePatterns],
    };
  }

  /**
   * Adds custom ignore patterns to the project's configuration.
   *
   * @param patterns - An array of file or directory patterns to be ignored.
   */
  public addIgnorePatterns(patterns: string[]): void {
    this.ignorePatterns = [...this.ignorePatterns, ...patterns];
  }

  /**
   * Creates the configuration file in the project directory.
   */
  protected createConfig(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    new JsonFile(this.project, filePath, {
      obj: this.configFile[filePath],
    });
  }

  /**
   * Creates the ignore file in the project directory.
   */
  protected createIgnore(): void {
    const filePath: string = Object.keys(this.ignoreFile)[0];
    new TextFile(this.project, filePath, {
      lines: this.ignoreFile[filePath],
    });
  }

  public override registerConfig(): void {
    if (isValidProjectTypes(this.project)) {
      this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
      this.project.npmConfig?.addScripts(this.additionalScripts);
    }
  }

  public override applyConfig(): void {
    this.createConfig();
    this.createIgnore();
  }
}
