import { PrettierBase, TypeScriptProjectBase } from '../base';
/**
 * Prettier builder implementing all relevant configuration for the project.
 */
export declare class Prettier extends PrettierBase {
    /**
     * Initializes the Prettier builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure Prettier for.
     */
    constructor(project: TypeScriptProjectBase);
    postSynthesize(): void;
}