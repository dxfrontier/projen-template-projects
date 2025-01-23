import { ConfigFile } from '../../types';
import { Config } from '../config';
/**
 * Base class for implementing all relevant TypeScript configuration.
 *
 * This class acts as a base for handling TypeScript configuration within projects.
 */
export declare class TypeScriptConfigBase extends Config {
    protected get additionalDevDependencies(): string[];
    protected get additionalIgnorePatterns(): string[];
    protected get configFile(): ConfigFile;
    /**
     * Retrieves the name to the TypeScript config file.
     *
     * @returns The name of the TypeScript config file.
     */
    get configFileName(): string;
    registerConfig(): void;
}
