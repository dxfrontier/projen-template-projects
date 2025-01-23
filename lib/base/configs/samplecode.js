"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCodeConfigBase = void 0;
const projen_1 = require("projen");
const config_1 = require("../config");
/**
 * Base class for implementing all relevant sample code configuration.
 *
 * This class acts as a base for handling sample code configuration within projects.
 */
class SampleCodeConfigBase extends config_1.Config {
    /**
     * Gets the sample file content.
     *
     * @returns An object where the key is the filename and the value is an array of file lines.
     */
    get sampleCodeFile() {
        return {};
    }
    /**
     * Creates the sample file(s) in the project directory.
     */
    createSampleCode() {
        for (const filePath in this.sampleCodeFile) {
            new projen_1.SampleFile(this.project, filePath, {
                contents: this.sampleCodeFile[filePath].join('\n'),
            });
        }
    }
    applyConfig() {
        this.createSampleCode();
    }
}
exports.SampleCodeConfigBase = SampleCodeConfigBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2NvbmZpZ3Mvc2FtcGxlY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBb0M7QUFDcEMsc0NBQW1DO0FBRW5DOzs7O0dBSUc7QUFDSCxNQUFhLG9CQUFxQixTQUFRLGVBQU07SUFDOUM7Ozs7T0FJRztJQUNILElBQWMsY0FBYztRQUMxQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7T0FFRztJQUNPLGdCQUFnQjtRQUN4QixLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzQyxJQUFJLG1CQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7Z0JBQ3JDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkQsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFZSxXQUFXO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQXhCRCxvREF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYW1wbGVGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBzYW1wbGUgY29kZSBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIHNhbXBsZSBjb2RlIGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29kZUNvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICAvKipcbiAgICogR2V0cyB0aGUgc2FtcGxlIGZpbGUgY29udGVudC5cbiAgICpcbiAgICogQHJldHVybnMgQW4gb2JqZWN0IHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGVuYW1lIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2YgZmlsZSBsaW5lcy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgc2FtcGxlIGZpbGUocykgaW4gdGhlIHByb2plY3QgZGlyZWN0b3J5LlxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZVNhbXBsZUNvZGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBmaWxlUGF0aCBpbiB0aGlzLnNhbXBsZUNvZGVGaWxlKSB7XG4gICAgICBuZXcgU2FtcGxlRmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICAgIGNvbnRlbnRzOiB0aGlzLnNhbXBsZUNvZGVGaWxlW2ZpbGVQYXRoXS5qb2luKCdcXG4nKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVNhbXBsZUNvZGUoKTtcbiAgfVxufVxuIl19