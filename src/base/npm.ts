import { Config } from './config';
import { TypeScriptProjectBase } from './project';
// import { ProjenStandardScript } from '../types';

/**
 * Base class for NPM implementing all relevant configuration.
 * @abstract
 */
export abstract class NpmConfigBase extends Config {
  /**
   * @override 
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);

    this.addConfigToRegistry('npm');
  }
  
  /**
   * @override
   */
  protected get deleteConfigFilePaths(): string[] {
    return [];
  }

  /**
   * Development dependencies for the configuration module.
   * @protected
   */
  protected get devDependencies(): string[] {
    return [];
  }

  /**
   * Peer dependencies for the configuration module.
   * @protected
   */
  protected get peerDependencies(): string[] {
    return [];
  }

  /**
   * Dependencies for the configuration module.
   * @protected
   */
  protected get dependencies(): string[] {
    return [];
  }

  /**
   * Installs development dependencies for the config in the project.
   * @public
   */
  public addDevDependencies(dependencies: string[]): void {
    this.project.addDevDeps(...dependencies);
  }

  /**
   * Installs peer dependencies for the config in the project.
   * @public
   */
  public addPeerDependencies(dependencies: string[]): void {
    this.project.addPeerDeps(...dependencies);
  }

  /**
   * Installs dependencies for the config in the project.
   * @public
   */
  public addDependencies(dependencies: string[]): void {
    this.project.addDeps(...dependencies);
  }

  /**
   * @override
   * Use Projen standard NPM configuration.
   */
  public setup(): void {
    // this.createConfig();
  }
}