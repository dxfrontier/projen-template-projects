import { Config } from '../config';
import { ProjectTypes } from '../../types/project';
/**
 * Base class for implementing all relevant EsLint configuration.
 *
 * This class acts as a base for handling EsLint configuration within projects.
 */
export declare class EsLintConfigBase extends Config {
    protected rules: Record<string, string>;
    protected ignorePatterns: string[];
    constructor(project: ProjectTypes);
    /**
     * Gets the standard linting rules for the project.
     *
     * @returns A record of rule names and their corresponding configurations.
     */
    protected get standardRules(): Record<string, string>;
    /**
     * Gets the standard ignore patterns for the project.
     *
     * @returns An array of file or directory patterns to be ignored by the linter.
     */
    protected get standardIgnorePatterns(): string[];
    protected get additionalDevDependencies(): string[];
    protected get additionalScripts(): Record<string, string>;
    protected get additionalIgnorePatterns(): string[];
    protected get configFile(): Record<string, string[]>;
    /**
     * Adds custom linting rules to the project's configuration.
     *
     * @param rules - A record of rule names and their corresponding configurations.
     */
    addRules(rules: Record<string, string>): void;
    /**
     * Adds custom ignore patterns to the project's configuration.
     *
     * @param patterns - An array of file or directory patterns to be ignored.
     */
    addIgnorePatterns(patterns: string[]): void;
    registerConfig(): void;
    applyConfig(): void;
}
