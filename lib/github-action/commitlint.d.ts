import { CommitLintBase, TypeScriptProjectBase } from '../base';
import { LintStagedConfig } from '../types';
/**
 * CommitLint builder implementing all relevant configuration for the project.
 */
export declare class CommitLint extends CommitLintBase {
    /**
     * Initializes the CommitLint builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure CommitLint for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * Settings to be added to package.json for the CommitLint builder.
     * @return Template for the config file.
     * @protected
     * @override
     */
    protected get npmSettings(): LintStagedConfig;
}
