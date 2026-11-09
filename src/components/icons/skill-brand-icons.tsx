import { memo } from "react";
import { Braces, KeyRound } from "lucide-react";

import BunLogo from "@/assets/skills/bun.svg";
import NginxLogo from "@/assets/skills/nginx.svg";
import GrafanaLogo from "@/assets/skills/grafana.svg";
import PrometheusLogo from "@/assets/skills/prometheus.svg";
import BashLogo from "@/assets/skills/bash.svg";
import PowerShellLogo from "@/assets/skills/powershell.svg";
import FastifyLogo from "@/assets/skills/fastify.svg";
import ViteLogo from "@/assets/skills/vite.svg";
import PostCSSLogo from "@/assets/skills/postcss.svg";
import OpenTelemetryLogo from "@/assets/skills/opentelemetry.svg";
import JestLogo from "@/assets/skills/jest.svg";
import PostmanLogo from "@/assets/skills/postman.svg";
import OpenAPILogo from "@/assets/skills/openapi.svg";
import Auth0Logo from "@/assets/skills/auth0.svg";
import AWSLogo from "@/assets/skills/aws.svg";
import AzureLogo from "@/assets/skills/azure.svg";
import OracleLogo from "@/assets/skills/oracle.svg";
import ESLintLogo from "@/assets/skills/eslint.svg";
import PrettierLogo from "@/assets/skills/prettier.svg";
import JWTLogo from "@/assets/skills/jwt.svg";
import MCPLogo from "@/assets/skills/mcp.svg";

interface BrandAssetIconProps {
  src: string;
  invertOnDark?: boolean;
}

const BrandAssetIcon = ({ src, invertOnDark = false }: BrandAssetIconProps) => (
  <img
    src={src}
    alt=""
    aria-hidden="true"
    draggable={false}
    className={`h-full w-full object-contain ${invertOnDark ? "dark:invert" : ""}`}
  />
);

export const BunIcon = memo(() => <BrandAssetIcon src={BunLogo} />);
export const NginxIcon = memo(() => <BrandAssetIcon src={NginxLogo} />);
export const GrafanaIcon = memo(() => <BrandAssetIcon src={GrafanaLogo} />);
export const PrometheusIcon = memo(() => <BrandAssetIcon src={PrometheusLogo} />);
export const BashIcon = memo(() => <BrandAssetIcon src={BashLogo} invertOnDark />);
export const PowerShellIcon = memo(() => <BrandAssetIcon src={PowerShellLogo} />);
export const FastifyIcon = memo(() => <BrandAssetIcon src={FastifyLogo} invertOnDark />);
export const ViteIcon = memo(() => <BrandAssetIcon src={ViteLogo} />);
export const PostCSSIcon = memo(() => <BrandAssetIcon src={PostCSSLogo} />);
export const OpenTelemetryIcon = memo(() => <BrandAssetIcon src={OpenTelemetryLogo} />);
export const JestIcon = memo(() => <BrandAssetIcon src={JestLogo} />);
export const PostmanBrandIcon = memo(() => <BrandAssetIcon src={PostmanLogo} />);
export const OpenAPIIcon = memo(() => <BrandAssetIcon src={OpenAPILogo} />);
export const Auth0Icon = memo(() => <BrandAssetIcon src={Auth0Logo} />);
export const AWSIcon = memo(() => <BrandAssetIcon src={AWSLogo} invertOnDark />);
export const AzureIcon = memo(() => <BrandAssetIcon src={AzureLogo} />);
export const OracleIcon = memo(() => (
  <img src={OracleLogo} alt="" aria-hidden="true" draggable={false} className="h-auto w-[84px] max-w-none object-contain" />
));
export const ESLintIcon = memo(() => <BrandAssetIcon src={ESLintLogo} />);
export const PrettierIcon = memo(() => <BrandAssetIcon src={PrettierLogo} />);
export const JSONIcon = memo(() => <Braces className="h-full w-full" strokeWidth={1.8} aria-hidden="true" />);
export const JWTIcon = memo(() => <BrandAssetIcon src={JWTLogo} />);
export const MCPIcon = memo(() => <BrandAssetIcon src={MCPLogo} invertOnDark />);
export const OAuth2Icon = memo(() => (
  <KeyRound className="h-full w-full" strokeWidth={1.8} aria-hidden="true" />
));
