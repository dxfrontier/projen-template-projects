import { TypeScriptConfigBase } from '../base/typescript';
import { ConfigFile } from '../types';
/**
 * Implementing all relevant TypeScript configuration for the CapService project.
 */
export declare class TypeScriptConfigCapService extends TypeScriptConfigBase {
    protected get configFile(): ConfigFile;
    protected removeConfigFile(): void;
    /**
     * Creates the configuration file in the project directory.
     */
    protected createConfig(): void;
    registerConfig(): void;
    applyConfig(): void;
}
