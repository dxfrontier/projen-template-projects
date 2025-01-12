import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant VS Code configuration.
 * @extends Config
 */
export class VsCodeBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }
}