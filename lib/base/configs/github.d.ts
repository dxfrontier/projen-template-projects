import { Config } from '../config';
import { ProjectTypes } from '../../types/project';
/**
 * Base class for implementing all relevant GitHub configuration.
 *
 * This class acts as a base for handling GitHub configuration within projects.
 */
export declare class GitHubConfigBase extends Config {
    protected attributePatterns: string[];
    constructor(project: ProjectTypes);
    /**
     * Gets the standard attributes patterns required for configuration.
     *
     * @returns A list of attributes patterns.
     */
    protected get standardAttributesPatterns(): string[];
    /**
     * Retrieves the configuration for the pull request template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFilePullRequest(): Record<string, string[]>;
    /**
     * Retrieves the configuration for the bug issue template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFileBugIssue(): Record<string, string[]>;
    /**
     * Retrieves the configuration for the feature request template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFileFeatureIssue(): Record<string, string[]>;
    /**
     * Retrieves the configuration for the housekeeping issue template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFileHousekeepingIssue(): Record<string, string[]>;
    /**
     * Retrieves the configuration for the question issue template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFileQuestionIssue(): Record<string, string[]>;
    /**
     * Retrieves the configuration for the git cliff template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFileCliff(): Record<string, string[]>;
    /**
     * Retrieves the configuration for the release workflow template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFileReleaseWorkflow(): Record<string, string[]>;
    /**
     * Creates a pull request template file.
     */
    createPullRequest(): void;
    /**
     * Creates a bug issue template file.
     */
    createBugIssue(): void;
    /**
     * Creates a feature request template file.
     */
    createFeatureIssue(): void;
    /**
     * Creates a housekeeping issue template file.
     */
    createHousekeepingIssue(): void;
    /**
     * Creates a question issue template file.
     */
    createQuestionIssue(): void;
    /**
     * Creates a the git cliff template file.
     */
    createCliff(): void;
    /**
     * Creates a release workflow template file.
     */
    createReleaseWorkflow(): void;
    /**
     * Adds custom attributes patterns to the project's configuration.
     *
     * @param patterns - An array of file or directory patterns to be added as attributes.
     */
    addAttributePatterns(patterns: string[]): void;
    /**
     * Gets a list of all relevant config files.
     * @returns List of configs
     */
    protected get configs(): Record<string, string[]>[];
    /**
     * Retrieves the file paths for all dynamic and static configuration files.
     *
     * @returns A list of file path patterns, including dynamic configurations and static files like `.gitattributes` and `.gitignore`.
     */
    protected get filePatterns(): string[];
    protected get additionalIgnorePatterns(): string[];
    protected get additionalAttributesPatterns(): string[];
    registerConfig(): void;
    applyConfig(): void;
}
