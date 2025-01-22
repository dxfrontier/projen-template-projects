import { TypeScriptConfigBase } from '../base/typescript';
import { Settings } from '../types';
/**
 * Implementing all relevant TypeScript configuration for the Jsii project.
 */
export declare class TypeScriptConfigJsii extends TypeScriptConfigBase {
    protected get configFile(): Record<string, Settings>;
}
