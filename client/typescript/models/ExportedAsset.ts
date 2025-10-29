/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExportFormatEnum } from './ExportFormatEnum';
/**
 * Standard ExportedAsset serializer that doesn't return content.
 */
export type ExportedAsset = {
    readonly id: number;
    dashboard?: number | null;
    insight?: number | null;
    export_format: ExportFormatEnum;
    readonly created_at: string;
    readonly has_content: string;
    export_context?: any;
    readonly filename: string;
    expires_after?: string | null;
    readonly exception: string | null;
};

