/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PatchedOrganizationDomain = {
    readonly id?: string;
    domain?: string;
    /**
     * Determines whether a domain is verified or not.
     */
    readonly is_verified?: boolean;
    readonly verified_at?: string | null;
    readonly verification_challenge?: string;
    jit_provisioning_enabled?: boolean;
    sso_enforcement?: string;
    /**
     * Returns whether SAML is configured for the instance. Does not validate the user has the required license (that check is performed in other places).
     */
    readonly has_saml?: boolean;
    saml_entity_id?: string | null;
    saml_acs_url?: string | null;
    saml_x509_cert?: string | null;
};

