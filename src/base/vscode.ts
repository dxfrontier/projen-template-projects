import { JsonFile } from 'projen';
import { Settings } from '.';
import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant VsCode configuration.
 *
 * This class acts as a base for handling VsCode configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 *
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class VsCodeConfigBase<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T, useProjenApi: boolean) {
    super(project);

    const strategy: ConfigStrategy = useProjenApi
      ? new ProjenStandardVsCodeConfigBaseStrategy()
      : new NonApiVsCodeConfigBaseStrategy();

    this.setStrategy(strategy);
  }

  /**
   * Gets the config file to be added to the project's configuration.
   *
   * @returns A record of the having the path to the file as key and the content as value.
   */
  protected get configFile(): Settings {
    return {
      '.vscode/settings.json': {
        'editor.tabSize': 2,
        'editor.stickyTabStops': true,
        'typescript.inlayHints.parameterNames.enabled': 'all',
        'typescript.inlayHints.enumMemberValues.enabled': true,
        'typescript.inlayHints.variableTypes.enabled': true,
        'typescript.inlayHints.propertyDeclarationTypes.enabled': true,
        'javascript.inlayHints.parameterNames.suppressWhenArgumentMatchesName': false,
        'javascript.inlayHints.variableTypes.suppressWhenTypeMatchesName': false,
        'typescript.inlayHints.functionLikeReturnTypes.enabled': true,
        'typescript.inlayHints.parameterTypes.enabled': true,
        'editor.inlayHints.fontSize': 10,
        'editor.inlayHints.padding': true,
        'editor.formatOnSave': true,
        'editor.formatOnPaste': true,
      },
    };
  }

  /**
   * Creates the configuration file in the project directory.
   */
  public createConfig(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    new JsonFile(this.project, filePath, {
      obj: this.configFile[filePath],
    });
  }

  /**
   * Gets additional ignore patterns to be added to the project's ignore configuration.
   *
   * @returns A list of ignore patterns.
   */
  protected get additionalIgnorePatterns(): string[] {
    const filePath: string = Object.keys(this.configFile)[0];
    return [`/${filePath}`];
  }

  public override registerConfig(): void {
    this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
  }
}

/**
 * Configuration strategy for Projen standard API VsCode base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardVsCodeConfigBaseStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyConfig(_config: Config<T>): void {}
}

/**
 * Configuration strategy for Projen-tracked VsCode base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonApiVsCodeConfigBaseStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(config: Config<T>): void {
    if (config instanceof VsCodeConfigBase) {
      config.createConfig();
    }
  }
}
