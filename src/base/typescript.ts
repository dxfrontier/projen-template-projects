import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant TypeScript configuration.
 * 
 * This class acts as a base for handling TypeScript configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 * 
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class TypeScriptBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T, useProjenApi: boolean) {
    super(project);

    const strategy = useProjenApi
      ? new ProjenStandardTypeScriptBaseConfigStrategy()
      : new NonApiTypeScriptBaseConfigStrategy();

    this.setStrategy(strategy);
  }

  public override preSynthesize(): void {
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}


/**
 * Applies the Projen-based TypeScript configuration to the project.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardTypeScriptBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(_config: Config<T>): void { }
}

/**
 * Configuration strategy for Projen-tracked TypeScript base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonApiTypeScriptBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(_config: Config<T>): void { }
}
