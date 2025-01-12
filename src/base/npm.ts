import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant NPM configuration.
 * @extends Config
 */
export class NpmBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }

  public override preSynthesize(): void {
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}
