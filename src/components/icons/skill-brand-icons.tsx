import { memo } from "react";

import NginxLogo from "@/assets/skills/nginx.svg";
import GrafanaLogo from "@/assets/skills/grafana.svg";
import PrometheusLogo from "@/assets/skills/prometheus.svg";
import BashLogo from "@/assets/skills/bash.svg";
import PowerShellLogo from "@/assets/skills/powershell.svg";
import FastifyLogo from "@/assets/skills/fastify.svg";
import ViteLogo from "@/assets/skills/vite.svg";
import SwaggerLogo from "@/assets/skills/swagger.svg";
import ApacheLogo from "@/assets/skills/apache.svg";
import OpenTelemetryLogo from "@/assets/skills/opentelemetry.svg";
import JestLogo from "@/assets/skills/jest.svg";
import JestDarkLogo from "@/assets/skills/jest-dark.svg";
import JenkinsLogo from "@/assets/skills/jenkins.svg";
import PostmanLogo from "@/assets/skills/postman.svg";
import JSONLogo from "@/assets/skills/json.svg";
import JSONDarkLogo from "@/assets/skills/json-dark.svg";
import Auth0Logo from "@/assets/skills/auth0.svg";
import AWSLogo from "@/assets/skills/aws.svg";
import AWSDarkLogo from "@/assets/skills/aws-dark.svg";
import AzureLogo from "@/assets/skills/azure.svg";
import OracleLogo from "@/assets/skills/oracle.svg";
import ESLintLogo from "@/assets/skills/eslint.svg";
import PrettierLogo from "@/assets/skills/prettier.svg";
import JWTLogo from "@/assets/skills/jwt.svg";
import MCPLogo from "@/assets/skills/mcp.svg";
import TechnologySprite from "@/assets/skills/technology-icons.svg";

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
    className="h-full w-full object-contain"
    data-invert-on-dark={invertOnDark ? "true" : undefined}
  />
);

export const NginxIcon = memo(() => <BrandAssetIcon src={NginxLogo} />);
export const GrafanaIcon = memo(() => <BrandAssetIcon src={GrafanaLogo} />);
export const PrometheusIcon = memo(() => <BrandAssetIcon src={PrometheusLogo} />);
export const BashIcon = memo(() => <BrandAssetIcon src={BashLogo} />);
export const PowerShellIcon = memo(() => <BrandAssetIcon src={PowerShellLogo} />);
export const FastifyIcon = memo(() => <BrandAssetIcon src={FastifyLogo} invertOnDark />);
export const ViteIcon = memo(() => <BrandAssetIcon src={ViteLogo} />);
export const SwaggerIcon = memo(() => <BrandAssetIcon src={SwaggerLogo} />);
export const ApacheIcon = memo(() => <BrandAssetIcon src={ApacheLogo} />);
export const OpenTelemetryIcon = memo(() => <BrandAssetIcon src={OpenTelemetryLogo} />);
export const JestIcon = memo(() => (
  <>
    <img src={JestLogo} alt="" aria-hidden="true" draggable={false} className="h-full w-full object-contain dark:hidden" />
    <img src={JestDarkLogo} alt="" aria-hidden="true" draggable={false} className="hidden h-full w-full object-contain dark:block" />
  </>
));
export const JenkinsIcon = memo(() => <BrandAssetIcon src={JenkinsLogo} />);
export const PostmanBrandIcon = memo(() => <BrandAssetIcon src={PostmanLogo} />);
export const JSONIcon = memo(() => (
  <>
    <img src={JSONLogo} alt="" aria-hidden="true" draggable={false} className="h-full w-full object-contain dark:hidden" />
    <img src={JSONDarkLogo} alt="" aria-hidden="true" draggable={false} className="hidden h-full w-full object-contain dark:block" />
  </>
));
export const Auth0Icon = memo(() => <BrandAssetIcon src={Auth0Logo} />);
export const AWSIcon = memo(() => (
  <>
    <img src={AWSLogo} alt="" aria-hidden="true" draggable={false} className="h-full w-full object-contain dark:hidden" />
    <img src={AWSDarkLogo} alt="" aria-hidden="true" draggable={false} className="hidden h-full w-full object-contain dark:block" />
  </>
));
export const AzureIcon = memo(() => <BrandAssetIcon src={AzureLogo} />);
export const OracleIcon = memo(() => <BrandAssetIcon src={OracleLogo} />);
export const ESLintIcon = memo(() => <BrandAssetIcon src={ESLintLogo} />);
export const PrettierIcon = memo(() => <BrandAssetIcon src={PrettierLogo} />);

export const JWTIcon = memo(() => <BrandAssetIcon src={JWTLogo} />);
export const MCPIcon = memo(() => <BrandAssetIcon src={MCPLogo} invertOnDark />);

const TechnologySpriteIcon = ({ id, invertOnDark = false }: { id: string; invertOnDark?: boolean }) => (
  <svg className="h-full w-full" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-invert-on-dark={invertOnDark ? "true" : undefined}>
    <use href={`${TechnologySprite}#${id}`} />
  </svg>
);
export const VueIcon = memo(() => <TechnologySpriteIcon id="vue" />);
export const SvelteIcon = memo(() => <TechnologySpriteIcon id="svelte" />);
export const NextIcon = memo(() => <TechnologySpriteIcon id="next" invertOnDark />);
export const FlaskIcon = memo(() => <TechnologySpriteIcon id="flask" invertOnDark />);
export const SocketIOIcon = memo(() => <TechnologySpriteIcon id="socketio" invertOnDark />);
export const WebSocketsIcon = memo(() => <TechnologySpriteIcon id="websockets" />);
export const BullMQIcon = memo(() => <TechnologySpriteIcon id="bullmq" />);
export const RabbitMQIcon = memo(() => <TechnologySpriteIcon id="rabbitmq" />);
export const KafkaIcon = memo(() => <TechnologySpriteIcon id="kafka" invertOnDark />);
export const LinuxIcon = memo(() => <TechnologySpriteIcon id="linux" />);
export const WindowsIcon = memo(() => <TechnologySpriteIcon id="windows" />);
export const VirtualMachinesIcon = memo(() => <TechnologySpriteIcon id="virtual-machines" />);
export const PuTTYIcon = memo(() => <TechnologySpriteIcon id="putty" />);
export const GitHubActionsIcon = memo(() => <TechnologySpriteIcon id="github-actions" />);
export const GCCIcon = memo(() => <TechnologySpriteIcon id="gcc" />);
export const LLVMIcon = memo(() => <TechnologySpriteIcon id="llvm" invertOnDark />);
export const WebAssemblyIcon = memo(() => <TechnologySpriteIcon id="webassembly" />);
