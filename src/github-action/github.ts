import { TypeScriptProject } from 'projen/lib/typescript';
import { GitHubBase } from '../base/github';

/**
 * GitHub component implementing all relevant configurtion for the project.
 */
export class GitHub extends GitHubBase {
  /**
   * Initializes the GitHub component.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure GitHub for.
   */
  constructor(project: TypeScriptProject) {
    super(project);
    this.initialize();
  }
}