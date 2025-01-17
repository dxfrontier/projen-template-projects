import { JsiiProject } from '.';
import { TypeScriptConfigBase } from '../base';

/**
 * Implementing all relevant TypeScript configuration for the Jsii project.
 */
export class TypeScriptConfigJsii extends TypeScriptConfigBase {
  constructor(project: JsiiProject) {
    super(project);
  }

  protected override get configFile(): Record<string, string[]> {
    return {
      'tsconfig.dev.json': [],
    };
  }
}
