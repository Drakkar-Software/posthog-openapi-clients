/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Standard ExportedAsset serializer that doesn't return content.
 */
export type ExportedAsset = {
    readonly id: number;
    dashboard?: number | null;
    insight?: number | null;
    /**
     * * `image/png` - image/png
     * * `application/pdf` - application/pdf
     * * `text/csv` - text/csv
     */
    export_format: ExportedAsset.export_format;
    readonly created_at: string;
    readonly has_content: string;
    export_context?: any;
    readonly filename: string;
    expires_after?: string | null;
};
export namespace ExportedAsset {
    /**
     * * `image/png` - image/png
     * * `application/pdf` - application/pdf
     * * `text/csv` - text/csv
     */
    export enum export_format {
        IMAGE_PNG = 'image/png',
        APPLICATION_PDF = 'application/pdf',
        TEXT_CSV = 'text/csv',
    }
}

