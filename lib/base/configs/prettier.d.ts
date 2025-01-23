import { Config } from '../config';
import { ProjectTypes, Settings } from '../../types';
/**
 * Base class for implementing all relevant Prettier configuration.
 *
 * This class acts as a base for handling Prettier configuration within projects.
 */
export declare class PrettierConfigBase extends Config {
    protected ignorePatterns: string[];
    constructor(project: ProjectTypes);
    /**
     * Gets the standard ignore patterns required for configuration.
     *
     * @returns A list of ignore patterns.
     */
    protected get standardIgnorePatterns(): string[];
    protected get additionalDevDependencies(): string[];
    protected get additionalScripts(): Record<string, string>;
    protected get configFile(): Settings;
    protected get ignoreFile(): Record<string, string[]>;
    /**
     * Adds custom ignore patterns to the project's configuration.
     *
     * @param patterns - An array of file or directory patterns to be ignored.
     */
    addIgnorePatterns(patterns: string[]): void;
    /**
     * Creates the configuration file in the project directory.
     */
    protected createConfig(): void;
    /**
     * Creates the ignore file in the project directory.
     */
    protected createIgnore(): void;
    registerConfig(): void;
    applyConfig(): void;
}
